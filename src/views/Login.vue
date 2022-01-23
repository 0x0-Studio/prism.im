<template>
    <div class="login-con">
      <login-window/>
    </div>
</template>

<script>
import LoginWindow from '../components/LoginWindow.vue'
export default {
  components: { LoginWindow },
}
</script>

<style scoped>
.login-con {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>