import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const moduleA={
  state:{
  name:'龙增'
  },
  mutations:{
  upname(state,payload){
   state.name=payload
  }
  },
  getters:{
  cname(state){
     return state.name+'123'
  }
  },
  actions:{

  }

}

const store = new Vuex.Store({
  state: {
    count: 1,
    users: [{
        name: 'lz',
        age: 20
      },
      {
        name: 'll',
        age: 18
      },
      {
        name: 'lnw',
        age: 52
      },
      {
        name: 'sxf',
        age: 50
      }
    ]
  },
  mutations: {
    //方法
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    incrementcount(state,num){
     state.count+=num
    }
  },
  actions: {

  },
  getters: {
    powercount(state) {
      return state.count * state.count
    },
    more20thuser(state) {
      return state.users.filter(a => a.age > 20)
    },
    more20thuserlen(state, getters) {
      return getters.more20thuser.length
    },
    moreAgeStu(state) {
      return age => {
        return state.users.filter(a => a.age > age)
      }
    }
  },
  modules: {
  a:moduleA
  }
})

export default store
