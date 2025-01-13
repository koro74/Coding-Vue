<!--//
5.3.2 탬플릿 ref
<template> 태그에ㄴㄴ HTML 태그에서 사용할 수 있는 속성(attribute)을 모두 사용할 수 있습니다.
그리고 뷰에서는 HTML에서 지원하지 않는 ref 속성을 추가로 지원 합니다.
ref 속성은 문서 객체(DOM)를 참조할 때와 컴포넌트를 참조할 때 사용합니다.
//-->

<!--//
* 문서 객체 참조
일반적인 자바스크립트 문법에서는 HTML로 작성된 태그의 문서 객체(DOM)를참조할 때 document 객체를 사용합니다.

HTML 파일
<body>
  <h1>h1 태그입니다.</h1>
  <script>
    const domEl = document.querySelector("h1");
    const text = domEl.innerText;
    console.log(text); // "h1 태그입니다." 출력
  </script>
</body>
//-->

<script>
  export default {
    data: function() {
      return {
        domEl: null,
      };
    },

    mounted: function() {
      /*
      */
      const domEl = document.querySelector("h1");
      const text = domEl.innerText;
      console.log(text);
    },
  }
</script>

<template>
  <h1>h1 태그</h1>
</template>