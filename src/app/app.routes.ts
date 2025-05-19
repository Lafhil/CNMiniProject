import { Routes } from '@angular/router';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {ContainerComponent} from "./container/container.component";
import {TexteToimageComponent} from "./texte-toimage/texte-toimage.component";

export const routes: Routes = [{path:'',
  component:AppLayoutComponent,children:[
    {path:'', component:ContainerComponent},
    {path:'textToImage',component:TexteToimageComponent}]}];
