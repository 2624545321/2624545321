# angular

## 官网
https://angular.cn/

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


## 模块
+ 概述：用于对项目中的大量组/组件/管道/服务等进行分组，每个模块明确自己要实现的功能。如用户模块，商品模块，服务请求模块。
+ 用于对各种ng对象进行分组

## 自定义组件

### 1. 创建组件
  + 一个组件需要的最基础的属性
  + angular的组件以 class 来使用

  ```javascript
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

  ```javascript
  declarations: [
    AppComponent,
    OwnComponent
  ],
  ```
### 格式
  + 组件使用时为了和 html 标签区分，一般写成 [name] - [componentname] 的形式
  + 定义组件文件时一般写成 [name].component.ts|html|css 的写法
  + 一般一个页面由 html css ts 三个文件组成

### 创建组件的快捷指令
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
 ```js
<button (click)="handleCount()">+</button>
<button (dblclick)="handleCount($event)">+</button>
 ```
+ $event是内置的变量，我们可以直接使用

*函数必须有 **()***  

#### 键盘事件

+ 可以指定要绑定到键盘事件的键值或代码
+ 它们的 `key` 和 `code` 字段是浏览器键盘事件对象的原生部分

```js
(keydown.enter)="handleAddTodo()"
<input (keydown.shift.t)="onKeydown($event)" />
```

键值参考:  *https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values*

## 指令

### 预定义指令

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

##### 绑定到单个 CSS

```js
[class.completed]="todo.completed"
[class.sale]="onSale"
[class.类名]="condition"
```

##### 绑定到多个 CSS 类

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

#### 自定义指令
+ ng generate directive [name]


+ 进行需要的操作


### 指令总结
指令可分为三类

1. 组件指令（自定义指令）：Component(装饰器) 继承至 Directive(装饰器)
2. 结构型指令：会影响dom结构，必须使用 * 开头 => *ngIf、*ngFor
3. 属性型指令：不会影响dom结构，但会影响元素的外观或者行为。必须用 []，=> ngClass、ngStyle

## angular的修饰符
+ ```[] {{}}``` 中的内容一般为变量
+ () 的内容一般为事件绑定
+ * 一般用来修饰指令

### 双向数据绑定 [(ngModel)]

+ mvvm

1. modle => view 模型数据流向视图
2. view => model 视图（表单元素）数据流向模型

```
 <input [(ngModel)]="name"
```

3. 使用时，需要导入该模块
```javascript
import { FormsModule } from '@angular/forms';

imports: [
  FormsModule
],
```

4. 

```javascript
  单个输入框绑定
    <input type="text" [(ngModel)]="myIpt">

  作为表单元素绑定
    <form action="" #f="ngForm" (ngSubmit)="onSubmit(f)">
      <input name="ipt1" type="text" required ngModel #iptVal="ngModel">
      <input name="ipt2" type="text" ngModel #ipt="ngModel">
    </form>

    onSubmit(f: NgForm) {
      console.log(f.value);  // { "ipt1": "11111111", "ipt2": "222222" }
      console.log(f.valid);  // false
    }
```

5. 事件监听
    ngModelChange 在数据更新时触发


## pipe
*管道，同vue的过滤器*

```javascript
import { Pipe } from "@angular/core"; // 引入装饰器

@Pipe({
  name: 'suffixPipe' // 必须有name属性, 使用时用此名字
})

export class SuffixPipe {
  // 用来处理逻辑的函数
  transform(v: string) {
    return v + 'hhhhhh'
  }
}

```

+ 在 app.module.ts 中声明

+ 使用 
```javascript
{{ do.thing | suffixPipe }}

// 传参
{{ do.thing | suffixPipe: 'foo' }}

// 多个参数

{{ do.thing | suffixPipe: 'foo' : 'bar' }}
```

+ 内部预置了一些常用的转换 pipe
  - *https://angular.cn/api?type=pipe*


## 服务和依赖注入

### 创建对象的两种方式
  1. 手动创建 const o = new Object()
  2. 依赖注入式 无需自己 new ，只需要声明依赖

### 抽象&重点
   - Service（服务）：, angular认为；组件是与用户交互的一中对象，其中的内容都应该与用户操作有关系；而与用户操作无关的内容都应该剥离出去，放在‘服务对象’中，为组件服务；例如：系统日志、即使统计、数据服务器的访问

### 创建服务

   - ``` ng g/generate service [name]  ```

### 使用
  - 创建文件
  ```javascript
  import { Injectable } from '@angular/core';
  
  // 方式一： 在本文件中声明
  //  创建的服务是‘单例的’，不论多少组件使用，只创建一个实例
  @Injectable({
    providedIn: 'root'
  })
  
  
  export class LogService {
    constructor() { }
  }
  
  // 方式二 或者在app.module.ts中
  // 创建的服务也是‘单例的’，
  providers: [LogService]
  
  // 方式三 在引入的页面声明
  //  每个组件的服务对象都是新建的
  @Injectable() // 本文件中
  // 使用的文件中
  @Component({
    provides: [logService]
  })
  ```

  -  在页面中引入使用
  ```javascript
  import { LogService } from 'src/app/log/LogService';
  
  pravite log
  constructor(log: LogService) {
    this.log = log
  }

  // 简单写法
  constructor(pravite log: LogService) {
  }
  ```
  - 使用简写时，只要声明了变量，变量的依赖就会自动注入，无需再自己赋值
  - 'root'：在大多数应用程序中是指应用程序级注入器
  - 'platform' ：页面上所有应用程序共享的平台注入器的特殊单例
  - 'any'：在每个惰性加载的模块中提供一个唯一的实例，而所有急性加载的模块共享一个实例。

### HttpClient
  + Angular 提供的一个网络访问服务
  + 也就是数据请求的api，类似于axios
  + 使用
    1. 在app.module中引入
    ```javascript
    import { HttpClientModule } from '@angular/common/http'
    
    imports: [HttpClientModule]
    ```
    2. 在使用的地方引入
    ```javascript
    import { HttpClient } from '@angular/common/http';
    constructor(http: HttpClient) {
      this.http = http
    }
    ```

## 生命周期

1. constructor 组件创建时就会调用
2. ngOnChanges 组件绑定的属性值发生改变时（一般是双向数据绑定的值）
3. ngOninit 组件初始化完毕
4. ngDoCheck 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应
5. ngAfterContentInit 组件的内容初始化完成时
    ```javascript
    <p>content</p>
   ```
6. ngAfterContentChecked 组件的内容发生变化进行检查
7. ngAfterViewInit 组件的视图初始化完成
8. ngAfterViewChecked 组件的视图发生变化进行检查
     ```javascript
    template: 'view'
   ```
9. ngOnDestroy 组件即将卸载时调用

## 父子组件通信

### 父 => 子
```javascript
// 父组件定义数据
protected nickName: string = ''

<app-show-nick-name [userNk]="nickName"></app-show-nick-name>

// 子组件声明属性
@input()  // 此装饰器用来声明属性为输入型属性
userNk: string = ''

<p>{{ userNk }}</p>

```

### 子 => 父

+ 子组件通过触发特定的事件，传递给父组件，父组件提供事件处理的方法来接收数据

```javascript
// 子组件定义事件发射器
@Output()
protected handleUpdateNkName = new EventEmitter()

// 触发事件
this.handleUpdateNkName.emit({ // 发送数据
  val: this.modifyNkname 
})

// 父组件接收子组件的事件
app-edit-nick-name (handleUpdateNkName)="updateNkName($event)"></app-edit-nick-name>

// 接受数据
updateNkName(e: profile):void {
  // console.log(e)
  this.nickName = e.val
}
```
*($event) 是内置的模板变量，接受数据只能写成这个*

### 父组件 => 子组件简便方法

+ 使用 # 为组件声明识别标识符，类似于vue的 $refs
  ```javascript
   <div #blog class="blog"></div>
  
    @ViewChild('blog', { static: true }) 
    // static 元素是否是静态的 *ngIf/ngFor
    private blog: any
    @ViewChild('editNk', { static: true })
    private editNk: any
    @ViewChild('showNk', { static: true })
    private showNk: any
  
    // 访问
    ngOnInit(): void {
      console.log(this.blog)
      console.log(this.editNk)
      console.log(this.showNk)
    }
  ```
  
## 路由

### 基本使用

#### 定义‘路由词典’
```typescript
const routes: Routes = [
  // 空路由 component 匹配
  // { path: '', component: IndexComponent },
   // 空路由 redirectTo 匹配
  { path: '', pathMatch: "full", redirectTo: 'index' },
  // 页面路由
  { path: 'index', component: IndexComponent },
  { path: 'productDetail', component: ProductDetailComponent },
  // 有子路由，父组件需要在 declarations 中声明
  { 
    path: 'userCenter', 
    component: UserCenterComponent 
    // 定义子路由
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      { path: 'info', component: InfoComponent },
      { path: 'avatar', component: AvatarComponent, }
    ]
  },
  // 通配符, 匹配 404 页面
  { path: '**', component: NotFoundPageComponent }
]
```

#### 引入路由模块并注册

```js
import { RouterModule } from '@angular/router';

imports: [RouterModule.forRoot(routes)];
```

#### 挂载
+ 创建路由挂载点 => 路由出口

```html  
<router-outlet></router-outlet>
```

#### 注意事项

1. 路由词典中的根路由地址不能以 / 开头或结尾，中间可以包含 /
2. 路由词典匹配任意路径时应该写在最后，因为匹配路由时的顺序是从上到下的
3. 声明路由时应定义路由类型，否则 redirectTo 属性会有问题
 ``` routes: Routes[] ```
4. 定义子路由时，有子路由的模块需要在 app.module 中的 declarations 中声明, **并且在模板中使用 ```<router-outlet></router-outlet>```**
5. 如果在路由页面使用angular的语法，则必须在 declarations 中声明

### 路由跳转

#### 模板跳转

```html
<div routerLink="/productList">商品列表</div>
```
+ routerLink属性可以用于任意标签
+ 地址必须是绝对路径

#### js 跳转
```js
  // 声明依赖
  constructor(private router: Router) {
  }

  //  实现跳转
  protected switchPage() {
    this.router.navigateByUrl('/productList')
    // 携带参数跳转 
    this.router.navigate(url, {
      state: { custom: 'true' },
      queryParams: { path: url[0], isBoo: 'false' }
    } )
  }
```
+ Router 类是RouterModule提供的一个服务类，声明依赖即可使用


### 路由传参

1. query传参
```htm
<li routerLink="/productDetail" [queryParams]="{pid: 1}">商品1</li>
```

2. params 传参
```htm
<li routerLink="/productDetail/1">商品1</li>
// 动态传参
<li [routerLink]="['/productDetail', p.id]"></li>
```
+ 需要在路由词典中声明使用的参数
```js
{ path: 'productDetail/:pid', component: ProductDetailComponent },
```

3. 接收参数
```js
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // 接收 queryParams
    this.route.queryParams.subscribe(params => {
      this.serial = params['pid']
    })
    // 接收 params
    this.route.params.subscribe(params => {
      this.serial = params['pid']
    })
  }
```

### 路由守卫

#### 作用

任何用户在任何时候都可以导航到任何地方，但这是不对的
+ 该用户可能无权导航到目标组件
+ 用户需要先登录（认证）
+ 在显示目标组件之前，可能需要获取某些数据
+ 在离开组件前，可能需要先保存修改
+ 用户是否需要保存此次修改
+ 在路由配置中添加守卫，来处理这些场景 

#### 创建
+ 指令创建 ```ng g guard [name]```

```js
import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
// 依赖注入
@Injectable({
  providedIn: 'root'
})
export class GuardLogin implements CanActivate{
  private isLogin:boolean = true
  constructor() {
  }
  canActivate(): boolean {
    if (this.isLogin) {
      return true
    } else {
      window.alert('您当前还未登录')
      return false
    }
  }
}
```

#### 使用
+ 在路由词典中
```js
 {
    path: 'userCenter',
    component: UserCenterComponent,
    canActivate: [GuardLogin, GuardTime],
 }  
```
+ 声明的守卫会按照顺序进行条件判断，只有当所有条件都符合时才会进行页面的跳转
+ 守卫返回一个值，以控制路由器的行为
  - true 导航继续
  - false 导航终止，且用户停留在原地
  - UrlTree 取消当前的导航，并且开始导航到返回的这个 UrlTree


## 资源
+ awesome angular 
+ awesome vue
+ awesome react














# ts

### 访问修饰符

ts对属性和方法定义了三种访问修饰符

+ private 私有的，私有成员只能在类的内部使用
+ protected 受保护的，被保护的成员只能在本类及其子类中使用
+ public 公共的，可以在类及外部使用

*ps：一般情况下，class内属性不应该让外界访问，设为 priate；暴露出允许调用的方法，设为public*

### 访问修饰符特殊写法
``` javascript
class Student {

  constructor(private: name:string) {
    this.name = name
  }
}

// 等同于
class Student {
  private name:string
  constructor(name:string) {
    this.name = name
  }
}

```