"use strict";(self.webpackChunkspicy_docs=self.webpackChunkspicy_docs||[]).push([[597],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3212:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:3},p="Spice Farms",c={unversionedId:"tutorial-basics/spice-farms",id:"tutorial-basics/spice-farms",isDocsHomePage:!1,title:"Spice Farms",description:"Overview",source:"@site/docs/tutorial-basics/spice-farms.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/spice-farms",permalink:"/tutorial-basics/spice-farms",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Manage Liquidity",permalink:"/tutorial-basics/manage-liquidity"},next:{title:"Integrations",permalink:"/tutorial-extras/integrations"}},l=[{value:"Overview",id:"overview",children:[]},{value:"How to Participate",id:"how-to-participate",children:[]},{value:"Spice Farm Strategies",id:"spice-farm-strategies",children:[]}],u={toc:l};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spice-farms"},"Spice Farms"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Spice Farming is SpicySwap's flagship feature, enabled by the Spice ($SPI) token. Spice Farming is a yield farming mechanism built directly into the SpicySwap protocol, created to incentivize liquidity providing and reward protocol supporters."),(0,i.kt)("p",null,"On SpicySwap, a 0.3% fee applies to each trade: ",(0,i.kt)("strong",{parentName:"p"},"0.2%")," goes to LP holders, and ",(0,i.kt)("strong",{parentName:"p"},"0.1%")," goes to $SPI farmers. The Spice Farming fee is split evenly between all participants in a pool's Spice Farm. Each pool on SpicySwap has a Spice Farm, and every future pool will have one as well."),(0,i.kt)("h2",{id:"how-to-participate"},"How to Participate"),(0,i.kt)("p",null,"To start Spice Farming, obtain $SPI/WTZ LP tokens on SpicySwap. ",(0,i.kt)("strong",{parentName:"p"},"$SPI/WTZ")," LP tokens are used as the staking currency for every Spice Farm. Once the $SPI/WTZ is obtained, it can be staked on the ",(0,i.kt)("strong",{parentName:"p"},"Farm")," tab of the SpicySwap interface."),(0,i.kt)("p",null,"In the ",(0,i.kt)("strong",{parentName:"p"},"Farm")," tab, feel free to choose any arbitrary pair to stake $SPI/WTZ LP in. Staked Balance and Unclaimed Rewards will be displayed if $SPI/WTZ has already been staked. "),(0,i.kt)("p",null,"Enter the desired amount to ",(0,i.kt)("strong",{parentName:"p"},"Stake")," or ",(0,i.kt)("strong",{parentName:"p"},"Unstake"),", and execute the appropriate action. Once staking is complete, a proportion of the 0.1% Spice Farm fee will start to accrue on each transaction. If there are no Spice Farmers staking in a pool, the fee will be ",(0,i.kt)("strong",{parentName:"p"},"burnt"),". "),(0,i.kt)("p",null,"Rewards are paid out in LP shares of the pool that is being farmed. For example, if a user wants to claim rewards in the ",(0,i.kt)("strong",{parentName:"p"},"$sDAO/WTZ")," Spice Farm, they will be paid out in ",(0,i.kt)("strong",{parentName:"p"},"$sDAO/WTZ LP tokens"),". Spicy LP tokens are used as reward currency to uphold the 1:1 ratio in the pool. "),(0,i.kt)("p",null,"Since the rewards are LP tokens, they automatically start earning the normal 0.2% transaction fee once accrued. ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"There is no need to claim to get this benefit")),". "),(0,i.kt)("p",null,"To fully cash-out rewards, the LP tokens must be claimed and then burnt using the ",(0,i.kt)("strong",{parentName:"p"},"Remove Liquidity")," functionality. We will release a convienience function to batch this action together."),(0,i.kt)("h2",{id:"spice-farm-strategies"},"Spice Farm Strategies"),(0,i.kt)("p",null,"Spice Farming efficiently on SpicySwap can be done in multiple ways. Overall, the most important metric in Spice Farms is ",(0,i.kt)("strong",{parentName:"p"},"volume"),". Users will want to capture the largest amount of fees, which means staking in high-traffic Spice Farms. For more sustained rewards, a simple strategy would be to locate popular stablecoin or WTZ pairs and stake long term. The drawback of this strategy is that many others will have the same idea, leading to a smaller share."),(0,i.kt)("p",null,"Another strategy is ",(0,i.kt)("strong",{parentName:"p"},"Targeted Spice Farming"),", or volume-chasing. Outside of the most popular pools, volume can be a very volatile metric. The aim of this strategy is to find pools with high short-term volume and rapidly move stacks of SPI/WTZ into those Spice Farms to capture fees. This strategy would likely be popular during new token releases and IDOs, as the hype can bring major short-term spikes in volume."))}m.isMDXComponent=!0}}]);