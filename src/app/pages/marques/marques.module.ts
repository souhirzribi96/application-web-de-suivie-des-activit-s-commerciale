import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {NgxPaginationModule} from 'ngx-pagination';
import {PipesModule} from '../../theme/pipes/pipes.module';
import {
    MatButtonModule, MatCardModule, MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule,
    MatTableModule
} from '@angular/material';

import {MarquesComponent} from "./marques.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {SecteurDetailComponent} from "./secteur-detail/secteur-detail.component";
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {DxCheckBoxModule, DxDataGridModule, DxTemplateModule} from 'devextreme-angular';


export const routes = [
  { path: '', component: MarquesComponent, pathMatch: 'full' },
    {path: 'secteur-details/:id', component: SecteurDetailComponent, data: { title: 'Secteur Details',breadcrumb: ' Secteur Details '  }},

];

@NgModule({
  imports: [
      DxCheckBoxModule,
      DxDataGridModule,
      DxTemplateModule,
      Ng2SmartTableModule,
      NgSelectModule,
      ReactiveFormsModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatProgressSpinnerModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    MultiselectDropdownModule,
    NgxPaginationModule,
    PipesModule],
   declarations: [MarquesComponent,
                  SecteurDetailComponent
                  ],
    providers: [NgbActiveModal,
    ],
    exports :[ MarquesComponent],
    bootstrap : [MarquesComponent]
})
export class MarquesModule { }
