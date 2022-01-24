<template>
  <div>
    <b-loading is-full-page v-model="isLoading"></b-loading>
    <div style="position: absolute; top: 20px; left: 10px; height: 44vh; width: 18vw;" class="box">
      <b-menu>
        <b-menu-list label="prism.im">
          <b-menu-item :active="currentRouteName === 'chat'" label="聊天" @click="jump('chat')"></b-menu-item>
          <b-menu-item :active="currentRouteName === 'diary'" label="日记" @click="jump('diary')"></b-menu-item>
        </b-menu-list>
      </b-menu>
    </div>
    <div class="box" style="position: absolute; bottom: 20px; left: 10px; height: 50vh; width: 18vw; overflow-y: auto;">
      <div style="margin-bottom: 30px; font-weight: bold;">待办事项</div>
      <b-field v-for="item in toDoList" :key="item.key">
        <b-checkbox> {{item.value}} </b-checkbox>
      </b-field>
      <div style="margin-top: 60px; margin-bottom: 30px; font-weight: bold;">一周内已办事项</div>
      <b-field v-for="item in doneList" :key="item.key + 3">
        <b-checkbox style="pointer-events: none;" v-model="checked"> <span style="text-decoration: line-through; color: gray;"> {{item.value}} </span> </b-checkbox>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    checked: true,
    isActive: true,
    isLoading: false,
    toDoList: [
      {
        key: 0,
        value: '每天都要写日记！！！'
      },
      {
        key: 1,
        value: '祝妈妈生日快乐'
      }
    ],
    doneList: [
      {
        key: 3,
        value: '每天一早给旺财喂猫粮！',
      },
      {
        key: 4,
        value: '自己做早餐！',
      },
      {
        key: 5,
        value: '上班前听有声小说&每日早间新闻',
      },
      {
        key: 6,
        value: '把电影看完',
      },
      {
        key: 7,
        value: '办生日会！',
      }
    ]
  }),
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    jump(path) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$router.push('/home/' + path);
      }, 300)
    },
  },
}
</script>

<style>

</style>