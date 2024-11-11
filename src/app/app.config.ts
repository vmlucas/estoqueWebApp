import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
//import { provideCharts, withDefaultRegisterables, } from 'ng2-charts';
  
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()),provideHttpClient(),]
};


