import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
// Vue-router 报NavigationDuplicated的可能解决方案
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: {name: 'Home'},
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/Index.vue'),
    meta: {title: '首页',tree:0, keepAlive: false, requireAuth: true},
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('@/views/me/Index.vue'),
    meta: {title: '个人中心',tree:1, keepAlive: false, requireAuth: true},
  },
  {
    path: '/certification',
    name: 'Certification',
    component: () => import('@/views/certification/Index.vue'),
    meta: {title: '实名认证',tree:2, keepAlive: false, requireAuth: true},
  },
  {
    path: '/recharge',
    name: 'Recharge',
    component: () => import('@/views/recharge/Index.vue'),
    meta: {title: '充值',tree:2, keepAlive: false, requireAuth: true},
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import('@/views/rank/Index.vue'),
    meta: {title: '排行榜',tree:1, keepAlive: false, requireAuth: true},
  },
  {
    path: '/pkduel',
    name: 'Pkduel',
    component: () => import('@/views/pkduel/Index.vue'),
    meta: {title: 'pk对决',tree:1, keepAlive: false, requireAuth: true},
  },
  {
    path: '/brush',
    name: 'Brush',
    component: () => import('@/views/brush/Index.vue'),
    meta: {title: '刷题',tree:1, keepAlive: false, requireAuth: true},
  },
  {
    path: '/level',
    name: 'SelectLevel',
    component: () => import('@/views/brush/selectLevel.vue'),
    meta: {title: '选择关卡',tree:2, keepAlive: false, requireAuth: true},
  },
  {
    path: '/challengeEnter',
    name: 'ChallengeEnter',
    component: () => import('@/views/brush/challengeEnter.vue'),
    meta: {title: '挑战',tree:2, keepAlive: false, requireAuth: true},
  },
  {
    path: '/challenge',
    name: 'Challenge',
    component: () => import('@/views/brush/challenge.vue'),
    meta: {title: '挑战答题',tree:3, keepAlive: false, requireAuth: true},
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});


/*
* mode: 'hash' or 'history',
* */
const router = new Router({mode: 'history', routes});

let xscUser = {};
if (localStorage.getItem('xscUser')) {
  xscUser = JSON.parse(localStorage.getItem('xscUser'))
} else {
  xscUser = {
    name: '',
    telphone: '',
    coin: 0,
    isSign: false,
    certified: false,
    day: new Date().getDate()
  };
  localStorage.setItem('xscUser', JSON.stringify(xscUser))
}

router.beforeEach(function (to, from, next) {
  /* 路由发生变化修改页面title */
  document.title = to.meta.title;
  // record => record.meta.requireAuth
  if (to.matched.some(function (record) {
    return record.meta.requireAuth;
  })) { // 判断该路由是否需要登录权限
    Vue.prototype.user = xscUser;
    store.commit('changeTransition', 'slide-none')
    if (from.meta.tree > to.meta.tree) {
      // 后退,想右滑动
      store.commit('changeTransition', 'slide-right')
    } else if (from.meta.tree < to.meta.tree) {
      // 前进,想左滑动
      store.commit('changeTransition', 'slide-left')
    } else {
      // 同一层级,无动画
      store.commit('changeTransition', 'slide-none')
    }
    next()
  } else {
    next()
  }
});

export default router;
