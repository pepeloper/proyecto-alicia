## Workflows

Instalar dependencias
- `npm install`
- `composer install`

Tirar las migraciones y popular la base de datos
- `php artisan migrate:fresh --seed`

Levantar el backend
- `php artisan serve`

Levantar el frontend
- `npm run dev`

## Notas

Para trabajar con formularios, Inertia expone un hook llamado `useForm` que se puede usar para obtener el estado del formulario y enviar los datos.

https://inertiajs.com/forms#form-helper

Para subir archivos Inertia automágicamente convierte la request en un FormData con lo que no tenemos que hacer nada especial en el frontend

https://inertiajs.com/file-uploads

Para crear links o navegar de manera programática tenemos el `router.visit` o sus helpers

https://inertiajs.com/manual-visits
https://inertiajs.com/links