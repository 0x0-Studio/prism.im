<template>
  <div class="box password" style="width: 40vw">
    <div class="columns">
      <div class="column" style="pdding-horizontal: 10px">
        <div style="border-radius: 5px; background-color: #c5c5c545; height: 60px; text-align: center; line-height: 65px;">
          <b-icon icon="circle" v-show="password.length >= 1"></b-icon>
        </div>
      </div>
      <div class="column" style="pdding-horizontal: 10px">
        <div style="border-radius: 5px; background-color: #c5c5c545; height: 60px; text-align: center; line-height: 65px;">
          <b-icon icon="circle" v-show="password.length >= 2"></b-icon>
        </div>
      </div>
      <div class="column" style="pdding-horizontal: 10px">
        <div style="border-radius: 5px; background-color: #c5c5c545; height: 60px; text-align: center; line-height: 65px;">
          <b-icon icon="circle" v-show="password.length >= 3"></b-icon>
        </div>
      </div>
      <div class="column" style="pdding-horizontal: 10px">
        <div style="border-radius: 5px; background-color: #c5c5c545; height: 60px; text-align: center; line-height: 65px;">
          <b-icon icon="circle" v-show="password.length >= 4"></b-icon>
        </div>
      </div>
      <div class="column" style="pdding-horizontal: 10px">
        <div style="border-radius: 5px; background-color: #c5c5c545; height: 60px; text-align: center; line-height: 65px;">
          <b-icon icon="circle" v-show="password.length >= 5"></b-icon>
        </div>
      </div>
      <div class="column" style="pdding-horizontal: 10px">
        <div style="border-radius: 5px; background-color: #c5c5c545; height: 60px; text-align: center; line-height: 65px;">
          <b-icon icon="circle" v-show="password.length >= 6"></b-icon>
        </div>
      </div>
    </div>
    <div>
      <div class="columns">
        <div class="column">
          <b-button style="width: 100%; height: 50px; font-size: 20px; font-weight: bold;" @click="clickPad(1)" outlined type="is-primary">1</b-button>
        </div>
        <div class="column">
          <b-button style="width: 100%; height: 50px; font-size: 20px; font-weight: bold;" @click="clickPad(2)" outlined type="is-primary">2</b-button>
        </div>
        <div class="column">
          <b-button style="width: 100%; height: 50px; font-size: 20px; font-weight: bold;" @click="clickPad(3)" outlined type="is-primary">3</b-button>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-button style="width: 100%; height: 50px; font-size: 20px; font-weight: bold;" @click="clickPad(4)" outlined type="is-primary">4</b-button>
        </div>
        <div class="column">
          <b-button style="width: 100%; height: 50px; font-size: 20px; font-weight: bold;" @click="clickPad(5)" outlined type="is-primary">5</b-button>
        </div>
        <div class="column">
          <b-button style="width: 100%; height: 50px; font-size: 20px; font-weight: bold;" @click="clickPad(6)" outlined type="is-primary">6</b-button>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-button style="width: 100%; height: 50px; font-size: 20px; font-weight: bold;" @click="clickPad(7)" outlined type="is-primary">7</b-button>
        </div>
        <div class="column">
          <b-button style="width: 100%; height: 50px; font-size: 20px; font-weight: bold;" @click="clickPad(8)" outlined type="is-primary">8</b-button>
        </div>
        <div class="column">
          <b-button style="width: 100%; height: 50px; font-size: 20px; font-weight: bold;" @click="clickPad(9)" outlined type="is-primary">9</b-button>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-button style="width: 100%; height: 50px" type="is-danger" @click="close()"
          >关闭</b-button
        >
      </div>
      <div class="column">
        <b-button style="width: 100%; height: 50px; font-size: 20px; font-weight: bold;" @click="clickPad(0)" outlined type="is-primary">0</b-button>
      </div>
      <div class="column">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rightPassword", "unlock"],
  data: () => ({
    password: "",
  }),
  methods: {
    clickPad(value) {
      if (this.password.length < 5) {
        this.password += value;
      } else if (this.password.length === 5) {
        this.password += value;
        if (this.rightPassword !== this.password) {
          this.$buefy.toast.open('密码错误');
          this.password = "";
        } else {
          this.password = "";
          this.$emit("unlock");
        }
      }
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>