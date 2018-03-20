import Vue from 'vue'
import Vuex from 'vuex'

import ruby from './modules/ruby'
import sails from './modules/sails'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    // 全局数据
    state: {
        count: 0,
        age: 20,
        price: 10000,
    },
    // 相当于state的计算属性
    getters: {
        switch_price: state => {
            return state.price
        },
        switch_price_tax: (state, getters) => {
            return getters.switch_price * 1.08
        },
        switch_price_customize_tax: (state, getters) => tax => {
            return getters.switch_price * tax
        },
    },
    // 更改state的唯一方法
    // !!!一条重要的原则就是要记住 mutation 必须是同步函数!!!
    mutations: {
        increment(state, params) {
            console.log('store.increment');
            if (params) {
                state.count += params.step;
            } else {
                state.count++;
            }
        },
        action(state, params) {
            console.log('store.action', params)
        },
        setprice(state, params) {
            state.price = params.price;
        }
    },
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    // !!! action 支持异步函数 !!!
    actions: {
        func1: context => {
            context.commit('increment')
        },
        func10: (context, params) => {
            context.commit('increment', {
                step: params.step
            })
        },
        async actionA(context) {
            context.commit('action', await (function () {
                return new Promise((resolve) => {
                    resolve('actionA OK.');
                });
            })());
        },
        async actionB(context) {
            await context.dispatch('actionA') // 等待 actionA 完成
            context.commit('action', await (function () {
                return new Promise((resolve) => {
                    resolve('actionB OK.');
                });
            })())
        },
    },
    modules: {
        ruby: ruby,
        sails: sails
    },
});

export default store;
