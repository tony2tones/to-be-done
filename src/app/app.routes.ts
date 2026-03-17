import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountryListComponent  } from './features/country-list/country-list.component';

export const routes: Routes = [
    {
        path: '', 
        component: AppComponent, 
    },
    {
        path: 'country-list', 
        component: CountryListComponent, 
    },

];
