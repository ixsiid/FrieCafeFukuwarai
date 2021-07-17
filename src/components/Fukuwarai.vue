<template>
  <div>
  <div class="game" :style="`width: ${width}px; height: ${height}px`">
    <div style="position: absolute; margin: 0; padding: 0;">
    <div v-for="(p, i) in parts" :key="'parts_' + i" :style="`
      position: absolute;
      background-image: url(${p.src});
      overflow: hidden;
      object-fit: none;
      background-position: -${p.rect[0] * p.scale}px -${p.rect[1] * p.scale}px;
      background-size: ${p.size[0] * p.scale}px ${p.size[1] * p.scale}px;
      width: ${p.rect[2] * p.scale}px;
      height: ${p.rect[3] * p.scale}px;
      left: ${(width - p.r * p.scale) * p.position[0]}px;
      top: ${(height - p.r * p.scale) * p.position[1]}px;
      z-index: ${p.index};
      transform-origin: 50% 50%;
      transform: rotate(${p.index}deg);
    `" />
    </div>
  </div>
  <div class="game" :style="`width: ${height}px; height: ${height}px; border-radius: 50% 50%;`">

  </div>
  </div>
</template>

<script>
const avatars = [{
  key: 'ippan_men2',
  data: require('../assets/ippan_men2/model.json'),
}];

export default {
  name: 'Fukuwarai',
  props: {
    width: { type: Number, default: 480 },
    height: { type: Number, default: 640 },
  },
  data() {
    return {
      parts: [],
    };
  },
  methods: {
    start(key) {
      const a = avatars.find(x => x.key == key).data;
      this.parts = a.parts.map(x => ({
        src: require(`@/assets/${key}/${a.texture}`),
        rect: x,
        r: Math.sqrt(x[2] * x[2] + x[3] * x[3]) * 1.2,
        size: [2048, 2048],
        index: parseInt(Math.random() * 1024),
        position: [Math.random(), Math.random()],
        scale: a.scale }));
      console.log(a);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game {
  border: solid 1px black;
  margin: 5em;
  display: inline-block;
}
</style>
