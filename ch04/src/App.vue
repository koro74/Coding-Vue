<!--//
4. 계산기
//-->

<script>
  export default {
    data: function() {
      return {
        output: null,   // 누른 숫자나 연산한 결과를 계산기 UI에 바로 보여주기 위한 데이터입니다.
        prev: null,     // 이전에 입력된 숫자나 연산 결과를 저장하기 위한 데이터입니다.
        cur: null,      // 현재 입력 중인 숫자를 저장하기 위한 데이터입니다.
        operator: null, // 사용자가 입력한 연산자를 저장하기 위한 데이터입니다.
      };
    },

    methods: {
      operation: function(e) {
        const n = e.currentTarget.value; // 4.5.1 클릭한 버튼 값 가져오기

        // 4.5.2 입력한 값 노출하기
        //this.cur = this.cur === null ? n : (this.cur += n); // 사용자가 입력한 숫자 저장
        // or 위 구문 또는 아래 조건문 동일 합니다.
        if (this.cur === null) this.cur = n;
        else this.cur += n;

        this.output = this.cur; // 입력한 값이 출력칸에 표시되도록 output 데이터에 저장
        console.log("click key pad : " + n);
      },
    },
  }
</script>

<template>
    <div class="calculator">
    <form name="forms">
        <!--//
          4.4.1 데이터 정의와 바인딩 (160 page)
          - 4가지 데이터 중 HTML 요소와 바인딩해야 하는 데이터는 사용자에게 노출되는 output뿐입니다.
          - 다음과 같이 v-model 디렉티브를 사용해 output 데이터를 양방향으로 바인딩합니다.
        //-->
        <input v-model="output" type="text" name="output" readonly />

        <!--//
          4.4.2 이벤트 연결 (161 page)
          - 속성 값이 output인 <input> 태그를 제외한 나머지 <input> 태그에 모두 클릭 이벤트를 연결합니다.
        //-->
        <input type="button" class="clear" value="C" v-on:click="operation" />
        <input type="button" class="operator" value="/" v-on:click="operation" />
        <input type="button" class="number" value="1" v-on:click="operation" />
        <input type="button" class="number" value="2" v-on:click="operation" />
        <input type="button" class="number" value="3" v-on:click="operation" />
        <input type="button" class="operator" value="*" v-on:click="operation" />
        <input type="button" class="number" value="4" v-on:click="operation" />
        <input type="button" class="number" value="5" v-on:click="operation" />
        <input type="button" class="number" value="6" v-on:click="operation" />
        <input type="button" class="operator" value="+" v-on:click="operation" />
        <input type="button" class="number" value="7" v-on:click="operation" />
        <input type="button" class="number" value="8" v-on:click="operation" />
        <input type="button" class="number" value="9" v-on:click="operation" />
        <input type="button" class="operator" value="-" v-on:click="operation" />
        <input type="button" class="dot" value="." v-on:click="operation" />
        <input type="button" class="number" value="0" v-on:click="operation" />
        <input type="button" class="operator result" value="=" v-on:click="operation" />
    </form>
  </div>
</template>