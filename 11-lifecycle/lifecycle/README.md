ngOnChanges(): Este hook se llama al inicio y cada vez que Angular 
    detecta un cambio en los inputs del componente 
    (cuando tienes algún property binding).
    Recibe como parámetro un objeto SimpleChanges, con los valores actuales 
    y anteriores (si había) de los inputs.


ngOnInit(): Este hook te permite inicializar el componente una vez ha recibido 
            las propiedades de entrada.

ngDoCheck(): Sirve para detectar y actuar sobre cambios que Angular 
            no va a detectar por si mismo. Se llama también durante cada ciclo 
            de detección de cambios, después de ngOnChanges().

ngAfterContentInit(): Se ejecuta una sola vez, justo después de que Angular 
                    proyecte contenido externo en la vista del componente 
                    (con ng-content). // angular projections

ngAfterContentChecked(): Se ejecuta después de que Angular compruebe el contenido 
                        proyectado en el componente. Se ejecuta también durante 
                        los ciclos de detección de cambios, después de ngDoCheck().

ngAfterViewInit(): Se llama una única vez, tras inicializar las vistas 
                    y sub-vistas del componente.

ngAfterViewChecked(): Se llama después de comprobar los cambios de las vistas 
                    y sub-vistas del componente. Se ejecuta también durante 
                    el ciclo de detección de cambios, después de ngAfterContentChecked().

ngOnDestroy(): Se llama solo una vez, justo antes de que Angular 
                destruya el componente, y sirve para prevenir memory leaks, 
                eliminando por ejemplo suscripciones a Observables y event handlers.
