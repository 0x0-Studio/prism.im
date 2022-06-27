<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
    <div v-if="!endingIsGood && showEnd" class="bad-end">
      <div>
        <div class="bad-end-line0" style=" font-family: YouSheBiaoTiHei;">“棱镜计划”仍在继续</div>
        <div style="text-align: center; font-size: 65px; margin-top: 30px;  font-family: YouSheBiaoTiHei;" class="bad-end-line1">还有人在等你</div>
        <div style="text-align: center; font-size: 200px;  font-family: YouSheBiaoTiHei;" class="count-down">{{ countDown }}</div>
      </div>
    </div>
    <div v-if="endingIsGood && showEnd" class="good-end">
      <div>
        <div v-if="!showTheEnd">
          <div style="text-align: center; font-size: 60px; font-family: YouSheBiaoTiHei;" class="good-end-line0">“棱镜计划”成功迎来第一位穿越者</div>
          <div style="text-align: center; font-size: 50px; margin-top: 30px; font-family: YouSheBiaoTiHei;" class="good-end-line1">那头的人等待了太久</div>
          <div style="text-align: center; font-size: 55px; margin-top: 30px; font-family: YouSheBiaoTiHei;" class="good-end-line2">还好，ta等到了</div>
        </div>
        <div v-if="showTheEnd">
          <div style="text-align: center; font-size: 100px; margin-top: 30px; font-weight: bold;  font-family: YouSheBiaoTiHei;" class="good-end-line3">The End</div>
          <div style="text-align: center; font-size: 100px; margin-top: 30px; font-weight: bold;  font-family: YouSheBiaoTiHei;" class="good-end-line3">剧本：许镕志 程序：蒋正</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      gameState: (state) => state.gameState,
      end: (state) => state.end,
    }),
  },
  data: () => ({
    showTheEnd: false,
    countDown: 10,
    showText: false,
    showEnd: false,
    endingIsGood: false,
  }),
  watch: {
    showEnd() {
      if (!this.endingIsGood) {
        setTimeout(() => {
          this.playBadEnding()
        }, 0);
      } else {
        setTimeout(() => {
          this.playGoodEnding()
        }, 0);
      }
    },
    gameState() {
      if (this.gameState === "end") {
        if (this.end === "good") {
          this.endingIsGood = true;
        }
        this.showEnd = true;
      }
    },
  },
  methods: {
    playGoodEnding() {
      var _this = this;
      anime({
        targets: ".good-end",
        easing: "easeInOutQuad",
        duration: 3000,
        backgroundColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)"],
        complete: function () {
          anime({
            targets: ".good-end-line0",
            easing: "easeInOutQuad",
            duration: 3000,
            color: ["rgba(0,0,0,0)", "rgba(0,0,0,1)"],
            complete: function () {
              anime({
                targets: ".good-end-line1",
                easing: "easeInOutQuad",
                duration: 3000,
                color: ["rgba(0,0,0,0)", "rgba(0,0,0,1)"],
                complete: function () {
                  anime({
                    targets: ".good-end-line2",
                    easing: "easeInOutQuad",
                    duration: 3000,
                    color: ["rgba(0,0,0,0)", "rgba(0,0,0,1)"],
                    complete: function () {
                      anime({
                        targets: [".good-end-line0",".good-end-line1",".good-end-line2"],
                        easing: "easeInOutQuad",
                        duration: 3000,
                        color: ["rgba(0,0,0,1)", "rgba(0,0,0,0)"],
                        complete: function () {
                          _this.showTheEnd = true;
                          setTimeout(() => {
                            anime({
                              targets: [".good-end-line3"],
                              easing: "easeInOutQuad",
                              duration: 3000,
                              color: ["rgba(0,0,0,0)", "rgba(0,0,0,1)"],
                            });
                          })
                        },
                      });
                    }
                  });
                },
              });
            },
          });
        },
      });
    },
    playBadEnding() {
      let _this = this;
      anime({
        targets: ".bad-end",
        easing: "easeInOutQuad",
        duration: 3000,
        backgroundColor: ["rgba(0,0,0,0)", "rgba(0,0,0,1)"],
        complete: function () {
          anime({
            targets: ".bad-end-line0",
            easing: "easeInOutQuad",
            duration: 3000,
            color: ["rgba(255,255,255,0)", "rgba(255,255,255,1)"],
            complete: function () {
              anime({
                targets: ".bad-end-line1",
                easing: "easeInOutQuad",
                duration: 3000,
                color: ["rgba(255,255,255,0)", "rgba(255,255,255,1)"],
                complete: function () {
                  anime({
                    targets: ".count-down",
                    easing: "easeInOutQuad",
                    duration: 300,
                    color: ["rgba(255,255,255,0)", "rgba(255,255,255,1)"],
                    complete: function () {
                      for (let i = 10; i >= 0; i--) {
                        setTimeout(() => {
                          _this.countDown = i;
                          if (i === 1) {
                            _this.$router.push("/");
                            _this.$router.go(0);
                            _this.showEnd = false;
                          }
                        }, (10 - i) * 1000);
                      }
                    },
                  });
                },
              });
            },
          });
        },
      });
    },
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
}
html {
  height: 100%;
  width: 100%;
  user-select: none !important;
  overflow-y: auto !important;
}
body {
  margin: "" !important;
  min-height: 100%;
  width: 100%;
}
.bad-end {
  font-size: 80px;
  color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.good-end {
  font-size: 80px;
  color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
@font-face {
  font-family: "YouSheBiaoTiHei";
  src: url("assets/YouSheBiaoTiHei-2.ttf");
}
</style>
