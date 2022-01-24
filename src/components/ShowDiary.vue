<template>
  <div class="box" style="width: 80vw; height: 60vh">
    <b-button  icon-right="close" style="float: right;" @click="close" rounded></b-button>
    <div style="margin-left: 30px; font-size: 24px; font-weight: bold;">{{ diary.title }}</div>
    <div style="margin-top: 30px; height: 90%; margin-inline: 80px; margin-bottom: 10px; overflow-y: auto; ">
      <div style="font-size: 20px; white-space: pre-wrap;"> {{ diary.value }}</div>
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

<style>

</style>