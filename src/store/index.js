// import Vue from "vue";
import { createStore } from "vuex";

//Import modules
import blogModule from "./modules/blog";

const store = createStore({
  modules: {
    blogModule,
  },
});
export default store;
