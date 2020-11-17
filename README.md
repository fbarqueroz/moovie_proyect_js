# Plantilla de proyectos para el curso de Javascript 2 en el [CETAV](http://parquelalibertad.org/cetav/)

## Requerimientos

* Node.js 12.x o superior

## Uso

```
npm install
npm run dev
```

//-------------------------------------------------------------------------------------------------\\

Implementación de mejoras:

 - Se implementó el botón de "view more" para cargar más películas, ya que por defecto sólo muestra las primeras diez peliculas de la busqueda que el usuario realice.

Explicación breve del proyecto:

 - En este proyecto se implementa AJAX, en el cual se utiliza el API de OMDb para poder obtener las peliculas, por medio del fetch, en el proyecto.Además, se hace uso de archivos de configuración (.editorconfig, .eslintrc.json), en el cual se obtiene la información y tambien se implementan los módulos de node JS. El API está ligado con Javascript realizando el HTML dentro del mismo e ingresando la caratura o poster y los datos de las películas dentro de un "li", como el título, actores, sinopsis, metascore, duración y el año en el cual fue estrenada.
