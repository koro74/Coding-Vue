<!--//
3.5.2 v-model 디렉티브로 폼 요소 다루기
- 뷰에서는 입력한 요소의 값을 가져올 때 V-MODEL 디렉티브를 사용합니다.
- v-model 디렉티브는 <script> 태그 영역에 정의한 데이터 속성과 <template> 태그 영역에
작성한 HTML 요소가 양방향으로 서로 연결되어 데이터 속성의 값을 자동으로 업데이트 합니다.(양방향 데이터 바인딩 115 page) 

* v-model 디렉티브 사용 시 주의 사항 (123 page)
- 아래 코드는 한 줄 입력 요소에 텍스트를 입력하면 v-model 디렉티브에 바인딩한 message 데이터 속성의 값이 실시간으로
변경됩니다.
- 문제는 한글 입력 시 영문일때와 달리 한 글자씩 늦게 인식됩니다.
- 한글/한자처럼 글자를 조합해서 단어를 만드는 문자는 IME(Input Method Editor)를 사용하는데 이때 발생하는 문제입니다.
- 아래 코드처럼 실시간으로글자 수를 확인해야 할 때는 v-model 디렉티브를 사용할 수 없습니다.
* 해결 방법은 다음 코딩 연습 때 업로드 하도록 하겠습니다.
//-->

<script>
  export default {
    data: function() {
      return {
        message:"",
      };
    },
  }
</script>

<template>
  <input type="text" v-model="message"/>
  {{ message }}
</template>