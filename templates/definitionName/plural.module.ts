import {NgModule} from '@angular/core';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { {{pluralWord}}Routing} from './agencies-routing.module';
import { {{pluralWord}}Component} from './components/agencies/agencies.component';
import { {{pluralWord}}ListComponent} from './components/agencies-list/agencies-list.component';
import {Create{{singularWord}}Component} from './components/create-{{singular}}/create-{{singular}}.component';
import { {{pluralWord}}Service} from './services/agencies.service';
import {CancelDialogComponent} from './components/cancel-dialog/cancel-dialog.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { Edit{{singularWord}}Component } from './components/edit-{{singular}}/edit-{{singular}}.component';
import { View{{singularWord}}DialogComponent } from './components/view-{{singular}}-dialog/view-{{singular}}-dialog.component';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    {{pluralWord}}Routing,
    SharedModule,
    MaterialModule
  ],
  declarations: [
    {{pluralWord}}Component,
    {{pluralWord}}ListComponent,
    Create{{singularWord}}Component,
    CancelDialogComponent,
    DeleteDialogComponent,
    Edit{{singularWord}}Component,
    View{{singularWord}}DialogComponent
  ],
  entryComponents: [
    CancelDialogComponent,
    DeleteDialogComponent,
    View{{singularWord}}DialogComponent
  providers: [
    {{pluralWord}}Service,
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class {{pluralWord}}Module {
}
