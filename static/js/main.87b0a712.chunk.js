(this["webpackJsonpblazebase-realworld"]=this["webpackJsonpblazebase-realworld"]||[]).push([[0],{58:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(48),c=n.n(r),a=(n(58),n(12)),i=n(45),s=n(7),o=n(13),u=n(17),l=n(0),d=n.n(l),j=n(1),b=n(8),m=n(19),f=n(5),O=n(68),h=n(49),p=n(15),g=n(27),x=Object(h.a)({apiKey:"AIzaSyDZtMhc933h53_fbJFmyM76Mh6aRreHZE8",authDomain:"compose-run.firebaseapp.com",projectId:"compose-run",storageBucket:"compose-run.appspot.com",messagingSenderId:"685832812042",appId:"1:685832812042:web:9c1ff1eca82128832791f3",measurementId:"G-ZX4ZC2215P"}),v=Object(p.f)(x,{ignoreUndefinedProperties:!0}),N=Object(g.b)(x),y=function(e,t){var n=Object(s.useReducer)(e,t),r=Object(b.a)(n,2),c=r[0],a=r[1],i=Object(s.useRef)();return Object(s.useEffect)((function(){return i.current=!0,function(){i.current=!1}}),[]),[c,Object(s.useCallback)((function(e){i.current&&a(e)}),[a])]};function w(e){return e&&"[object Promise]"===Object.prototype.toString.call(e)}var k=function(){var e=Object(j.a)(d.a.mark((function e(t,n,r,c,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.a)(Object(p.b)(v,t,n,"values"),{value:r,ts:c||Object(p.k)(),id:a});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error("Error emitting event: "+e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n,r,c,a){return e.apply(this,arguments)}}(),S={};function C(e,t){var n=Math.random(),r=new Promise((function(e){return S[n]=e}));return k("streams",e,t,void 0,n),r}function A(e,t,n){localStorage.setItem("compose-cache-".concat(e),JSON.stringify({value:t,ts:n}))}var E=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(p.j)(Object(p.b)(v,"behaviors",t,"values"),Object(p.i)("ts","desc"),Object(p.g)(1)),e.next=3,Object(p.e)(n);case 3:if(r=e.sent,c=Object(b.a)(r.docs,1),!(a=c[0])||a.metadata.hasPendingWrites){e.next=8;break}return e.abrupt("return",a.data().value);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function T(e,t,n){Object(p.l)(Object(p.c)(v,"behaviors-reducers",e),{reducerCode:t,initial:n})}function L(e){var t=S[e];return t?function(){return delete S[e],t.apply(void 0,arguments)}:function(){}}function F(e,t,n,r,c,i){var s=function(e){var t=localStorage.getItem("compose-cache-".concat(e));if(t)return JSON.parse(t).value}(e)||r;if("MismatchedReducer"===c.kind)return c;if("MismatchedReducerEvent"===i.kind)return{kind:"MismatchedReducer",currentValue:c.currentValue};if("LoadingEmitToSelf"===c.kind)return"RegisterEmitToSelf"===i.kind?{emitToSelf:i.emitToSelf,pendingEvents:c.pendingEvents,currentValue:s,kind:"LoadingFromCache"}:"ReductionEvent"===i.kind?{pendingEvents:c.pendingEvents.concat([i]),currentValue:s,kind:"LoadingEmitToSelf"}:c;if("RegisterEmitToSelf"===i.kind)return c;if("LoadingFromCache"===c.kind){if("CacheLoadedEvent"===i.kind)return A(e,i.currentValue,i.ts),{currentValue:i.currentValue,ts:i.ts,kind:"SetFromCacheOrReduction"};if("CacheEmptyEvent"===i.kind){if(w(n))return n.then((function(e){c.emitToSelf({currentValue:e,kind:"InitialValuePromiseLoadedEvent"})})),{currentValue:s,pendingEvents:c.pendingEvents,kind:"LoadingFromPromise"};T(e,t.toString(),n);var o=c.pendingEvents.reduce((function(c,a){return F(e,t,n,r,c,a)}),{currentValue:n,kind:"SetFromInitialValue"});return A(e,o.currentValue,"ts"in o&&o.ts),k("behaviors",e,o.currentValue,"ts"in o&&o.ts),o}return"ReductionEvent"===i.kind?Object(a.a)(Object(a.a)({},c),{},{pendingEvents:c.pendingEvents.concat([i])}):c}if("LoadingFromPromise"===c.kind){if("InitialValuePromiseLoadedEvent"===i.kind){T(e,t.toString(),i.currentValue);var u=c.pendingEvents.reduce((function(c,a){return F(e,t,n,r,c,a)}),{currentValue:i.currentValue,kind:"SetFromInitialValue"});return A(e,u.currentValue,"ts"in u&&u.ts),k("behaviors",e,u.currentValue,"ts"in u&&u.ts),u}return"ReductionEvent"===i.kind?{currentValue:s,pendingEvents:c.pendingEvents.concat([i]),kind:"LoadingFromPromise"}:c}if("SetFromInitialValue"===c.kind){if("ReductionEvent"===i.kind){var l=t(c.currentValue,i.value,L(i.id));return L(i.id)(),A(e,l,i.ts),k("behaviors",e,l,i.ts),{currentValue:l,ts:i.ts,kind:"SetFromCacheOrReduction"}}return c}if("SetFromCacheOrReduction"===c.kind){if("ReductionEvent"===i.kind){if(i.ts.toMillis()>c.ts.toMillis()){var d=t(c.currentValue,i.value,L(i.id));return L(i.id)(),A(e,d,i.ts),k("behaviors",e,d,i.ts),{currentValue:d,ts:i.ts,kind:"SetFromCacheOrReduction"}}return c}return c}return c}function V(e){var t=e.name,n=e.initialValue,r=e.reducer,c=e.loadingValue,a=y((function(e,a){return F(t,r,n,c,e,a)}),{currentValue:c,pendingEvents:[],kind:"LoadingEmitToSelf"}),i=Object(b.a)(a,2),o=i[0],u=i[1];return Object(s.useEffect)((function(){return u({emitToSelf:u,kind:"RegisterEmitToSelf"})}),[]),Object(s.useEffect)((function(){Object(p.d)(Object(p.c)(v,"behaviors-reducers",t)).then((function(e){if(e.exists()){var c=e.data(),a=c.reducerCode,i=c.initial;if(a!==r.toString())throw u({kind:"MismatchedReducerEvent"}),new Error("The reducer supplied to ".concat(t," does not exactly match the reducer initially supplied. Bump the name and migrate over data from ").concat(t," to create a new reducer."));w(n)||Object(O.a)(i,n)||console.warn("Initial value supplied to reducer ".concat(t," is ignored because initial value already found"))}}))}),[t,n,r,u]),Object(s.useEffect)((function(){var e=Object(p.j)(Object(p.b)(v,"behaviors",t,"values"),Object(p.i)("ts","desc"),Object(p.g)(1));Object(p.e)(e).then((function(e){var t=e.docs[0];t?t.metadata.hasPendingWrites||u({kind:"CacheLoadedEvent",currentValue:t.data().value,ts:t.data().ts}):u({kind:"CacheEmptyEvent"})}))}),[t,u]),Object(s.useEffect)((function(){var e=Object(p.j)(Object(p.b)(v,"streams",t,"values"),Object(p.i)("ts","desc"),Object(p.g)(1));return Object(p.h)(e,(function(e){var t=e.docs[0];t&&!t.metadata.hasPendingWrites&&u({kind:"ReductionEvent",value:t.data().value,ts:t.data().ts,id:t.data().id})}))}),[t,u]),[o.currentValue,function(e){return C(t,e)}]}var I=107,P=function(){return V({name:"conduit-users-".concat(I),initialValue:E("conduit-users-".concat(106)),loadingValue:null,reducer:function(e,t,n){var r={},c=e;return"SIGN_UP"===t.type?(e.some((function(e){return e.email===t.user.email}))&&(r.email="already in use"),e.some((function(e){return e.username===t.user.username}))&&(r.username="already in use"),e.some((function(e){return e.uid===t.user.uid}))&&(r["public-key"]="already in use"),Object.keys(r).length||(c=e.concat([t.user]))):"UPDATE"===t.type&&(t.uid?c=e.map((function(e){return e.uid===t.uid?t.newUser:e})):r.unauthorized="to perform update to user"),n(r),c}})},D=function(){var e=U(),t=P(),n=Object(b.a)(t,1)[0],r=R(),c=Object(b.a)(r,1)[0];return n&&n.map((function(t){return Object(a.a)(Object(a.a)({},t),{},{following:e&&c&&!!(c[e.uid]||{})[t.uid]})}))},R=function(){return V({name:"conduit-followers-".concat(I),initialValue:E("conduit-followers-".concat(106)).then((function(e){return e||{}})),loadingValue:null,reducer:function(e,t,n){var r=t.follower,c=t.leader;if(t.uid!==r)return n({errors:{unauthorized:"to perform this action"}}),e;var i="FollowAction"===t.type;return Object(a.a)(Object(a.a)({},e),{},Object(f.a)({},r,Object(a.a)(Object(a.a)({},e[r]||{}),{},Object(f.a)({},c,i))))}})},U=function(){var e=function(){var e=y((function(e,t){return t}),null),t=Object(b.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){return Object(g.c)(N,(function(e){return r(e)}))}),[]),n}(),t=P(),n=Object(b.a)(t,1)[0];return e&&n&&n.find((function(t){return t.uid===e.uid}))},M=115,z=function(){return V({name:"conduit-articles-".concat(M),initialValue:E("conduit-articles-".concat(114)).then((function(e){return e||[]})),loadingValue:null,reducer:function(e,t,n){var r={},c=e;return t.uid?"CreateArticleAction"===t.type?(c=e.concat([{slug:t.slug,title:t.article.title,description:t.article.description,body:t.article.body,createdAt:t.createdAt,updatedAt:t.createdAt,uid:t.uid}]),G({slug:t.slug,tagList:t.article.tagList})):"UpdateArticleAction"===t.type?(c=e.map((function(e){return e.slug==t.slug&&e.uid===t.uid?Object(a.a)(Object(a.a)({},e),{},{title:t.article.title,description:t.article.description,body:t.article.body,updatedAt:t.updatedAt}):e})),G({slug:t.slug,tagList:t.article.tagList})):"DeleteArticleAction"===t.type&&e.find((function(e){return e.slug==t.slug})).uid===t.uid&&(c=e.filter((function(e){return e.slug!==t.slug}))):r.unauthorized=["to edit article"],Object.keys(r).length?n({errors:r}):n({slug:t.slug}),c}})},B=function(){return V({name:"conduit-tags-".concat(M),initialValue:E("conduit-tags-".concat(114)).then((function(e){return e||[]})),loadingValue:null,reducer:function(e,t,n){var r={},c=e;return"TODO"===t.uid?"UpdateArticleTags"===t.type&&(c=(c=c.filter((function(e){return e.slug!==t.slug||t.tagList.includes(e.tag)}))).concat(t.tagList.filter((function(e){return!c.some((function(n){return n.slug===t.slug&&n.tag===e}))})).map((function(e){return{tag:e,slug:t.slug}})))):r.unauthorized="to edit article",n(r),c}})};function G(e){return C("conduit-tags-".concat(M),Object(a.a)(Object(a.a)({},e),{},{type:"UpdateArticleTags"}))}var W=function(){return V({name:"conduit-favorites-".concat(M),initialValue:E("conduit-favorites-".concat(110)).then((function(e){return e||{articles:{},users:{}}})),loadingValue:null,reducer:function(e,t,n){var r=e.articles,c=e.users;if(!t.uid)return n({errors:{unauthorized:"to perform this action"}}),{articles:r,users:c};var i=t.slug,s=t.uid,o="FavoriteAction"===t.type;return{articles:Object(a.a)(Object(a.a)({},r),{},Object(f.a)({},i,Object(a.a)(Object(a.a)({},r[i]||{}),{},Object(f.a)({},s,o)))),users:Object(a.a)(Object(a.a)({},c),{},Object(f.a)({},s,Object(a.a)(Object(a.a)({},c[s]||{}),{},Object(f.a)({},i,o))))}}})},J=function(){var e=U(),t=z(),n=Object(b.a)(t,1)[0],r=B(),c=Object(b.a)(r,1)[0],a=W(),i=Object(b.a)(a,1)[0],s=D();return n&&c&&s&&i&&n.map((function(t){return{slug:t.slug,title:t.title,description:t.description,body:t.body,tagList:c.filter((function(e){return e.slug===t.slug})).map((function(e){return e.tag})),createdAt:new Date(t.createdAt),updatedAt:new Date(t.updatedAt),favorited:e&&i.articles[t.slug]&&i.articles[t.slug][e.uid],favoritesCount:Object.values(i.articles[t.slug]||{}).filter((function(e){return e})).length,author:s.find((function(e){return e.uid===t.uid}))}}))},Y=function(){return V({name:"conduit-comments-".concat(M),initialValue:E("conduit-comments-".concat(114)).then((function(e){return e||{}})),loadingValue:null,reducer:function(e,t,n){if(!t.uid)return n({errors:{unauthorized:"to perform this action"}}),e;var r=t.slug,c=t.uid,i=t.commentId;if("CreateComment"===t.type){var s=t.body,o=t.createdAt;return Object(a.a)(Object(a.a)({},e),{},Object(f.a)({},r,[].concat(Object(m.a)(e[r]||[]),[{uid:c,commentId:i,body:s,createdAt:o}])))}if("DeleteComment"===t.type){var u=e[r].find((function(e){return e.commentId===i}));return u&&u.uid===t.uid?Object(a.a)(Object(a.a)({},e),{},Object(f.a)({},r,Object(m.a)((e[r]||[]).filter((function(e){return e.commentId!==i}))))):(n({errors:{unauthorized:"to perform this action"}}),e)}return e}})};function Z(e){location.hash="#/".concat(e)}function H(e){return Object(a.a)({type:"text",placeholder:"",fieldType:"input",lg:!0},e)}var K=n(3);function _(e){var t=e.children;return Object(K.jsx)("div",{className:"container page",children:Object(K.jsxs)("div",{className:"row",children:[" ",t," "]})})}function X(e){var t=e.type,n=e.placeholder,r=e.disabled,c=e.value,a=e.onChange,i=e.lg;return Object(K.jsx)("fieldset",{className:"form-group",children:Object(K.jsx)("input",{className:"form-control".concat(i?" form-control-lg":""),type:t,placeholder:n,disabled:r,value:c,onChange:a})})}function q(e){var t=e.type,n=e.placeholder,r=e.disabled,c=e.value,a=e.rows,i=e.onChange,s=e.lg;return Object(K.jsx)("fieldset",{className:"form-group",children:Object(K.jsx)("textarea",{className:"form-control".concat(s?" form-control-lg":""),type:t,placeholder:n,disabled:r,value:c,onChange:i,rows:a})})}function Q(e){var t=e.type,n=e.placeholder,r=e.disabled,c=e.value,a=e.listValue,i=e.lg,s=e.onChange,o=e.onEnter,u=e.onRemoveItem;return Object(K.jsxs)("fieldset",{className:"form-group",children:[Object(K.jsx)("input",{className:"form-control".concat(i?" form-control-lg":""),type:t,placeholder:n,disabled:r,value:c,onChange:s,onKeyDown:function(e){return"Enter"===e.key&&e.preventDefault()},onKeyUp:$(o)}),Object(K.jsx)("div",{className:"tag-list",children:a&&a.map((function(e,t){return Object(K.jsxs)("span",{className:"tag-default tag-pill",onClick:function(){return u(t)},children:[Object(K.jsx)("i",{className:"ion-close-round"}),e]},e)}))})]})}function $(e){return function(t){"Enter"===t.key&&(t.preventDefault(),e())}}function ee(e){var t=e.errors;return Object(K.jsx)("ul",{className:"error-messages",children:Object.entries(t).map((function(e){var t=Object(b.a)(e,2),n=t[0];return t[1].map((function(e){return Object(K.jsxs)("li",{children:[n," ",e]},n+e)}))}))})}var te=function(e){var t=e.fields,n=e.disabled,r=e.formObject,c=e.submitButtonText,a=e.errors,i=e.onChange,o=e.onSubmit,u=e.onAddItemToList,l=e.onRemoveListItem;return Object(K.jsxs)(s.Fragment,{children:[Object(K.jsx)(ee,{errors:a}),Object(K.jsx)("form",{onSubmit:o,children:Object(K.jsxs)("fieldset",{children:[t.map((function(e){return"input"===e.fieldType?Object(K.jsx)(X,{disabled:n,type:e.type,placeholder:e.placeholder,value:r[e.name]||"",onChange:ne(e.name,i),lg:e.lg},e.name):"textarea"===e.fieldType?Object(K.jsx)(q,{disabled:n,type:e.type,placeholder:e.placeholder,value:r[e.name]||"",rows:e.rows,onChange:ne(e.name,i),lg:e.lg},e.name):Object(K.jsx)(Q,{disabled:n,type:e.type,placeholder:e.placeholder,value:r[e.name]||"",onChange:ne(e.name,i),listValue:r[e.listName],onEnter:function(){return u&&e.listName&&u(e.listName)},onRemoveItem:function(t){return l&&e.listName&&l(e.listName,t)},lg:e.lg},e.name)})),Object(K.jsx)("button",{className:"btn btn-lg btn-primary pull-xs-right",children:c})]})})]})};function ne(e,t){return function(n){var r=n.target.value;t(e,r)}}function re(e){var t=e.onSubmit,n=e.submitting,r=e.article,c=e.errors,i=Object(s.useState)(r),o=Object(b.a)(i,2),u=o[0],l=o[1],d=Object(s.useState)(""),j=Object(b.a)(d,2),m=j[0],O=j[1];return Object(K.jsx)("div",{className:"editor-page",children:Object(K.jsx)(_,{children:Object(K.jsx)("div",{className:"col-md-10 offset-md-1 col-xs-12",children:Object(K.jsx)(te,{formObject:Object(a.a)(Object(a.a)({},u),{},{tag:m}),disabled:n,errors:c,onChange:function(e,t){"tag"===e?O(t):"tagList"!==e&&l(Object(a.a)(Object(a.a)({},u),{},Object(f.a)({},e,t)))},onSubmit:function(e){e.preventDefault(),t(u)},submitButtonText:"Publish Article",onAddItemToList:function(){l(Object(a.a)(Object(a.a)({},u),{},{tagList:u.tagList.concat([m])}))},onRemoveListItem:function(e,t){l(Object(a.a)(Object(a.a)({},u),{},{tagList:u.tagList.filter((function(e,n){return n!==t}))}))},fields:[H({name:"title",placeholder:"Article Title"}),H({name:"description",placeholder:"What's this article about?",lg:!1}),H({name:"body",placeholder:"Write your article (in markdown)",fieldType:"textarea",rows:8,lg:!1}),H({name:"tag",placeholder:"Enter Tags",listName:"tagList",fieldType:"list",lg:!1})]})})})})}function ce(){var e=Object(u.h)().slug,t=U(),n=z(),r=Object(b.a)(n,2)[1],c=J(),a=c&&c.find((function(t){return t.slug===e})),i=Object(s.useState)(!1),o=Object(b.a)(i,2),l=o[0],m=o[1],f=Object(s.useState)({}),O=Object(b.a)(f,2),h=O[0],p=O[1];if(!a||!t||a.author.uid===t.uid)return Object(K.jsx)(s.Fragment,{children:a&&Object(K.jsx)(re,{onSubmit:function(e){return g.apply(this,arguments)},submitting:l,article:a,errors:h})});function g(){return(g=Object(j.a)(d.a.mark((function n(c){var a,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),t||Z(""),n.next=4,r({type:"UpdateArticleAction",article:c,slug:e,uid:t.uid,updatedAt:Date.now()});case 4:a=n.sent,i=a.errors,m(!1),i?p(i):Z("article/".concat(e));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Z("")}function ae(){return Object(K.jsx)("footer",{children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)(o.b,{to:"",className:"logo-font",children:"conduit"}),Object(K.jsxs)("span",{className:"attribution",children:["An interactive learning project from ",Object(K.jsx)("a",{href:"https://thinkster.io",children:"Thinkster"}),". Code & design licensed under MIT."]})]})})}function ie(){var e=U();return Object(K.jsx)("nav",{className:"navbar navbar-light",children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)(o.b,{className:"navbar-brand",to:"",children:"conduit"}),Object(K.jsx)("ul",{className:"nav navbar-nav pull-xs-right",children:Object(K.jsxs)(o.a,{children:[Object(K.jsx)(se,{text:"Home",href:""}),e?Object(K.jsx)(ue,{user:e}):Object(K.jsx)(oe,{})]})})]})})}function se(e){var t=e.text,n=e.href,r=e.icon;return Object(K.jsx)("li",{className:"nav-item",children:Object(K.jsxs)(o.c,{exact:!0,to:n,activeClassName:"active",className:"nav-link",children:[r&&Object(K.jsx)("i",{className:r}),"\xa0",t]})})}function oe(){return Object(K.jsxs)(s.Fragment,{children:[Object(K.jsx)(se,{text:"Sign in",href:"/login"}),Object(K.jsx)(se,{text:"Sign up",href:"/register"})]})}function ue(e){var t=e.user.username;return Object(K.jsxs)(s.Fragment,{children:[Object(K.jsx)(se,{text:"New Article",href:"/editor",icon:"ion-compose"}),Object(K.jsx)(se,{text:"Settings",href:"/settings",icon:"ion-gear-a"}),Object(K.jsx)(se,{text:"".concat(t),href:"/profile/".concat(t)})]})}function le(e){return Object.entries(e).filter((function(e){return Object(b.a)(e,2)[1]})).map((function(e){return Object(b.a)(e,1)[0]})).join(" ")}var de=n(67);function je(e){var t=e.article,n=t.createdAt,r=t.favorited,c=t.favoritesCount,a=t.slug,i=t.title,u=t.description,l=t.tagList,m=t.author,f=m.image,O=void 0===f?"":f,h=m.username,p=void 0===h?"":h,g=U(),x=Object(s.useState)(!1),v=Object(b.a)(x,2),N=v[0],y=v[1],w=W(),k=Object(b.a)(w,2)[1];function S(){return(S=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=2;break}return e.abrupt("return");case 2:return y(!0),e.next=5,k({type:r?"UnfavoriteAction":"FavoriteAction",slug:a,uid:g.uid});case 5:y(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(K.jsxs)("div",{className:"article-preview",children:[Object(K.jsxs)("div",{className:"article-meta",children:[Object(K.jsx)(o.b,{to:"/profile/".concat(p),className:"author",children:Object(K.jsx)("img",{src:O||void 0})}),Object(K.jsxs)("div",{className:"info",children:[Object(K.jsx)(o.b,{to:"/profile/".concat(p),className:"author",children:p}),Object(K.jsx)("span",{className:"date",children:Object(de.a)(n,"PP")})]}),Object(K.jsxs)("button",{className:"btn btn-sm pull-xs-right ".concat(r?"btn-primary":"btn-outline-primary"),"aria-label":"Toggle Favorite",disabled:N,onClick:function(){return S.apply(this,arguments)},children:[Object(K.jsx)("i",{className:"ion-heart"})," ",c]})]}),Object(K.jsxs)(o.b,{to:"article/".concat(a),className:"preview-link",children:[Object(K.jsx)("h1",{children:i}),Object(K.jsx)("p",{children:u}),Object(K.jsx)("span",{children:"Read more..."}),Object(K.jsx)(be,{tagList:l})]})]})}function be(e){var t=e.tagList;return Object(K.jsx)("ul",{className:"tag-list",children:t.map((function(e){return Object(K.jsx)("li",{className:"tag-default tag-pill tag-outline",children:e},e)}))})}var me=n(69);function fe(e){var t=e.currentPage,n=e.count,r=e.itemsPerPage,c=e.onPageChange;return Object(K.jsx)("nav",{children:Object(K.jsx)("ul",{className:"pagination",children:Math.ceil(n/r)>1&&Object(me.a)(1,Math.ceil(n/r)+1).map((function(e){return Object(K.jsx)("li",{className:"page-item".concat(t!==e?"":" active"),onClick:c&&function(){return c(e)},children:Object(K.jsx)("a",{className:"page-link","aria-label":"Go to page number ".concat(e),href:"#",children:e})},e)}))})})}function Oe(e){var t=e.toggleClassName,n=e.tabs,r=e.selectedTab,c=e.onTabChange,a=e.uid,i=Object(s.useState)(1),o=Object(b.a)(i,2),u=o[0],l=o[1],d=U(),j=J(),m=R(),f=Object(b.a)(m,1)[0],O=W(),h=Object(b.a)(O,1)[0],p=j&&j.filter((function(e){return"Global Feed"===r||"Your Feed"===r&&d&&f[d.uid]&&f[d.uid][e.author.uid]||"My Articles"===r&&e.author.uid===a||"Favorited Articles"===r&&h.users[a]&&h.users[a][e.slug]})).sort((function(e,t){return e.createdAt.getTime()-t.createdAt.getTime()})),g=p&&p.slice(10*(u-1),10*u),x=p?p.length:0;return Object(K.jsxs)(s.Fragment,{children:[Object(K.jsx)(he,{tabs:n,selectedTab:r,toggleClassName:t,onTabChange:c}),Object(K.jsx)(ge,{articles:g}),Object(K.jsx)(fe,{currentPage:u,count:x,itemsPerPage:10,onPageChange:l})]})}function he(e){var t=e.tabs,n=e.toggleClassName,r=e.selectedTab,c=e.onTabChange;return Object(K.jsx)("div",{className:n,children:Object(K.jsx)("ul",{className:"nav nav-pills outline-active",children:t.map((function(e){return Object(K.jsx)(pe,{tab:e,active:e===r,onClick:function(){return c&&c(e)}},e)}))})})}function pe(e){var t=e.tab,n=e.active,r=e.onClick;return Object(K.jsx)("li",{className:"nav-item",children:Object(K.jsx)("a",{className:le({"nav-link":!0,active:n}),href:"#",onClick:function(e){e.preventDefault(),r()},children:t})})}function ge(e){var t=e.articles;return t?Object(K.jsxs)(s.Fragment,{children:[0===t.length&&Object(K.jsx)("div",{className:"article-preview",children:"No articles are here... yet."},1),t.map((function(e){return Object(K.jsx)(je,{article:e},e.slug)}))]}):Object(K.jsx)("div",{className:"article-preview",children:"Loading articles..."},1)}function xe(){var e=U(),t=Object(s.useState)(e?"Your Feed":"Global Feed"),n=Object(b.a)(t,2),r=n[0],c=n[1];return Object(K.jsxs)("div",{className:"home-page",children:[Object(K.jsx)("div",{className:"banner",children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)("h1",{className:"logo-font",children:"conduit"}),Object(K.jsx)("p",{children:"A place to share your knowledge."})]})}),Object(K.jsxs)(_,{children:[Object(K.jsx)("div",{className:"col-md-9",children:Object(K.jsx)(Oe,{toggleClassName:"feed-toggle",selectedTab:r,tabs:ve(r),onTabChange:c})}),Object(K.jsx)("div",{className:"col-md-3",children:Object(K.jsx)(Ne,{setSelectedTab:c})})]})]})}function ve(e){var t=U();return Array.from(new Set([].concat(Object(m.a)(t?["Your Feed"]:[]),[e,"Global Feed"])))}function Ne(e){var t=e.setSelectedTab,n=function(){var e=B(),t=Object(b.a)(e,1)[0];return t&&Array.from(new Set(t.map((function(e){return e.tag}))))}();return Object(K.jsxs)("div",{className:"sidebar",children:[Object(K.jsx)("p",{children:"Popular Tags"}),n?Object(K.jsxs)("div",{className:"tag-list",children:[" ",n.map((function(e){return Object(K.jsx)("a",{href:"#",className:"tag-pill tag-default",onClick:function(){return t(e)},children:e},e)}))," "]}):Object(K.jsx)("span",{children:"Loading tags..."})]})}function ye(){var e=P(),t=Object(b.a)(e,1)[0],n=Object(s.useState)(!1),r=Object(b.a)(n,2),c=r[0],a=r[1],i=Object(s.useState)(""),u=Object(b.a)(i,2),l=u[0],m=u[1],f=Object(s.useState)(""),O=Object(b.a)(f,2),h=O[0],p=O[1],x=Object(s.useState)({}),v=Object(b.a)(x,2),y=v[0],w=v[1];function k(){return(k=Object(j.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a(!0),r=t&&t.find((function(e){return e.email===l}))){e.next=7;break}return w({email:["not found"]}),a(!1),e.abrupt("return");case 7:return e.prev=7,e.next=10,Object(g.d)(N,r.email,h);case 10:Z(""),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(7),w({login:[e.t0.message]});case 16:a(!1);case 17:case"end":return e.stop()}}),e,null,[[7,13]])})))).apply(this,arguments)}return Object(K.jsx)("div",{className:"auth-page",children:Object(K.jsx)(_,{children:Object(K.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[Object(K.jsx)("h1",{className:"text-xs-center",children:"Sign in"}),Object(K.jsx)("p",{className:"text-xs-center",children:Object(K.jsx)(o.b,{to:"/#/register",children:"Need an account?"})}),Object(K.jsx)(te,{disabled:c,formObject:{email:l,password:h},submitButtonText:"Sign in",errors:y,onChange:function(e,t){"email"===e?m(t):"password"===e&&p(t)},onSubmit:function(e){return k.apply(this,arguments)},fields:[H({name:"email",placeholder:"Email"}),H({name:"password",placeholder:"Password",type:"password"})]})]})})})}function we(){var e=U(),t=z(),n=Object(b.a)(t,2)[1],r=Object(s.useState)(!1),c=Object(b.a)(r,2),a=c[0],i=c[1],o=Object(s.useState)({}),u=Object(b.a)(o,2),l=u[0],m=u[1];function f(){return(f=Object(j.a)(d.a.mark((function t(r){var c,a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0),t.prev=1,t.next=4,n({type:"CreateArticleAction",article:r,createdAt:Date.now(),uid:e.uid,slug:Math.random().toString()});case 4:c=t.sent,a=c.errors,s=c.slug,i(!1),a?m(a):Z("article/".concat(s)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),m({"unknown network error":t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}return Object(K.jsx)(re,{onSubmit:function(e){return f.apply(this,arguments)},errors:l,submitting:a})}function ke(){var e=Object(s.useState)({}),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(!1),i=Object(b.a)(c,2),u=i[0],l=i[1],m=Object(s.useState)({username:"",email:"",password:""}),O=Object(b.a)(m,2),h=O[0],p=O[1],x=P(),v=Object(b.a)(x,2)[1];function y(){return(y=Object(j.a)(d.a.mark((function e(t){var n,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l(!0),e.prev=2,e.next=5,Object(g.a)(N,h.email,h.password);case 5:return n=e.sent,c=n.user.uid,e.next=9,v({type:"SIGN_UP",user:{username:h.username,email:h.email,uid:c,bio:null,image:null}});case 9:a=e.sent,Object.keys(a).length?r(a):Z(""),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),r({register:[e.t0.message]});case 16:l(!1);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}return Object(K.jsx)("div",{className:"auth-page",children:Object(K.jsx)(_,{children:Object(K.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[Object(K.jsx)("h1",{className:"text-xs-center",children:"Sign up"}),Object(K.jsx)("p",{className:"text-xs-center",children:Object(K.jsx)(o.b,{to:"login",children:"Have an account?"})}),Object(K.jsx)(te,{disabled:u,formObject:h,submitButtonText:"Sign up",errors:n,onChange:function(e,t){p(Object(a.a)(Object(a.a)({},h),{},Object(f.a)({},e,t)))},onSubmit:function(e){return y.apply(this,arguments)},fields:[H({name:"username",placeholder:"Username"}),H({name:"email",placeholder:"Email"}),H({name:"password",placeholder:"Password",type:"password"})]})]})})})}function Se(){var e=U(),t=Object(s.useState)(null),n=Object(b.a)(t,2),r=n[0],c=n[1],i=Object(s.useState)({}),o=Object(b.a)(i,2),u=o[0],l=o[1],m=Object(s.useState)(!1),O=Object(b.a)(m,2),h=O[0],p=O[1],x=r||e||{};var v=P(),y=Object(b.a)(v,2)[1];function w(){return(w=Object(j.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),e){t.next=3;break}return t.abrupt("return");case 3:return p(!0),t.next=6,y({type:"UPDATE",uid:e.uid,newUser:x});case 6:r=t.sent,p(!1),Object.keys(r).length?l(r):Z("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(K.jsx)("div",{className:"settings-page",children:Object(K.jsx)(_,{children:Object(K.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[Object(K.jsx)("h1",{className:"text-xs-center",children:"Your Settings"}),Object(K.jsx)(te,{disabled:h,formObject:Object(a.a)({},x),submitButtonText:"Update Settings",errors:u,onChange:function(e,t){c(Object(a.a)(Object(a.a)({},x),{},Object(f.a)({},e,t)))},onSubmit:function(e){return w.apply(this,arguments)},fields:[H({name:"image",placeholder:"URL of profile picture"}),H({name:"username",placeholder:"Your Name"}),H({name:"bio",placeholder:"Short bio about you",rows:8,fieldType:"textarea"}),H({name:"email",placeholder:"Email"}),H({name:"password",placeholder:"Password",type:"password"})]}),Object(K.jsx)("hr",{}),Object(K.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return Object(g.e)(N)},children:"Or click here to logout."})]})})})}function Ce(e){var t=e.user,n=t.image,r=t.username,c=t.bio,a=t.following,i=e.disabled,s=e.onFollowToggle,o=e.onEditSettings,u=U(),l=u?u.username:"";return Object(K.jsx)("div",{className:"user-info",children:Object(K.jsx)("div",{className:"container",children:Object(K.jsx)("div",{className:"row",children:Object(K.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[Object(K.jsx)("img",{src:n||void 0,className:"user-img"}),Object(K.jsx)("h4",{children:r}),Object(K.jsx)("p",{children:c}),l===r?Object(K.jsx)(Ee,{onClick:o,disabled:i}):Object(K.jsx)(Ae,{following:a,username:r,disabled:i,onClick:s})]})})})})}function Ae(e){var t=e.following,n=e.username,r=e.disabled,c=e.onClick;return Object(K.jsxs)("button",{className:"btn btn-sm btn-outline-secondary action-btn",onClick:c,disabled:r,children:[Object(K.jsx)("i",{className:"ion-plus-round"}),"\xa0",t?" Unfollow":" Follow"," ",n]})}function Ee(e){var t=e.disabled,n=e.onClick;return Object(K.jsxs)("button",{className:"btn btn-sm btn-outline-secondary action-btn",onClick:n,disabled:t,children:[Object(K.jsx)("i",{className:"ion-gear-a"}),"\xa0 Edit Profile Settings"]})}function Te(){var e=U(),t=R(),n=Object(b.a)(t,2)[1],r=Object(s.useState)(!1),c=Object(b.a)(r,2),a=c[0],i=c[1],o=Object(u.h)().username,l=Object(u.g)().pathname.endsWith("favorites"),m=D(),f=m&&m.find((function(e){return e.username===o}));function O(){return(O=Object(j.a)(d.a.mark((function t(r){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return Z("register"),t.abrupt("return");case 3:return i(!0),t.next=6,n({type:r.following?"UnfollowAction":"FollowAction",follower:e.uid,leader:r.uid,uid:e.uid});case 6:i(!1);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(K.jsxs)("div",{className:"profile-page",children:[f?Object(K.jsx)(Ce,{user:f,disabled:a,onFollowToggle:function(){return function(e){return O.apply(this,arguments)}(f)},onEditSettings:function(){return Z("settings")}}):Object(K.jsx)("div",{className:"article-preview",children:"Loading profile..."},1),Object(K.jsx)("div",{className:"container",children:Object(K.jsx)("div",{className:"row",children:Object(K.jsx)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:Object(K.jsx)(Oe,{toggleClassName:"articles-toggle",tabs:["My Articles","Favorited Articles"],selectedTab:l?"Favorited Articles":"My Articles",onTabChange:Le(o),uid:f&&f.uid})})})})]})}function Le(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r="Favorited Articles"===n,Z("profile/".concat(e).concat(r?"favorites":""));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function Fe(){var e=Object(u.h)().slug,t=J(),n=t&&t.find((function(t){return t.slug===e}));return t&&!n&&Z(""),n?Object(K.jsxs)("div",{className:"article-page",children:[Object(K.jsx)(Ve,{article:n}),Object(K.jsxs)("div",{className:"container page",children:[Object(K.jsxs)("div",{className:"row article-content",children:[Object(K.jsx)("div",{className:"col-md-12",children:n.body}),Object(K.jsx)(be,{tagList:n.tagList})]}),Object(K.jsx)("hr",{}),Object(K.jsx)("div",{className:"article-actions",children:Object(K.jsx)(Ie,{article:n})}),Object(K.jsx)(Ue,{article:n})]})]}):Object(K.jsx)("div",{children:"Loading article..."})}function Ve(e){return Object(K.jsx)("div",{className:"banner",children:Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)("h1",{children:e.article.title}),Object(K.jsx)(Ie,Object(a.a)({},e))]})})}function Ie(e){var t=e.article,n=U();return Object(K.jsxs)("div",{className:"article-meta",children:[Object(K.jsx)(Pe,{article:t}),n&&n.uid===t.author.uid?Object(K.jsx)(Re,{article:t}):Object(K.jsx)(De,{article:t})]})}function Pe(e){var t=e.article,n=t.author,r=n.username,c=n.image,a=t.createdAt;return Object(K.jsxs)(s.Fragment,{children:[Object(K.jsx)(o.b,{to:"/profile/".concat(r),children:Object(K.jsx)("img",{src:c||void 0})}),Object(K.jsxs)("div",{className:"info",children:[Object(K.jsx)(o.b,{className:"author",to:"/profile/".concat(r),children:r}),Object(K.jsx)("span",{className:"date",children:Object(de.a)(new Date(a),"PP")})]})]})}function De(e){var t=e.article,n=t.slug,r=t.favoritesCount,c=t.favorited,a=t.author,i=a.username,o=a.following,u=a.uid,l=Object(s.useState)(!1),m=Object(b.a)(l,2),f=m[0],O=m[1],h=Object(s.useState)(!1),p=Object(b.a)(h,2),g=p[0],x=p[1],v=U(),N=W(),y=Object(b.a)(N,2)[1],w=R(),k=Object(b.a)(w,2)[1];function S(){return(S=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=3;break}return Z("register"),e.abrupt("return");case 3:return O(!0),e.next=6,y({type:c?"UnfavoriteAction":"FavoriteAction",slug:n,uid:v.uid});case 6:O(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=3;break}return Z("register"),e.abrupt("return");case 3:return x(!0),e.next=6,k({type:o?"UnfollowAction":"FollowAction",follower:v.uid,uid:v.uid,leader:u});case 6:x(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(K.jsxs)(s.Fragment,{children:[Object(K.jsxs)("button",{className:le({btn:!0,"btn-sm":!0,"btn-outline-secondary":!o,"btn-secondary":o}),disabled:g,onClick:function(){return C.apply(this,arguments)},children:[Object(K.jsx)("i",{className:"ion-plus-round"}),"\xa0 ",(o?"Unfollow ":"Follow ")+i]}),"\xa0",Object(K.jsxs)("button",{className:le({btn:!0,"btn-sm":!0,"btn-outline-primary":!c,"btn-primary":c}),disabled:f,onClick:function(){return S.apply(this,arguments)},children:[Object(K.jsx)("i",{className:"ion-heart"}),"\xa0 ",(c?"Unfavorite ":"Favorite ")+"Article",Object(K.jsxs)("span",{className:"counter",children:["(",r,")"]})]})]})}function Re(e){var t=e.article.slug,n=Object(s.useState)(!1),r=Object(b.a)(n,2),c=r[0],a=r[1],i=U(),o=z(),u=Object(b.a)(o,2)[1];function l(){return(l=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=3;break}return Z(""),e.abrupt("return");case 3:return a(!0),e.next=6,u({type:"DeleteArticleAction",slug:t,uid:i.uid});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(K.jsxs)(s.Fragment,{children:[Object(K.jsx)("button",{className:"btn btn-outline-secondary btn-sm",onClick:function(){return Z("editor/".concat(t))},children:"\xa0 Edit Article"}),"\xa0",Object(K.jsx)("button",{className:"btn btn-outline-danger btn-sm",disabled:c,onClick:function(){return l.apply(this,arguments)},children:"Delete Article"})]})}function Ue(e){var t=e.article,n=U(),r=function(){var e=Y(),t=Object(b.a)(e,1)[0],n=P(),r=Object(b.a)(n,1)[0];return t&&r&&Object.fromEntries(Object.entries(t).map((function(e){var t=Object(b.a)(e,2),n=t[0],c=t[1];return[n,c.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{slug:n,createdAt:new Date(e.createdAt),author:r.find((function(t){return t.uid===e.uid}))})}))]})))}();return Object(K.jsx)("div",{className:"row",children:Object(K.jsxs)("div",{className:"col-xs-12 col-md-8 offset-md-2",children:[n?Object(K.jsx)(Me,{user:n,slug:t.slug}):Object(K.jsxs)("p",{style:{display:"inherit"},children:[Object(K.jsx)(o.b,{to:"/login",children:"Sign in"})," or ",Object(K.jsx)(o.b,{to:"/register",children:"sign up"})," to add comments on this article."]}),r?Object(K.jsx)(s.Fragment,{children:(r[t.slug]||[]).map((function(e,r){return Object(K.jsx)(ze,{comment:e,slug:t.slug,user:n,index:r},e.commentId)}))}):Object(K.jsx)("div",{children:"Loading comments..."})]})})}function Me(e){var t=e.user,n=t.image,r=t.uid,c=e.slug,a=Object(s.useState)(""),i=Object(b.a)(a,2),o=i[0],u=i[1],l=Object(s.useState)(!1),m=Object(b.a)(l,2),f=m[0],O=m[1],h=Y(),p=Object(b.a)(h,2)[1];function g(){return(g=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(!0),e.next=4,p({type:"CreateComment",uid:r,body:o,slug:c,commentId:Math.random(),createdAt:Date.now()});case 4:u(""),O(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(K.jsxs)("form",{className:"card comment-form",onSubmit:function(e){return g.apply(this,arguments)},children:[Object(K.jsx)("div",{className:"card-block",children:Object(K.jsx)("textarea",{className:"form-control",placeholder:"Write a comment...",rows:3,onChange:function(e){return u(e.target.value)},value:o})}),Object(K.jsxs)("div",{className:"card-footer",children:[Object(K.jsx)("img",{src:n||void 0,className:"comment-author-img"}),Object(K.jsx)("button",{className:"btn btn-sm btn-primary",disabled:f,children:"Post Comment"})]})]})}function ze(e){var t=e.comment,n=t.commentId,r=t.body,c=t.createdAt,a=t.author,i=e.slug,s=e.index,u=e.user,l=a||{},d=l.username,j=l.image,m=Y(),f=Object(b.a)(m,2)[1];return Object(K.jsxs)("div",{className:"card",children:[Object(K.jsx)("div",{className:"card-block",children:Object(K.jsx)("p",{className:"card-text",children:r})}),Object(K.jsxs)("div",{className:"card-footer",children:[Object(K.jsx)(o.b,{className:"comment-author",to:"/profile/".concat(d),children:Object(K.jsx)("img",{src:j||void 0,className:"comment-author-img"})}),"\xa0",Object(K.jsx)(o.b,{className:"comment-author",to:"/profile/".concat(d),children:d}),Object(K.jsx)("span",{className:"date-posted",children:Object(de.a)(c,"PP")}),u&&u.username===d&&Object(K.jsx)("span",{className:"mod-options",children:Object(K.jsx)("i",{className:"ion-trash-a","aria-label":"Delete comment ".concat(s+1),onClick:function(){return f({slug:i,commentId:n,uid:u.uid,type:"DeleteComment"})}})})]})]})}var Be=["children","userIsLogged"],Ge=["children","userIsLogged"];function We(){var e=!!U();return Object(K.jsx)(o.a,{children:Object(K.jsxs)(s.Fragment,{children:[Object(K.jsx)(ie,{}),Object(K.jsxs)(u.d,{children:[Object(K.jsx)(Je,{exact:!0,path:"/login",userIsLogged:e,children:Object(K.jsx)(ye,{})}),Object(K.jsx)(Je,{exact:!0,path:"/register",userIsLogged:e,children:Object(K.jsx)(ke,{})}),Object(K.jsx)(Ye,{exact:!0,path:"/settings",userIsLogged:e,children:Object(K.jsx)(Se,{})}),Object(K.jsx)(Ye,{exact:!0,path:"/editor",userIsLogged:e,children:Object(K.jsx)(we,{})}),Object(K.jsx)(Ye,{exact:!0,path:"/editor/:slug",userIsLogged:e,children:Object(K.jsx)(ce,{})}),Object(K.jsx)(u.b,{path:"/profile/:username",children:Object(K.jsx)(Te,{})}),Object(K.jsx)(u.b,{path:"/article/:slug",children:Object(K.jsx)(Fe,{})}),Object(K.jsx)(u.b,{exact:!0,path:"/",children:Object(K.jsx)(xe,{})}),Object(K.jsx)(u.b,{path:"*",children:Object(K.jsx)(u.a,{to:"/"})})]}),Object(K.jsx)(ae,{})]})})}function Je(e){var t=e.children,n=e.userIsLogged,r=Object(i.a)(e,Be);return Object(K.jsxs)(u.b,Object(a.a)(Object(a.a)({},r),{},{children:[t,n&&Object(K.jsx)(u.a,{to:"/"})]}))}function Ye(e){var t=e.children,n=e.userIsLogged,r=Object(i.a)(e,Ge);return Object(K.jsxs)(u.b,Object(a.a)(Object(a.a)({},r),{},{children:[t,!n&&Object(K.jsx)(u.a,{to:"/"})]}))}c.a.render(Object(K.jsx)(We,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.87b0a712.chunk.js.map