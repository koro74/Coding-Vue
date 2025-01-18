<script>
    export default {
        methods: {
            parentEventCall: function() {
                this.$emit("print-hello");
            },
        },
    }
</script>
<template>
    <button v-on:click="parentEventCall">클릭</button>
</template>