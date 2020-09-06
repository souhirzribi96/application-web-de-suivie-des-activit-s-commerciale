import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {NgxPaginationModule} from 'ngx-pagination';
import {PipesModule} from '../../theme/pipes/pipes.module';

import {ContactComponent} from "./contact.component";
import {DxCheckBoxModule, DxDataGridModule, DxTemplateModule} from 'devextreme-angular';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NgSelectModule} from '@ng-select/ng-select';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';

export const routes = [
  { path: '', component: ContactComponent, pathMatch: 'full' }
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
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
