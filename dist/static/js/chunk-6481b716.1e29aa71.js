(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6481b716"],{1148:function(t,e,s){"use strict";var i=s("a691"),n=s("1d80");t.exports="".repeat||function(t){var e=String(n(this)),s="",o=i(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(s+=e);return s}},"137b":function(t,e,s){},"354c":function(t,e,s){"use strict";s("dec2")},"3c3e":function(t,e,s){},"408a":function(t,e,s){var i=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"40c5":function(t,e,s){},5879:function(t,e,s){"use strict";s("d9e0")},"5eac":function(t,e,s){"use strict";s("40c5")},"6ab7":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail"}},[s("detail-navbar",{ref:"nav",on:{titleClick:t.titleClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[s("detail-swiper",{attrs:{"top-images":t.topImages}}),s("detail-base-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-goods-info",{attrs:{"detail-info":t.detailInfo},on:{imageLoad:t.imageLoad}}),s("detail-param-info",{ref:"paramInfo",attrs:{"param-info":t.paramInfo}}),s("detail-comment-info",{ref:"commentInfo",attrs:{"comment-info":t.commentInfo}}),s("goods-list",{ref:"recommendInfo",attrs:{goods:t.goodsList}})],1),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}}),s("detail-bottom-bar")],1)},n=[],o=(s("a9e3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav-bar",[s("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[s("span",{staticClass:"iconfont icon-arrowLeft"})]),s("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,i){return s("div",{staticClass:"title-item",class:{active:i===t.currentIndex},on:{click:function(e){return t.titleClick(i)}}},[t._v(" "+t._s(e)+" ")])})),0)])],1)}),a=[],c=s("a7ac"),r={name:"DetailNavbar",components:{NavBar:c["a"]},props:{newIndex:{type:Number,default:0}},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titleClick:function(t){this.currentIndex=t,this.$emit("titleClick",t)},backClick:function(){this.$router.back()}}},l=r,f=(s("5eac"),s("2877")),d=Object(f["a"])(l,o,a,!1,null,"65573730",null),u=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"detail-swiper"},t._l(t.topImages,(function(t){return s("swiper-item",[s("img",{attrs:{src:t,alt:""}})])})),1)},p=[],h=s("dc2c"),v={name:"DetailSwiper",components:{Swiper:h["a"],SwiperItem:h["b"]},props:{topImages:{type:Array,default:function(){return[]}}}},g=v,_=(s("e5e0"),Object(f["a"])(g,m,p,!1,null,"7fedf714",null)),C=_.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",{staticClass:"base-info"},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),0!==t.goods.discount.length?s("span",{staticClass:"discount",style:{backgroundColor:t.goods.discountBgColor}},[t._v(" "+t._s(t.goods.discount))]):t._e()]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[t.goods.services[e-1].icon?s("img",{attrs:{src:t.goods.services[e-1].icon,alt:""}}):t._e(),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},I=[],w={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},k=w,y=(s("5879"),Object(f["a"])(k,b,I,!1,null,"1f97b952",null)),x=y.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shop.logo,alt:""}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sell-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shop.score,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[s("span",[t._v(" "+t._s(e.isBetter?"高":"低")+" ")])])])})),0)])]),t._m(0)])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],O=(s("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),j=O,D=(s("c13c"),Object(f["a"])(j,$,T,!1,null,"575a6d81",null)),L=D.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc clear-fix"},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),s("div",{staticClass:"end"})]),s("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),s("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(e){return s("img",{key:e,attrs:{src:e},on:{load:t.imgLoad}})})),0)]):t._e()},B=[],S={name:"DetailGoodsInfo",props:{detailInfo:{type:Object,default:function(){}}},data:function(){return{counter:0,imagesLength:0}},methods:{imgLoad:function(){++this.counter===this.imagesLength&&this.$emit("imageLoad")}},watch:{detailInfo:function(){this.imagesLength=this.detailInfo.detailImage[0].list.length}}},N=S,P=(s("f1c0"),Object(f["a"])(N,E,B,!1,null,"978faf14",null)),F=P.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,i){return s("table",{key:i,staticClass:"info-size"},t._l(e,(function(e,i){return s("tr",{key:i},t._l(e,(function(e,i){return s("td",{key:i},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,i){return s("tr",[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},M=[],z={name:"DetailParamInfo",props:{paramInfo:{type:Object,default:function(){return{}}}}},A=z,R=(s("b713"),Object(f["a"])(A,G,M,!1,null,"19c555df",null)),Y=R.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{key:e,attrs:{src:t}})})),0)])]):t._e()},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v(" 更多 "),s("i",{staticClass:"arrow-right"})])])}],V=s("90b9"),W={name:"DetailCommentInfo",props:{commentInfo:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(V["b"])(e,"yyyy-MM-dd")}}},X=W,q=(s("e6ed"),Object(f["a"])(X,J,U,!1,null,"b2003010",null)),H=q.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("span",{staticClass:"iconfont icon-wang_light"}),s("div",{staticClass:"text"},[t._v("客服")])]),s("div",[s("span",{staticClass:"iconfont icon-shop"}),s("div",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("span",{staticClass:"iconfont icon-favor"}),s("div",{staticClass:"text"},[t._v("收藏")])])])}],Z={name:"DetailBottomBar",methods:{addToCart:function(){this.$emit("addToCart")}}},tt=Z,et=(s("d526"),Object(f["a"])(tt,K,Q,!1,null,"1dd95019",null)),st=et.exports,it=s("5d17"),nt=s("6d71");s("b0c0");function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var at=s("1bab");function ct(t){return Object(at["a"])({url:"/detail",params:{iid:t}})}function rt(){return Object(at["a"])({url:"/recommend"})}var lt=function t(e,s,i){ot(this,t),this.title=e.title,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discountBgColor=e.discountBgColor,this.discount=e.discountDesc,this.columns=s,this.services=i,this.realPrice=e.lowNowPrice},ft=function t(e){ot(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},dt=function t(e,s){ot(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},ut=s("aff8"),mt=s("b95e"),pt={name:"Detail",components:{DetailNavbar:u,DetailSwiper:C,DetailBaseInfo:x,DetailShopInfo:L,DetailGoodsInfo:F,Scroll:it["a"],DetailParamInfo:Y,DetailCommentInfo:H,GoodsList:nt["a"],DetailBottomBar:st},data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:{},goodsList:[],themeTops:[0],currentIndex:0,getThemeTopY:null}},created:function(){var t=this;this.iid=this.$route.params.iid,ct(this.iid).then((function(e){var s=e.result;console.log(e),t.topImages=s.itemInfo.topImages,t.goods=new lt(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new ft(s.shopInfo),t.detailInfo=s.detailInfo,t.paramInfo=new dt(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),rt().then((function(e){t.goodsList=e.data.list})),this.getThemeTopY=Object(V["a"])((function(){t.themeTops.push(t.$refs.paramInfo.$el.offsetTop),t.$refs.commentInfo.$el.offsetTop?t.themeTops.push(t.$refs.commentInfo.$el.offsetTop):t.themeTops.push(t.$refs.recommendInfo.$el.offsetTop),t.themeTops.push(t.$refs.recommendInfo.$el.offsetTop),t.themeTops.push(Number.MAX_VALUE),console.log("标题位置获取完成")}),100)},mixins:[ut["b"],ut["a"]],destroyed:function(){this.$bus.$off("itemImagesLoad",this.itemListener)},methods:{imageLoad:function(){this.$refs.scroll.refresh(),this.getThemeTopY()},titleClick:function(t){this.$refs.scroll.scrollTo(0,-this.themeTops[t],100)},contentScroll:function(t){for(var e=-t.y,s=this.themeTops.length,i=0;i<s-1;i++)this.currentIndex!==i&&e>=this.themeTops[i]&&e<this.themeTops[i+1]&&(this.currentIndex=i,this.$refs.nav.currentIndex=i);this.isShowBackTop=e>mt["a"]}}},ht=pt,vt=(s("354c"),Object(f["a"])(ht,i,n,!1,null,"78a7cf5e",null));e["default"]=vt.exports},9025:function(t,e,s){},b680:function(t,e,s){"use strict";var i=s("23e7"),n=s("a691"),o=s("408a"),a=s("1148"),c=s("d039"),r=1..toFixed,l=Math.floor,f=function(t,e,s){return 0===e?s:e%2===1?f(t,e-1,s*t):f(t*t,e/2,s)},d=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},u=function(t,e,s){var i=-1,n=s;while(++i<6)n+=e*t[i],t[i]=n%1e7,n=l(n/1e7)},m=function(t,e){var s=6,i=0;while(--s>=0)i+=t[s],t[s]=l(i/e),i=i%e*1e7},p=function(t){var e=6,s="";while(--e>=0)if(""!==s||0===e||0!==t[e]){var i=String(t[e]);s=""===s?i:s+a.call("0",7-i.length)+i}return s},h=r&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){r.call({})}));i({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,s,i,c,r=o(this),l=n(t),h=[0,0,0,0,0,0],v="",g="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return String(r);if(r<0&&(v="-",r=-r),r>1e-21)if(e=d(r*f(2,69,1))-69,s=e<0?r*f(2,-e,1):r/f(2,e,1),s*=4503599627370496,e=52-e,e>0){u(h,0,s),i=l;while(i>=7)u(h,1e7,0),i-=7;u(h,f(10,i,1),0),i=e-1;while(i>=23)m(h,1<<23),i-=23;m(h,1<<i),u(h,1,1),m(h,2),g=p(h)}else u(h,0,s),u(h,1<<-e,0),g=p(h)+a.call("0",l);return l>0?(c=g.length,g=v+(c<=l?"0."+a.call("0",l-c)+g:g.slice(0,c-l)+"."+g.slice(c-l))):g=v+g,g}})},b713:function(t,e,s){"use strict";s("f60d")},c13c:function(t,e,s){"use strict";s("137b")},d526:function(t,e,s){"use strict";s("f470")},d9e0:function(t,e,s){},dec2:function(t,e,s){},e11a:function(t,e,s){},e5e0:function(t,e,s){"use strict";s("e11a")},e6ed:function(t,e,s){"use strict";s("3c3e")},f1c0:function(t,e,s){"use strict";s("9025")},f470:function(t,e,s){},f60d:function(t,e,s){}}]);
//# sourceMappingURL=chunk-6481b716.1e29aa71.js.map