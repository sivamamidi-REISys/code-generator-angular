import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import { {{pluralWord}}ListComponent } from './{{plural}}-list.component';
import { {{pluralWord}}Module} from '../../{{plural}}.module';
import {SessionService} from '../../../login/services/session.service';
import {AppRoutingModule} from '../../../app-routing.module';
import {LoginComponent} from '../../../login/components/login/login.component';
import {NotFoundComponent} from '../../../error/notfound/notfound.component';
import {OktaAuthModule, OktaAuthService} from '@okta/okta-angular';
import { {{pluralWord}}Service} from '../../services/{{plural}}.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { MatDialog } from '@angular/material/dialog';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Observable, of} from 'rxjs';
import {SharedModule} from '../../../shared/shared.module';
import {MaterialModule} from '../../../material/material.module';
import {UserService} from '../../../user/services/user.service';
import {HomepageComponent} from '../../../homepage/homepage.component';
import {Roles} from '../../../user/models/user.model';

const config = {
  issuer: environment.oktaIssuer,
  redirectUri: environment.oktaRedirectUri,
  clientId:  environment.oktaClientId
};

describe('{{pluralWord}}ListComponent', () => {
  let component: {{pluralWord}}ListComponent;
  let fixture: ComponentFixture<{{pluralWord}}ListComponent>;
  const {{singular}}Id = '12';
  const testUrl = 'http://localhost:1234/{{plural}}-list';

  let {{plural}}Service: {{pluralWord}}Service;
  let dialogSpy: jasmine.Spy;
  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
  dialogRefSpyObj.componentInstance = { body: '' }; // attach componentInstance to the spy object...

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        NotFoundComponent,
        HomepageComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        OktaAuthModule.initAuth(config),
        AppRoutingModule,
        {{pluralWord}}Module,
        BrowserAnimationsModule,
        SharedModule,
        MaterialModule
      ],
      providers: [
        {{pluralWord}}Service,
        OktaAuthService,
        SessionService,
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    {{plural}}Service = TestBed.get({{pluralWord}}Service);
    {{plural}}Service.message = '{{singularWord}} Deleted Successfully!';
    fixture = TestBed.createComponent({{pluralWord}}ListComponent);
    component = fixture.componentInstance;
    dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
    fixture.detectChanges();
  });

  it('should create {{pluralWord}}ListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should determine page is {{singular}}-listing', fakeAsync(() => {
    const url = `${testUrl}`;
    const testUserRoles = Roles;
    spyOnProperty(component.router, 'url').and.returnValue(url);
    component.ngOnInit();
    // component.ngAfterViewInit();
    component.ngAfterViewChecked();
    component.ngOnChanges();
    component.ngOnDestroy();
    component.userRoles = testUserRoles;
    fixture.detectChanges();

    tick(10000);
    expect(component.isEdit).toBeFalsy();
  }));

  it('should get {{plural}} data',
    fakeAsync(() => {
      const test{{pluralWord}} = {"content":[{"createdAt":"2019-07-22T10:51:36.839+0000","updatedAt":"2019-07-22T22:40:19.599+0000","createdBy":"test","updatedBy":"test2","{{singular}}Id":1,"{{singular}}Name":"Continuity Government","address1":"1230  Sycamore Lake Road","address2":"","city":"Detroit","zip":"48279","state":"MI","active":true,"{{singular}}Type":{"createdAt":"2019-07-10T10:00:00.000+0000","updatedAt":"2019-07-10T10:00:00.000+0000","createdBy":"system","updatedBy":"system","{{singular}}TypeId":1,"name":"Defense"}},{"createdAt":"2019-07-22T15:27:12.091+0000","updatedAt":"2019-07-31T18:58:28.811+0000","createdBy":"test","updatedBy":"test2","{{singular}}Id":2,"{{singular}}Name":"NorthBay Tech","address1":"1230  Sycamore Lake Road","address2":"4103  Perine Street","city":"Detroit","zip":"48279","state":"MI","active":true,"{{singular}}Type":{"createdAt":"2019-07-10T10:00:00.000+0000","updatedAt":"2019-07-10T10:00:00.000+0000","createdBy":"system","updatedBy":"system","{{singular}}TypeId":2,"name":"Civilian"}},{"createdAt":"2019-08-01T20:02:44.862+0000","updatedAt":"2019-08-01T20:02:44.862+0000","createdBy":"test","updatedBy":"test","{{singular}}Id":12,"{{singular}}Name":"test","address1":"test","address2":"","city":"test","zip":"11111","state":"LA","active":true,"{{singular}}Type":{"createdAt":"2019-07-10T10:00:00.000+0000","updatedAt":"2019-07-10T10:00:00.000+0000","createdBy":"system","updatedBy":"system","{{singular}}TypeId":1,"name":"Defense"}},{"createdAt":"2019-08-02T17:55:31.262+0000","updatedAt":"2019-08-02T17:55:31.262+0000","createdBy":"test","updatedBy":"test","{{singular}}Id":13,"{{singular}}Name":"Test Automation Civilian {{singularWord}}","address1":"1 Main Street","address2":"St. 220","city":"Sterling","zip":"20161","state":"VA","active":true,"{{singular}}Type":{"createdAt":"2019-07-10T10:00:00.000+0000","updatedAt":"2019-07-10T10:00:00.000+0000","createdBy":"system","updatedBy":"system","{{singular}}TypeId":2,"name":"Civilian"}},{"createdAt":"2019-07-24T21:05:58.102+0000","updatedAt":"2019-08-05T17:42:16.043+0000","createdBy":"test","updatedBy":"test2","{{singular}}Id":11,"{{singular}}Name":"Test Automation Civilian {{singularWord}}2","address1":"1 Main Street","address2":"","city":"Sterling","zip":"20161","state":"VA","active":true,"{{singular}}Type":{"createdAt":"2019-07-10T10:00:00.000+0000","updatedAt":"2019-07-10T10:00:00.000+0000","createdBy":"system","updatedBy":"system","{{singular}}TypeId":2,"name":"Civilian"}},{"createdAt":"2019-08-09T14:53:29.411+0000","updatedAt":"2019-08-09T14:53:29.411+0000","createdBy":"test","updatedBy":"test","{{singular}}Id":15,"{{singular}}Name":"trial {{singular}}","address1":"12345 helloworld cir","address2":"","city":"queens","zip":"12545","state":"NY","active":true,"{{singular}}Type":{"createdAt":"2019-07-10T10:00:00.000+0000","updatedAt":"2019-07-10T10:00:00.000+0000","createdBy":"system","updatedBy":"system","{{singular}}TypeId":2,"name":"Civilian"}},{"createdAt":"2019-08-12T19:17:02.331+0000","updatedAt":"2019-08-12T19:17:02.331+0000","createdBy":"test","updatedBy":"test","{{singular}}Id":16,"{{singular}}Name":"hello","address1":"1230  Sycamore Lake Road","address2":"","city":"Detroit","zip":"48279","state":"MI","active":true,"{{singular}}Type":{"createdAt":"2019-07-10T10:00:00.000+0000","updatedAt":"2019-07-10T10:00:00.000+0000","createdBy":"system","updatedBy":"system","{{singular}}TypeId":1,"name":"Defense"}}],"pageable":{"sort":{"sorted":false,"unsorted":true,"empty":true},"pageSize":20,"pageNumber":0,"offset":0,"paged":true,"unpaged":false},"totalPages":1,"totalElements":7,"last":true,"sort":{"sorted":false,"unsorted":true,"empty":true},"numberOfElements":7,"first":true,"size":20,"number":0,"empty":false}
      spyOn({{plural}}Service, 'getListOf{{pluralWord}}').and.returnValue(Observable.of(test{{pluralWord}}));

      component.{{plural}} = test{{pluralWord}};
      component.get{{pluralWord}}();
      fixture.detectChanges();

      tick();
      expect({{plural}}Service.getListOf{{pluralWord}}).toHaveBeenCalled();
      expect(component.{{plural}}).not.toBeNull();
    })
  );

  it('should navigate to {{plural}}-list create page',
    inject([Router], (router: Router) => {
      spyOn(router, 'navigateByUrl').and.stub();
      component.create{{singularWord}}();
      expect(router.navigateByUrl).toHaveBeenCalled();
    })
  );

  it('should navigate to {{plural}}-list edit page',
    inject([Router], (router: Router) => {
      spyOn(router, 'navigateByUrl').and.stub();
      component.edit{{singularWord}}({{singular}}Id);
      expect(router.navigateByUrl).toHaveBeenCalled();
    })
  );

  it('should open delete {{singular}} modal', () => {
    const res = null;
    spyOn({{plural}}Service, 'delete{{singularWord}}').and.returnValue(Observable.of(res));

    component.delete{{singularWord}}({{singular}}Id);
    component.message = '{{singularWord}} Deleted Successfully!';
    component.get{{pluralWord}}();
    fixture.detectChanges();

    expect(dialogSpy).toHaveBeenCalled();
    expect({{plural}}Service.delete{{singularWord}}).toHaveBeenCalled();
    expect(component.message).toContain('{{singularWord}} Deleted Successfully!');
  });

  it('should open view {{singular}} modal', () => {
    component.view{{singularWord}}({{singular}}Id);

    expect(dialogSpy).toHaveBeenCalled();
  });
});

