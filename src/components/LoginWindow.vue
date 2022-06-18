<template>
    <div class="login-content box">
        <img class="logo" src="@/assets/logo.png">
        <div style="margin-bottom: 30px; font-size: 30px">prism.im</div>
        <div style="padding-inline: 20%;">
          <div class="disable-point" style="margin-bottom: 20px; position: relative;">
            <b-input style="" placeholder="" type="password" rounded/>
            <vue-typer
              style="position: absolute; top: 20%; left: calc(50% - 60px);"
              ref="typer"
              :text="name"
              :repeat="0"
              :shuffle="true"
            ></vue-typer>
          </div>
          <div class="disable-point" style="margin-bottom: 20px; position: relative;">
            <b-input style="margin-bottom: 20px;" placeholder="" type="password" rounded/>
            <vue-typer
              style="position: absolute; top: 20%; left: calc(50% - 60px); font-size: 20px"
              ref="typer"
              :text="password"
              :repeat="0"
              :shuffle="true"
            ></vue-typer>
          </div>
          <b-button @click="login" :loading="loading" class="is-primary">登入棱镜</b-button>
        </div>
    </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  components: {
    VueTyper
  },
  data: () => ({
    loading: false,
    name: "Account00079",
    password: "*************",
  }),
  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push("/home");
      }, 1000);
    }
  }
}
</script>

<style scoped>
.logo {
  width: 128px;
  height: 128px;
}
.login-content {
  width: 50%;
  text-align: center;
}

.disable-point {
  pointer-events: none;
}
</style>