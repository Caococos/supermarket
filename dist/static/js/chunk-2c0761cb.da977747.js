(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c0761cb"],{"0639":function(t,e,r){"use strict";r("9dce")},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),i=r("7dd0"),a="String Iterator",s=o.set,c=o.getterFor(a);i(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),s=r("50c4"),c=r("8418"),l=r("35a1");t.exports=function(t){var e,r,u,d,f,m,b=o(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,y=l(b),w=0;if(g&&(v=n(v,h>2?arguments[2]:void 0,2)),void 0==y||p==Array&&a(y))for(e=s(b.length),r=new p(e);e>w;w++)m=g?v(b[w],w):b[w],c(r,w,m);else for(d=y.call(b),f=d.next,r=new p;!(u=f.call(d)).done;w++)m=g?i(d,v,[u.value,w],!0):u.value,c(r,w,m);return r.length=w,r}},"5cbe":function(t,e,r){t.exports=r.p+"static/img/recommend_bg.794b6628.jpg"},"7de8":function(t,e,r){"use strict";r("e60e")},9119:function(t,e,r){"use strict";r("b1c5")},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(a){throw o(t),a}}},"9dce":function(t,e,r){},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},b1c5:function(t,e,r){},b3d7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("nav-bar",{staticClass:"home-nav"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("浩旭的衣柜")])]),r("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControl1",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[r("home-swiper",{attrs:{banners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),r("recommend-view",{attrs:{recommends:t.recommends}}),r("feature-view"),r("tab-control",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("goods-list",{attrs:{goods:t.showGoods}})],1),r("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return i(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||s(t)||c(t)||l()}var d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("swiper",t._l(t.banners,(function(e,n){return r("swiper-item",{key:n},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""},on:{load:t.imageLoad}})])])})),1)},f=[],m=r("dc2c"),b={name:"HomeSwiper",components:{Swiper:m["a"],SwiperItem:m["b"]},data:function(){return{isLoad:!1}},props:{banners:{type:Array,default:function(){return[]}}},methods:{imageLoad:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},p=b,h=r("2877"),v=Object(h["a"])(p,d,f,!1,null,"e3830ac0",null),g=v.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend"},t._l(t.recommends,(function(e){return r("div",{staticClass:"recommend-item"},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""}}),r("div",[t._v(t._s(e.title))])])])})),0)},w=[],S={name:"RecommendView",props:{recommends:{type:Array,default:function(){return[]}}}},k=S,x=(r("0639"),Object(h["a"])(k,y,w,!1,null,"83fc2074",null)),C=x.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature"},[n("a",{attrs:{href:"https://m.mogu.com/"}},[n("img",{attrs:{src:r("5cbe"),alt:""}})])])}],A={name:"FeatureView"},L=A,T=(r("7de8"),Object(h["a"])(L,$,_,!1,null,"12438716",null)),I=T.exports,O=r("a7ac"),j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,n){return r("div",{class:{active:n===t.currentIndex},on:{click:function(e){return t.clickItem(n)}}},[r("span",[t._v(t._s(e))])])})),0)},H=[],E={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{clickItem:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},F=E,M=(r("9119"),Object(h["a"])(F,j,H,!1,null,"d6fdcfe8",null)),P=M.exports,B=r("6d71"),V=r("5d17"),Y=r("1bab"),G="banner",N="recommend";function U(){return Object(Y["a"])({url:"/home/multidata"})}function D(t,e){return Object(Y["a"])({url:"/home/data",params:{type:t,page:e}})}var J=r("b95e"),R=r("aff8"),q=(r("90b9"),{name:"Home",components:{HomeSwiper:g,RecommendView:C,FeatureView:I,NavBar:O["a"],TabControl:P,GoodsList:B["a"],Scroll:V["a"]},data:function(){return{banners:[],recommends:[],goodsList:{pop:{page:1,list:[]},new:{page:1,list:[]},sell:{page:1,list:[]}},currentType:J["c"],tabOffControl:0,isTabFixed:!1,saveY:0}},created:function(){this.getMultiData(),this.getHomeProducts(J["c"]),this.getHomeProducts(J["b"]),this.getHomeProducts(J["d"])},mixins:[R["b"],R["a"]],activated:function(){this.$refs.scroll.scrollTo(0,this.saveY,0),this.$refs.scroll.refresh(),this.$bus.$on("itemImagesLoad",this.itemListener)},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("itemImagesLoad",this.itemListener)},updated:function(){},computed:{showGoods:function(){return this.goodsList[this.currentType].list}},methods:{tabClick:function(t){switch(t){case 0:this.currentType=J["c"];break;case 1:this.currentType=J["b"];break;case 2:this.currentType=J["d"];break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},contentScroll:function(t){this.isShowBackTop=-t.y>J["a"],this.isTabFixed=-t.y>this.tabOffControl},loadMore:function(){this.getHomeProducts(this.currentType)},swiperImageLoad:function(){this.tabOffControl=this.$refs.tabControl2.$el.offsetTop},getMultiData:function(){var t=this;U().then((function(e){t.banners=e.data[G].list,t.recommends=e.data[N].list}))},getHomeProducts:function(t){var e=this;D(t,this.goodsList[t].page).then((function(r){var n,o=r.data.list;(n=e.goodsList[t].list).push.apply(n,u(o)),e.goodsList[t].page+=1,e.$refs.scroll.finishPullUp()}))}}}),z=q,K=(r("ecbb"),Object(h["a"])(z,n,o,!1,null,"0a9152b2",null));e["default"]=K.exports},b4c1:function(t,e,r){},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("e260"),a=r("9112"),s=r("b622"),c=s("iterator"),l=s("toStringTag"),u=i.values;for(var d in o){var f=n[d],m=f&&f.prototype;if(m){if(m[c]!==u)try{a(m,c,u)}catch(p){m[c]=u}if(m[l]||a(m,l,d),o[d])for(var b in i)if(m[b]!==i[b])try{a(m,b,i[b])}catch(p){m[b]=i[b]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,l=r("e893"),u=i.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var m=f.prototype=u.prototype;m.constructor=f;var b=m.toString,p="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=b.call(t);if(a(d,t))return"";var r=p?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},e60e:function(t,e,r){},ecbb:function(t,e,r){"use strict";r("b4c1")},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),i=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("b622"),d=r("1dde"),f=d("slice"),m=u("species"),b=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var r,n,u,d=c(this),f=s(d.length),h=a(t,f),v=a(void 0===e?f:e,f);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(d,h,v);for(n=new(void 0===r?Array:r)(p(v-h,0)),u=0;h<v;h++,u++)h in d&&l(n,u,d[h]);return n.length=u,n}})}}]);
//# sourceMappingURL=chunk-2c0761cb.da977747.js.map