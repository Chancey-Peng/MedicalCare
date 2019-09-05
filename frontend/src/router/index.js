import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import header from '@/components/header/head'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/head',
            name: 'Header',
            component: resolve => require(['../components/header/head.vue'], resolve)
                // component: header
        }
    ]
})