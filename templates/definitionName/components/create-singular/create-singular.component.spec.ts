import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import { Create{{singularWord}}Component } from './create-{{singular}}.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Observable, of} from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms';
import {CancelDialogComponent} from '../cancel-dialog/cancel-dialog.component';
import {BrowserModule} from '@angular/platform-browser';
import { {{pluralWord}}Service} from '../../services/{{plural}}.service';
import {OktaAuthModule, OktaAuthService} from '@okta/okta-angular';
import {SessionService} from '../../../login/services/session.service';
import {environment} from '../../../../environments/environment';
import { {{singularWord}}Create} from '../../models/{{plural}}.model';

const config = {
  issuer: environment.oktaIssuer,
  redirectUri: environment.oktaRedirectUri,
  clientId:  environment.oktaClientId
};

describe('Create{{singularWord}}Component', () => {
  let component: Create{{singularWord}}Component;
  let fixture: ComponentFixture<Create{{singularWord}}Component>;
  const {{singular}} = new {{singularWord}}Create();
  const testUrl = 'http://localhost:1234/{{plural}}-list';
  let {{plural}}Service: {{pluralWord}}Service;

  let dialogSpy: jasmine.Spy;
  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
  dialogRefSpyObj.componentInstance = { body: '' }; // attach componentInstance to the spy object...

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Create{{singularWord}}Component,
        CancelDialogComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        OktaAuthModule.initAuth(config),
        BrowserAnimationsModule,
        BrowserModule,
        ReactiveFormsModule
      ],
      providers: [
        {{pluralWord}}Service,
        OktaAuthService,
        SessionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    {{plural}}Service = TestBed.get({{pluralWord}}Service);
    fixture = TestBed.createComponent(Create{{singularWord}}Component);
    component = fixture.componentInstance;
    dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
    // component.{{singular}}Types = {{singular}}Types;
    // {{singular}}.{{singular}}Type = { name: 'testName', {{singular}}TypeId: 111 };
    

    {{#each properties}}
        {{../single}}.{{name}} = "Test Property" ;
      {{/each}}
    
    spyOn(component.router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should determine page is create', fakeAsync(() => {
    const url = `${testUrl}/create`;
    spyOnProperty(component.router, 'url').and.returnValue(url);
    component.ngOnInit();
    fixture.detectChanges();

    tick();
    expect(component.isEdit).toBeFalsy();
  }));

  it('should create a new {{singular}}',
    fakeAsync(() => {
      const mockedObservable = Observable.of( new {{singularWord}}Create());
      spyOn({{plural}}Service, 'add{{singularWord}}').and.returnValue(mockedObservable);
      spyOn(localStorage, 'setItem').and.stub();
      spyOn(component.router, 'navigateByUrl').and.stub();
      component.{{singular}} = new {{singularWord}}Create();
      component.create{{singularWord}}();
      fixture.detectChanges();

      tick();
      expect({{plural}}Service.add{{singularWord}}).toHaveBeenCalled();
      expect(localStorage.setItem).toHaveBeenCalled();
      expect(component.router.navigateByUrl).toHaveBeenCalled();
    })
  );


  it('should open cancel create modal', () => {
    component.cancelCreate('cancelCreate{{singularWord}}');
    expect(dialogSpy).toHaveBeenCalled();
  });
  
});
