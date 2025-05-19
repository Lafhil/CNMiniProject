import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {AppLayoutModule} from "./layout/app.layout.module";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),provideAnimations(),FormsModule,
    AppLayoutModule,CommonModule,ButtonModule,InputTextModule]
};
