<script>
  import UserProfile from '@/components/UserProfile.vue';

  export default {
    components: {
      UserProfile,
    },

    data: function() {
      return {
        userName: "김철수",
      };
    },
  }
</script>

<template>
  <!--// name 속성은 필수 값, 글자수 2자 이상 //-->
  <!--// age 속성은 옵션 값,기본값 10 지정됨 //-->
  <UserProfile v-bind:name="userName" />
</template>