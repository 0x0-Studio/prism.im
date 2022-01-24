<template>
  <div class="box" style="height: 95vh; width: 78vw; position: relative;">
      <div style="font-size: 24px; font-weight: bold">今天是2021年7月21日
        <div style="float: right; margin-right: 30px;">
          <b-button icon-right="fountain-pen-tip" style="float: right;" @click="writeDiary" rounded>写日记</b-button>
        </div>
     </div>
      <b-tabs :animated="false" v-model="selectTab">
        <b-tab-item label="已发布日记">
          <div style="margin-top: 30px;">
            <div @click="clickDiary(1)" class="diary" style="font-size: 20px; border-radius: 10px; background-color: #c5c5c545; height: 80px; text-align: center; margin-bottom: 30px; line-height: 80px;">
              <b-icon icon="lock" style="margin-right: 10px;" v-if="diary[1].lock"></b-icon>
              <b-icon icon="lock-open-variant" style="margin-right: 10px;" v-else></b-icon>
              <span style="margin-right: 50px; font-weight: bold;">日记四</span> 2021年7月20日 星期二 阴雨连绵
            </div>
            <div @click="clickDiary(3)" class="diary" style="font-size: 20px; border-radius: 10px; background-color: #c5c5c545; height: 80px; text-align: center; margin-bottom: 30px; line-height: 80px;">
              <b-icon icon="lock-open-variant" style="margin-right: 10px;"></b-icon>
              <span style="margin-right: 50px; font-weight: bold;">日记三</span> 2021年7月19日 星期一 乌云密布
            </div>
            <div @click="clickDiary(4)" class="diary" style="font-size: 20px; border-radius: 10px; background-color: #c5c5c545; height: 80px; text-align: center; margin-bottom: 30px; line-height: 80px;">
              <b-icon icon="lock-open-variant" style="margin-right: 10px;"></b-icon>
              <span style="margin-right: 50px; font-weight: bold;">日记二</span> 2021年7月18日 星期日 阳光充足
            </div>
            <div @click="clickDiary(5)" class="diary" style="font-size: 20px; border-radius: 10px; background-color: #c5c5c545; height: 80px; text-align: center; margin-bottom: 30px; line-height: 80px;">
              <b-icon icon="lock-open-variant" style="margin-right: 10px;"></b-icon>
              <span style="margin-right: 50px; font-weight: bold;">日记一</span> 2021年7月17日 星期六 阳光明媚
            </div>
          </div>
        </b-tab-item>
        <b-tab-item label="草稿箱">
          <div v-if="gameState !== 'writeDiary'" style="margin-top: 30px;">
            <div @click="clickDiary(0, true)" class="diary" style="font-size: 20px; border-radius: 10px; background-color: #c5c5c545; height: 80px; margin-bottom: 30px; text-align: center; line-height: 80px;">
              <b-icon icon="lock" style="margin-right: 10px;" v-if="diary[0].lock"></b-icon>
              <b-icon icon="lock-open-variant" style="margin-right: 10px;" v-else></b-icon>
              <span style="margin-right: 50px; font-weight: bold;">日记五</span> 2021年7月21日 星期三 阳光普照
            </div>
            <div @click="clickDiary(2, true)" class="diary" style="font-size: 20px; border-radius: 10px; background-color: #c5c5c545; height: 80px; margin-bottom: 30px; text-align: center; line-height: 80px;">
              <b-icon icon="lock" style="margin-right: 10px;" v-if="diary[2].lock"></b-icon>
              <b-icon icon="lock-open-variant" style="margin-right: 10px;" v-else></b-icon>
              <span style="margin-right: 50px; font-weight: bold;">日记五</span> 2021年7月21日 星期三 阳光普照
            </div>
            <div @click="clickDiary(6, true)" class="diary" style="font-size: 20px; border-radius: 10px; background-color: #c5c5c545; height: 80px; margin-bottom: 30px; text-align: center; line-height: 80px;">
              <b-icon icon="lock" style="margin-right: 10px;" v-if="diary[6].lock"></b-icon>
              <b-icon icon="lock-open-variant" style="margin-right: 10px;" v-else></b-icon>
              <span style="margin-right: 50px; font-weight: bold;">日记四</span> 2021年7月20日 星期三 阴雨连绵
            </div>
          </div>
        </b-tab-item>
      </b-tabs>
    <div style="position: absolute; bottom: 10px; right: 10px; width: 50px; cursor: not-allowed;">
      <div style="border-radius: 10px; background-color: #c5c5c545; height: 50px; text-align: center; line-height: 55px;">
        <b-icon icon="arrow-right"></b-icon>
      </div>
    </div>
    <div style="position: absolute; bottom: 10px; right: 70px; width: 50px; cursor: not-allowed;">
      <div style="border-radius: 10px; background-color: #c5c5c545; height: 50px; text-align: center; line-height: 55px;">
        <b-icon icon="arrow-left"></b-icon>
      </div>
    </div>
      <b-modal :active="isPasswordModalActive" :can-cancel="false">
          <template #default="">
              <password :rightPassword="rightPassword" @unlock="unlock" @close="isPasswordModalActive = false"></password>
          </template>
      </b-modal>
      <b-modal :active="isDiaryModalActive" :can-cancel="false">
          <template #default="">
              <show-diary :diary="currentDiaryValue" @close="isDiaryModalActive = false"></show-diary>
          </template>
      </b-modal>
      <b-modal :active="isWriteModalActive" :can-cancel="false">
          <template #default="">
              <write-diary :showTyper="writeModalShowTyper" :diary="currentDiaryValue" @close="isWriteModalActive = false"></write-diary>
          </template>
      </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShowDiary from '../components/ShowDiary.vue';
import Password from '../components/Password.vue';
import WriteDiary from '../components/WriteDiary.vue';
import * as dayjs from "dayjs";

export default {
  components: {
    Password,
    ShowDiary,
    WriteDiary,
  },
  computed: {
    ...mapState({
      diary: state => state.diary,
      gameState: state => state.gameState,
    }),
  },
  data: () => ({
    selectTab: 0,
    writeModalShowTyper: true,
    currentDiaryValue: "",
    currentDiary: -1,
    rightPassword: "",
    isWriteModalActive: false,
    isDiaryModalActive: false,
    isPasswordModalActive: false,
    isPaginated: true,
    perPage: 5,
    currentPage: 1,
    data: [
      {
        id: 123,
        title: "标题",
        date: dayjs().format("YYYY-MM-DD"),
      },
    ],
  }),
  methods: {
    writeDiary() {
      if (this.gameState === "writeDiary") {
        this.currentDiaryValue = this.diary[2];
        this.isWriteModalActive = true;
      } else {
        this.$buefy.dialog.confirm({
          title: "系统错误",
          message: '原因：不明，请联系管理员。',
          closeOnConfirm: true,
          canCancel: false,
          confirmText: "确认"
        });
      }
    },
    unlock() {
      this.isPasswordModalActive = false;
      if (this.selectTab === 1) {
          this.$store.commit("unlockDiary", this.currentDiary);
          this.currentDiaryValue = this.diary[this.currentDiary];
          this.writeModalShowTyper = false;
          this.isWriteModalActive = true;
          return;
      }
      this.$store.commit("unlockDiary", this.currentDiary);
      this.currentDiaryValue = this.diary[this.currentDiary];
      this.isDiaryModalActive = true;
      this.currentDiary = -1;
    },
    clickDiary(index, resendable) {
      if (resendable) {
        if (!this.diary[index].lock) {
          this.currentDiary = index;
          this.currentDiaryValue = this.diary[index];
          this.writeModalShowTyper = false;
          this.isWriteModalActive = true;
          return;
        } else {
          this.currentDiary = index;
        }
      } else {
        this.currentDiary = index;
        if (index !== -1 && !this.diary[index].lock) {
          this.currentDiaryValue = this.diary[index];
          this.isDiaryModalActive = true;
          this.isPasswordModalActive = false;
          return;
        }
      }
      switch (index) {
        case 0:
          this.rightPassword = "970715";
          break;
        case 1:
          this.rightPassword = "611976";
          break;
        case 6:
          this.rightPassword = "970715";
          break;
        default:
          this.rightPassword = "";
          break;
      }
      this.isPasswordModalActive = true;
    }
  }
};
</script>

<style scoped>
.diary:hover {
  color: #7957d5;
}
</style>

<style>
.modal-content {
  display: flex;
  justify-content: center;
}
</style>