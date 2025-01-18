<script>
  import UserProfile from '@/components/UserProfile.vue';

  export default {
    components: {
      UserProfile,
    },

    methods: {
      printHello: function(name, age) {
      alert(`안녕하세요! 저는 ${name}이고, 나이는 ${age}살입니다.`);
      },
    },
  }
</script>

<template>
  <!--// print-hello 이벤트만 정의되어 있음 //-->
  <UserProfile v-on:print-hello="(name, age) => printHello(name, age)" />
</template>