<!--//
5.3.1 라이프사이클 훅 (196 page)
- 라이프사이클 훅 호출 확인
//-->

<script>
  export default {
    beforeCreate: function() {
      console.log("beforeCreate");  
    },

    created: function() {
      console.log("created");
    },

    beforeMount: function() {
      console.log("beforeMount");
    },

    mounted: function() {
      console.log("mounted");
    },

    beforeUpdate: function() {
      console.log("beforeUpdate");
    },

    updated: function() {
      console.log("updted");
    },

    beforeUnmount: function() {
      console.log("beforeUnmount");
    },

    unmounted: function() {
      console.log("unmounted");
    },
  }
</script>

<template>

</template>