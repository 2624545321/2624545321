# angular

## 启动项目

+ npm i -g @ng/cli
+ ng new [appname]
+ 按照提示进行

## 文件目录
    |-- src
        |-- favicon.ico
        |-- index.html // 主界面
        |-- main.ts // 入口文件
        |-- styles.sass // 全局样式文件
        |-- app // 根组件 其他页面及组件都要写在其目录下
        |   |-- app.component copy.html
        |   |-- app.component.html
        |   |-- app.component.sass
        |   |-- app.component.spec.ts // 测试组件能否运行
        |   |-- app.component.ts
        |   |-- app.module.ts // app 模块
        |-- assets
        |   |-- .gitkeep
        |-- component
    |-- .editorconfig
    |-- .gitignore
    |-- angular.json
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- tsconfig.app.json
    |-- tsconfig.json
    |-- tsconfig.spec.json
 
## 自定义组件

### 1. 创建组件
  + 一个组件需要的最基础的属性
  + angular的组件以 class 来使用

  ```
  <!-- 写在一个文件的写法 -->
  // 1 引入函数
  import { Component } from "@angular/core";
  // 2 装饰器；标识我这个组件使用来做什么的
  @Component({
    template: '<hr /><h3>我的自定义组件</h3>', 
    selector: 'own-component' // 定义组件的名称
  })
  // 3 使用组件，就需要暴露出一个类
  export class OwnComponent {

  }

  <!-- 完整写法 -->
  import { Component } from "@angular/core";

  @Component({
    templateUrl: './myComponent.component.html', // 模板地址
    styleUrls: ['./myComponent.component.scss'], // 样式，可以包含多个
    selector: 'app-my-component'
  })

  export class MyComponent {

  }
  ```

### 2. 在某个模块中注册组件
  
  ```
  declarations: [
    AppComponent,
    OwnComponent
  ],
  ```  
### 格式
  + 组件使用时为了和 html 标签区分，一般写成 [name] - [componentname] 的形式
  + 定义组件文件时一般写成 [name].component.ts|html|css 的写法
  + 一般一个页面由 html css ts 三个文件组成

## 创建组件指令
  + angular 提供了创建自定义组件的命令

  ```
    ng generate component [name]
    <!-- 如果ng不能运行的话 -->
    npx ng generate component [name]

  ```
  + 简化
  ```
    ng g component [name]
    <!-- 如果ng不能运行的话 -->
    npx ng g component [name]

  ```
  > npx： 第三方可执行文件的执行工具
    >> 可执行当前项目中 node_modules/.bin目录下的可执行文件

## 绑定

### html绑定（数据绑定）
插值语法

+ 支持常用js的表达式
  - 算术运算
  - 比较运算
  - 逻辑运算
  - 三目运算
  - 调用函数
  - 对象类型的数据显示

+ 不能使用那些具有或可能引发副作用的 JavaScript 表达式
  - 赋值 (=, +=, -=, ...)
  - 运算符，比如 new、typeof 或 instanceof 等。
  - 链接表达式;或，
  - Chaining expressions with ; or ,
  - 自增和自减运算符：++ 和 --
  - JSON
  - 一些 ES2015+ 版本的运算符
  
  *详见 https://angular.cn/guide/binding-overview#no-visible-side-effects*

### 属性绑定
+ 属性为变量时的绑定方法
  ```
  1. <p class="btn-num" title="{{count}}">{{ count }}</p>
  2. <p class="btn-num" [title]="count">{{ count }}</p>
  ```
  

### 事件绑定
 ```
<button (click)="handleCount()">+</button>
 ```
+ 函数必须有 **()**

### 指令绑定

  #### *ngIf
  
  - 默认写法
    ```
    <div *ngIf="condition"></div>
    ```
  - else
    ```
      <div *ngIf="condition; else elseBlock"></div>
    ```  
  - then => 为 true 时内容显示区域
    ```
      <div *ngIf="condition; then thenBlock else elseBlock"></div>
      <ng-template #thenBlock>Content true</ng-template>
      <ng-template #elseBlock>Content false.</ng-template>
    ```  
  - as 本地存储值的形式: condition的值赋值给 value
    ```
      <div *ngIf="condition as value; else elseBlock">{{value}}</div>
      <ng-template #elseBlock>Content to render when value is null.</ng-template>
    ```

 *condition为 false 元素直接在dom中移除* 

#### *ngFor
```
 <!-- <li *ngFor="let item of list; index as i"> -->
  <li *ngFor="let item of list; let i = index">
    {{ i + 1 }} {{ item }}
  </li>
```

#### ngStyle

```
<some-element [ngStyle]="{'font-style': styleExp}">...</some-element>

<some-element [ngStyle]="objExp">...</some-element>
```

#### ngClass
+ CSS 类会根据表达式求值结果进行更新，更新逻辑取决于结果的类型
 
+ string - 会把列在字符串中的 CSS 类（空格分隔）添加进来，

+ Array - 会把数组中的各个元素作为 CSS 类添加进来，

+ Object - 每个 key 都是要处理的 CSS 类，当表达式求值为真的时候则添加，为假则移除。

 ```
  <some-element [ngClass]="'first second'">...</some-element>

  <some-element [ngClass]="['first', 'second']">...</some-element>

  <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>

  <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>

  <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>

 ```

#### ngSwitch
```
<container-element [ngSwitch]="switch_expression">
  <!-- the same view can be shown in more than one case -->
  <some-element *ngSwitchCase="match_expression_1">...</some-element>
  <some-element *ngSwitchCase="match_expression_2">...</some-element>
  <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
  <!--default case when there are no matches -->
  <some-element *ngSwitchDefault>...</some-element>
</container-element>

```

## 双向数据绑定 [(ngModel)]

+ mvvm

1. modle => view 模型数据流向视图
2. view => model 视图（表单元素）数据流向模型

```
 <input [(ngModel)]="name"
```

3. 使用时，需要导入该模块
```
import { FormsModule } from '@angular/forms';

imports: [
  FormsModule
],
```
