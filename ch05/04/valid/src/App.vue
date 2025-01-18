<script>
  import UserProfile from '@/components/UserProfile.vue';

  export default {
    components: {
      UserProfile,
    },

    methods: {
      printHello: function() {
        alert("안녕하세요!");
      },
    },
  }
</script>

<template>
  <!--// print-hello 이벤트만 정의되어 있음 //-->
  <UserProfile v-on:print-hello="printHello" />
</template>