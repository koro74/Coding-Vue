<!--//
5.2 컴포넌트 정의하기 (186 page)
5.2.2 컴포넌트 생성하기
5.2.3 컴포넌트 등록하기
- 지역 등록(191 page)
//-->

<script>
  import FirstChild from "@/components/FirstChild.vue"; // 1)
  /*
    1) 지역 등록할 컴포넌트를 불러옵니다. from 키워드 다음에 오는 파일 경로는 HTML의 이미지
    태그(<img>)에서 src 속성의 경로를 지정하는 것과 같습니다. 지역 등록할 컴포너트의 경로는
    현재 작성 중인 파일의 위치를 기준으로 합니다.
  */

 export default {
  components: { // 2)
    /*
      2) 옵션스 API의 components 속성을 사용해 컴포넌트를 할당합니다.
    */
    FirstChild, // 3)
    /*
      3) components 속성의 값은  import 키워드 다음에 적힌 식별자를 그대를 사용합니다.

      - 이렇게 지역 등록한 컴포넌트는 등록한 컴포넌트에서만 사용할 수 있습니다.
    */
  },
 }
</script>

<template>
  <FirstChild />
  <h1>scoped 확인</h1>
</template>

<style scoped>
  h1, p {
    color: orange !important;
  }
</style>