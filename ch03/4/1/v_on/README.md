# . 이벤트 다루기
자바스크립트에서 이벤트(Event)는 사용자와 상호작용해서 발생하는 사건을 말합니다.
대표적으로 마우스를 클릭하거나 드래그하는 마우스 관련 이벤트와 키보드를 사용할 대 발생하는 키보드 관련 이벤트가 있습니다.

자바스크립트는 이벤트를 다룰 때 document 객체의 여러 속성고 메서드를 조합해서 사용해야 합니다.
하지만 뷰에서는 자바스크립트보다 쉽게 이벤트를 다룰 수 있습니다.
* Vue.js 프런트엔드 개발 입문 내용 중

3.4.1 뷰에서는 v-on 디렉티브로 이벤트를 쉽게 연결할 수 있습니다.
ex) v-on: 이벤트_타입="이벤트_헨들러"

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
