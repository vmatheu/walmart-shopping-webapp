# walmart-shopping-webapp
Walmart Shopping Webapp nos permite buscar productos por id, brand o description.
En caso que la busqueda sea un palindrome retorna el precio con un 50% de descuento.
Y solo buscara por brad o descripcion cuando el largo de busqueda se mayor que 3.

Walmart shopping webapp trabaja con la api que se encuentra en https://walmark-api-shopping.herokuapp.com/, 
entonces necesitas tener acceso a internet para buscar productos. 

### Operaciones

1. Para instalar dependencias
    ```
    $ npm install
    ```
2. Para levantar front local
    ```
    $ npm start    
    ```
    puedes ingresar en http://localhost:3001
    
### Pruebas

1. Para correr las pruebas unitarias.
    ```
    $ npm test:unit
    ```
1. Para correr las pruebas unitarias validando la covertura.
    ```
    $ npm test:coverage
    ```

2. Para correr las pruebas integrales.
    ```
    $ npm test:integration
    ```

3. Para correr las pruebas funcionales.
    ```
    $ npm test:functional
    ```
      > Nota: las pruebas corren con Cypress donde se conecta al server en en puerto 3002 que se levanta junto
      con estas pruebas. Estas pruebas tambien levantan en el puerto 8882 el servicio api/walmart/v1/product/filter/ 
      para buscar los productos que estan definidos en test/stubs.

4. Para correr todas las pruebas juntas.
    ```
    $ npm test
    ```
### Dependencias
1. React (libreria para construir interfaces)
2. Babel (libreria que nos ayuda a transformar nuestro Javascript a un Javascript compatible con los navegadores)
3. Jest, Chai y Enzyme (libreria que nos ayuda a realizar nuestras pruebas)
4. Cypress (Herramienta para nuestras pruebas funcionales)
5. Axios (librerias que nos ayuda a relizar nuestras peticiones http a nuestra api)
6. ESLint (Herramienta que nos ayuda a verificar nuestros patrones de codificacion )
