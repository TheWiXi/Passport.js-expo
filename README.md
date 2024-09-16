# Autenticación con Passport.js (Local, Facebook, Google, Discord)

Este repositorio contiene una implementación de autenticación usando Passport.js con estrategias para autenticación local, Facebook, Google y Discord.

## Requisitos previos

- Node.js y npm instalados
- Cuentas de desarrollador en Facebook, Google y Discord para obtener las credenciales de OAuth

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/TheWiXi/Passport.js-expo.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd Passport.js-expo
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Configuración

### Obtención de credenciales

#### Facebook

1. Ve a [Facebook Developers](https://developers.facebook.com/)
2. Crea una nueva aplicación
3. En el panel de la aplicación, ve a "Configuración" > "Básica"
4. Copia el "ID de la app" y la "Clave secreta de la app"

#### Google

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto
3. Ve a "APIs y servicios" > "Credenciales"
4. Crea nuevas credenciales de "ID de cliente OAuth"
5. Copia el "ID de cliente" y el "Secreto del cliente"

#### Discord

1. Ve a [Discord Developer Portal](https://discord.com/developers/applications)
2. Crea una nueva aplicación
3. En la sección "OAuth2", copia el "ID de cliente" y el "Secreto del cliente"

### Configuración del archivo .env

Crea un archivo `.env` en la raíz del proyecto y añade tus credenciales:

```
PORT=3000
SESSION_SECRET=una_clave_secreta_aleatoria

FACEBOOK_APP_ID=tu_app_id_de_facebook
FACEBOOK_APP_SECRET=tu_app_secret_de_facebook

GOOGLE_CLIENT_ID=tu_client_id_de_google
GOOGLE_CLIENT_SECRET=tu_client_secret_de_google

DISCORD_CLIENT_ID=tu_client_id_de_discord
DISCORD_CLIENT_SECRET=tu_client_secret_de_discord

DB_HOST=localhost
DB_USER=tu_usuario_de_base_de_datos
DB_PASS=tu_contraseña_de_base_de_datos
DB_NAME=tu_nombre_de_base_de_datos
```

## Uso

1. Inicia el servidor:
   ```
   npm start
   ```
2. Abre tu navegador y ve a `http://localhost:3000`
3. Usa el formulario de login para la autenticación local o haz clic en los botones de inicio de sesión para autenticarte con Facebook, Google o Discord

## Estructura del proyecto

- `server.js`: Configuración del servidor Express y Passport.js
- `views/login.ejs`: Plantilla EJS para la página de inicio de sesión
- `.env`: Archivo de configuración para variables de entorno
- `.env.template`: Plantilla para el archivo .env
- `.gitignore`: Especifica archivos que Git debe ignorar

## Características

- Autenticación local con nombre de usuario y contraseña
- Autenticación con Facebook
- Autenticación con Google
- Autenticación con Discord
- Uso de variables de entorno para configuración segura
- Interfaz de usuario básica para inicio de sesión

## Notas de seguridad

- Este es un ejemplo básico y no debe usarse en producción sin implementar medidas de seguridad adicionales.
- Asegúrate de configurar correctamente las URLs de redirección en las consolas de desarrollador de Facebook, Google y Discord.
- Nunca compartas o subas a un repositorio público tu archivo `.env` con las credenciales reales.
- Implementa validación de entrada, manejo de errores y logging apropiados en un entorno de producción.
- Considera usar HTTPS en producción para proteger la información transmitida.

## Próximos pasos

- Implementar registro de usuarios para autenticación local
- Añadir una base de datos para almacenar información de usuarios
- Mejorar el manejo de errores y la experiencia del usuario
- Implementar pruebas unitarias y de integración
- Añadir más proveedores de autenticación OAuth

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir lo que te gustaría cambiar.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
