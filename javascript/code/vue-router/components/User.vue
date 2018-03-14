<template>

    <div>
        {{this.$route.params.id}} / {{this.$route.params.name}}
    </div>
</template>

<script>
    export default {
        watch: {
            '$route' (to, from) {
                console.log('User.vue', from, to);
            }
        }
    }

</script>


<style scoped>


</style>
