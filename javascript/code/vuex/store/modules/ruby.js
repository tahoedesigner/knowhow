const ruby = {
    state: {
        lang: 'ruby',
        count: 0,
    },
    getters: {},
    mutations: {
        increment(state) {
            console.log('ruby.increment');
            state.count++
        },
        add1(state) {
            state.count++
        },
    },
    actions: {}
}
export default ruby;
