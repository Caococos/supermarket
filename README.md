# supermarket

### 划分目录结构

* assets (资源)
  * css
  * font
  * img
* common (常量文件)
* components
  * common
  * content (业务相关)
* network
* router
* store
  * modules
  * actions.js
  * getters.js
  * index.js
  * mutations.js
  * mutations-types.js
* views
* App.vue
* main.js

### 引用css文件

* normalize.css
* base.css

### vue.config.js和.editorconfig

### 项目的模块划分：tabber->路由映射关系

### Home开发

* navbar的封装
* 网络数据的请求
* Swiper
* RecommendView

### FeatureView

* 独立组件封装FeatureView
  * div>a>img

### TabControl

* 独立组件的封装
  * props -> titles
  * div -> 根据titles 改变不同的Tab，然后遍历div -> span{{title}}
  * CSS相关样式
  * 选中哪个tab，哪个tab的文字颜色变色，下划线样式 border-bottom
    * 用current-Index保存当前的Tab

### Home商品数据的请求

#### 设计数据结构，用于保存数据

* 创建goods: {}数据结构保存数据

  * ```JavaScript
    goodsList: {
      'pop': {page: 0, list: []},
      'new': {page: 0, list: []},
      'sell': {page: 0, list: []},
    }
    ```

#### 发送数据请求

* 在home.js（axios）中封装getHomeGoods(type, page)
* 在created周期函数中发送网络请求
  * 分别调用new pop sell
* 根据type类型动态获取数据，page自动加1
* 获取到数据：res
  * this.goods[type].list.push(...res.data.list)

### 对商品数据进行展示

#### 封装GoodsList组件

* props: goods
* v-for goods -> GoodsListItem[30]
* GoodsListItem（组件） -> GoodsItem（数据）

#### 封装GoodsListItem组件

* 监听click事件，判断tab，传入pop new sell 字符串，通过覆盖展示不同tab的数据

* props：goodsItem
* goodsItem 取出数据，并且使用正确的div/span/img基本标签进行展示

* 对相关样式调整

### 对滚动进行重构：Better-Scroll

#### 在Vue项目中使用Better-Scroll

* 在Profile组件中进行了简单的演示
* 对Better-Scroll进行封装：Scroll.vue
* Home组件和Scroll组件之间进行通信
  * Home将probeType设置为3
  * Scroll需要通过$emit，实时将事件发送到Home

### 回到顶部BackTop

#### 对BackTop组件的封装

* img

#### 如何监听组件的点击

* 在Home直接监听back-top的点击，通过.native修饰符

* 回到顶部

  * scroll对象，封装方法scroll.scrollTo(x, y, time)

  * 通过ref拿到Scroll组件中的方法scrollTo

  * ```JavaScript
    this.$refs.scroll.scrollTo(0, 0)
    ```

#### BackTop组件的显示和隐藏

* isShowBackTop：false

* 监听滚动，拿到滚动的位置：

  * -position.y > 500 -> isShowBackTop：true

  * ```JavaScript
    this.isShowBackTop = (-position.y) > 500
    ```