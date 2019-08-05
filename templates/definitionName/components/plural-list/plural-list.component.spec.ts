import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelDialogComponent } from './cancel-dialog.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {OktaAuthModule, OktaAuthService} from '@okta/okta-angular';
import {SessionService} from '../../../login/services/session.service';
import { {{pluralWord}}Service } from '../../services/{{plural}}.service';
import {environment} from '../../../../environments/environment';

const config = {
  issuer: environment.oktaIssuer,
  redirectUri: environment.oktaRedirectUri,
  clientId:  environment.oktaClientId
};

describe('CancelDialogComponent', () => {
  let component: CancelDialogComponent;
  let fixture: ComponentFixture<CancelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CancelDialogComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
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

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
