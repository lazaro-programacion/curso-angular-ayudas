# Básicos angular CLI

### Instalación de CLI:

```
npm i -g @angular/cli
```

### Nueva aplicación:

```
ng new stock-market
```
Esta aplicación la hemos generado sin Router y con CSS

### Arrancar la aplicación:
```
ng serve --open
```

### Generar componente: 
```
ng generate component components/stock/stock-item
```

### Generar modelo:
```
ng generate class models/stock/stock
```



# Ejercicio 1

1. Comenzar el proyecto con ng new remote-helpdesk
2. Creamos un componente para mostrar un servicio
3. El componente tendrá que mostrar:
    - Nombre del servicio
    - Precio
    - Imagen
4. Mostraremos el producto de una forma más destacada si el producto
es una novedad. 
5. Que sea novedad será un atributo del servicio. (esto es , de su clase)
6. Añadir botones de + y - para cambiar la cantidad del producto. El botón de menos estará desabilitado cuando la cantidad es "0"

# Ejercicio 1 plus

7. Crear un proveedor del servicio
8. El proveedor del servicio tendrá los campos de:
  - nombre
  - apellidos
  - nif
  - foto
  - valoración


# Ejercicio 2
- Clase de novedad funcione con ngClass
- En lugar de deshabilitar el (-), lo eliminanos cuando la cantidad sea 0
- Añadir un select con los números del 1 al 10 (que más adelante usaremos) para seleccionar una cantidad. Los options generarlos con *ngFor.

