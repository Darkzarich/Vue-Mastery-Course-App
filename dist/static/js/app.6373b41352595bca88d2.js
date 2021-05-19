webpackJsonp([0],{"4/FA":function(e,t){},"8Xko":function(e,t){},Mrfq:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a={name:"InfoTabs",data:function(){return{tabs:["Shipping","Details"],selectedTab:"Shipping"}},props:{shipping:{required:!0},details:{type:Array,required:!0}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",e._l(e.tabs,function(t){return n("span",{key:t,staticClass:"tabs",class:{activeTab:e.selectedTab===t},on:{click:function(n){e.selectedTab=t}}},[e._v(e._s(t))])}),0),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Shipping"===e.selectedTab,expression:"selectedTab === 'Shipping'"}]},[n("p",[e._v(e._s(e.shipping))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Details"===e.selectedTab,expression:"selectedTab === 'Details'"}]},[n("ul",e._l(e.details,function(t,i){return n("li",{key:i},[e._v(e._s(t))])}),0)])])},staticRenderFns:[]};var s=n("VU/8")(a,r,!1,function(e){n("poi/")},"data-v-249b3bae",null).exports,o={name:"ProductReview",data:function(){return{name:null,review:null,rating:null,errors:[]}},methods:{onSubmit:function(){if(this.name&&this.review&&this.rating){var e={name:this.name,review:this.review,rating:this.rating};window.eventBus.$emit("review-submitted",e),this.name=null,this.review=null,this.rating=null}else this.name||this.errors.push("Name required."),this.review||this.errors.push("Review required."),this.rating||this.errors.push("Rating required.")}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"review-form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("p",[n("label",{attrs:{for:"name"}},[e._v("Name:")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("p",[n("label",{attrs:{for:"review"}},[e._v("Review:")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review,expression:"review"}],attrs:{id:"review"},domProps:{value:e.review},on:{input:function(t){t.target.composing||(e.review=t.target.value)}}})]),e._v(" "),n("p",[n("label",{attrs:{for:"rating"}},[e._v("Rating:")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model.number",value:e.rating,expression:"rating",modifiers:{number:!0}}],attrs:{id:"rating"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(t){var n="_value"in t?t._value:t.value;return e._n(n)});e.rating=t.target.multiple?n:n[0]}}},[n("option",[e._v("5")]),e._v(" "),n("option",[e._v("4")]),e._v(" "),n("option",[e._v("3")]),e._v(" "),n("option",[e._v("2")]),e._v(" "),n("option",[e._v("1")])])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("input",{attrs:{type:"submit",value:"Submit"}})])}]};var v={name:"ProductTabs",components:{ProductReview:n("VU/8")(o,u,!1,function(e){n("8Xko")},"data-v-2877cd6a",null).exports},data:function(){return{tabs:["Reviews","Make a Review"],selectedTab:"Reviews"}},props:{reviews:{type:Array,required:!1}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",e._l(e.tabs,function(t){return n("span",{key:t,staticClass:"tabs",class:{activeTab:e.selectedTab===t},on:{click:function(n){e.selectedTab=t}}},[e._v(e._s(t))])}),0),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Reviews"===e.selectedTab,expression:"selectedTab === 'Reviews'"}]},[e.reviews.length?n("ul",e._l(e.reviews,function(t,i){return n("li",{key:i},[n("p",[e._v(e._s(t.name))]),e._v(" "),n("p",[e._v("Rating:"+e._s(t.rating))]),e._v(" "),n("p",[e._v(e._s(t.review))])])}),0):n("p",[e._v("There are no reviews yet.")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"Make a Review"===e.selectedTab,expression:"selectedTab === 'Make a Review'"}]},[n("product-review")],1)])},staticRenderFns:[]};var l={name:"Product",components:{InfoTabs:s,ProductTabs:n("VU/8")(v,c,!1,function(e){n("wuvb")},"data-v-4fce4b1a",null).exports},props:{premium:{type:Boolean,required:!0}},data:function(){return{product:"Socks",brand:"Vue Mastery",selectedVariant:0,details:["80% cotton","20% polyester","Gender-neutral"],variants:[{variantId:2234,variantColor:"green",variantImage:"https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0",variantQuantity:10},{variantId:2235,variantColor:"blue",variantImage:"https://dl.dropboxusercontent.com/s/t32hpz32y7snfna/vmSocks-blue-onWhite.jpg?dl=0",variantQuantity:0}],reviews:[]}},methods:{addToCart:function(){this.$emit("add-to-cart",this.variants[this.selectedVariant].variantId)},updateProduct:function(e){this.selectedVariant=e}},computed:{title:function(){return this.brand+" "+this.product},image:function(){return this.variants[this.selectedVariant].variantImage},inStock:function(){return this.variants[this.selectedVariant].variantQuantity},shipping:function(){return this.premium?"Free":2.99}},mounted:function(){var e=this;window.eventBus.$on("review-submitted",function(t){e.reviews.push(t)})}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"product"},[n("div",{staticClass:"product-image"},[n("img",{attrs:{src:e.image}})]),e._v(" "),n("div",{staticClass:"product-info"},[n("h1",[e._v(e._s(e.product))]),e._v(" "),e.inStock?n("p",[e._v("In Stock")]):n("p",[e._v("Out of Stock")]),e._v(" "),n("info-tabs",{attrs:{shipping:e.shipping,details:e.details}}),e._v(" "),e._l(e.variants,function(t,i){return n("div",{key:t.variantId,staticClass:"color-box",style:{backgroundColor:t.variantColor},on:{mouseover:function(t){e.updateProduct(i)}}})}),e._v(" "),n("button",{class:{disabledButton:!e.inStock},attrs:{disabled:!e.inStock},on:{click:e.addToCart}},[e._v("\n      Add to cart\n    ")])],2),e._v(" "),n("product-tabs",{attrs:{reviews:e.reviews}})],1)},staticRenderFns:[]};var p={name:"App",components:{Product:n("VU/8")(l,d,!1,function(e){n("Mrfq")},"data-v-2748c050",null).exports},data:function(){return{premium:!0,cart:[]}},methods:{updateCart:function(e){this.cart.push(e)}}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"nav-bar"}),this._v(" "),t("div",{staticClass:"cart"},[t("p",[this._v("Cart("+this._s(this.cart.length)+")")])]),this._v(" "),t("product",{attrs:{premium:this.premium},on:{"add-to-cart":this.updateCart}})],1)},staticRenderFns:[]};var h=n("VU/8")(p,m,!1,function(e){n("4/FA")},null,null).exports;i.a.config.productionTip=!1,window.eventBus=new i.a,new i.a({el:"#app",components:{App:h},template:"<App/>"})},"poi/":function(e,t){},wuvb:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6373b41352595bca88d2.js.map