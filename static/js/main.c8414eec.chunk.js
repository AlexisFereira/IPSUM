(this.webpackJsonpipsumapp=this.webpackJsonpipsumapp||[]).push([[0],{15:function(e,n,c){},22:function(e,n,c){"use strict";c.r(n);var s,t=c(1),i=c.n(t),a=c(6),r=c.n(a),o=(c(15),c(2)),l=c(3),d=c(0),m=l.a.div(s||(s=Object(o.a)(["\n    position        : relative;\n    display         : flex;\n    flex-flow       : "," wrap;\n    justify-content : ",";\n    align-items     : ",";\n    flex            : ",";\n"])),(function(e){return e.direction}),(function(e){return e.jc}),(function(e){return e.alg}),(function(e){return e.flex}));function j(e){var n=e.children,c=e.jc,s=void 0===c?"center":c,t=e.alg,i=void 0===t?"center":t,a=e.flex,r=void 0===a?"0 0 auto":a,o=e.className,l=e.direction,j=void 0===l?"row":l;return Object(d.jsx)(m,{jc:s,alg:i,flex:r,className:o,direction:j,children:n})}var x,b,p,h,u,g,O=i.a.memo(j),f="#4ABFCE",N="#153236",A={iniciado:"#4EC84C",noiniciado:"#EFB500",detenido:"#FB8631",finalizado:"#999999   "},w=l.a.div(x||(x=Object(o.a)(["\n    width:100%;\n    background:",";\n    \n    .top-right{\n        button{\n            position:relative;\n            width:40px;\n            height:40px;\n            background:transparent;\n            color:white;\n            border-right:1px solid #214C52;\n            border-left:1px solid #214C52;\n            margin-right:1-px;\n            padding:0;\n            text-align:center;\n            \n            \n            .user{\n                width:26px;\n                height:26px;\n                overflow:hidden;\n                border-radius:50%;\n            }\n            \n            &:hover{\n            background:rgba(0,0,0,.2)\n            }\n            \n            .question{\n                border:2px solid white;\n                border-radius:6px;\n                width:20px;\n                display:inline-block;\n                padding:0;\n                height:20px;\n                line-height:15px;\n                text-align:center;\n                font-size:14px\n            }\n            .active{\n                position:absolute;\n                bottom:10px;\n                right:8px;\n                width:10px;\n                height:10px;\n                border-radius:50%;\n                background:#FB8631;\n            }\n        }\n    }\n"])),N),v=function(e){return Object(d.jsx)(w,{children:Object(d.jsx)("div",{className:"container px-sm-0",children:Object(d.jsxs)(O,{className:"wc",jc:"space-between",alg:"stretch",children:[Object(d.jsx)(O,{flex:"0 0 40px",direction:"column",children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ3SURBVHgBZVZNaF1VEJ45976Xl8SQYLFSNUkpiijFri2CdWlEF7rQjagguFBIxbXYleBKBVddqN3pUhfupG6EohQRYkTQ9rVWRKWlphrfzz1n/Gbm3JP7kgsn97xz7vlm5vtm5oQJzxPnL55OFDZF0tFGhJqUMIim+tbfQoI11t9TzKc6t7Wob/J1oZhEetjrCQ17ks7cfGHjHG+cv/giEX8k+gGGHowGIDQIFd1RBdreHZnRaXLjE1Jw0W/cWDZcYV5jre9GqJb0egD4W5gDjijpEOGI3/cuLdBnp07QyUGPRjdvmXHdj+03AIoxMbzGHlBgsMI3NfYrnLchshmwt441A9UPDQjvN48fo6W6JjhGo1v/0mQ0wZ5TFn3gjKhBgUGA6iAKOFwJcVBjQkdrVnB4k+BBMnA/fB8i6D6T8YQkMEYwj1MbEd6M8wBkBQdFiCRR5UYlGDViRvQgtlg0gvbR6YOHlumexXlqoukg6lDjogICgHASXnsUYhFkQ4gEglro7hFGcl67Fl4GXd88/Sg9t3qYjq8sctZCDVFQro2WpKDFSK0GdT9ZuD5cMKepPKw22Kar/ZpeWT9CWxsP8/Ord/IaolKuK1ZR2egwgzhh62rIhNJwSUoGxQKt6SWZKP+roq8vDuhYHejUA2u0PD/gV7/+nnbHjWVOrdmUWqo8AtnznlqxeSaEriA0u/MkaHvt/rWWGm6zyUVGTihYyqkZSwrSjAhyYGZUFIOP332YEILWgVRSwM2gaWC5nClKntfcdbqVZGYuUmJbGfQB0tBk2lj+By8yp6jRitTM0VqQoofMsMIt6F5cgblLnu2p0XHKVOV0zRSV8vc3dNiZNh236eCzby24Hxb7f8x4sbjInjUSW7GzFmd/vnYAi2lPcrbk7Wqi1AigNUVRuKh61aFWMHGvreDckPA720Nt09a8mPZxoWs8G4ESFnSIG4Nx1m9rTcuYqzgWqjxt3966ROHGDj115HZ65K5DnjndsGTWsHnPbCIHyVnUpmbbihvt9ZZVTtfu8m306fUdeejjL+STHy7R1l83Cl1hnwaZJq0JNnAvPG+5TVsPuauW6lbn5vo8Wgl0GR317I9X6MufrhpFb5w80aEIEai4YnNLVy26Wr3WrEHPM/5j0cN7kuR8ZtxsND8QbhoGPPXH46LNtb//IQOOAK5yT/JzSpGBWmdsvB7I+1Pulrnka78CuceaHYl6/R5VwUm68OsfOcOcnkwTaU+CgXTFhU1+ZXpEJrb2hmDl7z2m7ZBzZALi/hG6MPydPvx22yIIenuZ93o3aC3QsE4xvh+J3zWq8n8UrQYKrGlal0hYzMOcIR989R398tufJAsDCnN9A2a2NoEelJC54Uy4+sxj7zVRXsJlNSxNT8N1UO2GezThkLWA5FfidRxYWFoUzinK2Skcvwy9T3+++ey5/wGraanb87lQYAAAAABJRU5ErkJggg==",alt:"",height:"24px"})}),Object(d.jsxs)(O,{className:"top-right",children:[Object(d.jsxs)("button",{children:[Object(d.jsx)("em",{className:"icon-bell"}),Object(d.jsx)("span",{className:"active"})]}),Object(d.jsx)("button",{children:Object(d.jsx)("em",{className:"icon-question"})}),Object(d.jsx)("button",{children:Object(d.jsx)(O,{className:"user m-auto",direction:"column",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:""})})})]})]})})})},F=i.a.memo(v),y=l.a.div(b||(b=Object(o.a)(["\n    width:100%;\n    background: #FFFFFF;\n    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);\n    \n    \n    .left-side{\n        .logo{\n            border:4px solid ",";\n            border-radius:13px;\n        }\n    \n        .title{\n            font-size:24px;\n            font-weight:600;\n            padding-bottom:8px;\n        }\n       \n        \n        .data-item{\n            flex:0 0 auto;\n            margin-right:10px;\n            display:inline-block;\n            em{\n                color:",";\n                margin-right:5px;\n            }  \n        }\n    }\n    \n    \n    .right-side{\n        .search{\n            flex:1 0 195px;\n            position:relative;\n            \n            input{\n                width:100%;\n                height:36px;\n                background: #FFFFFF;\n                border: 0.5px solid #333333;\n                box-sizing: border-box;\n                box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.07);\n                border-radius: 5px;\n                padding: 0 30px 0 15px;\n            }\n            \n            .icon{\n                position:absolute;\n                right:10px;\n                top:0;\n                height:100%;\n                width:20px;\n                color:#333333;\n                line-height:36px;\n                font-size:20px;\n            }\n            \n        }\n       \n    }\n"])),f,f),D=function(e){var n=e.name,c=e.buildings,s=e.users,t=e.amount;return Object(d.jsx)(y,{children:Object(d.jsx)("div",{className:"container px-sm-0",children:Object(d.jsxs)(O,{className:"wc py-3",alg:"flex-end",jc:"space-between",children:[Object(d.jsxs)(O,{className:"left-side mb-3 mb-lg-0  col-12 col-lg-7",jc:"flex-start",children:[Object(d.jsx)(O,{className:"logo",flex:"0 0 57px",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(d.jsxs)(O,{className:"text ps-2 ps-sm-3",flex:"1 0 60%",children:[Object(d.jsx)("div",{className:"title wc",children:n}),Object(d.jsxs)(O,{className:"details wc ",jc:"flex-start",flex:"1 0 ",children:[Object(d.jsxs)("div",{className:"data-item",children:[Object(d.jsx)("em",{className:"icon-grua"}),c]}),Object(d.jsxs)("div",{className:"data-item",children:[Object(d.jsx)("em",{className:"icon-user"}),s]}),Object(d.jsxs)("div",{className:"data-item",children:[Object(d.jsx)("em",{className:"icon-dollar"}),t]})]})]})]}),Object(d.jsxs)(O,{className:"right-side col-12 col-lg-5 ",jc:"flex-end",children:[Object(d.jsxs)("div",{className:"search mb-3  mb-sm-0 mb-lg-0 col-sm-7 me-sm-3",children:[Object(d.jsx)("input",{type:"text",placeholder:"Buscar"}),Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("em",{className:"fa fa-search"})})]}),Object(d.jsx)("div",{className:"create col-12 col-sm-5",children:Object(d.jsxs)("button",{className:"btn-primary wc",children:[Object(d.jsx)("em",{className:"icon-plus"}),Object(d.jsx)("span",{className:"ms-3",children:"Crear proyecto"})]})})]})]})})})},k=i.a.memo(D),U=c(9),z=l.a.div(p||(p=Object(o.a)(["\n    width:100%; \n    position:relative;\n    \n    .left-side{\n        .icon{\n            font-size:30px;\n            color:black!important;\n        }\n        .proyectos{\n           font-size:18px;\n           font-weight:600;\n           span{\n            color:#999999;\n           }  \n        }\n    }\n    .right-side{\n        button{\n            text-align:center;\n            padding:0;\n            width:36px;\n            em{\n              font-size:18px;\n            }\n        }\n    \n        button{\n            font-size:18px;\n            text-align:center;\n        }\n    \n        .filter{\n            width:36px;\n        }\n        .grid-controls{\n                button{\n                    &:first-of-type{\n                       border-radius: 6px 0 0 6px;\n                    }\n                    &:last-of-type{\n                       border-radius:0 6px 6px 0;\n                    }\n                }\n            }    \n    }\n"]))),C=c(8),G=l.a.div(h||(h=Object(o.a)(["\n    width:100%;\n    background:white;\n    position:absolute;\n    top:0;\n    left:0;\n    z-index:99999;\n    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);\n    \n    .grey{\n        color:#999999;\n        font-weight:400;\n    }\n    .title{\n        font-size:18px;\n        font-weight:600;\n    }\n    \n    button{\n        em{\n            font-size:18px;\n        }\n    }\n    \n    .field{\n           justify-content:flex-end;\n        label{\n            flex:0 0 auto;\n            margin-right:15px;\n            font-weight:600;\n        }\n        select{\n            height:36px;\n            flex:1 0 60%;\n            background: #FFFFFF;\n            max-width:220px;\n            border: 1px solid #4ABFCE;\n            box-sizing: border-box;\n            border-radius: 5px;\n        }\n    }\n"]))),V=function(e){return Object(d.jsx)(G,{className:"wc",children:Object(d.jsx)(C.Collapse,{isOpened:e.open,children:Object(d.jsxs)("div",{className:"container  py-4 px-sm-0",children:[Object(d.jsxs)(O,{className:"wc",children:[Object(d.jsxs)(O,{className:"title",flex:"1 0 80%",jc:"flex-start",children:[Object(d.jsx)("em",{className:"icon-filter me-2"}),"Filtros y orden",Object(d.jsx)("span",{className:"ms-2 grey",children:"(Iniciado, De la a a la Z)"})]}),Object(d.jsx)(O,{flex:"0 0 auto",children:Object(d.jsx)("button",{className:"btn-primary",onClick:function(){return e.handler()},children:Object(d.jsx)("em",{className:"icon-close"})})})]}),Object(d.jsxs)("form",{action:"",className:"wc",onSubmit:function(e){e.preventDefault()},children:[Object(d.jsxs)("div",{className:"row py-3 py-lg-4",children:[Object(d.jsxs)(O,{className:"col-12 col-sm-6 col-lg-3 mb-2 mb-lg-0 field",children:[Object(d.jsx)("label",{htmlFor:"",children:"Estado:"}),Object(d.jsx)("select",{name:"",id:""})]}),Object(d.jsxs)(O,{className:"col-12 col-sm-6 col-lg-3 mb-2 mb-lg-0 field",children:[Object(d.jsx)("label",{htmlFor:"",children:"Nombre:"}),Object(d.jsx)("select",{name:"",id:""})]}),Object(d.jsxs)(O,{className:"col-12 col-sm-6 col-lg-3 mb-2 mb-lg-0 field",children:[Object(d.jsx)("label",{htmlFor:"",children:"Fecha:"}),Object(d.jsx)("select",{name:"",id:""})]}),Object(d.jsxs)(O,{className:"col-12 col-sm-6 col-lg-3 mb-2 mb-lg-0 field",children:[Object(d.jsx)("label",{htmlFor:"",children:"Tama\xf1o:"}),Object(d.jsx)("select",{name:"",id:""})]})]}),Object(d.jsxs)("div",{className:"row justify-content-end",children:[Object(d.jsx)(O,{className:"col-12 col-sm-6 col-lg-4 col-xl-3 pe-sm-2 mb-2 mb-sm-0",children:Object(d.jsxs)("button",{className:"btn-line wc",children:[Object(d.jsx)("em",{className:"icon-clear me-2"}),"Limpiar Filtros"]})}),Object(d.jsx)(O,{className:"col-12 col-sm-6 col-lg-4 col-xl-3 ps-sm-2",children:Object(d.jsxs)("button",{className:"btn-primary wc",children:[Object(d.jsx)("em",{className:"icon-filter me-2"}),"Aplicar Filtros"]})})]})]})]})})})},E=i.a.memo(V),P=function(e){var n=Object(t.useState)(!1),c=Object(U.a)(n,2),s=c[0],i=c[1];return Object(d.jsxs)(z,{children:[Object(d.jsx)(E,{open:s,handler:function(){return i(!1)}}),Object(d.jsx)("div",{className:"container px-sm-0 py-4",children:Object(d.jsxs)(O,{className:"wc",jc:"space-between",children:[Object(d.jsx)(O,{className:"left-side mb-3 mb-sm-0",flex:"1 0 60%",jc:"flex-start",children:Object(d.jsxs)("p",{className:"proyectos mb-0",children:[Object(d.jsx)("span",{className:"icon-grua icon"}),"Proyectos",Object(d.jsx)("span",{className:"ms-2",children:"(Todos)"})]})}),Object(d.jsxs)(O,{className:"right-side",jc:"flex-end",flex:"1 0 150px",children:[Object(d.jsx)("button",{className:"btn-primary filter",onClick:function(){return i(!0)},children:Object(d.jsx)("em",{className:"icon-filter"})}),Object(d.jsxs)(O,{className:"grid-controls ms-4",children:[Object(d.jsx)("button",{className:"btn-primary",children:Object(d.jsx)("em",{className:"icon-grid-scuare",children:" "})}),Object(d.jsx)("button",{className:"btn-primary",children:Object(d.jsx)("em",{className:"icon-grid-list",children:" "})})]})]})]})})]})},R=i.a.memo(P),I=l.a.div(u||(u=Object(o.a)(["\n    background: #FFFFFF;\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    overflow:hidden;\n    \n    .photo{\n        min-height:229px;\n        background-image:url(",");\n        background-position:center;\n        background-size:cover;\n        background-repeat:no-repeat;\n        color:white;\n        position:relative;\n        \n        .sombra{\n            top:0;\n            left:0;\n            position:absolute;\n            background-color:rgba(0,0,0,.3);\n            width:100%;\n            height:100%;\n        }\n    }\n    .state{\n        width:100%;\n        background:",";\n        border-radius:4px;\n        text-center;\n        max-width:80px;\n        text-align:center;\n        font-size:11px;\n        line-height:20px;\n        font-weight:600;\n    }\n    \n    .details{\n        em{\n            color:",";\n            margin-right:5px;\n        }\n    }\n    \n    .name{\n        font-size:18px;\n        font-weight:600;\n    }\n    .line{\n        border-bottom:1px solid #999999; \n        margin:10px 0;\n    }\n"])),(function(e){return e.photo}),(function(e){return e.state}),f),X=c.p+"static/media/building.98d1eae2.jpg",S=function(e){var n=e.project,c=n.state,s=n.favorite,t=n.date,i=n.users,a=n.name,r=n.address,o=n.amount,l=n.mesures,m=(n.photo,n.ppc),j=n.pcr,x=n.completed,b={1:{name:"Iniciado",color:A.iniciado},2:{name:"No iniciado",color:A.noiniciado},3:{name:"Detenido",color:A.detenido},4:{name:"Finlizado",color:A.finalizado}};return Object(d.jsx)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ",children:Object(d.jsx)(I,{photo:X,state:b[c].color,children:Object(d.jsxs)(O,{className:"wc",jc:"flex-start",direction:"column",children:[Object(d.jsxs)(O,{className:"wc photo p-3 p-lg-4",direction:"column",flex:"1 0 auto",jc:"space-between",children:[Object(d.jsx)("div",{className:"sombra"}),Object(d.jsxs)(O,{className:"wc ",alg:"flex-start",children:[Object(d.jsxs)(O,{jc:"flex-start",flex:"1 0 80%",children:[Object(d.jsx)("div",{className:"state wc",children:b[c].name}),Object(d.jsxs)("div",{className:"wc pt-2",children:[Object(d.jsxs)("span",{className:"me-3",children:[Object(d.jsx)("em",{className:"icon-calendar me-1"}),t]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("em",{className:"icon-user me-1"}),i]})]})]}),Object(d.jsx)(O,{flex:"0 0 20px",children:Object(d.jsx)("em",{className:"icon-start-".concat(s?"solid":"line"," ")})})]}),Object(d.jsxs)(O,{className:"wc",jc:"flex-start",children:[Object(d.jsx)("div",{className:"name",children:a}),Object(d.jsx)("div",{className:"address",children:r})]})]}),Object(d.jsxs)(O,{className:"details p-3 px-lg-4 wc",jc:"space-between",flex:"0 0 auto",children:[Object(d.jsxs)(O,{children:[Object(d.jsx)("em",{className:"icon-dollar"}),o]}),Object(d.jsxs)(O,{children:[Object(d.jsx)("em",{className:"icon-rules"}),l]}),Object(d.jsx)("div",{className:"line wc"}),Object(d.jsxs)(O,{flex:"0 0 30%",children:[Object(d.jsx)("em",{className:"icon-check"}),x]}),Object(d.jsxs)(O,{flex:"0 0 30%",children:[Object(d.jsx)("em",{className:"icon-ppc"}),m]}),Object(d.jsxs)(O,{flex:"0 0 30%",children:[Object(d.jsx)("em",{className:"icon-pcr"}),j]})]})]})})})},T=i.a.memo(S),W=function(e){return Object(d.jsx)("div",{className:"container px-sm-0",children:Object(d.jsxs)("div",{className:"row align-start ",children:[e.projects.length&&e.projects.map((function(e,n){return Object(d.jsx)(T,{project:e},n)})),Object(d.jsx)("div",{className:"py-5"})]})})},B=i.a.memo(W),Q=function(e){return Object(d.jsx)("div",{className:"wc foot"})},Y=i.a.memo(Q),L=[{id:1,state:1,favorite:!0,date:"03/04/21",users:18,name:"Nombre del proyecto",address:"Direcci\xf3n del proyecto",amount:"2.000.030 USD",mesures:"960m2",photo:"",ppc:"15%",pcr:"46%",completed:"81%"},{id:1,state:2,favorite:!0,date:"03/04/21",users:18,name:"Nombre del proyecto",address:"Direcci\xf3n del proyecto",amount:"2.000.030 USD",mesures:"960m2",photo:"",ppc:"15%",pcr:"46%",completed:"81%"},{id:1,state:3,favorite:!0,date:"03/04/21",users:18,name:"Nombre del proyecto",address:"Direcci\xf3n del proyecto",amount:"2.000.030 USD",mesures:"960m2",photo:"",ppc:"15%",pcr:"46%",completed:"81%"},{id:1,state:4,favorite:!1,date:"03/04/21",users:18,name:"Nombre del proyecto",address:"Direcci\xf3n del proyecto",amount:"2.000.030 USD",mesures:"960m2",photo:"",ppc:"15%",pcr:"46%",completed:"81%"},{id:1,state:1,favorite:!1,date:"03/04/21",users:18,name:"Nombre del proyecto",address:"Direcci\xf3n del proyecto",amount:"2.000.030 USD",mesures:"960m2",photo:"",ppc:"15%",pcr:"46%",completed:"81%"},{id:1,state:1,favorite:!1,date:"03/04/21",users:18,name:"Nombre del proyecto",address:"Direcci\xf3n del proyecto",amount:"2.000.030 USD",mesures:"960m2",photo:"",ppc:"15%",pcr:"46%",completed:"81%"},{id:1,state:1,favorite:!1,date:"03/04/21",users:18,name:"Nombre del proyecto",address:"Direcci\xf3n del proyecto",amount:"2.000.030 USD",mesures:"960m2",photo:"",ppc:"15%",pcr:"46%",completed:"81%"},{id:1,state:2,favorite:!1,date:"03/04/21",users:18,name:"Nombre del proyecto",address:"Direcci\xf3n del proyecto",amount:"2.000.030 USD",mesures:"960m2",photo:"",ppc:"15%",pcr:"46%",completed:"81%"},{id:1,state:2,favorite:!1,date:"03/04/21",users:18,name:"Nombre del proyecto",address:"Direcci\xf3n del proyecto",amount:"2.000.030 USD",mesures:"960m2",photo:"",ppc:"15%",pcr:"46%",completed:"81%"},{id:1,state:3,favorite:!1,date:"03/04/21",users:18,name:"Nombre del proyecto",address:"Direcci\xf3n del proyecto",amount:"2.000.030 USD",mesures:"960m2",photo:"",ppc:"15%",pcr:"46%",completed:"81%"},{id:1,state:4,favorite:!1,date:"03/04/21",users:18,name:"Nombre del proyecto",address:"Direcci\xf3n del proyecto",amount:"2.000.030 USD",mesures:"960m2",photo:"",ppc:"15%",pcr:"46%",completed:"81%"},{id:1,state:4,favorite:!1,date:"03/04/21",users:18,name:"Nombre del proyecto",address:"Direcci\xf3n del proyecto",amount:"2.000.030 USD",mesures:"960m2",photo:"",ppc:"15%",pcr:"46%",completed:"81%"}],K=l.a.div(g||(g=Object(o.a)(["\n    width:100%;\n    position:fixed;\n    bottom:0;\n    right:0;\n    \n    .cont{\n        position-relative;\n    }\n    .icon{\n        position:absolute;\n        right:0;\n        bottom:50px;\n        background: #4ABFCE;\n        border-radius: 10px;\n        height:60px;\n        width:60px;\n        color:white;\n        line-height:60px;\n        text-align:center;\n        font-size:30px;\n    }\n    \n"]))),M=function(e){return Object(d.jsx)(K,{className:"ro",children:Object(d.jsx)("div",{className:"container cont position-relative",children:Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("em",{className:"icon-chat"})})})})},H=i.a.memo(M);var Z=function(){return Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsx)(F,{}),Object(d.jsx)(k,{name:"Quierocasa",buildings:25,users:71,amount:"891.308.499.537 MXN"}),Object(d.jsx)(R,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsx)(B,{projects:L})}),Object(d.jsx)(H,{}),Object(d.jsx)(Y,{})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(n){var c=n.getCLS,s=n.getFID,t=n.getFCP,i=n.getLCP,a=n.getTTFB;c(e),s(e),t(e),i(e),a(e)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(Z,{})}),document.getElementById("root")),J()}},[[22,1,2]]]);
//# sourceMappingURL=main.c8414eec.chunk.js.map