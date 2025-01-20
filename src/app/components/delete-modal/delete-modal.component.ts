import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {
  private _dialogRef = inject(MatDialogRef);

  public onCancel() {
    this._dialogRef.close();
  }

  public onDelete() {
    this._dialogRef.close(true);
  }
}
