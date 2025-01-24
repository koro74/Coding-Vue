<script>
    export default {
        data: function() {
            return {
                childNum: 0,
            };
        },

        computed: {
            childNumOddAdd: function() {
                return this.childNum % 2 === 0 ? "짝수" : "홀수";
            },
        },

        methods: {
            getChildNum: function() {
                return this.childNum;
            },
        },
    }
</script>

<template>
    <h1>FirstChild</h1>
</template>