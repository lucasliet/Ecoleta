(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/logo.47c4581a.svg"},40:function(e,t,a){e.exports=a(70)},45:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(38),r=a.n(c),o=a(13),i=a(3),m=a(22),u=(a(45),a(17)),s=a.n(u),d=function(){return l.a.createElement("div",{id:"page-home"},l.a.createElement("div",{className:"content"},l.a.createElement("header",null,l.a.createElement("img",{src:s.a,alt:"Ecoleta"})),l.a.createElement("main",null,l.a.createElement("h1",null,"Seu marketplace de coleta de res\xedduos"),l.a.createElement("p",null,"Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente"),l.a.createElement(o.b,{to:"create-point"},l.a.createElement("span",null,l.a.createElement(m.b,null)),l.a.createElement("strong",null,"Cadastre um ponto de coleta")))))},p=a(39),E=a(20),f=a(27),b=a(10),g=a(73),h=a(74),v=a(72),j=a(16),O=a.n(j),S=O.a.create({baseURL:"http://cafezinho.sytes.net:3333"}),y=(a(68),function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),u=Object(b.a)(r,2),d=u[0],j=u[1],y=Object(n.useState)([]),C=Object(b.a)(y,2),N=C[0],w=C[1],k=Object(n.useState)({name:"",email:"",whatsapp:""}),x=Object(b.a)(k,2),F=x[0],z=x[1],D=Object(n.useState)("0"),I=Object(b.a)(D,2),J=I[0],M=I[1],P=Object(n.useState)("0"),U=Object(b.a)(P,2),_=U[0],A=U[1],B=Object(n.useState)([]),L=Object(b.a)(B,2),R=L[0],V=L[1],W=Object(n.useState)([0,0]),q=Object(b.a)(W,2),G=q[0],H=q[1],K=Object(n.useState)([0,0]),Q=Object(b.a)(K,2),T=Q[0],X=Q[1],Y=Object(i.e)();function Z(e){var t=e.target,a=t.name,n=t.value;z(Object(f.a)(Object(f.a)({},F),{},Object(E.a)({},a,n)))}return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,a=t.latitude,n=t.longitude;X([a,n])}))}),[]),Object(n.useEffect)((function(){S.get("items").then((function(e){c(e.data)}))}),[]),Object(n.useEffect)((function(){O.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then((function(e){var t=e.data.map((function(e){return e.sigla}));j(t)}))}),[]),Object(n.useEffect)((function(){"0"!==J&&O.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(J,"/municipios")).then((function(e){var t=e.data.map((function(e){return e.nome}));w(t)}))}),[J]),l.a.createElement("div",{id:"page-create-point"},l.a.createElement("header",null,l.a.createElement("img",{src:s.a,alt:"Ecoleta"}),l.a.createElement(o.b,{to:"/"},l.a.createElement(m.a,null),"Voltar para home")),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=F.name,a=F.email,n=F.whatsapp,l=J,c=_,r=Object(b.a)(G,2),o={name:t,email:a,whatsapp:n,uf:l,city:c,latitude:r[0],longitude:r[1],items_ids:R};S.post("points",o),alert("Ponto de coleta registrado"),Y.push("/")}},l.a.createElement("h1",null,"Cadastro ",l.a.createElement("br",null),"pontos de coleta."),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Dados")),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Nome da entidade: "),l.a.createElement("input",{type:"text",name:"name",id:"name",onChange:Z})),l.a.createElement("div",{className:"field-group"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"email"},"E-mail: "),l.a.createElement("input",{type:"email",name:"email",id:"email",onChange:Z})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"whatsapp"},"Whatsapp: "),l.a.createElement("input",{type:"text",name:"whatsapp",id:"whatsapp",onChange:Z})))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Endere\xe7o"),l.a.createElement("span",null,"Selecione o endere\xe7o no mapa")),l.a.createElement(g.a,{center:T,zoom:15,onClick:function(e){H([e.latlng.lat,e.latlng.lng])}},l.a.createElement(h.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(v.a,{position:G})),l.a.createElement("div",{className:"field-group"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"uf"},"Estado: "),l.a.createElement("select",{name:"uf",id:"uf",value:J,onChange:function(e){var t=e.target.value;M(t)}},l.a.createElement("option",{value:"0"}," Selectione um UF"),d.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"city"},"Cidade: "),l.a.createElement("select",{name:"city",id:"city",value:_,onChange:function(e){var t=e.target.value;A(t)}},l.a.createElement("option",{value:"0"}," Selectione um cidade"),N.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"\xectens de coleta")),l.a.createElement("ul",{className:"items-grid"},a.map((function(e){return l.a.createElement("li",{key:e.id,onClick:function(){return function(e){if(R.findIndex((function(t){return t===e}))>=0){var t=R.filter((function(t){return t!==e}));V(t)}else V([].concat(Object(p.a)(R),[e]))}(e.id)},className:R.includes(e.id)?"selected":""},l.a.createElement("img",{src:e.image_url,alt:e.title}),l.a.createElement("span",null,e.title))})))),l.a.createElement("button",null,"Cadastrar ponto de coleta")))}),C=function(){return l.a.createElement(o.a,null,l.a.createElement(i.a,{component:d,path:"/",exact:!0}),l.a.createElement(i.a,{component:d,path:"/Ecoleta"}),l.a.createElement(i.a,{component:y,path:"/Ecoleta/create-point"}))};a(69);var N=function(){return l.a.createElement("div",null,l.a.createElement(C,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6eb2218f.chunk.js.map