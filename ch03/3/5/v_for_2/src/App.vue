<!--//
3.3.5 디렉티브 사용하기
- <script> 태그 영역에서 정의한 data 옵션 속성을 <template> 태그 영역에서
  사용할 수 있게 하는 방법중에 디렉티브가 있습니다. (86 Page 디렉티브 사용하기 중)

* v-for : v-for 뷰에서 반복적으로 렌더링하는 HTML 요소를 생성하는데 사용하는 구문이다. (99 Page)
- 객체가 할당된 데이터 속성의 값도 v-for 디렉티브로 반복할 수 잇습니다.
(객체는 기본적으로 키(key)와 값(value)으로 구성된 속성(property)의 집합입니다.)

ex) 
1) v-for="값 in 객체" (v-bind:key="고유값" or :key="고유값")
2) v-for="(값, 키) in 객체" v-bind:key="고유값"
3) v-for="(값, 키, 인덱스) in 객체" v-bind:key="고유값"
key 속성은 필요에 따라 속성값을 변경할 수 있다(실무에서...)... ex) key=> name/fruitName 등동
//-->

<script>
  export default {
    data: function() {
      return {
        user: {
          name: "john",
          age: 20,
          gender: "male",
        },
        redClass: "color_red",
        blueClass:"color_blue",
        greenClass: "color_green",
      };
    },
  }
</script>

<template>
  <h1 v-bind:class="redClass">user 데이터의 반복 결과 - ex) 1번 예제</h1>
  <ul>
    <li v-for="value in user" v-bind:key="value"> <!--// 결과 값 : john, 20, male //-->
      {{ value }}
    </li>
  </ul>

  <h1 v-bind:class="blueClass">user 데이터의 반복 결과 - ex) 2번 예제</h1>
  <ul>
    <li v-for="(value, key) in user" v-bind:key="value"> <!--// 결과 값 : name => john, age => 20, gender => male //-->
      {{ key }} => {{ value }}
    </li>
  </ul>  

  <h1 v-bind:class="greenClass">user 데이터의 반복 결과 - ex) 3번 예제</h1>
  <ul>
    <li v-for="(value, key, index) in user" v-bind:key="index"> <!--// 결과 값 : [0] : name => john, [1] : age => 20, [2] : gender => male //-->
      [{{ index }}] : {{ key }} => {{ value }}
    </li>
  </ul>  
</template>

<style>
  .color_red {
    color: red;
    font-weight: bold;
  }

  .color_blue {
    color: blue;
    font-weight: bold;
  }

  .color_green {
    color: green;
    font-weight: bold;
  }
</style>