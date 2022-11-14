"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3226],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},24075:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>i,toc:()=>s,default:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_label:"Tutorials",hide_table_of_contents:!1},l="Tutorials",i={unversionedId:"bsc-tutorials",id:"bsc-tutorials",isDocsHomePage:!1,title:"Tutorials",description:"In this section, we have provided tutorials on usage of different components of BNB Smart Chain.",source:"@site/docs/bsc-tutorials.md",sourceDirName:".",slug:"/bsc-tutorials",permalink:"/docs/bsc-tutorials",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bsc-tutorials.md",tags:[],version:"current",frontMatter:{sidebar_label:"Tutorials",hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Introduction",permalink:"/docs/learn/intro"},next:{title:"Consensus Engine",permalink:"/docs/learn/consensus"}},s=[{value:"Validator",id:"validator",children:[],level:3},{value:"Full Node",id:"full-node",children:[],level:3},{value:"Archive Node",id:"archive-node",children:[],level:3},{value:"Staking and Delegation",id:"staking-and-delegation",children:[],level:3},{value:"Smart Contracts",id:"smart-contracts",children:[],level:3},{value:"Tokens",id:"tokens",children:[{value:"BEP Tokens",id:"bep-tokens",children:[],level:4},{value:"NFT",id:"nft",children:[],level:4}],level:3},{value:"Dapp Development",id:"dapp-development",children:[],level:3},{value:"Wallets",id:"wallets",children:[],level:3},{value:"BNB Chain Development (Video Series)",id:"bnb-chain-development-video-series",children:[],level:3}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorials"},"Tutorials"),(0,r.kt)("p",null,"In this section, we have provided tutorials on usage of different components of BNB Smart Chain."),(0,r.kt)("h3",{id:"validator"},"Validator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/validator/guideline-mainnet"},"How to Join BNB Smart Chain Mainnet as Validator")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/validator/guideline-testnet"},"How to Join BNB Smart Chain Testnet as Validator")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/validator/testnet"},"How to Create a Validator on BNB Smart Chain Testnet"))),(0,r.kt)("h3",{id:"full-node"},"Full Node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/validator/fullnode"},"How to Run a Full Node on BNB Smart Chain")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/local"},"How to Run a Local BNB Smart Chain Network")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/validator/upgrade-fullnode"},"How to Upgrade Geth (Full Node) on BNB Smart Chain"))),(0,r.kt)("h3",{id:"archive-node"},"Archive Node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/archivenode"},"How to Run an Archive Node on BNB Smart Chain"))),(0,r.kt)("h3",{id:"staking-and-delegation"},"Staking and Delegation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/staking-with-ext-wallet"},"How to Stake BNB Tokens on BSC")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/del-guide"},"How to Delegate BNB Tokens on BSC"))),(0,r.kt)("h3",{id:"smart-contracts"},"Smart Contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/proxy"},"How to Write BEP20 (Proxy) Contacts")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/verify-proxy"},"How to Verify BEP20 (Proxy) Contacts")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on How to Deploy and Test Smart Contracts on BSC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/remix"},"Using Remix")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/truffle-new"},"Using Truffle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/hardhat-new"},"Using HardHat")))),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/verify"},"How to Verify Deployed Smart Contract on bscScan"))),(0,r.kt)("h3",{id:"tokens"},"Tokens"),(0,r.kt)("h4",{id:"bep-tokens"},"BEP Tokens"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/issue-BEP20"},"How to Issue BEP20 Tokens")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/bind-tokens"},"How to Bind BEP2 and BEP20 Tokens")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/mirror"},"How to Mirror BEP2 and BEP20 Tokens")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/sync"},"How to Sync BEP2 and BEP20 Supply")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/cross-chain-transfer"},"How to Perform Cross-Chain Transfer of BEP2 and BEP20 Tokens Between BC and BSC"))),(0,r.kt)("h4",{id:"nft"},"NFT"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/nft-metadata-standard"},"How to Implement Token URI")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/ERC721"},"How to Deploy NFTs on BSC")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/bnb-chain-tutorial/tree/main/03-Using-BlackIDE-for-Deploying-NFTs"},"How to Deploy NFTs on BSC using BlackIDE"))),(0,r.kt)("h3",{id:"dapp-development"},"Dapp Development"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/dapp-dev/Hello-World"},"How to implement a Full Stack Hello World dApp on BSC")),(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"/docs/dapp-dev/web3js-tutorial"},"How to use Web3.js Library on BSC to Fetch Blockchain Data"))),(0,r.kt)("h3",{id:"wallets"},"Wallets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please refer ",(0,r.kt)("a",{parentName:"li",href:"/docs/wallets/wallet-tutorial-overview"},"here")," for a list of tutorials on different supported wallets.")),(0,r.kt)("h3",{id:"bnb-chain-development-video-series"},"BNB Chain Development (Video Series)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tutorial on ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=TsraNMHENIE&list=PLD2Yls_M04XPTdEBGmTu6A-atFn3_mmCZ"},"How to Build on BNB Chain"))))}d.isMDXComponent=!0}}]);