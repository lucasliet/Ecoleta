(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.26434f1f.svg"},42:function(e,t,a){e.exports=a(73)},47:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(38),r=a.n(c),o=a(15),i=a(4),m=a(14),u=(a(47),a(18)),s=a.n(u),p=function(){return l.a.createElement("div",{id:"page-home"},l.a.createElement("div",{className:"content"},l.a.createElement("header",null,l.a.createElement("img",{src:s.a,alt:"Ecoleta"})),l.a.createElement("main",null,l.a.createElement("h1",null,"Seu marketplace de coleta de res\xedduos"),l.a.createElement("p",null,"Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente"),l.a.createElement(o.b,{to:"/Ecoleta/create-point"},l.a.createElement("span",null,l.a.createElement(m.b,null)),l.a.createElement("strong",null,"Cadastre um ponto de coleta")))))},d=a(41),E=a(21),f=a(27),b=a(7),g=a(76),v=a(77),h=a(75),j=a(17),O=a.n(j),S=O.a.create({baseURL:"https://ecoleta-server.herokuapp.com/"}),y=a(40),w=(a(70),function(e){var t=e.upload,a=Object(n.useState)(""),c=Object(b.a)(a,2),r=c[0],o=c[1],i=Object(n.useCallback)((function(e){var a=e[0],n=URL.createObjectURL(a);o(n),t(a)}),[t]),u=Object(y.a)({onDrop:i,accept:"image/*"}),s=u.getRootProps,p=u.getInputProps,d=u.isDragActive;return l.a.createElement("div",Object.assign({className:"dropzone"},s()),l.a.createElement("input",Object.assign({},p(),{accept:"image/*"})),r?l.a.createElement("img",{src:r}):d?l.a.createElement("p",{style:{padding:20}},l.a.createElement(m.c,null),"Solte a foto do estabelecimento aqui ..."):l.a.createElement("p",{style:{padding:20}},l.a.createElement(m.c,null),"Arraste aqui, ou clique para enviar a foto do estabelecimento"))}),C=(a(71),function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),u=Object(b.a)(r,2),p=u[0],j=u[1],y=Object(n.useState)([]),C=Object(b.a)(y,2),N=C[0],k=C[1],x=Object(n.useState)([]),F=Object(b.a)(x,2),D=F[0],P=F[1],R=Object(n.useState)({name:"",email:"",whatsapp:""}),U=Object(b.a)(R,2),q=U[0],z=U[1],A=Object(n.useState)("0"),I=Object(b.a)(A,2),L=I[0],J=I[1],M=Object(n.useState)("0"),_=Object(b.a)(M,2),B=_[0],V=_[1],W=Object(n.useState)([]),G=Object(b.a)(W,2),H=G[0],K=G[1],Q=Object(n.useState)([0,0]),T=Object(b.a)(Q,2),X=T[0],Y=T[1],Z=Object(n.useState)([0,0]),$=Object(b.a)(Z,2),ee=$[0],te=$[1],ae=Object(i.e)();function ne(e){var t=e.target,a=t.name,n=t.value;z(Object(f.a)(Object(f.a)({},q),{},Object(E.a)({},a,n)))}return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,a=t.latitude,n=t.longitude;te([a,n])}))}),[]),Object(n.useEffect)((function(){S.get("items").then((function(e){c(e.data)}))}),[]),Object(n.useEffect)((function(){O.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then((function(e){var t=e.data.map((function(e){return e.sigla}));k(t)}))}),[]),Object(n.useEffect)((function(){"0"!==L&&O.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(L,"/municipios")).then((function(e){var t=e.data.map((function(e){return e.nome}));P(t)}))}),[L]),l.a.createElement("div",{id:"page-create-point"},l.a.createElement("header",null,l.a.createElement("img",{src:s.a,alt:"Ecoleta"}),l.a.createElement(o.b,{to:"/Ecoleta"},l.a.createElement(m.a,null),"Voltar para home")),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=q.name,a=q.email,n=q.whatsapp,l=L,c=B,r=Object(b.a)(X,2),o=r[0],i=r[1],m=H,u=new FormData;u.append("name",t),u.append("email",a),u.append("whatsapp",n),u.append("uf",l),u.append("city",c),u.append("latitude",String(o)),u.append("longitude",String(i)),u.append("items_ids",m.join(",")),p&&u.append("image",p),S.post("points",u),alert("Ponto de coleta registrado"),ae.push("/")}},l.a.createElement("h1",null,"Cadastro ",l.a.createElement("br",null),"pontos de coleta."),l.a.createElement(w,{upload:j}),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Dados")),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Nome da entidade: "),l.a.createElement("input",{type:"text",name:"name",id:"name",onChange:ne})),l.a.createElement("div",{className:"field-group row"},l.a.createElement("div",{className:"field col-12 col-md-6"},l.a.createElement("label",{htmlFor:"email"},"E-mail: "),l.a.createElement("input",{type:"email",name:"email",id:"email",onChange:ne})),l.a.createElement("div",{className:"field col-12 col-md-6"},l.a.createElement("label",{htmlFor:"whatsapp"},"Whatsapp: "),l.a.createElement("input",{type:"text",name:"whatsapp",id:"whatsapp",onChange:ne})))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Endere\xe7o"),l.a.createElement("span",null,"Selecione o endere\xe7o no mapa")),l.a.createElement(g.a,{center:ee,zoom:15,onClick:function(e){Y([e.latlng.lat,e.latlng.lng])}},l.a.createElement(v.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(h.a,{position:X})),l.a.createElement("div",{className:"field-group row"},l.a.createElement("div",{className:"field col-12 col-md-6"},l.a.createElement("label",{htmlFor:"uf"},"Estado: "),l.a.createElement("select",{name:"uf",id:"uf",value:L,onChange:function(e){var t=e.target.value;J(t)}},l.a.createElement("option",{value:"0"}," Selectione um UF"),N.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("div",{className:"field col-12 col-md-6"},l.a.createElement("label",{htmlFor:"city"},"Cidade: "),l.a.createElement("select",{name:"city",id:"city",value:B,onChange:function(e){var t=e.target.value;V(t)}},l.a.createElement("option",{value:"0"}," Selectione um cidade"),D.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"\xectens de coleta")),l.a.createElement("ul",{className:"items-grid"},a.map((function(e){return l.a.createElement("li",{key:e.id,onClick:function(){return function(e){if(H.findIndex((function(t){return t===e}))>=0){var t=H.filter((function(t){return t!==e}));K(t)}else K([].concat(Object(d.a)(H),[e]))}(e.id)},className:H.includes(e.id)?"selected":""},l.a.createElement("img",{src:e.image_url,alt:e.title}),l.a.createElement("span",null,e.title))})))),l.a.createElement("button",null,"Cadastrar ponto de coleta")))}),N=function(){return l.a.createElement(o.a,null,l.a.createElement(i.a,{component:p,path:"/Ecoleta",exact:!0}),l.a.createElement(i.a,{component:C,path:"/Ecoleta/create-point"}))};a(72);var k=function(){return l.a.createElement("div",null,l.a.createElement(N,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.bd31a2a6.chunk.js.map