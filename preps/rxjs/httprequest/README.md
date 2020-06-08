# Httprequest

Before you can use HttpClient, you need to import the Angular HttpClientModule. Most apps do so in the root AppModule.

```javascript
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

creamos un servicio:

```shell
ng g service service/post
```

y el servicio inyectamos httpclient

```javascript
  constructor(
    private http: HttpClient
  ) { }
```

## Requesting data from a server

Usamos HTTPClient.get() para recuperar datos del servidor. El método asíncrono envía una petición http y devuelve un observable que emite los datos solicitados cuando recibe la respuesta.

El tipo de return varia en base a los parámetros *observe*  y *responseType* que pasamos en la llamada.

El método get() recupera dos argumentos: la URL del endpoint y un objeto options para configurar la petición.

```javascript
options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }
```

Las opciones más impoortantes son:

- *observe*, que especifica qué parte o partes de la respuesta devolverá
- *responseType* ue especifica el formato en que se devuelve

Para recuperar datos de json-server, la llamada a call necesita las siguientes opciones: `{observe: 'body', responseType: 'json'}`. Son los valores por defecto, por lo que no actuaremos contra ellas.

Ahora podemos poner en el servicio el método getPosts() :

```javascript
  getPosts() {
    return this.http.get("http://localhost:4000/posts");
  }
```

Creamos el post component:

```
ng g component components/post
```


The ConfigComponent injects the ConfigService and calls the getConfig service method.

Because the service method returns an Observable of configuration data, the component subscribes to the method's return value. The subscription callback performs minimal post-processing. It copies the data fields into the component's config object, which is data-bound in the component template for display.



