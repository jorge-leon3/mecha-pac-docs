"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>f});var t=a(7294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||n;return a?t.createElement(f,i(i({ref:r},p),{},{components:a})):t.createElement(f,i({ref:r},p))}));function f(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6639:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var t=a(7462),o=(a(7294),a(3905));const n={sidebar_position:3},i="Modificar vhost de apache",s={unversionedId:"primeros-pasos/modificar-vhost-apache",id:"primeros-pasos/modificar-vhost-apache",title:"Modificar vhost de apache",description:"Proceder a editar el archivo httpd-vhost.conf de Apache en el servidor de AWS. Esto se hace con la cuenta de SSH (consola de l\xednea de comandos segura). O a trav\xe9s de SFTP.",source:"@site/docs/primeros-pasos/modificar-vhost-apache.md",sourceDirName:"primeros-pasos",slug:"/primeros-pasos/modificar-vhost-apache",permalink:"/mecha-pac-docs/docs/primeros-pasos/modificar-vhost-apache",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dar de alta los subdominios",permalink:"/mecha-pac-docs/docs/primeros-pasos/alta-subdominios"},next:{title:"Generar los accesos internos",permalink:"/mecha-pac-docs/docs/primeros-pasos/generar-accesos-internos"}},c={},l=[{value:"Guardar los cambios y reiniciar apache",id:"guardar-los-cambios-y-reiniciar-apache",level:2}],p={toc:l},d="wrapper";function m(e){let{components:r,...a}=e;return(0,o.kt)(d,(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modificar-vhost-de-apache"},"Modificar vhost de apache"),(0,o.kt)("p",null,"Proceder a editar el archivo httpd-vhost.conf de Apache en el servidor de AWS. Esto se hace con la cuenta de SSH (consola de l\xednea de comandos segura). O a trav\xe9s de SFTP."),(0,o.kt)("p",null,"Es necesario crear tres nuevas entradas de servidores virtuales. Una para el core, otra para el backend y otra m\xe1s para el micrositio de clientes."),(0,o.kt)("p",null,"La plantilla para crearlas es:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'    <VirtualHost *:443>\n        ServerName <dominio>\n        ServerAlias <dominio>\n        LogFormat "[%{%Y-%m-%d %T}t] %a:%p %l %u \\"%r\\" %>s %b"\n        TransferLog "${INSTALL_DIR}/logs/<subdominio>_log.<tenant>.log"\n        ErrorLog "${INSTALL_DIR}/logs/<subdominio>_error.<tenant>.log"\n        DocumentRoot "/opt/bitnami/apache/htdocs/<directorio_destino>"\n        <Directory "/opt/bitnami/apache/htdocs/<directorio_destino>/">\n            Options +Indexes +Includes +FollowSymLinks +MultiViews\n            AllowOverride All\n            Require all granted\n        </Directory>\n        SetEnv DEVELOPE_NAME <tenant>\n        SSLEngine on\n        SSLCertificateFile "/opt/bitnami/apache/crt/priv-solucionfaas_key.crt"\n        SSLCertificateKeyFile "/opt/bitnami/apache/crt/priv-solucionfaas_key.key"\n    </VirtualHost>\n')),(0,o.kt)("p",null,"Donde ",(0,o.kt)("inlineCode",{parentName:"p"},"<dominio>")," es el dominio completo (subdominio y dominio TLD). ",(0,o.kt)("inlineCode",{parentName:"p"},"<subdominio>")," es el subdominio que se dio de alta en el panel de Lightsail. ",(0,o.kt)("inlineCode",{parentName:"p"},"<tenant>")," es el nombre del Tenant. Y ",(0,o.kt)("inlineCode",{parentName:"p"},"<directorio_destino>")," es el nombre del directorio en el servidor donde est\xe1 cada parte del sistema. Estos son ",(0,o.kt)("strong",{parentName:"p"},'"core"'),", ",(0,o.kt)("strong",{parentName:"p"},'"backend"')," y ",(0,o.kt)("strong",{parentName:"p"},'"clientes"'),"."),(0,o.kt)("h2",{id:"guardar-los-cambios-y-reiniciar-apache"},"Guardar los cambios y reiniciar apache"),(0,o.kt)("p",null,"Para verificar la sint\xe1xis de los archivos de configuraci\xf3n de Apache ejecutar en la consola SSH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apachectl configtest\n")),(0,o.kt)("p",null,"Para reiniciar Apache ejecutar:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /opt/bitnami/ctlscript.sh restart apache\n")),(0,o.kt)("p",null,"Hecho esto el acceso es por HTTPS exclusivamente."))}m.isMDXComponent=!0}}]);