<script>
    export default {
      props: {
        name: String,   // name 속성의 값이 문자열인지 검사
        age: [String, Number], // age 속성의 값이 문자열이나 숫자인지 검사
      },
    }
</script>

<template>
    <p>이름 : {{ name }}</p>
    <p>나이 : {{ age }}</p>
</template>