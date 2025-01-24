<script>
  import FirstChild from '@/components/FirstChild.vue';

  export default {
    components: {
      FirstChild,
    },

    mounted: function() { /* 2 */
      console.log(this.$refs.childRef.childNum); // 0
      console.log(this.$refs.childRef.childNumOddAdd); // 짝수
      console.log(this.$refs.childRef.getChildNum()); // 0
    },
  }
</script>

<template>
  <FirstChild ref="childRef" /> <!--// 1 //-->
</template>