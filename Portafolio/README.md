########################// Instalación paso a paso del Frontend //########################

*Paso 1: Instalar react y configurar el entorno siguiendo la [Documentación oficial](https://reactnative.dev/docs/environment-setup?guide=native&package-manager=npm).

*Paso 2: Clonar o Descargar este repositorio.

*Paso 3: Abrir una terminal cmd y ejecutar el commando ipconfig, copiando la ipv4 reflejada

*Paso 4: Modificar el archivo "src\api\UserApi.jsx", reemplazando baseURL por su ipv4 manteniendo el formato http.

*Paso 5: en la raíz del proyecto ejecutar con la consola("CTRL+Ñ" para abrir la consola):
- npm Install
- npx react-native run-android

** En caso de no funcionar, poner este comando "npx react-native start --reset-cache", luego seleccionar "a". **