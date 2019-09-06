import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../login/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class {{pluralWord}}Service {
  {{plural}}Path = `${environment.{{plural}}ApiUri}/api/v1`;
  refresh{{pluralWord}}: Subject<any> = new Subject();
  message: string;

  constructor(private readonly sessionService: SessionService,
    private readonly http: HttpClient) {
  }

  getListOf{{pluralWord}}() {
    const url = `${this.{{plural}}Path}/{{plural}}`;

    return Observable.of({'content' : [
      {
        {{#each properties}}
           '{{name}}': 'test1 {{name}}',
         {{/each}}
       },
       {
        {{#each properties}}
           '{{name}}': 'test2 {{name}}',
         {{/each}}
       },
       {
        {{#each properties}}
           '{{name}}': 'test3 {{name}}',
         {{/each}}
       },
       {
        {{#each properties}}
           '{{name}}': 'test4 {{name}}',
         {{/each}}
       }
    ]});


    //return this.http.get(url);
  }
  add{{singularWord}}(data) {
    const url: string = `${this.{{plural}}Path}/{{plural}}`;
    return this.http.post(url, data);
  }

  get{{singularWord}}ById({{singular}}Id) {
    const url: string = `${this.{{plural}}Path}/{{plural}}/${ {{singular}}Id}`;
    return Observable.of({
      {{#each properties}}
        '{{name}}': 'test {{name}}',
     {{/each}}
    });

    //return this.http.get(url);
  }

  update{{singularWord}}({{singular}}) {
    const url: string = `${this.{{plural}}Path}/{{plural}}/${ {{singular}}.{{singular}}Id}`;
    return this.http.put(url, {{singular}});
  }

  delete{{singularWord}}({{singular}}Id) {
    const url: string = `${this.{{plural}}Path}/{{plural}}/${ {{singular}}Id}`;
    return this.http.delete(url);
  }

}
