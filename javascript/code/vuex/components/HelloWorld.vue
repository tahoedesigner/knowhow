<template>
    <div class="hello">
        <ul>
            <li>{{count}}</li>
            <li>{{countAlias}}</li>
            <li>{{countPlusLocalState}}</li>
            <li>{{this.$store.state.count}}</li>
        </ul>
        <div>
            Age:{{age}}
        </div>
        <div>
            price_tax:{{price_tax}}
        </div>
        <div>
            total_tax:{{total_tax}}
        </div>
        <div>
            switch price: {{switch_price}} / {{switch_price_tax}} / {{switch_price_customize_tax}}
        </div>
        <hr>
        <button @click="add1()">Add1</button>
        <button @click="add10()">Add10</button>
        <hr>
        <button @click="func1()">Func1</button>
        <button @click="func10()">Func10</button>
        <hr>
        <button @click="actionA()">actionA</button>
        <button @click="actionB()">actionB</button>
        <hr>
        <button @click="setSwitchPrice()">Set Switch Price</button>
        <hr>
        <div>
            Ruby: {{rubyCount}}
            <button @click="RubyAdd()">RubyAdd</button>
        </div>
        <footer>
            {{msg}}
        </footer>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters
    } from 'vuex';

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Vuex sample.'
            }
        },
        computed: {
            //Vuex影射属性
            ...mapState({
                count: state => state.count,
                age: state => state.age,
                countAlias: 'count',
                countPlusLocalState(state) {
                    return state.count + 10; //this.localCount
                },
                rubyCount: state => state.ruby.count,
            }),
            ...mapGetters({
                switch_price: 'switch_price',
                switch_price_tax: 'switch_price_tax',
            }),
            // 已放到mapGetters中
            // switch_price() {
            //     return this.$store.getters.switch_price;
            // },
            // switch_price_tax() {
            //     return this.$store.getters.switch_price_tax;
            // },
            switch_price_customize_tax: {
                get() {
                    return this.$store.getters.switch_price_customize_tax(1.17);
                },
                set(value) {
                    this.$store.commit('setprice', {
                        price: value
                    });
                }
            },
            //本地计算属性1
            price_tax: {
                get() {
                    return 100 * 1.08;
                }
            },
            //本地计算属性2
            total_tax() {
                return 10000 * 1.08
            },
        },
        methods: {
            add1() {
                this.$store.commit('increment');
            },
            add10() {
                this.$store.commit('increment', {
                    step: 10
                });
            },
            func1() {
                this.$store.dispatch('func1')
            },
            func10() {
                this.$store.dispatch('func10', {
                    step: 10
                })
            },
            actionA() {
                this.$store.dispatch('actionA');
            },
            actionB() {
                this.$store.dispatch('actionB');
            },
            RubyAdd() {
                this.$store.commit('increment');
                this.$store.commit('add1');
            },
            setSwitchPrice() {
                this.switch_price_customize_tax = 20000;
            }
        },
        mounted() {
            console.log('mounted', this.$store.state.count);
            console.log('mounted', this.$store.state.ruby.lang);
            console.log('mounted', this.$store.state.sails.lang);
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a {
        color: #42b983;
    }

</style>
