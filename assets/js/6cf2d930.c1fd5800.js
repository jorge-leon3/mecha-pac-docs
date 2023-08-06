"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[675],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>f});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(f,s(s({ref:a},d),{},{components:t})):n.createElement(f,s({ref:a},d))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5557:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1},s="Inicio del proceso",i={unversionedId:"primeros-pasos/inicio-del-proceso",id:"primeros-pasos/inicio-del-proceso",title:"Inicio del proceso",description:"Interfaces",source:"@site/docs/primeros-pasos/inicio-del-proceso.md",sourceDirName:"primeros-pasos",slug:"/primeros-pasos/inicio-del-proceso",permalink:"/mecha-pac-docs/docs/primeros-pasos/inicio-del-proceso",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n de PAC",permalink:"/mecha-pac-docs/docs/category/instalaci\xf3n-de-pac"},next:{title:"Dar de alta los subdominios",permalink:"/mecha-pac-docs/docs/primeros-pasos/alta-subdominios"}},l={},c=[{value:"Interfaces",id:"interfaces",level:2},{value:"Base de datos accesorias",id:"base-de-datos-accesorias",level:2}],d={toc:c},p="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inicio-del-proceso"},"Inicio del proceso"),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("p",null,"El sistema est\xe1 integrado por diferentes interfaces. Las que aqu\xed se tratan son principalmente dos. El resto puede deducirse a partir de aqu\xed."),(0,r.kt)("p",null,"Las interfaces que hay que configurar para que un tenant (cliente de Equality) pueda usar la plataforma son dos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Core:")," Es el n\xfacleo del sistema. Su instalaci\xf3n reside en el directorio ",(0,r.kt)("inlineCode",{parentName:"li"},"core/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backend:")," Es la interfaz de usuario que presenta los datos que tiene almacenados el core y recoge los datos generados por los\nusuarios del sistema. Su instalaci\xf3n se hace en el directorio ",(0,r.kt)("inlineCode",{parentName:"li"},"backend/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Clientes:")," El el micrositio de clientes, o sea, de las personas que son deudoras del cr\xe9dito o financiaci\xf3n. La instalaci\xf3n est\xe1 en el\ndirectorio ",(0,r.kt)("inlineCode",{parentName:"li"},"clientes/"))),(0,r.kt)("p",null,"La instancia nueva est\xe1 determinada por su acceso a la base de dato del nuevo tenant. Debido a que en el servidor remoto todos los tenants ejecutan el mismo c\xf3digo, lo que diferencia una instancia de la otra es la base de datos de la que leen y escriben."),(0,r.kt)("p",null,"Por lo tanto el primer paso es crear la base de datos."),(0,r.kt)("p",null,"De hecho son al menos dos bases de datos. Una para el core y otra para el backend."),(0,r.kt)("p",null,"Se usa por convenci\xf3n para el nombrado de estas bases de datos la forma: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<nombre_del_tenant>_backend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<nombre_del_tenant>_core"))),(0,r.kt)("p",null,"Y as\xed cualquier otra base de datos que pertenezca al tenant."),(0,r.kt)("p",null,"Para hacer eso se puede usar PHPMyAdmin del servidor AWS en\n",(0,r.kt)("a",{parentName:"p",href:"https://solucionfaas.com/phpmyadmin/"},"https://solucionfaas.com/phpmyadmin/")),(0,r.kt)("p",null,"Es altamente recomendable que las bases de datos creadas tengan cotejamiento ",(0,r.kt)("inlineCode",{parentName:"p"},"utf8mb4_0900_ai_ci"),". Esto es para asegurar que las ordenaciones de los registros sigan el orden natural del idioma espa\xf1ol adem\xe1s de permitir usar la tabla de caracteres extendida de\nUTF8."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"La creaci\xf3n de tablas se explica con cierto detalle en ",(0,r.kt)("a",{parentName:"p",href:"./crear-las-tablas.md"},"Crear las tablas"),"..")),(0,r.kt)("h2",{id:"base-de-datos-accesorias"},"Base de datos accesorias"),(0,r.kt)("p",null,"Son tres:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mecha_logs:")," Almacena las tablas de logs de las integraciones. Solamente debe existir ya que cada integraci\xf3n se encarga de crear las\ntablas que necesita autom\xe1ticamente."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mecha_pespay:")," Para uso especial de Pespay."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mecha_tasks:")," Donde se almacenan las tareas programadas compartidas entre todos los tenants.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Si estas bases de datos ya est\xe1n creadas, saltar este paso.")))}u.isMDXComponent=!0}}]);