import Vue from 'vue';
import Vuex from 'vuex';

import robotsModule from './modules/robots';
import usersModules from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: robotsModule,
    users: usersModules,
  },
  getters: {
    foo(state) {
      return `root-getter/${state.foo}`;
    },
  },
});
