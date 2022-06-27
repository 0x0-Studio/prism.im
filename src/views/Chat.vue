<template>
  <div>
    <chat-window
      height="95vh"
      :show-add-room="false"
      :current-user-id="currentUserId"
      :rooms="rooms"
      :messages="messages"
      :messages-loaded="messageLoaded"
      :rooms-loaded="true"
      :message-actions="[]"
      :show-reaction-emojis="false"
      :room-message="roomMessage"
      :show-files="false"
      :show-audio="false"
      :show-emojis="false"
      @send-message="sendMessage"
      @fetch-more-rooms="fetchMoreRooms"
      @fetch-messages="fetchMessages"
    >
      <template #room-header-info="{ room, userStatus }">
        <div>
          <b-tooltip :label="room.roomDesc" position="is-bottom">
            <div style="font-weight: bold">{{ room.roomName }}</div>
            <div>{{ userStatus }}</div>
          </b-tooltip>
        </div>
        <div style="position: absolute; width: 100px; height: 30px; left: 50%; font-size: 16px; " v-if="isTyping">正在输入...</div>
      </template>
    </chat-window>
    <div ref="typing" class="typing">
      <vue-typer
        ref="typer"
        :text="inputMessage"
        :repeat="0"
        :shuffle="true"
        @completed="typeCompleted"
      ></vue-typer>
    </div>
    <div ref="test" class="box" style="height: 160px">
      <b-button
        v-for="item in options"
        :key="item.key"
        @click="input(item)"
        type="is-primary"
        style="width: 100%; margin: 10px; font-weight: bold; height: unset"
        outlined
      >
        <div style="white-space: normal">
          {{ item.value }}
        </div>
      </b-button>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
import { mapState } from "vuex";
import ChatWindow from "vue-advanced-chat";
import "vue-advanced-chat/dist/vue-advanced-chat.css";
import dayjs from "dayjs";

export default {
  components: {
    ChatWindow,
    VueTyper,
  },
  computed: {
    ...mapState({
      currentRoom: state => state.currentRoom,
      momTyping: state => state.momTyping,
      isTyping: state => state.isTyping,
      end: (state) => state.end,
      gameState: (state) => state.gameState,
      optionsTemp: (state) => state.options,
      rooms: (state) => state.rooms,
    }),
  },
  watch: {
    optionsTemp() {
      if (this.currentRoom === 1) {
        this.options = this.optionsTemp;
      }
    },
  },
  mounted() {
    this.options = this.optionsTemp;
    const dom0 = document.getElementsByClassName("vac-room-footer")[0];
    const dom1 = document.getElementsByClassName("vac-box-footer")[0];
    dom0.appendChild(this.$refs.test);
    dom1.replaceChild(
      this.$refs.typing,
      document.getElementsByClassName("vac-textarea")[0]
    );
  },
  methods: {
    typeCompleted() {
      this.$store.commit("setIsTyping", false);
      this.roomMessage = this.inputMessage;
    },
    sendMessage() {
      if (this.selectedAnswer.key === "0.0.0") {
        this.$store.commit("setGameState", "end");
        return;
      }
      if (this.selectedAnswer.key === "2.34.1") {
        this.$store.commit("setGameState", "end");
      }
      this.options = [];
      this.messages.push({
        _id: Math.random(),
        indexId: Math.random(),
        content: this.inputMessage,
        senderId: this.currentUserId,
        reply: false,
        date: "21 July",
        timestamp: dayjs().format("HH:mm"),
      });
      this.inputMessage = " ";
      if (this.currentRoom === 3) {
        this.$store.commit("setDev", this.messages);
        this.$store.commit("setGameState", "asked");
        this.$store.commit("roll", this.selectedAnswer.to - 1);
      } else {
        this.$store.commit("roll", this.selectedAnswer.to - 1);
      }
    },
    input(answer) {
      if (this.currentRoom === 1) {
        this.$store.commit("setIsTyping", true);
      }
      this.selectedAnswer = answer;
      this.inputMessage = answer.value;
    },
    fetchMoreRooms() {
      this.roomsLoaded = true;
    },
    fetchMessages({ room }) {
      this.inputMessage = " ";
      this.messageLoaded = false;
      this.$store.commit("setCurrentRoom", room.roomId);
      switch (room.roomId) {
        case 1:
          this.messages = this.$store.state.me;
          if (this.momTyping) {
            this.$store.commit("setIsTyping", true);
            this.options = [];
          } else {
            this.options = this.optionsTemp;
          }
          break;
        case 2:
          this.$store.commit("setIsTyping", false);
          if (this.end === "good") {
            this.options = [
              {
                key: "0.0.0",
                to: "",
                value: "好久不见，妈妈",
              },
            ];
          } else {
            this.options = [];
          }
          this.messages = this.$store.state.mom;
          break;
        case 3:
          this.$store.commit("setIsTyping", false);
          this.messages = this.$store.state.dev;
          if (this.gameState === "ask") {
            this.options = [
              {
                key: 1,
                value: "我的账号被他人异地登录，请问是什么情况？",
              },
            ];
          } else {
            this.options = [];
          }
          break;
        default:
          break;
      }
      setTimeout(() => {
        this.messageLoaded = true;
      }, 0);
      return;
    },
  },
  data: () => ({
    selectedAnswer: null,
    roomMessage: "",
    inputMessage: " ",
    options: [],
    roomsLoaded: false,
    messageLoaded: false,
    messages: [],
    currentUserId: 1234,
  }),
};
</script>

<style scoped>
.typing {
  width: 100%;
  line-height: 20px;
  overflow: hidden;
  outline: 0;
  resize: none;
  border-radius: 20px;
  padding: 12px 16px;
  box-sizing: content-box;
  font-size: 16px;
  background: var(--chat-bg-color-input);
  color: var(--chat-color);
  caret-color: var(--chat-color-caret);
  border: var(--chat-border-style-input);
}
</style>