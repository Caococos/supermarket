(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-265fe2e9"],{"0991":function(t,s,e){},1148:function(t,s,e){"use strict";var i=e("a691"),n=e("1d80");t.exports="".repeat||function(t){var s=String(n(this)),e="",a=i(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(s+=s))1&a&&(e+=s);return e}},"137b":function(t,s,e){},"408a":function(t,s,e){var i=e("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"6ab7":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"detail"}},[e("detail-navbar"),e("scroll",{ref:"scroll",staticClass:"content"},[e("detail-swiper",{attrs:{"top-images":t.topImages}}),e("detail-base-info",{attrs:{goods:t.goods}}),e("detail-shop-info",{attrs:{shop:t.shop}}),e("detail-goods-info",{attrs:{"detail-info":t.detailInfo},on:{imageLoad:t.imageLoad}}),e("detail-param-info",{attrs:{"param-info":t.paramInfo}})],1)],1)},n=[],a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("nav-bar",[e("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[e("span",{staticClass:"iconfont icon-arrowLeft"})]),e("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(s,i){return e("div",{staticClass:"title-item",class:{active:i===t.currentIndex},on:{click:function(s){return t.titleClick(i)}}},[t._v(" "+t._s(s)+" ")])})),0)])],1)},o=[],r=e("a7ac"),c={name:"DetailNavbar",components:{NavBar:r["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titleClick:function(t){this.currentIndex=t},backClick:function(){this.$router.back()}}},l=c,f=(e("74d9"),e("2877")),d=Object(f["a"])(l,a,o,!1,null,"6a7cb451",null),u=d.exports,p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("swiper",{staticClass:"detail-swiper"},t._l(t.topImages,(function(t){return e("swiper-item",[e("img",{attrs:{src:t,alt:""}})])})),1)},m=[],h=e("dc2c"),v={name:"DetailSwiper",components:{Swiper:h["a"],SwiperItem:h["b"]},props:{topImages:{type:Array,default:function(){return[]}}}},g=v,_=(e("e5e0"),Object(f["a"])(g,p,m,!1,null,"7fedf714",null)),b=_.exports,C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.goods).length?e("div",{staticClass:"base-info"},[e("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),e("div",{staticClass:"info-price"},[e("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),e("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),0!==t.goods.discount.length?e("span",{staticClass:"discount",style:{backgroundColor:t.goods.discountBgColor}},[t._v(" "+t._s(t.goods.discount))]):t._e()]),e("div",{staticClass:"info-other"},[e("span",[t._v(t._s(t.goods.columns[0]))]),e("span",[t._v(t._s(t.goods.columns[1]))]),e("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),e("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(s){return e("span",{key:s,staticClass:"info-service-item"},[e("img",{attrs:{src:t.goods.services[s-1].icon,alt:""}}),e("span",[t._v(t._s(t.goods.services[s-1].name))])])})),0)]):t._e()},I=[],w={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},k=w,x=(e("b013"),Object(f["a"])(k,C,I,!1,null,"28402ce5",null)),y=x.exports,j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-info"},[e("div",{staticClass:"shop-top"},[e("img",{attrs:{src:t.shop.logo,alt:""}}),e("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),e("div",{staticClass:"shop-middle"},[e("div",{staticClass:"shop-middle-item shop-middle-left"},[e("div",{staticClass:"info-sells"},[e("div",{staticClass:"sell-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),e("div",{staticClass:"sells-text"},[t._v("总销量")])]),e("div",{staticClass:"info-goods"},[e("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),e("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),e("div",{staticClass:"shop-middle-item shop-middle-right"},[e("table",t._l(t.shop.score,(function(s,i){return e("tr",{key:i},[e("td",[t._v(t._s(s.name))]),e("td",{staticClass:"score",class:{"score-better":s.isBetter}},[t._v(t._s(s.score))]),e("td",{staticClass:"score",class:{"score-better":s.isBetter}},[e("span",[t._v(" "+t._s(s.isBetter?"高":"低")+" ")])])])})),0)])]),t._m(0)])},O=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-bottom"},[e("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],D=(e("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),E=D,L=(e("c13c"),Object(f["a"])(E,j,O,!1,null,"575a6d81",null)),$=L.exports,P=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.detailInfo).length?e("div",{staticClass:"goods-info"},[e("div",{staticClass:"info-desc clear-fix"},[e("div",{staticClass:"start"}),e("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),e("div",{staticClass:"end"})]),e("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),e("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(s){return e("img",{key:s,attrs:{src:s},on:{load:t.imgLoad}})})),0)]):t._e()},S=[],F={name:"DetailGoodsInfo",props:{detailInfo:{type:Object,default:function(){}}},data:function(){return{counter:0,imagesLength:0}},methods:{imgLoad:function(){++this.counter===this.imagesLength&&this.$emit("imageLoad")}},watch:{detailInfo:function(){this.imagesLength=this.detailInfo.detailImage[0].list.length}}},B=F,N=(e("f1c0"),Object(f["a"])(B,P,S,!1,null,"978faf14",null)),z=N.exports,G=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.paramInfo).length?e("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(s,i){return e("table",{key:i,staticClass:"info-size"},t._l(s,(function(s,i){return e("tr",{key:i},t._l(s,(function(s,i){return e("td",{key:i},[t._v(t._s(s))])})),0)})),0)})),e("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(s,i){return e("tr",[e("td",{staticClass:"info-param-key"},[t._v(t._s(s.key))]),e("td",{staticClass:"param-value"},[t._v(t._s(s.value))])])})),0),0!==t.paramInfo.image.length?e("div",{staticClass:"info-img"},[e("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},T=[],J={name:"DetailParamInfo",props:{paramInfo:{type:Object,default:function(){return{}}}}},R=J,A=(e("b713"),Object(f["a"])(R,G,T,!1,null,"19c555df",null)),M=A.exports,W=e("5d17");e("b0c0");function q(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}var H=e("1bab");function K(t){return Object(H["a"])({url:"/detail",params:{iid:t}})}var Q=function t(s,e,i){q(this,t),this.title=s.title,this.desc=s.desc,this.newPrice=s.price,this.oldPrice=s.oldPrice,this.discountBgColor=s.discountBgColor,this.discount=s.discountDesc,this.columns=e,this.services=i,this.realPrice=s.lowNowPrice},U=function t(s){q(this,t),this.logo=s.shopLogo,this.name=s.name,this.fans=s.cFans,this.sells=s.cSells,this.score=s.score,this.goodsCount=s.cGoods},V=function t(s,e){q(this,t),this.image=s.images?s.images[0]:"",this.infos=s.set,this.sizes=e.tables},X={name:"Detail",components:{DetailNavbar:u,DetailSwiper:b,DetailBaseInfo:y,DetailShopInfo:$,DetailGoodsInfo:z,Scroll:W["a"],DetailParamInfo:M},data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:{},goodsList:[],themeTops:[],currentIndex:0}},created:function(){var t=this;this.iid=this.$route.params.iid,K(this.iid).then((function(s){var e=s.result;console.log(s),t.topImages=e.itemInfo.topImages,t.goods=new Q(e.itemInfo,e.columns,e.shopInfo.services),t.shop=new U(e.shopInfo),t.detailInfo=e.detailInfo,t.paramInfo=new V(e.itemParams.info,e.itemParams.rule)}))},methods:{imageLoad:function(){this.$refs.scroll.refresh()}}},Y=X,Z=(e("bfe3"),Object(f["a"])(Y,i,n,!1,null,"370f3944",null));s["default"]=Z.exports},"74d9":function(t,s,e){"use strict";e("b4b8")},9025:function(t,s,e){},b013:function(t,s,e){"use strict";e("d40d")},b4b8:function(t,s,e){},b680:function(t,s,e){"use strict";var i=e("23e7"),n=e("a691"),a=e("408a"),o=e("1148"),r=e("d039"),c=1..toFixed,l=Math.floor,f=function(t,s,e){return 0===s?e:s%2===1?f(t,s-1,e*t):f(t*t,s/2,e)},d=function(t){var s=0,e=t;while(e>=4096)s+=12,e/=4096;while(e>=2)s+=1,e/=2;return s},u=function(t,s,e){var i=-1,n=e;while(++i<6)n+=s*t[i],t[i]=n%1e7,n=l(n/1e7)},p=function(t,s){var e=6,i=0;while(--e>=0)i+=t[e],t[e]=l(i/s),i=i%s*1e7},m=function(t){var s=6,e="";while(--s>=0)if(""!==e||0===s||0!==t[s]){var i=String(t[s]);e=""===e?i:e+o.call("0",7-i.length)+i}return e},h=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));i({target:"Number",proto:!0,forced:h},{toFixed:function(t){var s,e,i,r,c=a(this),l=n(t),h=[0,0,0,0,0,0],v="",g="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(s=d(c*f(2,69,1))-69,e=s<0?c*f(2,-s,1):c/f(2,s,1),e*=4503599627370496,s=52-s,s>0){u(h,0,e),i=l;while(i>=7)u(h,1e7,0),i-=7;u(h,f(10,i,1),0),i=s-1;while(i>=23)p(h,1<<23),i-=23;p(h,1<<i),u(h,1,1),p(h,2),g=m(h)}else u(h,0,e),u(h,1<<-s,0),g=m(h)+o.call("0",l);return l>0?(r=g.length,g=v+(r<=l?"0."+o.call("0",l-r)+g:g.slice(0,r-l)+"."+g.slice(r-l))):g=v+g,g}})},b713:function(t,s,e){"use strict";e("f60d")},bfe3:function(t,s,e){"use strict";e("0991")},c13c:function(t,s,e){"use strict";e("137b")},d40d:function(t,s,e){},e11a:function(t,s,e){},e5e0:function(t,s,e){"use strict";e("e11a")},f1c0:function(t,s,e){"use strict";e("9025")},f60d:function(t,s,e){}}]);
//# sourceMappingURL=chunk-265fe2e9.cdd25b8c.js.map