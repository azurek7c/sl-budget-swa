import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, PeriodicElement } from '../poster-list/poster-list.component';

@Component({
  selector: 'app-poster-add',
  templateUrl: './poster-add.component.html',
  styleUrls: ['./poster-add.component.scss'],
})
export class PosterAddComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<PosterAddComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData
  ) {}

  ngOnInit(): void {
    console.log('data', this.data);
  }

  closeDialog(): void {
    this.dialogRef.close('Pizza!');
  }
}
