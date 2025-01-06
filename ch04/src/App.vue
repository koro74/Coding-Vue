<!--//
4. 계산기
4.5.3 연산 로직 구현하기 (167 page : 2025.01.06)
- 입력한 값이 연산 기호인지 아닌지 확인을 해야 합니다.
- 문자열에 특정 문자열이 포함되어 있는지 확인을 위해 includes() 사용합니다.
- 문자열이 포함된 경우 true, 그렇지 않으면 false를 반환합니다.

4.5.4 예외 처리하기 (173 page : 2025.01.06)
4.5.5 초기화하기 (174 page : 2025.01.06)
//-->

<script>
  export default {
    data: function() {
      return {
        output: null,   // 누른 숫자나 연산한 결과를 계산기 UI에 바로 보여주기 위한 데이터입니다.
        prev: null,     // 이전에 입력된 숫자나 연산 결과를 저장하기 위한 데이터입니다.
        cur: null,      // 현재 입력 중인 숫자를 저장하기 위한 데이터입니다.
        operator: null, // 사용자가 입력한 연산자를 저장하기 위한 데이터입니다.
        operResult : null,
      };
    },

    methods: {
      operation: function(e) {
        const n = e.currentTarget.value; // 4.5.1 클릭한 버튼 값 가져오기
        console.log("Click key Pad => " + n);
        //4.5.5 초기화하기
        if (n === "C") {
          this.ouput = null;
          this.prev = null;
          this.cur = null;
          this.operator = null;
          return;
        }

        // 4.5.3 연산 로직
        const operArray = ["+", "-", "*", "/", "="];
        if (operArray.includes(n)) {
          // 4.5.4 저장된 숫자가 없는데 연산 기호를 클릭한 경우
          if (!this.cur && !this.prev) {
            alert("숫자를 먼저 입력하세요.");
            return;
          }

          // 4.5.4 사칙연산 기호를 연달아 클릭한 경우
          if (this.operator !== "" && !this.cur) {
            alert("사친연산 기호를 연달아 누를 수 없습니다.");
            return;
          }

          // 4.5.4 등호를 클릭해 결과를 노출한 후 다시 등호를 클릭한 경우
          if (n === "=" && this.prev === this.cur) {
            return;
          }
          
          this.cur = Number(this.cur);
          if (this.operator !== null) { // 연산 기호가 있는 경우
            // 사칙연산 기호면 연산 수행
            switch (this.operator) {
              case "+":
                this.prev = this.prev + this.cur;
                break;
              case "-":
                this.prev = this.prev - this.cur;
                break;
              case "*":
                this.prev = this.prev * this.cur;
                break;
              case "/":
                this.prev = this.prev / this.cur;
                break;
            }

            // 등호면 연산 결과 출력
            if (n === "=") {
              this.output = this.prev;
              this.operator = null;
              this.cur = this.prev;
            }
            else {
              this.output = null;
              this.operator = n;
              this.cur = null;
            }
          }
          else {
            this.output = null;
            this.operator = n;
            this.prev = this.cur;
            this.cur = null;
          }
          return;
        }

        // 4.5.2 입력한 값 노출하기
        //this.cur = this.cur === null ? n : (this.cur += n); // 사용자가 입력한 숫자 저장
        // or 위 구문 또는 아래 조건문 동일 합니다.
        if (this.cur === null) this.cur = n;
        else this.cur += n;

        this.output = this.cur; // 입력한 값이 출력칸에 표시되도록 output 데이터에 저장
        
        //this.operResult = this.cur;
      },
    },
  }
</script>

<template>
    <div class="calculator">
      <div class="console">{{ operResult }}</div>
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