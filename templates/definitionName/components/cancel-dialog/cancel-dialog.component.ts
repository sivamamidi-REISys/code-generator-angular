import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cancel-dialog',
  templateUrl: './cancel-dialog.component.html',
  styleUrls: ['./cancel-dialog.component.scss']
})
export class CancelDialogComponent implements OnInit {
  cancelEvent: string;

  constructor(public dialogRef: MatDialogRef<CancelDialogComponent>, private router: Router) { }

  ngOnInit() {
  }

  close(event) {
    if (event === 'Yes') {
      this.dialogRef.close();
      this.router.navigateByUrl('/{{plural}}-list');
    } else {
      this.dialogRef.close();
    }
  }

}
