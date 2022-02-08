"use strict";(self.webpackChunkspicy_docs=self.webpackChunkspicy_docs||[]).push([[34],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1434:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:1},l="Integrations",s={unversionedId:"tutorial-extras/integrations",id:"tutorial-extras/integrations",isDocsHomePage:!1,title:"Integrations",description:"Under Construction!",source:"@site/docs/tutorial-extras/integrations.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/integrations",permalink:"/tutorial-extras/integrations",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Spice Farms",permalink:"/tutorial-basics/spice-farms"},next:{title:"API Reference",permalink:"/tutorial-extras/api-reference"}},p=[{value:"Token Level Integration",id:"token-level-integration",children:[]},{value:"Contract Level Integration",id:"contract-level-integration",children:[]},{value:"Interface Level Integration",id:"interface-level-integration",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrations"},"Integrations"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Under Construction!"))),(0,a.kt)("p",null,"SpicySwap was built with integrations in mind. There are 3 levels of integrations into the SpicySwap protocol: contract level, token level, or interface level."),(0,a.kt)("h2",{id:"token-level-integration"},"Token Level Integration"),(0,a.kt)("p",null,"Token level integration is about using SpicySwap's LP tokens in an external product. Spicy LP tokens are FA2-stamdard with 18 decimals for high compatibility. These LP tokens can be used for yield farming, or other token locking products. This is a classic way of incentivizing liquidity in AMM pools, and there will be a number of farms on SalsaDAO using Spicy LP as the staking currency."),(0,a.kt)("h2",{id:"contract-level-integration"},"Contract Level Integration"),(0,a.kt)("p",null,"Integrating with SpicySwap at the contract level means sending a contract call into SpicySwap from an external contract. External contracts can call either the SpicySwap ",(0,a.kt)("strong",{parentName:"p"},"router")," or ",(0,a.kt)("strong",{parentName:"p"},"core pool")," contracts to execute DEX actions. Calling the router contract is simpler, but it is more efficient to call directly into the core pool contracts. The SpicySwap router can be used as a template to build contract level interfaces into core pools."),(0,a.kt)("p",null,"Integrating at the contract level is the most powerful way to use SpicySwap's functionality as a building block. On SpicySwap, developers can implement automatic buyback mechanisms for fair farming, implement cross-DEX arbitrage, use flash swaps, and more. Combining contract level integration with the on-chain time-weighted price average (TWAP) can enable dynamic interactions that change based on token price."),(0,a.kt)("h2",{id:"interface-level-integration"},"Interface Level Integration"),(0,a.kt)("p",null,"Long term, there will be an SDK released to help front-end developers build web interfaces into SpicySwap. This will allow DEX actions like swapping and managing liquidity to be available outside of the SpicySwap interface. This will be an important tool when creating Spicy-integrated projects or farms. More information will be released once SpicySwap hits mainnet."))}d.isMDXComponent=!0}}]);