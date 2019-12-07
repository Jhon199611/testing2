import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

import { TypesStore } from "./types/store.type";

export const store = new Vuex.Store({
  state: {
    Language: "es",
    Studenst:[]
  },
  getters: {
    [TypesStore.state.LANGUAGE]: state => state.Language,
    [TypesStore.state.STUDENTS]: state => state.Studenst
  },
  actions: {
    [TypesStore.actions.GET_STUDENTS]:({commit})=>{
        axios.get("students").then(response =>{
            commit(TypesStore.mutations.SET_STUDENTS,response.data);
        });
    } 
  },
  mutations: {
    [TypesStore.mutations.SET_LANGUAGE]: (state, Language) => {
      state.Language = Language;
    },
    [TypesStore.mutations.SET_STUDENTS]: (state, Studenst) => {
        state.Studenst = Studenst;
      }
  },
  modules: {}
});