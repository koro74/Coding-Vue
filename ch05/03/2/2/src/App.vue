<!--//
5.3.2 탬플릿 ref
<template> 태그에ㄴㄴ HTML 태그에서 사용할 수 있는 속성(attribute)을 모두 사용할 수 있습니다.
그리고 뷰에서는 HTML에서 지원하지 않는 ref 속성을 추가로 지원 합니다.
ref 속성은 문서 객체(DOM)를 참조할 때와 컴포넌트를 참조할 때 사용합니다.
//-->

<script>
  export default {
    mounted: function() {
      const domEl = this.$refs.domEl;
      const text = domEl.innerText; // this.$refs.domEl.innerText와 같은의미
      console.log("text => " + text);
    },
  }
</script>

<template>
  <h1 ref="domEl">h1 태그</h1>
</template>