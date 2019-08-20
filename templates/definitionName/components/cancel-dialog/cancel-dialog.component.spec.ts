import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelDialogComponent } from './cancel-dialog.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {OktaAuthModule, OktaAuthService} from '@okta/okta-angular';
import {SessionService} from '../../../login/services/session.service';
import { {{pluralWord}}Service} from '../../services/{{plural}}.service';
import {environment} from '../../../../environments/environment';

const config = {
  issuer: environment.oktaIssuer,
  redirectUri: environment.oktaRedirectUri,
  clientId:  environment.oktaClientId
};

describe('CancelDialogComponent', () => {
  let component: CancelDialogComponent;
  let fixture: ComponentFixture<CancelDialogComponent>;

  const dialogMock = {
    close: () => { }
  };

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
        { provide: MatDialogRef, useValue: dialogMock }
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

  it('should close dialog and navigate to listing page if event === Yes', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    spyOn(component.router, 'navigateByUrl').and.stub();
    component.close('Yes');

    expect(spy).toHaveBeenCalled();
    expect(component.router.navigateByUrl).toHaveBeenCalled();
  });

  it('should close dialog if event === No', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.close('No');

    expect(spy).toHaveBeenCalled();
  });
});
