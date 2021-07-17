<template>
  <div id="app">
    <h1>フレカフェ福笑い</h1>
    <select v-model="active_avatar">
      <option v-for="i in avatars" :key="i.key" :value="i.key">{{ i.name }}</option>
    </select>
    <button v-on:click="start">スタート</button>
    <Fukuwarai ref="game" msg="Message" />
    <div class="help">
      <h1>遊び方</h1>
      <p>左の枠に出てきたパーツを右の丸に動かして顔を完成させよう</p>
      <p>各パーツはマウスホイールで回転できるぞ</p>
      <p>右の丸に一度動かしたパーツは消えてしまう！</p>
      <p>どこにおいたか記憶を頼りにイケメンを精製してくれよな</p>
      <p>もういいかなと思ったら慣性ボタンを押そう。これが君の似顔絵だ！</p>
      <p>スクショ取ってインスタンスにアップロードしてね</p>
    </div>
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
