import { DialogOverviewExampleDialogComponent } from './../../material-component/dialog/dialog.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-artista-modal',
  templateUrl: './artista-modal.component.html',
  styleUrls: ['./artista-modal.component.css']
})
export class ArtistaModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ArtistaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
