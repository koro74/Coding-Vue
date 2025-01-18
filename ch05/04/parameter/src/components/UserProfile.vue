<script>
    export default {
        emits: ["print-hello"],
        methods: {
            parentEventCall: function() {
                // emits 옵션 속성으로 print-hello 이벤트만 명시
                // 명시되지 않은 onPrint-hello 이벤트 호출 시 경고 발생
                this.$emit("print-hello", "철수", 30);
            },
        },
    }
</script>
<template>
    <button v-on:click="parentEventCall">클릭</button>
</template>