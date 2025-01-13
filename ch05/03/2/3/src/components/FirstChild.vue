<script>
    export default {
        data: function() {
            return {
                num: 5,
            };
        },

        computed: {
            doubleNum: function() {
                return this.num * 2;
            },
        },

        methods: {
            increment: function() {
                this.num++;
            },
        },
    }
</script>

<template>
    <h1><span>components ref : </span>{{ num }}</h1>
</template>

<style>
    h1 span {
        color: blueviolet;
        font-weight: bold;
    }
</style>