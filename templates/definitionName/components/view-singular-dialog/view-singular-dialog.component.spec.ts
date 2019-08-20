import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { View{{singularWord}}DialogComponent } from './view-{{singular}}-dialog.component';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { {{pluralWord}}Service} from '../../services/{{plural}}.service';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {SessionService} from '../../../login/services/session.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {OktaAuthModule, OktaAuthService} from '@okta/okta-angular';
import {environment} from '../../../../environments/environment';
import { {{singularWord}}Create} from "../../models/{{plural}}.model";
import {Observable, of} from "rxjs";

const config = {
  issuer: environment.oktaIssuer,
  redirectUri: environment.oktaRedirectUri,
  clientId:  environment.oktaClientId
};

describe('View{{singularWord}}DialogComponent', () => {
  let component: View{{singularWord}}DialogComponent;
  let fixture: ComponentFixture<View{{singularWord}}DialogComponent>;
  let {{plural}}Service: {{pluralWord}}Service;

  let dialogSpy: jasmine.Spy;
  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
  dialogRefSpyObj.componentInstance = { body: '' }; // attach componentInstance to the spy object...
  const dialogMock = {
    close: () => { }
  };

  const formBuilder: FormBuilder = new FormBuilder();
  const {{singular}} = new {{singularWord}}Create();
 
  const test{{singularWord}} = {
    {{#each properties}}
        {{name}} : "Test Property",
      {{/each}}
  };

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
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  }));

  beforeEach(async (() => {
    {{plural}}Service = TestBed.get({{pluralWord}}Service);
    fixture = TestBed.createComponent(View{{singularWord}}DialogComponent);
    component = fixture.componentInstance;
    component.{{singular}}DetailsForm = formBuilder.group({
      {{#each properties}}
        {{name}} : new FormControl(),
      {{/each}}
    });
    {{#each properties}}
        {{../single}}.{{name}} = "Test Property" ;
    {{/each}}
    fixture.detectChanges();
  }));

  it('should create View{{singularWord}}DialogComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should get an {{singular}} by Id',
    fakeAsync(() => {
      spyOn({{plural}}Service, 'get{{singularWord}}ById').and.returnValue(Observable.of(test{{singularWord}}));
      component.{{singular}} = test{{singularWord}};
      component.get{{singularWord}}();
      fixture.detectChanges();
      tick();
      expect({{plural}}Service.get{{singularWord}}ById).toHaveBeenCalled();
    })
  );

 

  it('should close dialog', () => {
    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.closeWindow();
    expect(spy).toHaveBeenCalled();
  });

});
