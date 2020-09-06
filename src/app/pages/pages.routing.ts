import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';
import {SecteurDetailComponent} from "./marques/secteur-detail/secteur-detail.component";

export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            { path:'', redirectTo:'home', pathMatch:'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule', data: { breadcrumb: 'Accueil' }  },
            { path: 'marques', loadChildren: './marques/marques.module#MarquesModule', data: { breadcrumb: 'Gamme des produits par marques' } },
            { path: 'activite-commerce', loadChildren: './activite-commerce/activite-commerce.module#ActiviteCommerceModule',data: { breadcrumb: 'Activités commeciales' } },
            { path: 'rendez-vous', loadChildren: './rendez-vous/rendez-vous.module#RendezVousModule', data: { breadcrumb: 'Rendez vous  ' } },
            { path: 'Notes', loadChildren: './Notes/Note.module#NoteModule', data: { breadcrumb: ' Notes ' } },
            { path: 'contacts', loadChildren: './contacts/contact.module#ContactModule', data: { breadcrumb: ' Contacts ' } },

            /* { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' }  },
             { path: 'membership', loadChildren: './membership/membership.module#MembershipModule', data: { breadcrumb: 'Membership' } },
             { path: 'ui', loadChildren: './ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
             { path: 'form-elements', loadChildren: './form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: 'Form Elements' } },
             { path: 'tables', loadChildren: './tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
             { path: 'tools', loadChildren: './tools/tools.module#ToolsModule', data: { breadcrumb: 'Tools' } },
             { path: 'calendar', loadChildren: './calendar/app-calendar.module#AppCalendarModule', data: { breadcrumb: 'Calendar' } },
             { path: 'mailbox', loadChildren: './mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } },
             { path: 'maps', loadChildren: './maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
             { path: 'charts', loadChildren: './charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
             { path: 'dynamic-menu', loadChildren: './dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' }  },
             { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
             { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } }*/
       ]
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
