(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(12),n(5)),i=n(4),u=n.p+"static/media/plus.f5d4d283.png",l=(n(13),n(0));var d,j=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("img",{src:u,alt:"plus",onClick:function(){return a(!r)}}),Object(l.jsx)("ul",{className:"sidebar_list ".concat(r?"sidebar_list_active":""),children:["#715EF8","#A185F5","#CAB7FD","#F4ECFF","#E3D3EF"].map((function(t,n){return Object(l.jsx)("li",{className:"sidebar_list_item",style:{backgroundColor:t},onClick:function(){return e.addNote(t)}},n)}))})]})},b=n.p+"static/media/delete.c184eb9e.svg";n(15);var f=function(e){var t=function(t,n){var c;c=function(){return e.upDateText(t,n)},clearTimeout(d),d=setTimeout(c,500)};return Object(l.jsxs)("div",{className:"note",style:{backgroundColor:e.note.color},children:[Object(l.jsx)("textarea",{className:"note_text",defaultValue:e.note.text,onChange:function(n){return t(n.target.value,e.note.id)}}),Object(l.jsxs)("div",{className:"note_footer",children:[Object(l.jsx)("p",{children:function(e){if(!e)return"";var t=new Date(e),n=t.getHours(),c=n>12?"PM":"AM";n=(n=n||"12")>12?n=24-n:n;var r=t.getMinutes();r=r<10?"0"+r:r;var a=t.getDate(),o=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()];return"".concat(n,":").concat(r," ").concat(c," ").concat(a," ").concat(o)}(e.note.time)}),Object(l.jsx)("img",{src:b,alt:"delete",onClick:function(){return e.deleteNote(e.note.id)}})]})]})};n(16);var O=function(e){var t=function(e){for(var t=[],n=e.length-1;n>=0;--n)t.push(e[n]);return t}(e.notes);return Object(l.jsxs)("div",{className:"note-container",children:[Object(l.jsx)("h1",{children:"Our Note"}),Object(l.jsx)("div",{className:"note-container-notes custom-scroll",children:(null===t||void 0===t?void 0:t.length)>0?t.map((function(t){return Object(l.jsx)(f,{note:t,deleteNote:e.deleteNote,upDateText:e.upDateText},t.id)})):Object(l.jsx)("h2",{children:"Please Add Your Notes"})})]})};n(17);var x=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("notes-app"))||[]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){localStorage.setItem("notes-app",JSON.stringify(n))}),[n]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{addNote:function(e){var t=Object(s.a)(n);t.push({id:Date.now()+""+Math.floor(78*Math.random()),text:"",time:Date.now(),color:e}),r(t)}}),Object(l.jsx)(O,{notes:n,deleteNote:function(e){var t=Object(s.a)(n),c=t.findIndex((function(t){return t.id===e}));c<0||(t.splice(c,1),r(t))},upDateText:function(e,t){var c=Object(s.a)(n),a=c.findIndex((function(e){return e.id===t}));a<0||(c[a].text=e,r(c))}})]})};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.24ed62de.chunk.js.map