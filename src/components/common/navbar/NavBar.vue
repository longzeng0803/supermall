<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "NavBar",
  data() {
    return {
      
    };
  },
  methods: {},
  props: {},
  components: {},
  computed: {},
};
</script>
 
<style scoped>
.nav-bar {
  display: flex;
  height: 70px;
  line-height: 70px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(200, 200, 0, 0.1);
}
.nav-bar .left,
.nav-bar .right {
  width: 100px;
  height: 100%;
  font-size: 20px;
}
.nav-bar .center {
  flex: 1;
  height: 100%;
}
</style>