"use strict";(self.webpackChunkspicy_docs=self.webpackChunkspicy_docs||[]).push([[699],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=i,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2531:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},l="API Reference",c={unversionedId:"tutorial-extras/api-reference",id:"tutorial-extras/api-reference",isDocsHomePage:!1,title:"API Reference",description:"Under Construction!",source:"@site/docs/tutorial-extras/api-reference.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/api-reference",permalink:"/tutorial-extras/api-reference",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/tutorial-extras/integrations"},next:{title:"Governance",permalink:"/tutorial-extras/governance"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-reference"},"API Reference"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Under Construction!"))),(0,a.kt)("p",null,"This is a summary of the currently available public endpoints for the SpicySwap GraphQL API. Feel free to reach out and request new API endpoints! Also, on request we will grant access to the full ",(0,a.kt)("strong",{parentName:"p"},"/graphql")," endpoint for deeper querying"),(0,a.kt)("h4",{id:"apirestspicydailymetrics"},"/api/rest/SpicyDailyMetrics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"query SpicyDailyMetrics {\n  spicy_day_data(order_by: {day: desc}, limit: 60) {\n    dailyvolumextz\n    totalliquidityxtz\n    day\n    txcount\n  }\n}\n")),(0,a.kt)("h4",{id:"apirestpooldailymetrics"},"/api/rest/PoolDailyMetrics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'query PoolDailyMetrics($_ilike: String = "") {\n  pair_day_data(limit: 60, order_by: {day: desc}, where: {pair_id: {_ilike: $_ilike}}) {\n    pair_id\n    dailyvolumextz\n    reservextz\n    day\n  }\n}\n')),(0,a.kt)("h4",{id:"apiresttokendailymetrics"},"/api/rest/TokenDailyMetrics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'query TokenDailyMetrics($_ilike: String = "") {\n  token_day_data(limit: 60, order_by: {day: desc}, where: {tag: {_ilike: $_ilike}}) {\n    day\n    tag\n    dailyvolumextz\n    totalliquidityxtz\n  }\n}\n')),(0,a.kt)("h4",{id:"apirestpoollist"},"/api/rest/PoolList"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"query PoolList($_eq: bigint = 0, $hour_agg_start: Int = 0, $day_agg_start: Int = 0) {\n  pair_info(order_by: {reservextz: desc}, where: {pair_id: {_eq: $_eq}}) {\n    pair_id\n    reserve0\n    reserve1\n    reservextz\n    token0\n    token0price\n    token1\n    token1price\n    txcount\n    volumetoken0\n    volumetoken1\n    volumeusd\n    contract\n    pairHourData_aggregate(limit: 24, order_by: {hour_ts: desc}, where: {hour_ts: {_gte: $hour_agg_start}}) {\n      aggregate {\n        sum {\n          hourlyvolumextz\n        }\n      }\n    }\n    pairDayData_aggregate(limit: 7, order_by: {day_ts: desc}, where: {day_ts: {_gte: $day_agg_start}}) {\n      aggregate {\n        sum {\n          dailyvolumextz\n        }\n      }\n    }\n    token_a {\n      derivedxtz\n    }\n    token_b {\n      derivedxtz\n    }\n  }\n}\n")),(0,a.kt)("h4",{id:"apiresttokenlist"},"/api/rest/TokenList"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'query TokenList($_ilike: String = "%%", $day_agg_start: Int = 0) {\n  tokens(limit: 100, order_by: {totalliquidityxtz: desc}, where: {tag: {_ilike: $_ilike}}) {\n    name\n    symbol\n    decimals\n    img\n    tag\n    derivedxtz\n    totalliquidityxtz\n    tokenDayData_aggregate(limit: 7, order_by: {day_ts: desc}, where: {day_ts: {_gte: $day_agg_start}}) {\n      aggregate {\n        sum {\n          dailyvolumextz\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("h4",{id:"apiresttransactionlist"},"/api/rest/TransactionList"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'query TransactionList($_ilike: String = "%%") {\n  actions(order_by: {finish: desc}, where: {user: {_ilike: $_ilike}}) {\n    token_in\n    token_in_amount\n    token_out\n    token_out_amount\n    finish\n    pair_id\n    user\n    type\n  }\n}\n\n')))}d.isMDXComponent=!0}}]);