import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  userConfirmed: boolean = false;

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>) { }

  ngOnInit() {
  }

  close(event) {
    if (event === 'Yes') {
      this.dialogRef.close(this.userConfirmed = true);
    } else {
      this.dialogRef.close(false);
    }
  }

}
