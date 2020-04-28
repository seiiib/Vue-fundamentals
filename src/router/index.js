import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowserParts from '../parts/BrowserParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  }, {
    path: '/parts/browse',
    name: 'BrowserParts',
    component: BrowserParts,
    children: [
      {
        name: 'BrowserHeads',
        path: 'heads',
        component: RobotHeads,
      }, {
        name: 'BrowserArms',
        path: 'arms',
        component: RobotArms,
      }, {
        name: 'BrowserTorsos',
        path: 'torsos',
        component: RobotTorsos,
      }, {
        name: 'BrowserBases',
        path: 'bases',
        component: RobotBases,
      },
    ],
  }, {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  }, {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  }],
});
