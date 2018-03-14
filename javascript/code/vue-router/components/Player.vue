<template>
    <div>
        Player {{id}}
    </div>
</template>

<script>
    export default {
        props: ['id'],
        mounted() {
            console.log('Player.vue', this.$route.params);
        }
    }

</script>
