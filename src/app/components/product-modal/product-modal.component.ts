import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Product } from 'src/app/interfaces/product.interface';
import { ProfileFieldsComponent } from '../profile-fields/profile-fields.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ProfileFieldsComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent {
  public productForm: FormGroup;
  public dynamicProfileData = {};

  constructor(
    private dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product | null,
    private fb: FormBuilder
  ) {
    this.dynamicProfileData = Object.keys(data?.profile || {}).filter(
      (key) => key !== 'type' && key !== 'available' && key !== 'backlog'
    );

    this.productForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      cost: [data?.cost || 0, [Validators.required, Validators.min(0)]],
      description: [data?.description || '', Validators.required],
      profile: this.fb.group({
        type: [data?.profile?.type || 'furniture', Validators.required],
        available: [data?.profile?.available ?? true],
        backlog: [data?.profile?.backlog ?? null],
      }),
    });
  }

  getProfileFormGroup() {
    return this.productForm.get('profile') as FormGroup;
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.dialogRef.close(this.productForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
