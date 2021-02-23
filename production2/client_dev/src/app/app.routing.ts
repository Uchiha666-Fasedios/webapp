// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';//esto nos va a permitir generar un modulo con este tema de las rutas para tenerlo todo separado y poder cargarlo dentro del framework
import { Routes, RouterModule } from '@angular/router';//generar objetos de rutas y generar el modulo para poder establecer toda esta configuracion dentro del framework


// Importar componentes a los cuales les quiero hacer una pagina exclusiva
import { HomeComponent } from './components/home/home.component';//HomeComponent nombre de la clase
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';



// Array de rutas creo un array q contienen todas las rutas
//path va el nombre de la pagina la ruta este path: '' seria vacio o sea la primera ruta q se carga 
//component: va el componente q quiero q se carge
//'**' significa q si no existe la ruta carge esta
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{ path: 'blog', component: BlogComponent },
	{ path: 'blog/articulo/:id', component: ArticleComponent },
	{ path: 'blog/editar/:id', component: ArticleEditComponent },
	{path: 'blog/crear', component: ArticleNewComponent},
	{path: 'buscar/:search', component: SearchComponent},
	{path: 'formulario', component: FormularioComponent},
	{path: 'peliculas', component: PeliculasComponent},
	{path: 'pagina-de-pruebas', component: PaginaComponent},
	{path: 'pagina-de-pruebas/:nombre', component: PaginaComponent},
	{path: '**', component: ErrorComponent},
];

// Exportar el modulo del router
//luego hay q importar todo al app.module.ts
//para q funcionen los servicios de ruta a nivel interno

export const appRoutingProviders: any[] = [];//typo any y q esta vacio para establecerlo como servicio
//aca cargamos el array de rutas appRoutes
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
