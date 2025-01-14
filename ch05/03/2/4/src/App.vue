<!--//
  5.3 컴포넌트 생명주기 이해하기
  5.3.2 템플릿 ref
  - 컴포넌트 참조 (203 page)
//-->

<script>
  import FirstChild from '@/components/FirstChild.vue';
  export default {
    components: {
      FirstChild,
    },

    mounted: function() {
      const childNum = this.$refs.child.num;
      const childDoubleNum = this.$refs.child.doubleNum;
      console.log(`메서드 호출 전 : ${childNum}`); // 5 출력
      console.log(`메서드 호출 전 : ${childDoubleNum}`); // 10 출력

      // DOM이 마운트되고 3초 뒤에 FirstChild 컴포넌트의 increment() 메서드 호출
      setTimeout(() => {
        this.$refs.child.increment();
        childNum = this.$refs.child.num; // 추가
        childDoubleNum = this.$refs.child.doubleNum; // 추가

        console.log(`3초 후 메서드 호출 전 : ${childNum}`); // 6 출력
        console.log(`3초 후 메서드 호출 전: ${childDoubleNum}`); //12 출력
      }, 5000);
    },
  }
</script>

<template>
  <FirstChild ref="child" />
</template>