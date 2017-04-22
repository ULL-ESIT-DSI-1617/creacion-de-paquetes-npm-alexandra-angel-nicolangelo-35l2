**Práctica 8:  creacion-de-paquetes-npm-alexandra-angel-nicolangelo-35l2**

Uno de los objetivos de esta práctica es aprender a crear packages NodeJS y publicarlos en npm. El paquete se construye a partir de el código que se desarrolló en la práctica evaluar strategy pattern.

 - Se trata de construir un primer módulo npm ull-shape con el código de  la clase `Shape` 
 - Se construirá un módulo npm `ull-shape-triangle` que
   contenga la clases `Triangle` 
 - En general, para cada tipo particular de
   forma geométrica x se construirá un módulo npm `ull-shape-x` que  contenga la clase `X`
 - La implantación del módulo principal `ull-shape` se
   hace primero y de forma colaborativa.
- Cada miembro del equipo implantará el solo al menos uno de los plugin `ull-shape-x`: si hay tres miembros cada uno implantará al menos una forma distinta.

- La implantación de los plugin `ull-shape-x` no debería conllevar ,a modificación del código del módulo principal `ull-shape`(principio Open/Close)

 - Como deberán publicar en el site de npm los módulos asegúrense de ponerle a sus paquetes un nombre único que no coincida con el de los otros alumnos, por ejemplo `ull-shape-team-name` y `ull-shape-x-team-name`

 - Añada a los otros miembros del equipo como `contributors`. Véase [las seccion people fields de package.json](https://docs.npmjs.com/files/package.json#people-fields-author-contributors)

 - Escriba documentación para cada uno de los módulos (Véase [documentation.js](http://documentation.js.org/), [jsdoc](https://www.npmjs.com/package/jsdoc), [docco](http://jashkenas.github.io/docco/))

 - Añada pruebas para cada uno de los módulos

 - Integre usando Travis

 - En esta tarea deberá trabajar con varios repos, uno para el módulo principal `ull-shape` y uno para cada shape específica: cree los diferentes repos dentro de la organización `ULL-ESIT-DSI-1617` siguiendo el patrón `creacion-de-paquetes-npm-team` para el módulo principal y `creacion-de-paquetes-npm-team-triangle` para el del triángulo, etc.
 
 [Enlace de la práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicamodulestrategypattern.html)
