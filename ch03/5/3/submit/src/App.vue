<!--//
3.5.3 폼 요소와 이벤트 (125 page)
* v-on submit 이벤트 (127 page)
- submit 이벤트는 <form> 태그에 사용한 폼 요소의 데이터를 서버로 전송하는 시점에서 발생하는 이벤트 입니다.
- 일반적으로 <form> 태그는 submit 이벤트가 발생할 때 action 속성에 명시된 주소로 페이지를 이동합니다.
- 뷰에서는 페이지 이동 없이 ajax 기술을 사용해 폼 데이터를 전송하기 때문에 아래 코드와 같이 객체의
preventDefault() 메서드를 함께 사용 합니다.
//-->

<script>
  export default {
    methods: {
      onSubmitHandler: function(e) {
        e.preventDefault();
        // 실제 실무에서 별도의 폼 전송 처리 로직 작성
        console.log("onSubmit Handler!");
      },
    },
  }
</script>

<template>
  <form v-on:submit="onSubmitHandler" method="post" action="https://www.naver.com">
    <button type="submit">전송</button>
  </form>
</template>