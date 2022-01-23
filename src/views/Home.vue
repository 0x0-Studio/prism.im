<template>
  <div>
    <div class="columns">
      <div class="column is-one-fifth">
        <sidepanel />
      </div>
      <div class="column">
        <div class="content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidepanel from "../components/Sidepanel.vue";
export default {
  components: { Sidepanel },
  mounted() {
    this.$buefy.toast.open({
      duration: 5000,
      message: `注意：系统检测到异地登录行为。`,
      type: "is-warning",
    });
  },
};
</script>

<style scoped>
.content {
  margin-top: 20px;
}
</style>