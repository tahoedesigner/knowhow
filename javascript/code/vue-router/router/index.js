import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/components/NotFound'
import Home from '@/components/Home'
import User from '@/components/User'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'
import Sidebar from '@/components/Sidebar'
import Sidemain from '@/components/Sidemain'
import Tools from '@/components/Tools/index'
import Tools_Home from '@/components/Tools/Home.vue'
import Tools_VueJS from '@/components/Tools/VueJS'
import Tools_VueJS_Component from '@/components/Tools/VueJS_Component'
import Player from '@/components/Player'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/page1',
            name: 'Page1',
            component: Page1
        }, {
            path: '/page2',
            alias: '/page222',
            name: 'Page2',
            component: Page2
        }, {
            path: '/page3',
            name: 'Page3',
            component: Page3
        }, {
            path: '/page4',
            name: 'Page4',
            components: {
                default: Page4,
                sidebar: Sidebar,
                sidemain: Sidemain,
            }
        }, {
            path: '/user/:id',
            name: 'User',
            component: User
        }, {
            path: '/user/:id/:name',
            name: 'User2',
            component: User
        }, {
            path: '/user',
            name: 'User0',
            component: User
        }, {
            path: '/player/:id',
            name: 'Player',
            props: true,
            component: Player,
            beforeEnter: (to, from, next) => {
                next();
            }
        }, {
            path: '/tools',
            name: 'Tools',
            component: Tools,
            children: [{
                    path: 'home',
                    component: Tools_Home
                }, {
                    path: 'vuejs',
                    component: Tools_VueJS
                },
                {
                    path: 'vuejs/component',
                    name: 'Tools_VueJS_Component',
                    components: {
                        default: Tools_VueJS_Component,
                        sidebar: Sidebar,
                        sidemain: Sidemain,
                    }
                },
            ]
        }, {
            path: '/redirect_tools',
            redirect: '/tools'
        }, {
            path: '/redirect_page4',
            redirect: {
                name: 'Page4'
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    //console.log('router.index.beforeEach', to, from);
    next();
    // next(false);
});

router.afterEach((to, from) => {
    //console.log('router.index.afterEach', to, from);
});

export default router;
