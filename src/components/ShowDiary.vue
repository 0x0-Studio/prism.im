<template>
  <div class="box diary-container">
    <div class="diary-top"> 
      <div class="diary-title">{{ diary.title }}</div>
      <b-button class="diary-close-button" icon-right="close" @click="close" rounded></b-button>
    </div>
    <div class="diary-content-wrap">
      <div class="diary-content"> {{ diary.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["diary"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
}
</script>

<style scoped>
.diary-container {
  width: 80vw;
}

.diary-top {
  display: flex;
  align-items: center;
}

.diary-close-button {
  margin-left: auto;
}

.diary-title {
  margin-left: 30px;
  font-size: 24px;
  font-weight: bold;
}

.diary-content-wrap {
  margin: 30px 80px 30px 80px;
  overflow-y: auto;
}

.diary-content {
  font-size: 20px;
  white-space: pre-wrap;
}
</style>