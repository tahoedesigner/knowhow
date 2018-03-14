<template>
    <div id="app">
        <div>
            <button @click="goto('vc')">vuejs component</button>
        </div>
        <hr>
        <ul>
            <li>
                <router-link to='/'>Home</router-link>
            </li>
            <li>
                <router-link to='Page1'>Page1</router-link>
            </li>
            <li>
                <router-link to='/page2'>Page2</router-link>
                <router-link to='/page222'>Page222(alias)</router-link>
            </li>
            <li>
                <router-link :to="{name:'Page3', params:{uid:10}}">Page3</router-link>
            </li>
            <li>
                <router-link to='/page4'>Page4</router-link>
            </li>
            <li>
                <router-link to="/user">UserHome</router-link>
                <router-link to="/user/1">User1</router-link>
                <router-link :to="{name:'User', params:{id:2}}">User2</router-link>
                <router-link to="/user/3/mike">User3</router-link>
                <router-link :to="{name:'User', params:{id:4,name:'john'}}">User4</router-link>
            </li>
            <li>
                <router-link to='/player/1'>Player1</router-link>
                <router-link :to="{name:'Player', params:{id:100}}">Player100</router-link>
            </li>
            <li>
                <router-link to='/redirect_tools'>Redirect2Tools</router-link>
                <router-link to='/redirect_page4'>Redirect2Page4</router-link>
            </li>
        </ul>
        <div>
            <router-link to="/tools">Tools</router-link>
        </div>
        <router-view/>

        <table style="width:100%">
            <tr>
                <td class="left_line">
                    <router-view name="sidebar" />
                </td>
                <td class="left_line">
                    <router-view name="sidemain" />
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            goto(key) {
                switch (key) {
                    case 'vc':
                        this.$router.push('/tools/vuejs/component');
                        break;
                    default:
                        break;
                }
            }
        }
    }

</script>

<style>
    #app {}

    .router-link-active {
        background-color: aquamarine;
    }

    .left_line {
        border-left: red 1px solid;
    }

</style>
