import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { {{pluralWord}}Service} from '../../services/{{plural}}.service';
import { {{singularWord}}Create} from '../../models/{{plural}}.model';
import { MatDialog } from '@angular/material/dialog';
import {CancelDialogComponent} from '../cancel-dialog/cancel-dialog.component';

@Component({
  selector: 'app-create-{{singular}}',
  templateUrl: './create-{{singular}}.component.html',
  styleUrls: ['./create-{{singular}}.component.scss']
})
export class Create{{singularWord}}Component implements OnInit {
  {{singular}}DetailsForm: FormGroup;
  userId: string;
  isEdit: boolean;
  {{singular}} = new {{singularWord}}Create();
  errorMessages: string[];
  message: string = '';

  constructor(private fb: FormBuilder,
              public router: Router,
              private readonly route: ActivatedRoute,
              private {{plural}}Service: {{pluralWord}}Service,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.createForms();
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.isEdit = this.router.url.indexOf('edit') !== -1;
  }

  createForms() {
    this.{{singular}}DetailsForm = this.fb.group({
      {{#each properties}}
       {{name}}: new FormControl({ value: '', disabled: this.disableControls() }, [Validators.required]),
      {{/each}}
    });
  }

  create{{singularWord}}() {
    {{#each properties}}
        this.{{../singular}}.{{name}} = this.{{name}}Control.value;
    {{/each}}

    this.{{plural}}Service.add{{singularWord}}(this.{{singular}}).subscribe( res => {
      if (res) {
        localStorage.setItem('{{singular}}Message', '{{singularWord}} Successfully Created');
        this.{{plural}}Service.getListOf{{pluralWord}}();
        this.router.navigateByUrl('/{{plural}}-list');
        this.message = '{{singularWord}} Successfully Created';
        this.{{plural}}Service.message = this.message;
      }
    },
    (response) => {
      const error = response.error;
      if (error.errorMessages) {
        this.errorMessages = error.errorMessages;
      }
    });
  }

  cancelCreate(event) {
    if (event === 'cancelCreate{{singularWord}}') {
      this.openDialog(event);
    }
  }

 
  openDialog(event) {
    const dialogRef = this.dialog.open(CancelDialogComponent, {
      'disableClose': true,
      width: '470px',
      height: '230px'
    });
    dialogRef.componentInstance.cancelEvent = event;
  }

  validateLength(len: number, checkCase: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = control.value.toString();
      if (value) {
        switch (checkCase) {
          case 'checkMaxLen' : {
            if (value.length > len) {
              return {'maxlength': {value}};
            }
            break;
          }
          case 'checkMinLen' : {
            if (value.length < len) {
              return {'minlength': {value}};
            }
            break;
          }
          case 'checkFixLen' : {
            if (value.length != len) {
              return {'fixlength': {value}};
            }
            break;
          }
        }

      }
      return null;
    };
  }


  disableControls(): boolean {
    return !this.isEdit && !!this.userId;
  }

  {{#each properties}}
    get {{name}}Control(): FormControl {
      return this.{{../singular}}DetailsForm.get('{{name}}') as FormControl;
    }
  {{/each}}


}
