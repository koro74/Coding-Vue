<script>
    export default {
        props: ["name", "age"], // 사용자 정의 속성인 name, age의 값을 받음
    }
</script>

<template>
    <p>이름 : {{ name }}</p>
    <p>나이 : {{ age }}</p>
</template>