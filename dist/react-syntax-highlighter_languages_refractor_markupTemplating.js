"use strict";(self.webpackChunkgithub_gist_search=self.webpackChunkgithub_gist_search||[]).push([[3047],{3205:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"==typeof o&&!o(e))return e;for(var r,s=i.length;-1!==t.code.indexOf(r=n(a,s));)++s;return i[s]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function i(s){for(var u=0;u<s.length&&!(r>=o.length);u++){var c=s[u];if("string"==typeof c||c.content&&"string"==typeof c.content){var g=o[r],l=t.tokenStack[g],p="string"==typeof c?c:c.content,f=n(a,g),k=p.indexOf(f);if(k>-1){++r;var h=p.substring(0,k),m=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),d=p.substring(k+f.length),y=[];h&&y.push.apply(y,i([h])),y.push(m),d&&y.push.apply(y,i([d])),"string"==typeof c?s.splice.apply(s,[u,1].concat(y)):c.content=y}}else c.content&&i(c.content)}return s}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);