import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';//importamos esto para q funcione el sistema de rutas
import { FormsModule } from '@angular/forms';//importamos esto para q funcione para trabajar con formularios y [(ngModel)]
import{HttpClientModule} from '@angular/common/http';//importamos esto para poder hacer peticiones ajax
import { MomentModule } from "angular2-moment";



import { AppComponent } from './app.component';
import { Micomponente } from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    Micomponente,
    PeliculasComponent,
    PruebasComponent,
    HeaderComponent,
    SliderComponent,
    SiderbarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    PeliculaComponent,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent
   
  ],
  imports: [
    BrowserModule,
    routing,//modulo q cree de las rutas 
     FormsModule,
    HttpClientModule,//modulo para usar peticiones http
    MomentModule
  ],
  providers: [
    appRoutingProviders//providers nos sirve para cargar servicios appRoutingProviders es el servisio de rutas
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
