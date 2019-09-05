import {async, inject, TestBed} from '@angular/core/testing';
import { {{pluralWord}}Service } from './{{plural}}.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SessionService} from '../../login/services/session.service';
import { {{singularWord}}Create} from '../models/{{plural}}.model';
import {environment} from '../../../environments/environment';
{{#if isAuthenticated}}
import {OAuthModule, OAuthService} from "angular-oauth2-oidc";
{{/if}}

describe('{{pluralWord}}Service', () => {
  const testPath = 'http://localhost:1234';
  const {{singular}}Id = '123456';

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule,
      {{#if isAuthenticated}}
      OAuthModule.forRoot(),
  {{/if}}
      RouterTestingModule
      
    ],
    providers: [
      {{pluralWord}}Service,
      {{#if isAuthenticated}}
      OAuthService,
  {{/if}}
      SessionService
      
    ]
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', inject([{{pluralWord}}Service], (service: {{pluralWord}}Service) => {
    expect(service).toBeTruthy();
  }));

  it('should make http call to create {{singularWord}}', async(
    inject([{{pluralWord}}Service, HttpTestingController], (service: {{pluralWord}}Service, httpMock: HttpTestingController) => {
      const test{{singularWord}} = new {{singularWord}}Create();
      service.{{plural}}Path = testPath;
      service.add{{singularWord}}(test{{singularWord}}).subscribe((response) => {
        expect(response).toBeTruthy();
      });

      const req = httpMock.expectOne({method: 'POST', url: `${testPath}/{{plural}}`});
      req.flush({});
    }))
  );

  it('should make http call to update {{singularWord}}', async(
    inject([{{pluralWord}}Service, HttpTestingController], (service: {{pluralWord}}Service, httpMock: HttpTestingController) => {
      const test{{singularWord}} = new {{singularWord}}Create();
      test{{singularWord}}.{{singular}}Id = '123456'
      service.{{plural}}Path = `${testPath}`;
      service.update{{singularWord}}(test{{singularWord}}).subscribe((response) => {
        expect(response).toBeTruthy();
      });

      const req = httpMock.expectOne({method: 'PUT', url: `${testPath}/{{plural}}/${test{{singularWord}}.{{singular}}Id}`});
      req.flush({});
    }))
  );

  it('should make http call to delete {{singularWord}}', async(
    inject([{{pluralWord}}Service, HttpTestingController], (service: {{pluralWord}}Service, httpMock: HttpTestingController) => {
      service.{{plural}}Path = `${testPath}`;
      service.delete{{singularWord}}({{singular}}Id).subscribe((response) => {
        expect(response).toBeTruthy();
      });

      const req = httpMock.expectOne({method: 'DELETE', url: `${testPath}/{{plural}}/${ {{singular}}Id}`});
      req.flush({});
    }))
  );

});
