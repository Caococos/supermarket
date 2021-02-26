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

### 解决首页中Better-Scroll可滚动区域的问题

* Better-Scroll在决定有多少区域可以滚动时，是根据scrollerHeight属性决定的。

  * scrollerHeight属性是根据放Better-Scroll的content中的子组件的高度决定
  * 但是首页中，刚开始在计算scrollerHeight属性时，是没有将图片计算在内的
  * 所以，计算出来的图片是错误的
  * 后来图片加载进来之后有了新的高度，但是scrollerHeight属性并没有更新，所以滚动出现了问题。

* 如何解决这个问题？

  * 监听每一张图片是否加载完成，只要有一张图片加载完成了，执行一次refresh()
  * 如何监听图片加载完成？
    * 原生的js监听图片：img.onload = function() {}
    * Vue中监听：@load = ‘方法’
  * 调用scroll的refresh()

* 如何将GoodsListItem组件中的事件传入到Home组件中？

  * 因为涉及到非父子组件之间的通信，所以这里选择了**事件总线**
    * bus -> 总线
    * Vue.prototype.$bus = new Vue()
    * this.\$bus.\$emit('事件名称', 参数)
    * this.\$bus.\$on('事件名称', 回调函数(参数))

* 问题一：refresh找不到的问题

  * 第一：在Scroll组件中，调用this.scroll的方法之前，判断this.scroll对象是否有值。
  * 第二：在mounted生命周期函数中使用this.$refs.scroll而不是created中。

* 问题二：对于refresh非常频繁的问题，需要进行防抖操作

  * 防抖debounce/节流throttle

  * 防抖函数起作用的过程：

    * 将refresh函数传入到debounce函数中，生成一个新的函数。

    * 之后在调用非常频繁的时候，就使用新生成的函数。

    * 而新生成的函数，并不会非常频繁的调用，如果下一次执行来的非常快，那么会将上一次的timer取消掉。

    * ```JavaScript
      debounce(func, delay) {
        let timer = null
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      }
      ```

### 上拉加载更多

* Scroll组件监听滚动是否到底。

  * ```JavaScript
    this.scroll = new BScroll(wrapper, {
      pullUpLoad: true
    })
    ```

* 将其发送到Home组件

  * ```JavaScript
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    ```

* 在Home组件中调用请求数据的方法

  * ```JavaScript
    loadMore() {
      this.HomeProducts(this.currentType)
    },
    ```

  * currentType为当前点击的tab

### tabControl的吸顶效果

#### 获取到tabControl的offsetTop

* 必须知道滚动到多少，开始有吸顶效果，这个时候就需要获取tabControl的offsetTop
* 但是，如果直接在mounted中获取tabControl的offsetTop的值是不正确的。
* 如何获取正确的值？
  * 监听HomeSwiper组件中的img加载完成。
  * 加载完成后，发出事件，在Home组件中获取正确的值
  * 补充：
    * 为了不让HomeSwiper多次发出事件。
    * 可以使用isLoad的变量进行状态的记录。
  * 注意：**这里不进行多次调用和debounce的区别。**

#### 监听滚动，动态的改变tabControl的样式

* 问题：动态的改变tabControl的样式时，会出现两个问题：
  * 问题一：下面的商品内容，会突然上移
  * 问题二：tabControl虽然设置了fixed，但是也随着Better-Scroll一起滚出去了。
* 其他方案来解决停留问题。
  * 在最上面，多复制了一份PlaceHoliderTabControl组件对象，利用它来实现停留效果。
  * 当用户滚动到一定位置时，PlaceHoliderTabControl显示出来。
  * 当用户滚动没有达到一定位置时，PlaceHoliderTabControl隐藏起来。

### 让Home保持原来的状态

#### 让Home不要随意销毁掉

* keep-alive包裹router-view

#### 让Home中的内容保持原来的状态

* 在deactivated函数中保存离开前的位置

  * ```JavaScript
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    }
    ```

* 在activated函数中将保存的位置调用在scroll的scrollTo方法中并刷新scrollHeight

  * ```JavaScript
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    }
    ```