<template>
  <div class="box" style="height: 90vh; width: 90vw">
    <div class="columns">
      <div class="column no-click">
        <b-input placeholder=""></b-input>
      </div>
      <div class="column">
        <b-button
          class="no-click"
          type="is-danger"
          icon-right="delete-empty"
          style="float: right; margin-left: 10px"
          >丢弃</b-button
        >
        <b-button
          :class="showTyper ? 'no-click' : ''"
          @click="close"
          icon-right="archive"
          style="float: right; margin-left: 10px"
          >保存到草稿箱</b-button
        >
        <b-button
          :loading="loading"
          :class="bindNoClick"
          @click="send"
          icon-right="send"
          type="is-info"
          style="float: right"
          >发送</b-button
        >
      </div>
    </div>
    <textarea
      class="no-click"
      style="width: 100%; height: 90%; border: 1px #c5c5c590 solid"
    ></textarea>
    <vue-typer
      @completed="titleCompleted"
      :initial-action="showTyper ? 'typing' : 'erasing'"
      :repeat="0"
      :text="title"
      style="position: absolute; top: 27px; left: 30px"
    ></vue-typer>
    <vue-typer
      v-if="startContentType"
      @completed="contentCompleted"
      :initial-action="showTyper ? 'typing' : 'erasing'"
      :repeat="0"
      :text="content"
      style="
        position: absolute;
        top: 100px;
        left: 70px;
        width: 80%;
        font-size: 20px;
        height: 565px;
        overflow-y: auto;
      "
    ></vue-typer>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  props: ["showTyper", "diary"],
  components: {
    VueTyper,
  },
  data: () => ({
    loading: false,
    bindNoClick: "",
    startContentType: false,
    title: " ",
    content: " ",
  }),
  methods: {
    close() {
      this.$emit("close");
    },
    titleCompleted() {
      this.content = this.diary.value;
      this.startContentType = true;
    },
    contentCompleted() {
      this.bindNoClick = "";
    },
    send() {
      this.loading = true;
      if (!this.showTyper) {
        setTimeout(() => {
          this.loading = false;
          this.$buefy.dialog.confirm({
            title: "系统错误",
            message: "原因：不明，请联系管理员。",
            closeOnConfirm: true,
            canCancel: false,
            confirmText: "确认",
          });
          this.$emit("close");
        }, 3000);
      } else {
        setTimeout(() => {
          this.$notification.show(
            "来自 Me 的新消息",
            {
              body: "你是谁？？？异地登录？",
            },
            {}
          );
        }, 5000);
        setTimeout(() => {
          this.loading = false;
          this.$buefy.dialog.confirm({
            title: "发布失败",
            message: "原因：多次操作冲突，文章已自动保存到草稿箱。",
            closeOnConfirm: true,
            canCancel: false,
            confirmText: "确认",
          });
          this.$emit("close");
        }, 3000);
        this.$store.commit("setGameState", "chatStart");
      }
    },
  },
  mounted() {
    this.title = this.diary.title;
    this.bindNoClick = "no-click";
  },
};
</script>

<style scoped>
.no-click {
  pointer-events: none;
}
</style>