Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
  },
  computed: {
    box() {
      return {
        transform: `perspective(${this.perspective}px)
        rotatex(${this.rotateX}deg)
        rotatey(${this.rotateY}deg)
        rotatez(${this.rotateZ}deg)`,
      };
    },
  },
}).mount("#app");
