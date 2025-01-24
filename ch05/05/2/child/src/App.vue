<script>
  import FirstChild from '@/components/FirstChild.vue';

  export default {
    components: {
      FirstChild,
    },

    data: function() {
      return {
        parentNum: 5,
      };
    },

    computed: {
      numOddEven: function() {
        return this.parentNum % 2 === 0 ? "짝수" : "홀수";
      },
    },

    methods: {
      getParentNum: function() {
        return this.parentNum;
      },
    },
  }
</script>

<template>
  <FirstChild />
</template>