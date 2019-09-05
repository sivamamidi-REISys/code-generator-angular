import { AfterViewInit, Component, OnInit } from '@angular/core';
import { {{pluralWord}}Service } from '../../services/{{plural}}.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CancelDialogComponent } from '../cancel-dialog/cancel-dialog.component';
import {MatDialog} from "@angular/material"; 
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-edit-{{singular}}',
  templateUrl: './edit-{{singular}}.component.html',
  styleUrls: ['./edit-{{singular}}.component.scss']
})
export class Edit{{singularWord}}Component implements OnInit, AfterViewInit {
  {{singular}}: any;
  {{singular}}DetailsForm: FormGroup;
  userId: string;
  isEdit: boolean;
  errorMessages: string[];
  message: string;

  constructor(private readonly {{plural}}Service: {{pluralWord}}Service,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public router: Router,
    private readonly route: ActivatedRoute,
    private dialog: MatDialog 
) { }

  ngOnInit() {
    this.get{{singularWord}}();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const element = document.getElementById('{{singular}}EditForm');
      if(element){
        element.scrollIntoView(
          {
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
          }
        );
      }
    }, 1000);
  }

  get{{singularWord}}() {
    const {{singular}}Id = +this.activatedRoute.snapshot.paramMap.get('{{singular}}Id');
    this.{{plural}}Service.get{{singularWord}}ById({{singular}}Id).subscribe(result => {
      if (result) {
        this.{{singular}} = result;
        this.createForms();
        const formData = {
          {{#each propertiesEditable}}
          {{name}}: this.{{../singular}}.{{name}},
          {{/each}}
        };
        this.{{singular}}DetailsForm.setValue(formData);
      }
    });
  }

  createForms() {
    this.{{singular}}DetailsForm = this.fb.group({
      {{#each propertiesEditable}}
       {{name}}: new FormControl({ value: '', disabled: this.disableControls() }, [Validators.required]),
      {{/each}}
    });
  }

  update{{singularWord}}() {
    {{#each propertiesEditable}}
        this.{{../singular}}.{{name}} = this.{{name}}Control.value;
    {{/each}}

    this.{{plural}}Service.update{{singularWord}}(this.{{singular}}).subscribe(res => {
      if (res) {
        localStorage.setItem('{{singular}}Message', '{{singularWord}} Successfully Created');
        this.{{plural}}Service.getListOf{{pluralWord}}();
        this.router.navigateByUrl('/{{plural}}-list');
      }
    },
      (response) => {
        const error = response.error;
        if (error.errorMessages) {
          this.errorMessages = error.errorMessages;
        }
      });
  }

  cancelUpdate(event) {
    if (event === 'cancelUpdate{{singularWord}}') {
      this.openDialog(event);
    }
  }

  openDialog(event) {
    const dialogRef = this.dialog.open(CancelDialogComponent, {
      disableClose: true,
      width: '470px',
      height: '230px'
    });
    dialogRef.componentInstance.cancelEvent = event;
  }

 
  disableControls(): boolean {
    return !this.isEdit && !!this.userId;
  }

  {{#each propertiesEditable}}
    get {{name}}Control(): FormControl {
      return this.{{../singular}}DetailsForm.get('{{name}}') as FormControl;
    }
  {{/each}}


}
