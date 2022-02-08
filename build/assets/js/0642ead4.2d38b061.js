"use strict";(self.webpackChunkspicy_docs=self.webpackChunkspicy_docs||[]).push([[59],{3905:function(e,t,i){i.d(t,{Zo:function(){return s},kt:function(){return y}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(i),y=r,h=p["".concat(c,".").concat(y)]||p[y]||d[y]||o;return i?n.createElement(h,a(a({ref:t},s),{},{components:i})):n.createElement(h,a({ref:t},s))}));function y(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4001:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=i(7462),r=i(3366),o=(i(7294),i(3905)),a=["components"],l={sidebar_position:2},c="Manage Liquidity",u={unversionedId:"tutorial-basics/manage-liquidity",id:"tutorial-basics/manage-liquidity",isDocsHomePage:!1,title:"Manage Liquidity",description:"Overview",source:"@site/docs/tutorial-basics/manage-liquidity.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/manage-liquidity",permalink:"/tutorial-basics/manage-liquidity",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Swap",permalink:"/tutorial-basics/swap"},next:{title:"Spice Farms",permalink:"/tutorial-basics/spice-farms"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Managing Liquidity",id:"managing-liquidity",children:[]},{value:"Spicy Liquidity Pool Tokens",id:"spicy-liquidity-pool-tokens",children:[]}],d={toc:s};function p(e){var t=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manage-liquidity"},"Manage Liquidity"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Each SpicySwap pool holds 2 FA-standard tokens. "),(0,o.kt)("h2",{id:"managing-liquidity"},"Managing Liquidity"),(0,o.kt)("p",null,"On the SpicySwap interface, a user will always be able to add liquidity to any two FA-standard tokens. If a pool does not exist, the button will show ",(0,o.kt)("strong",{parentName:"p"},"Create Pool"),", otherwise it will show ",(0,o.kt)("strong",{parentName:"p"},"Add"),"."),(0,o.kt)("p",null,"Executing ",(0,o.kt)("strong",{parentName:"p"},"Create Pool")," will deploy the pool contract and the initial liquidity will be added, in one contract call. This transaction will cost more in transaction fees due to the origination of the contract. Please be sure to check the transaction fee when creating a pool."),(0,o.kt)("p",null,"To add liquidity, enter the desired amount for the first or second currency. The interface will automatically calculate the optimal value for the other currency. At the bottom, the interface will show the estimated amount of liquidity tokens recieved. The minimum amount of liquidity to create a pool is 1e-15, which is burnt on creation. When ready, execute ",(0,o.kt)("strong",{parentName:"p"},"Add"),"."),(0,o.kt)("p",null,"To remove liquidity, loocate your balance for the pool nn the right-hand side, then enter the desired amount to remove. The interface will automatically calculate the estimated amount of each token that will be recieved. When ready, execute ",(0,o.kt)("strong",{parentName:"p"},"Remove"),"."),(0,o.kt)("h2",{id:"spicy-liquidity-pool-tokens"},"Spicy Liquidity Pool Tokens"),(0,o.kt)("p",null,"Whenever liquidity is added, Spicy Liquidity Pool tokens are minted and sent to the user's address. These tokens represent the user's share in the pool, and each pool has a unique token. Whenever a trade occurs, a 0.2% fee is charged to the transaction sender. This fee is distributed to all LPs in the pool upon completion of the trade. To retrieve the underlying liquidity, plus any fees accrued, a user must \"burn\" their Spicy LP tokens, exchanging them for their portion of the liquidity pool."),(0,o.kt)("p",null,"Spicy LP tokens have 18 decimals and are fully FA2-compliant, this means they can be sold, transferred, or integrated in other projects."))}p.isMDXComponent=!0}}]);