---
sidebar_position: 4
---

# Generar los accesos internos

## Acceso a la base de datos

La plataforma almacena la configuración de acceso a la base de datos junto a otras configuraciones en el directorio `config/` que está un directorio atrás y al mismo nivel que **core**, **backend** y **clientes** (y los demás directorios donde están instaladas las integraciones).

Dentro de config la organización de directorios es como sigue:

`config/<interface>/<tenant>`

Donde `<interface>` corresponde a la interfaz correspondiente (**"core"**, **"backend"**, **"clientes"**, **"frontend"**). Y `<tenant>` al nombre del tenant que corresponda.

Dentro de cada directorio debe de haber dos archivos scripts PHP. Uno de ellos es `database.cfg.php` que contiene algo similar a esto:

```c
<?php
    // Datos de conexión con la base de datos.
    defined('DBHOST') || define('DBHOST', 'localhost'); // El host de la BD
    defined('DBNAME') || define('DBNAME', '<tenant>_core'); // El nombre de la BD
    defined('DBUSER') || define('DBUSER', '<nombre_usuario_mysql>'); // El user de la BD
    defined('DBPASS') || define('DBPASS', '<contraseña>'); // La contraseña de la BD
    defined('DBPORT') || define('DBPORT', 3306); // El puerto de MySQL.
```

Se debe cambiar los valores de las constantes por los valores reales.

Esto es así para todas las interfases excepto **"backend"**.

Backend es un caso especial ya que la configuración que está dentro del directorio donde está instalado el backend en `system/config/<tenant>/main_config.json` que a diferencia de lo anterior, es un archivo en formato JSON. Se deben ajustar los valores correspondientes.

Si el directorio `<tenant>` no existe, hay que crearlo. Y luego copiar renombrando el archivo `main_config.json.example` al directorio del tenant. Ese archivo es la plantilla para hacer la configuración.

Normalmente no se debe tocar ningún valor excepto los que están en la rama **"database"**, **"environment"** y **"options"**. Tener en cuenta que se puede eliminar la rama **"database"** y esto provocará que se busquen las credenciales de acceso en el directorio `config/backend/tenant` antes mencionado.

## Acceso a los web services

El archivo `wsconfig.inc.php` contiene la configuración de acceso al web service. Aquí el archivo que más importa es el correspondiente a la interfaz **"backend"** ya que determina que el backend del tenant se pueda comunicar con el core de su propio tenant.

Los tres valores que se deben editar son:

```c
    define("WS_URL", "https://<url_de_core_del_tenant>/v2/");// Dirección del Web Service V2 del Core Mecha.
    define("WS_USER", "<nombre_de_usuario>"); // Usuario en el Web Service V2 de Core Mecha.
    define("WS_PASS", "<contraseña_del_usuario>"); // Contraseña del usuario en el Web Service V2 de Core Mecha.
```

:::info

Verificar que la URL sea HTTPS y que termine con el slug v2/.

:::

El nombre de usuario y la contraseña deben ser los mismos datos que luego se pondrán en la tabla **"ws_usuarios"** de la base de datos del core.

Opcionalmente se puede indicar además la clave de cifrado aunque no es obligatorio.

El core también va a necesitar comunicarse con su backend. Y por lo tanto hay que configurar el acceso a su web service. En el directorio de configuración de core `config/core/<tenant>/`

Existe el archivo `wsconfig.inc.php` que sirve para el mismo propósito que su equivalente en `config/backend/<tenant>/`

Y recíprocamente habrá que insertar o actualizar un registro en la tabla **"usuarios_del_webservice"** pero de la base de datos del backend para que el Web Service del backend reconozca las credenciales.

