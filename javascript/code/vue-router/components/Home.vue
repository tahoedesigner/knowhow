<template>
    <div id="myApp">
        Home
        <div>
            <heloworld v-show="isShow" />
        </div>
        <button @click="btnOk_click">Toggle</button>
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld'

    export default {
        name: 'HelloWorld',
        components: {
            'heloworld': HelloWorld
        },
        data() {
            return {
                isShow: false,
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            btnOk_click(){
                this.isShow = !this.isShow;
            }
        }
    }

</script>
