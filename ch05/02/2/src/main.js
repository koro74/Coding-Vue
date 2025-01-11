/*
5.2 컴포넌트 정의하기 (186 page)
5.2.2 컴포넌트 생성하기
5.2.3 컴포넌트 등록하기
- 전역 등록(189 page)
컴포넌트를 '전역(global) 등록'한다는 것은 컴포넌트를 뷰 애플리케이션의 모든 곳에서 사용할 수 
있게 한다는 뜻입니다. 전역 등록은 항상 src 폴더의 main.js 파일에서 합니다.
*/
//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FirstChild from '@/components/FirstChild.vue'; //  1)
/* @/components/FirstChild.vue or ./components/FirstChild.vue 
1) import 문법으로 전역 등록할 컴포넌트를 불러옵니다. 이때 import 다음에 오는 FirstChild를
컴포넌트 인스턴스 또는 컴포넌트 객체라고 합니다. 그리고 from 다음에 오는 경로에서 @은 src 폴더를 의미합니다.
즉, @/components/FirstChild.vue 는 src/components/FirstChild.vue와 같습니다.
*/

const app = createApp(App); // 2)
/*
2) 컴포넌트를 전역 등록하려면 애플리케이션 인스턴스가 필요합니다.
따라서 애플리케이션 인스턴스를 변수에 할당하는 코드를 작성해야 합니다.
*/

app.component("FirstChild", FirstChild); // 3)
/*
3) 애플리케이션 인스턴스에서 제공하는 component() 함수를 사용하면 컴포넌트를 전역 등록할 수 있습니다.
component() 함수는 매개변수가 2개입니다. 첫 번째 매개변수에는 전역으로 사용할 컴포넌트의 이름,
두 번째 매개변수에는 전역으로 등록할 컴포넌트 객체를 지정 합니다.
*/

app.mount("#app");
//createApp(App).mount('#app')