(this["webpackJsonpavaliacao-eduardo-gb"]=this["webpackJsonpavaliacao-eduardo-gb"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),u=n(12),i=n(62),l=n(127),s=n(128),f=n(70),g=Object(f.a)({palette:{common:{black:"#000",white:"#fff"},background:{paper:"#fff",default:"rgba(0, 0, 0, 1)"},primary:{light:"rgba(252, 163, 17, 0.4)",main:"rgba(252, 163, 17, 1)",dark:"rgba(154, 99, 9, 1)",contrastText:"#fff"},secondary:{light:"rgba(20, 33, 61, 0.54)",main:"rgba(20, 33, 61, 1)",dark:"rgba(12, 26, 51, 1)",contrastText:"#fff"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(255, 255, 255, 1)",secondary:"rgba(155, 155, 155, 1)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"}}}),d=n(28),p=n(39),E=n(32),b=n.n(E),m=n(43),v=n(44),y=n.n(v),h="https://api.chucknorris.io/jokes",k=function(e){return function(){var t=Object(m.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get("".concat(h,"/random?category=").concat(e));case 3:a=t.sent,n(O(a.data)),n(T()),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(0),console.error(t.t0),new Error("Error on trying to get a joke");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return{type:"SET_JOKE",payload:e}},j=function(e){return{type:"SET_CATEGORIES",payload:e}},T=function(){return{type:"SET_FALSE",payload:""}},w=n(21),_=n(22);function x(){var e=Object(w.a)(["\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\n"]);return x=function(){return e},e}var S=_.a.div(x()),J=n(122),L=n(130),C=n(123);var R=Object(u.c)((function(e){return{CategoriesList:e.chuck.categories}}),(function(e){return{getCategories:function(){return e(function(){var e=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(h,"/categories"));case 3:n=e.sent,t(j(n.data)),t(T()),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),console.error(e.t0),new Error("Error on trying to get all categories");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())},getJoke:function(t){return e(k(t))},setLoadingOn:function(){return e({type:"SET_TRUE",payload:""})}}}))((function(e){return Object(a.useEffect)((function(){e.getCategories()}),[e]),r.a.createElement(S,null," ",e.CategoriesList&&e.CategoriesList.map((function(t,n){return r.a.createElement(J.a,{component:"nav",key:n,onClick:function(){!function(t){e.setLoadingOn(),e.getJoke(t)}(t)}},r.a.createElement(L.a,{button:!0},r.a.createElement(C.a,{primary:t.charAt(0).toUpperCase()+t.slice(1)})))}))," ")})),U=n(41),A=n(69),I=n.n(A);function N(){var e=Object(w.a)(["\n    background: rgba(0,0,0,.3);\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: black;\n    width: 100vw;\n    height: 100vh;\n\n"]);return N=function(){return e},e}var D=_.a.div(N(),I.a),F=n(131),X=n(124),z=n(125);function G(){var e=Object(w.a)(["\ndisplay: flex;\njustify-content: center; \nmargin: 3%;\ntext-align: justify;\n"]);return G=function(){return e},e}function K(){var e=Object(w.a)(["\ndisplay: flex;\njustify-content: center; \nmargin: 1%;\nmargin-top: 5%;\n"]);return K=function(){return e},e}function V(){var e=Object(w.a)(["\nmargin: 10%;\n"]);return V=function(){return e},e}var B=_.a.div(V()),q=_.a.div(K()),H=_.a.div(G());var M=Object(u.c)((function(e){return{}}),(function(e){return{getJoke:function(t){return e(k(t))},setLoadingOn:function(){return e({type:"SET_TRUE",payload:""})}}}))((function(e){return r.a.createElement(B,null,r.a.createElement(F.a,null,r.a.createElement(X.a,null,r.a.createElement(U.a,{variant:"body1",color:"primary"},r.a.createElement("b",null,e.category.charAt(0).toUpperCase()+e.category.slice(1)),":")),r.a.createElement(H,null,r.a.createElement(U.a,{variant:"h5",color:"secondary"},e.joke," ")),r.a.createElement(q,null,r.a.createElement(z.a,{variant:"contained",color:"secondary",onClick:function(){var t;t=e.category,e.setLoadingOn(),e.getJoke(t)}},"hahaha! Tell me another one, plz!"))))})),P=n(129),Q=n(126);var W=Object(u.c)((function(e){return{LoadState:e.loading.status}}),(function(e){return{}}))((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{style:{zIndex:10},open:e.LoadState},r.a.createElement(Q.a,{color:"primary"})))}));var Y=Object(u.c)((function(e){return{Joke:e.chuck.joke}}),(function(e){return{}}))((function(e){return r.a.createElement(D,null,r.a.createElement(W,null),r.a.createElement(U.a,{variant:"h3",align:"center"},"Chuck Norris Jokes/Facts"),r.a.createElement(R,null),e.Joke&&r.a.createElement(M,{category:e.Joke.categories[0],joke:e.Joke.value,link:e.Joke.url}))})),Z="/";var $,ee=function(e){return r.a.createElement(d.a,{history:e.history},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:Z,component:Y})))},te=n(17),ne=n(20),ae=n(33),re={categories:null,joke:null},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORIES":return Object(ae.a)(Object(ae.a)({},e),{},{categories:t.payload});case"SET_JOKE":return Object(ae.a)(Object(ae.a)({},e),{},{joke:t.payload});default:return e}},oe={status:!0},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FALSE":return{status:!1};case"SET_TRUE":return{status:!0};default:return e}},ie=n(60),le=Object(te.a)(),se=[Object(ne.a)(Object(ie.a)(le),i.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}],fe=Object(ne.e)(($=le,Object(ne.c)({router:Object(d.b)($),chuck:ce,loading:ue})),ne.d.apply(void 0,se)),ge=function(){return r.a.createElement(u.a,{store:fe},r.a.createElement(l.a,{theme:g},r.a.createElement(s.a,null),r.a.createElement(ee,{history:le})))},de=document.getElementById("root");o.a.render(r.a.createElement(ge,null),de)},69:function(e,t,n){e.exports=n.p+"static/media/chuckbg2.2f2eadeb.png"},75:function(e,t,n){e.exports=n(102)}},[[75,1,2]]]);
//# sourceMappingURL=main.a458072c.chunk.js.map