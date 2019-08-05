import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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
    return this.http.get(url);
  }
  add{{singularWord}}(data) {
    const url: string = `${this.{{plural}}Path}/{{plural}}`;
    return this.http.post(url, data);
  }

  get{{singularWord}}ById({{singular}}Id) {
    const url: string = `${this.{{plural}}Path}/{{plural}}/${ {{singular}}Id}`;
    return this.http.get(url);
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
