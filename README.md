socketServer
============

## Un programita hecho en JavaScript para probar las implementaciones de las funciones de fereSocket.c

### Instrucciones de instalacion

* sudo wget http://nodejs.org/dist/v0.10.32/node-v0.10.32.tar.gz
* tar -xvzf node-v0.10.32.tar.gz
* cd node-v0.10.32/
* ./configure
* make
* ln -s /home/utnso/node-v0.10.32/node ~/node
* cd ~/repos
* git clone git@github.com:fishkel-truelogic/socketServer.git

## Ejecucion

* cd ~/repos/socketServer/src
* ~/node socketServer.js

Con esto ya tienen un servidor socket escuchando en el puerto 8888 y la ip 127.0.0.1
Si lo levantan desde otro lado de la misma red tienen que fijarse en que ip estan con el ifconfig


