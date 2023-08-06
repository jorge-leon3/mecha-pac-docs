---
sidebar_position: 1
---

# Inicio del proceso

## Interfaces

El sistema está integrado por diferentes interfaces. Las que aquí se tratan son principalmente dos. El resto puede deducirse a partir de aquí.


Las interfaces que hay que configurar para que un tenant (cliente de Equality) pueda usar la plataforma son dos:

- **Core:** Es el núcleo del sistema. Su instalación reside en el directorio `core/`
- **Backend:** Es la interfaz de usuario que presenta los datos que tiene almacenados el core y recoge los datos generados por los
usuarios del sistema. Su instalación se hace en el directorio `backend/`
- **Clientes:** El el micrositio de clientes, o sea, de las personas que son deudoras del crédito o financiación. La instalación está en el
directorio `clientes/`

La instancia nueva está determinada por su acceso a la base de dato del nuevo tenant. Debido a que en el servidor remoto todos los tenants ejecutan el mismo código, lo que diferencia una instancia de la otra es la base de datos de la que leen y escriben.

Por lo tanto el primer paso es crear la base de datos.

De hecho son al menos dos bases de datos. Una para el core y otra para el backend.

Se usa por convención para el nombrado de estas bases de datos la forma: 
- `<nombre_del_tenant>_backend`
- `<nombre_del_tenant>_core`

Y así cualquier otra base de datos que pertenezca al tenant.

Para hacer eso se puede usar PHPMyAdmin del servidor AWS en
https://solucionfaas.com/phpmyadmin/

Es altamente recomendable que las bases de datos creadas tengan cotejamiento `utf8mb4_0900_ai_ci`. Esto es para asegurar que las ordenaciones de los registros sigan el orden natural del idioma español además de permitir usar la tabla de caracteres extendida de
UTF8.

:::info

La creación de tablas se explica con cierto detalle en [Crear las tablas](./crear-las-tablas.md)..

:::

## Base de datos accesorias

Son tres:

- **mecha_logs:** Almacena las tablas de logs de las integraciones. Solamente debe existir ya que cada integración se encarga de crear las
tablas que necesita automáticamente.
- **mecha_pespay:** Para uso especial de Pespay.
- **mecha_tasks:** Donde se almacenan las tareas programadas compartidas entre todos los tenants.

:::tip

Si estas bases de datos ya están creadas, saltar este paso.

:::

