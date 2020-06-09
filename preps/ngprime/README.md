# Ngprime

```
 npm install primeng --save
 npm install primeicons --save
 npm install @angular/animations --save
```

Creo un test:

```
ng g c components/test
```



configuración en el módulo:

```javascript
  imports: [
    BrowserModule,
    MenuModule,
    BrowserAnimationsModule
  ],
     ........
```

en `angular.json`

```json
 "styles": [
              "src/styles.css",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeng/resources/primeng.css",
              "node_modules/primeng/resources/themes/nova-light/theme.css"
            ],
```
El código está en el componente **test**
