<script>
    export default {
        props: ["name", "age"], // 사용자 정의 속성인 name, age의 값을 받음
        
        created: function() {
            console.log("type of variable : age >>>>> " + typeof this.age); // 문자열 출력
            console.log("type of variable : name >>>>> " + typeof this.name); // 문자열 출력
        },
    }
</script>

<template>
    <p>이름 : {{ name }}</p>
    <p>나이 : {{ age }}</p>
</template>