"use strict";(self.webpackChunkgithub_gist_search=self.webpackChunkgithub_gist_search||[]).push([[5003],{5003:(e,s,r)=>{r.r(s),r.d(s,{GistsContainer:()=>I,default:()=>J});var i=r(6954),n=r(3379),a=r.n(n),t=r(7795),l=r.n(t),o=r(569),d=r.n(o),c=r(3565),h=r.n(c),g=r(9216),u=r.n(g),m=r(4589),x=r.n(m),f=r(5067),p={};p.styleTagTransform=x(),p.setAttributes=h(),p.insert=d().bind(null,"head"),p.domAPI=l(),p.insertStyleElement=u(),a()(f.Z,p);var j=f.Z&&f.Z.locals?f.Z.locals:void 0,v=r(5893),k=()=>{const e=(0,i.C)((e=>e.user));return e?(0,v.jsxs)("div",{className:j.authorInfo,children:[(0,v.jsx)("figure",{className:j.avatar,children:(0,v.jsx)("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:j.user,children:(0,v.jsx)("img",{src:e.avatar_url,alt:e.login})})}),(0,v.jsx)("h2",{className:j.authorName,children:e.name}),(0,v.jsx)("p",{className:j.username,children:e.login}),(0,v.jsx)("p",{className:j.bio,children:e.bio})]}):null},w=r(7294),b=r(5600),N=r(1813);const _=({gist:e})=>{var s;const r=(0,w.useMemo)((()=>new Date(e.created_at)),[e.created_at]),i=(null===(s=Object.keys(e.files))||void 0===s?void 0:s[0])||"N/A";return(0,v.jsxs)("div",{className:"gist-author",children:[(0,v.jsx)("figure",{className:"gist-avatar",children:(0,v.jsx)("img",{src:e.owner.avatar_url,alt:e.owner.login})}),(0,v.jsxs)("div",{className:"gist-left-info",children:[(0,v.jsxs)("div",{className:"gist-path",children:[(0,v.jsx)("a",{href:e.owner.html_url,target:"_blank",rel:"noopener noreferrer",children:e.owner.login}),"/",(0,v.jsx)("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",children:i})]}),(0,v.jsxs)("div",{className:"gist-date",children:["Created ",(0,v.jsx)(N.Z,{date:r})]})]})]})},C=({gist:{id:e}})=>{const s=(0,i.C)((e=>e.forks)),r=(0,i.T)();(0,w.useEffect)((()=>{e in s||r(b.eX.getGistForks(e))}),[e]);const n=s[e];if(!n||!n.number)return null;const a=n.forkAuthors.map((e=>(0,v.jsxs)("a",{className:"gist-forker",href:e.html_url,target:"_blank",rel:"noopener noreferrer",children:[(0,v.jsx)("figure",{className:"gist-forker-image",children:(0,v.jsx)("img",{loading:"lazy",src:e.avatar_url,alt:e.name})}),e.login]},e.id)));return(0,v.jsxs)("div",{className:"gist-forks",children:["Forked by: ",a]})};function Z(e,s,r){return r.indexOf(e)===s}const R=({gist:e})=>{const s=Object.values(e.files).map((e=>e.language)).filter(Boolean).filter(Z);return s.length?(0,v.jsx)("div",{className:"gist-tags",children:s.map((e=>(0,v.jsx)("span",{className:`gist-tag gist-language-${e.toLowerCase().replace(/[^a-z]/,"-")}`,children:e},e)))}):null},z=({gist:e})=>(0,v.jsx)("div",{className:"gist-info",children:(0,v.jsx)(R,{gist:e})}),y=(0,w.lazy)((()=>Promise.all([r.e(5953),r.e(3910)]).then(r.bind(r,3910))));var L=({gist:e})=>{const s=(0,i.T)(),r=(0,i.C)((e=>e.loadedGists)),n=(0,i.C)((e=>e.loadingGists)),a=(0,i.C)((e=>e.loadGistsErrors)),[t,l]=(0,w.useState)(!1),o=()=>{t?l(!1):(e.id in r||s(b.eX.loadGist(e.id)),l(!0))};return(0,v.jsxs)("li",{className:"gist",children:[(0,v.jsxs)("div",{className:"gist-header",onClick:o,children:[(0,v.jsx)(_,{gist:e}),(0,v.jsx)(z,{gist:e})]}),(0,v.jsx)("div",{className:"gist-subheader",onClick:o,children:(0,v.jsx)(C,{gist:e})}),(0,v.jsx)("div",{className:"gist-body",children:t&&(0,v.jsx)(w.Suspense,{fallback:(0,v.jsx)("p",{className:"loading-content",children:"Loading..."}),children:(0,v.jsx)(y,{gist:e,loading:n.includes(e.id)||!1,content:r[e.id]||null,error:a[e.id]||!1})})})]})},T=r(7975),Y={};Y.styleTagTransform=x(),Y.setAttributes=h(),Y.insert=d().bind(null,"head"),Y.domAPI=l(),Y.insertStyleElement=u(),a()(T.Z,Y);var A=T.Z&&T.Z.locals?T.Z.locals:void 0,D=()=>{const e=(0,i.C)((e=>e.gists));return e&&e.length?(0,v.jsx)("ul",{className:A.gistsList,children:e.map((e=>(0,v.jsx)(L,{gist:e},e.id)))}):null},M=r(4568),S={};S.styleTagTransform=x(),S.setAttributes=h(),S.insert=d().bind(null,"head"),S.domAPI=l(),S.insertStyleElement=u(),a()(M.Z,S);var W=M.Z&&M.Z.locals?M.Z.locals:void 0,B=r(8126),H=r(7946);B.Z.addDefaultLocale(H);const I=()=>{const e=(0,i.C)((e=>e.username)),s=(0,i.C)((e=>e.gists)),r=(0,i.C)((e=>e.searching)),n=(0,i.C)((e=>e.searchError));return r?(0,v.jsxs)("div",{className:W.loading,children:[(0,v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,v.jsx)("span",{children:"Loading..."})]}):n?(0,v.jsxs)("div",{className:W.error,children:[(0,v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,v.jsxs)("span",{children:["An error has occured: ",n,"."]})]}):e?s&&s.length?(0,v.jsxs)("div",{className:W.container,children:[(0,v.jsx)("div",{className:W.authorInfo,children:(0,v.jsx)(k,{})}),(0,v.jsx)("div",{className:W.gistsList,children:(0,v.jsx)(D,{})})]}):(0,v.jsxs)("div",{className:W.error,children:[(0,v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,v.jsxs)("span",{children:["No gists found for username ",(0,v.jsxs)("b",{children:['"',e,'"']})]})]}):null};var J=I},5067:(e,s,r)=>{var i=r(3645),n=r.n(i)()((function(e){return e[1]}));n.push([e.id,"._YDp8_WIho5WRTRwci_x{margin:0 0 16px}._YDp8_WIho5WRTRwci_x img{border-radius:50%;overflow:hidden;width:100%;height:auto}.IHHSKB2hkrEdWJTWixNJ{font-weight:600;font-size:20px;margin-bottom:0}.MSm5MMs6DcSiB5VReQ0b{font-weight:200;font-size:16px;margin-top:0;margin-bottom:16px;letter-spacing:.2px}",""]),n.locals={avatar:"_YDp8_WIho5WRTRwci_x",authorName:"IHHSKB2hkrEdWJTWixNJ",username:"MSm5MMs6DcSiB5VReQ0b"},s.Z=n},4568:(e,s,r)=>{var i=r(3645),n=r.n(i)()((function(e){return e[1]}));n.push([e.id,'.PXbJeoY9eRX1Q2Zdbhbk{padding:10px 0;display:grid;gap:44px;grid-template-areas:"a" "b"}@media screen and (min-width: 600px){.PXbJeoY9eRX1Q2Zdbhbk{grid-template-areas:"a b";grid-template-columns:minmax(200px, 280px) 1fr}}.Fk3YkjyHrNmqCcHpR8zu{grid-area:a}.Lw7PAYz1o3SbUAv1dwNu{grid-area:b}._LoiChZTRfzKf0_wwN9t{font-weight:300;font-size:20px;text-align:center}.DRHZuTOcPY8A3XkYIHgo,.rBfu0ljiEJz_eehc_Rsq{display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap;gap:10px}.DRHZuTOcPY8A3XkYIHgo svg,.rBfu0ljiEJz_eehc_Rsq svg{width:24px;height:24px;stroke:currentColor}.rBfu0ljiEJz_eehc_Rsq{color:red}',""]),n.locals={container:"PXbJeoY9eRX1Q2Zdbhbk",authorInfo:"Fk3YkjyHrNmqCcHpR8zu",gistsList:"Lw7PAYz1o3SbUAv1dwNu",title:"_LoiChZTRfzKf0_wwN9t",loading:"DRHZuTOcPY8A3XkYIHgo",error:"rBfu0ljiEJz_eehc_Rsq"},s.Z=n},7975:(e,s,r)=>{var i=r(3645),n=r.n(i)()((function(e){return e[1]}));n.push([e.id,"._DDMzG9SsDZBUWYkCNRJ{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;flex-wrap:wrap;align-items:stretch;gap:32px}",""]),n.locals={gistsList:"_DDMzG9SsDZBUWYkCNRJ"},s.Z=n}}]);