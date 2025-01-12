<!--//
    1. FirstChild.vue 파일 생성
    - beforeUnmount(),  unmounted() 코드 추가
//-->
<script>
    export default {
        beforeUnmount: function() {
            console.log("beforeUnmount");
        },

        unmounted: function() {
            console.log("unmounted");
        },
    }
</script>

<template>
    <h1>First Child</h1>
</template>

<style>
    h1 {
        color: green;
        font-weight: bold;
    }
</style>