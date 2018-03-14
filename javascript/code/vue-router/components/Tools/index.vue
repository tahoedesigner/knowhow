<template>
    <div>
        Tools.index
        <hr>
        <router-link to="/tools/home">Home</router-link>
        <router-link to="/tools/vuejs">VueJS</router-link>
        <router-link :to="{name:'Tools_VueJS_Component'}">VueJS Compoent</router-link>
        <hr>
        <router-view/>
        <hr>
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
