父子组件传参时
子组件如何接受父组件的异步参数

首先明确一点 父子组件渲染时 执行顺序

父组件 created -> 父组件 beforeMount -> 子组件 created -> 子组件 beforeMount -> 子组件 mounted -> 父组件 mounted

子组件mounted 优先于父组件 mounted执行
 
所以在父组件 created 或 beforeMount 生命周期里 执行同步代码获取异步数据 ,那么子组件就可以接收到父组件的异步参数


