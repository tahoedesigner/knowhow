<template>
    <div>
        Page3

        <div>
            {{this.$route.params.uid}}
        </div>
        <pre>
        </pre>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$route);
            console.log(this.$router);
        }
    }

</script>
