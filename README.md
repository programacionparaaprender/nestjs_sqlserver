## cursos
>- https://www.udemy.com/course/nestjs-free/learn/lecture/13696784?start=0#overview

## Sección 1: Introducción

### 1. S01-CL01: Presentación del curso
>- https://github.com/javascript-cursos/nestjs
>- https://aprendiendo-js.netlify.app/

### 2. S01-CL02: Plataforma Udemy y cómo formular preguntas
>-

### 3. S01-CL03: Valoración del curso
>- 

## Sección 2: Introducción y preparación del Entorno de Desarrollo

### 4. S02-CL01: Qué es NestJS
>- https://docs.nestjs.com/
>- https://nestjs.com/

### 5. S02-CL02: Primeros pasos: instalación NestJS
>- https://docs.nestjs.com/first-steps
>- https://nodejs.org/es/

### 6. S02-CL03: Instalando XAMPP para base de datos
>- https://www.apachefriends.org/es/


### 7. S02-CL04: Entorno de desarrollo: Visual Studio
>- https://code.visualstudio.com/


## Sección 3: Desarrollo API con NestJS

### 8. S03-CL01: Configurando el proyecto
>- https://docs.nestjs.com/first-steps


### 9. S03-CL02: Controladores
>- https://docs.nestjs.com/controllers


### 10. S03-CL03: Configuración conexión a base de datos (MySQL)
>- https://docs.nestjs.com/techniques/database


### 11. S03-CL04: Declaración de entidades
>- https://docs.nestjs.com/techniques/database

### 12. S03-CL05: Repositorios y Proveedores
>- https://docs.nestjs.com/techniques/database
>- https://docs.nestjs.com/providers

### 13. S03-CL06: Inyección de dependencias

## Sección 4: Consumo de API
>- https://docs.nestjs.com/providers


### 14. S04-CL01: Instalación de Postman
>- https://www.postman.com/


### 15. S04-CL02: Petición POST en Postman

### 16. S04-CL03: Petición GET en Postman

### 17. S04-CL04: Petición PUT en Postman

### 18. S04-CL05: Petición DELETE en Postman

### 19. S04-CL06: Consumiendo la API desde aplicación Android





https://docs.nestjs.com/
$ npm i -g @nestjs/cli
$ nest new project-name
$ cd project-name
$ npm run start
Alternatively, to install the TypeScript starter project with Git:


$ git clone https://github.com/nestjs/typescript-starter.git project
$ cd project
$ npm install
$ npm run start

--------------------
8. Peticiones
---------------------
Post
localhost:3000/mensajes/
{
	"nick":"Miguel",
    "mensaje":"Este es un mensaje"
}

Get
localhost:3000/mensajes?id=1
localhost:3000/mensajes/

Put
localhost:3000/mensajes/1
{
	"nick":"Miguel 2",
    "mensaje":"Este es un mensaje 2"
}

Delete
localhost:3000/mensajes/1

-
7. Provider
--------------------
https://docs.nestjs.com/providers


-------------
6. repositorio y proveedores
---------------------------
https://docs.nestjs.com/cli/usages
nest g service mensajes

--------------------
5. Declaración de entidades
-----------------------------
nest g class mensajes/mensaje


--------------------
4. Conexión a base de datos
-----------------------------
https://docs.nestjs.com/techniques/database
npm install --save @nestjs/typeorm typeorm mysql


-------------------
3. Controllers
-------------------
https://docs.nestjs.com/controllers
nest generate controller cats
nest generate controller mensajes
nest generate class mensajes/dto/create-mensaje-dto

-----------
2. Extensiones de visual studio code
------------
Vscode NestJs Snippets


------------------
1.
---------------

xampp

nest
app


CREATE USER 'nest'@'localhost' IDENTIFIED VIA mysql_native_password USING '***';GRANT ALL PRIVILEGES ON *.* TO 'nest'@'localhost' REQUIRE NONE WITH GRANT OPTION MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;GRANT ALL PRIVILEGES ON `sendmeanapp_db`.* TO 'nest'@'localhost';