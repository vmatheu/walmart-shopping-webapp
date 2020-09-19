# walmark-shopping-webapp
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

1. Para correr las pruebas unitarias en tu local
    ```
    $ npm test:unit
    ```

2. Para correr las pruebas integrales en tu local
    ```
    $ npm test:integration
    ```

3. Para correr todas las pruebas juntas en tu local
    ```
    $ npm test
    ```
