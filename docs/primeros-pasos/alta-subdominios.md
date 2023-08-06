---
sidebar_position: 2
---

# Dar de alta los subdominios

Se deben dar de alta tres dominios por cada tenant.

Para acceder al core. Se recomienda `<tenant>core.solucionfaas.com`

Para acceder al backend. Se recomienda `<tenant>.solucionfaas.com` aunque cada cliente del LMS podría querer su propio subdominio.

Para que los tomadores de préstamos puedan acceder al micrositio de clientes.

Para esto hay que ingresar a la plataforma Lightsail de AWS. Loguearse con las credenciales correctas y luego ahí: Seleccionar el tab Networking.

Seleccionar solucionfaas.com DNS Zone.

Aquí se van a dar de alta los subdominio.

1.- Se debe dar de alta el mismo subdominio en los registros tipo A y tipo AAAA.

2.- En la tab Details, hacer clic en "+ Add record".

3.- Del emergente que aparece, seleccionar "A record". Anotar el subdominio y en "Resolves to" seleccionar "faas-equality-static-ip"

4.- Hacer clic en el check verde arriba a la derecha.

5.- Se debe repetir esta operación para el mismo subdominio pero para el registro tipo AAAA "AAAA Record" y asignando "FAAS_EQUALITY" en "Resolves to".

6.- La diferencia es que el registro tipo A es para resolucióna IPv4 y el registro tipo AAAA es para IPv6.

7.- "faas-equality-static-ip" y "FAAS_EQUALITY" son alias de las IPs finales.

:::info

Se debe repetir todo este proceso para cada uno de los subdominios que se quieran usar.

:::