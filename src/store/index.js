import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:{
      phone:"010-0000-0000",
      point:195200,
      payAmount:0
    }    
  },
  mutations: {
    setPayAmount(state, amount){
      state.user.payAmount = amount;
    }
  },
  actions: {},
  modules: {}
});
