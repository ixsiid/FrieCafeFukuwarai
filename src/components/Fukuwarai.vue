<template>
  <div>
  <div class="game" :style="`width: ${width}px; height: ${height}px`">
    <div style="position: absolute; margin: 0; padding: 0;">
    <div v-for="(p, i) in parts" class="parts" :key="'parts_' + i" :style="`
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
    `" 
      v-on:mousedown="down"
      v-on:mouseup="up"
      v-on:mousemove="move"
      v-on:wheel="wheel"
    />
    </div>
  </div>
  <div class="game"
    :style="`
      width: ${height}px;
      height: ${height}px;
      border-radius: 50% 50%;
    `"
    ref="target"
  />
  <div>
    <button v-on:click="complete">完成</button>
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
      drag: undefined,
      x: 0,
      y: 0,
      mx: 0,
      my: 0,
      index: 0,
      active: false,
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
        index: parseInt(Math.floor(Math.random() * 128) * 8),
        position: [Math.random(), Math.random()],
        scale: a.scale }));

      this.drag = undefined;
      this.index = 0;
      this.active = true;
      
      Array.from(document.querySelectorAll('.parts')).map(x => {
        x.style.display = 'block';
      });
    },
    up() {
      if (!this.active) return;
      const cr = this.drag.getBoundingClientRect();
      const [cx, cy] = [
        (cr.left + cr.right)/2 + window.pageXOffset,
        (cr.top + cr.bottom)/2 + window.pageYOffset
      ];

      const tr = this.$refs.target.getBoundingClientRect();
      const [tx, ty] = [
        (tr.left + tr.right)/2 + window.pageXOffset,
        (tr.top + tr.bottom)/2 + window.pageYOffset
      ];
      const tr2 = tr.width * tr.width / 4;

      const d2 = Math.pow(tx - cx, 2) + Math.pow(ty - cy, 2);
      if (d2 < tr2) {
        this.drag.style.display = 'none';
        this.drag.style['z-index'] = this.index;
        this.index++;
      }

      this.drag = undefined;
    },
    down(event) {
      if (!this.active) return;
      this.drag = event.target;
      this.x = parseInt(event.target.style.left);
      this.y = parseInt(event.target.style.top);
      this.mx = event.pageX;
      this.my = event.pageY;
    },
    move(event) {
      if (!this.active) return;
      if (this.drag) {
        this.drag.style.left = this.x + (event.pageX - this.mx) + 'px';
        this.drag.style.top = this.y + (event.pageY - this.my) + 'px';
      }
    },
    wheel(event) {
      if (!this.active) return;
      const t = event.target;
      t.style.transform = `rotate(${parseInt(t.style.transform.replace(/[^0-9]/g, '')) + 8 * Math.round(event.deltaY / Math.abs(event.deltaY))}deg)`;
    },
    complete() {
      this.active = false;

      Array.from(document.querySelectorAll('.parts')).map(x => {
        x.style.display = x.style.display == 'none' ? 'block' : 'none';
      });
    }
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
