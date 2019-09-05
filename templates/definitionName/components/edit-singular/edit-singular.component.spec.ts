import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { Edit{{singularWord}}Component } from './edit-{{singular}}.component';
import {environment} from '../../../../environments/environment';
import { {{singularWord}}Create} from '../../models/{{plural}}.model';
import { {{pluralWord}}Service} from '../../services/{{plural}}.service';
import {Observable, of} from 'rxjs';
import {CancelDialogComponent} from '../cancel-dialog/cancel-dialog.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatDialog, MatDialogModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SessionService} from '../../../login/services/session.service';
{{#if isAuthenticated}}
import {OAuthModule, OAuthService} from "angular-oauth2-oidc";
{{/if}}

describe('Edit{{singularWord}}Component', () => {
  let component: Edit{{singularWord}}Component;
  let fixture: ComponentFixture<Edit{{singularWord}}Component>;
  let {{plural}}Service: {{pluralWord}}Service;

  let dialogSpy: jasmine.Spy;
  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
  dialogRefSpyObj.componentInstance = { body: '' }; // attach componentInstance to the spy object...

  const formBuilder: FormBuilder = new FormBuilder();
  const {{singular}} = new {{singularWord}}Create();
  const testUrl = 'http://localhost:1234/{{plural}}-list';

  const test{{singularWord}} = {
    {{#each propertiesEditable}}
        {{name}} : "Test {{name}}",
      {{/each}}
  };




  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Edit{{singularWord}}Component,
        CancelDialogComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        {{#if isAuthenticated}}
            OAuthModule.forRoot(),
        {{/if}}
        BrowserAnimationsModule,
        BrowserModule,
        ReactiveFormsModule
      ],
      providers: [
        {{pluralWord}}Service,
        {{#if isAuthenticated}}
            OAuthService,
        {{/if}}
        SessionService,
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    {{plural}}Service = TestBed.get({{pluralWord}}Service);
    fixture = TestBed.createComponent(Edit{{singularWord}}Component);
    component = fixture.componentInstance;
    dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
    component.{{singular}}DetailsForm = formBuilder.group({
      {{#each propertiesEditable}}
        {{name}} : new FormControl(),
      {{/each}}
    });
    
    {{#each propertiesEditable}}
        {{../singular}}.{{name}} = "Test {{name}}" ;
    {{/each}}

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should determine page is edit', fakeAsync(() => {
    const url = `${testUrl}/edit`;
    spyOnProperty(component.router, 'url').and.returnValue(url);
    component.ngOnInit();
    fixture.detectChanges();

    tick();
    expect(component.isEdit).toBeFalsy();
  }));

  it('should update an {{singular}}',
    fakeAsync(() => {
      const mockedObservable = Observable.of( new {{singularWord}}Create());
      spyOn({{plural}}Service, 'update{{singularWord}}').and.returnValue(mockedObservable);
      spyOn(localStorage, 'setItem').and.stub();
      spyOn(component.router, 'navigateByUrl').and.stub();


      {{#each propertiesEditable}}
          component.{{../singular}}DetailsForm.get('{{../singular}}Name').setValue("Test {{name}}");
      {{/each}}

      component.{{singular}} = test{{singularWord}};
      component.update{{singularWord}}();
      fixture.detectChanges();

      tick();
      expect({{plural}}Service.update{{singularWord}}).toHaveBeenCalled();
      expect(localStorage.setItem).toHaveBeenCalled();
      expect(component.router.navigateByUrl).toHaveBeenCalled();
    })
  );

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

  it('should open dialog to Cancel Edit', () => {
    component.cancelUpdate('cancelUpdate{{singularWord}}');

    expect(dialogSpy).toHaveBeenCalled();
  });

  it('should set error messages on update',
    fakeAsync(() => {
      const mockedObservable = Observable.create(observer => {
        observer.error({
          error: {
            errorMessages: ['Test Error Message']
          }
        });
        observer.complete();
      });
      spyOn({{plural}}Service, 'update{{singularWord}}').and.returnValue(mockedObservable);
      component.{{singular}} = test{{singularWord}};
      component.update{{singularWord}}();
      fixture.detectChanges();

      tick();
      expect({{plural}}Service.update{{singularWord}}).toHaveBeenCalled();
      expect(component.errorMessages).not.toBeNull();
      expect(component.errorMessages.length).toBe(1);
    })
  );

  

});
