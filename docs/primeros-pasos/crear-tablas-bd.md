---
sidebar_position: 5
---

# Crear las tablas de las bases de datos

Ahora que se tienen configurados los accesos a las bases de datos de la instancia, es momento de crear las tablas.

## Core

Para facilitar esta tarea se puede usar la herramienta de creación de referencia.

Se trata de dos scripts php. Uno para crear la referencia de la base de datos y el otro para verificar y/o modificar la base de datos destino.

Se ejecuta `makeDBReference.php` sobre la base de datos de la interfaz **"core"** que se usará como referencia (base de datos "fuente"). Esto crea un archivo `dbrefference.json`.

Se lleva este archivo generado al servidor de destino y se ejecuta el script `checkDBReference.php` en la interfaz **"core"** destino que se encarga de leer el archivo json de referencia y actualizar la base de datos destino del “core” con los cambios necesarios.