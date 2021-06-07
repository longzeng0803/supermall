<template>
  <div class="search">
    <div class="btn" @click="btnclick"></div>
    <input type="text" />
  </div>
</template>
 
<script>
export default {
  name: "search",
  data() {
    return {};
  },
  methods: {
    btnclick(){
      console.log(123)
    }
  },
  props: {},
  components: {},
  computed: {},
};
</script>
 
<style scoped>
.search {
  height: 54px;
  margin-top: 8px;
  border-radius: 40px;
  display: flex;
  position: relative;
}
.search .btn{
  background-color: transparent;
  height: 54px;
  width: 54px;
  position: absolute;
  left: 0;
  top: 0;
}
.search input {
  height: 100%;
  width: 100%;
  border-radius: 40px;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 20px;
  background: url("~assets/img/home/ic_search.png") no-repeat;
  background-color: #fff;
  background-size: 35px 35px;
  background-position: 10px 8px;
  padding:3px 30px 3px 55px;
  outline: none;
}
</style>