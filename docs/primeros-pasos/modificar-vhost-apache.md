---
sidebar_position: 3
---

# Modificar vhost de apache

Proceder a editar el archivo httpd-vhost.conf de Apache en el servidor de AWS. Esto se hace con la cuenta de SSH (consola de línea de comandos segura). O a través de SFTP.

Es necesario crear tres nuevas entradas de servidores virtuales. Una para el core, otra para el backend y otra más para el micrositio de clientes.

La plantilla para crearlas es:

```yaml
    <VirtualHost *:443>
        ServerName <dominio>
        ServerAlias <dominio>
        LogFormat "[%{%Y-%m-%d %T}t] %a:%p %l %u \"%r\" %>s %b"
        TransferLog "${INSTALL_DIR}/logs/<subdominio>_log.<tenant>.log"
        ErrorLog "${INSTALL_DIR}/logs/<subdominio>_error.<tenant>.log"
        DocumentRoot "/opt/bitnami/apache/htdocs/<directorio_destino>"
        <Directory "/opt/bitnami/apache/htdocs/<directorio_destino>/">
            Options +Indexes +Includes +FollowSymLinks +MultiViews
            AllowOverride All
            Require all granted
        </Directory>
        SetEnv DEVELOPE_NAME <tenant>
        SSLEngine on
        SSLCertificateFile "/opt/bitnami/apache/crt/priv-solucionfaas_key.crt"
        SSLCertificateKeyFile "/opt/bitnami/apache/crt/priv-solucionfaas_key.key"
    </VirtualHost>
```

Donde `<dominio>` es el dominio completo (subdominio y dominio TLD). `<subdominio>` es el subdominio que se dio de alta en el panel de Lightsail. `<tenant>` es el nombre del Tenant. Y `<directorio_destino>` es el nombre del directorio en el servidor donde está cada parte del sistema. Estos son **"core"**, **"backend"** y **"clientes"**.

## Guardar los cambios y reiniciar apache

Para verificar la sintáxis de los archivos de configuración de Apache ejecutar en la consola SSH:
```bash
apachectl configtest
```

Para reiniciar Apache ejecutar:
```bash
sudo /opt/bitnami/ctlscript.sh restart apache
```

Hecho esto el acceso es por HTTPS exclusivamente.