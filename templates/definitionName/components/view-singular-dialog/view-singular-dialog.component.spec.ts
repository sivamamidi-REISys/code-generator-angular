import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { View{{singularWord}}DialogComponent } from './view-{{singular}}-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { {{pluralWord}}Service} from '../../services/{{plural}}.service';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {SessionService} from '../../../login/services/session.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {OktaAuthModule, OktaAuthService} from '@okta/okta-angular';
import {environment} from '../../../../environments/environment';

const config = {
  issuer: environment.oktaIssuer,
  redirectUri: environment.oktaRedirectUri,
  clientId:  environment.oktaClientId
};

describe('View{{singularWord}}DialogComponent', () => {
  let component: View{{singularWord}}DialogComponent;
  let fixture: ComponentFixture<View{{singularWord}}DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        View{{singularWord}}DialogComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatTableModule,
        OktaAuthModule.initAuth(config)
      ],
      providers: [
        SessionService,
        {{pluralWord}}Service,
        OktaAuthService,
        {provide: MatDialogRef, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(async (() => {
    fixture = TestBed.createComponent(View{{singularWord}}DialogComponent);
    component = fixture.componentInstance;
  }));

  it('should create View{{singularWord}}DialogComponent', () => {
    expect(component).toBeTruthy();
  });
});
