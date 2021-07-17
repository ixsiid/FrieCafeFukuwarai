<template>
  <div id="app">
    <h1>フレカフェ福笑い</h1>
    <select v-model="active_avatar">
      <option v-for="i in avatars" :key="i.key" :value="i.key">{{ i.name }}</option>
    </select>
    <button v-on:click="start">スタート</button>
    <Fukuwarai ref="game" msg="Message" />
  </div>
</template>

<script>
import avatars from './avatar.json';
import Fukuwarai from './components/Fukuwarai.vue';

export default {
  name: 'App',
  components: {
    Fukuwarai,
  },
  data() {
    return {
      avatars,
      active_avatar: avatars[0].key,
    };
  },
  methods: {
    start() {
      this.$refs.game.start(this.active_avatar);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
