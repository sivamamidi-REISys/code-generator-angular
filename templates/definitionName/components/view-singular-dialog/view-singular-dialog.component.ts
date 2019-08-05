import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { {{pluralWord}}Service } from '../../services/{{plural}}.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-{{singular}}-dialog',
  templateUrl: './view-{{singular}}-dialog.component.html',
  styleUrls: ['./view-{{singular}}-dialog.component.scss']
})
export class View{{singularWord}}DialogComponent implements OnInit {
  {{uniqueId}}: string;
  {{singular}}: any;
  {{singular}}DetailsForm: FormGroup;
  userId: string;
  isEdit: boolean;


  constructor(
    public dialogRef: MatDialogRef<View{{singularWord}}DialogComponent>,
    private readonly {{plural}}Service: {{pluralWord}}Service,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.get{{singularWord}}();
  }

  get{{singularWord}}() {
    this.{{plural}}Service.get{{singularWord}}ById(this.{{uniqueId}}).subscribe(result => {
      if (result) {
        this.{{singular}} = result;
        this.createForms();
        const formData = {
          {{#each properties}}
          {{name}}: this.{{../singular}}.{{name}},
          {{/each}}
        };
        this.{{singular}}DetailsForm.setValue(formData);
      }
    });
  }

  createForms() {
    this.{{singular}}DetailsForm = this.fb.group({
      {{#each properties}}
       {{name}}: new FormControl({ value: '', disabled: this.disableControls() }, [Validators.required]),
      {{/each}}
    });
  }

  closeWindow() {
    this.dialogRef.close(false);
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
