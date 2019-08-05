import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { {{pluralWord}}Component} from './components/{{plural}}/{{plural}}.component';
import { {{pluralWord}}ListComponent} from './components/{{plural}}-list/{{plural}}-list.component';
import {Create{{singularWord}}Component} from './components/create-{{singular}}/create-{{singular}}.component';
import {Edit{{singularWord}}Component} from './components/edit-{{singular}}/edit-{{singular}}.component';
import {AuthorizationGuard} from '../authorization.guard';

const routes: Routes = [
  {
    path: '',
    component: {{pluralWord}}ListComponent,
    canActivate: [AuthorizationGuard],
    data: {
      title: 'List of {{pluralWord}}'
    },
  },
  {
    path: 'create',
    component: Create{{singularWord}}Component,
    data: {
      title: 'Create {{singularWord}}'
    }
  },
  {
    path: 'edit/:{{singular}}Id',
    component: Edit{{singularWord}}Component,
    data: {
      title: 'Edit {{singularWord}}'
    }
  }
];

export const {{pluralWord}}Routing: ModuleWithProviders = RouterModule.forChild(routes);
