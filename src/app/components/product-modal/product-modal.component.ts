import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
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
import { twoDecimalValidator } from 'src/app/utils/two-decimal-validator';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  selector: 'app-product-modal',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    const _profileData = { ...data?.profile };
    Object.keys(_profileData || {}).forEach((key) => {
      if (key === 'type' || key === 'available' || key === 'backlog') {
        delete _profileData[key];
      }
    });

    this.dynamicProfileData = _profileData;

    this.productForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      cost: [
        data?.cost || 0,
        [Validators.required, Validators.min(0), twoDecimalValidator],
      ],
      description: [data?.description || '', Validators.required],
      ...(!data && { sku: ['', Validators.required] }),
      profile: this.fb.group({
        type: [data?.profile?.type || 'furniture', Validators.required],
        available: [data?.profile?.available ?? true],
        backlog: [data?.profile?.backlog ?? null],
      }),
    });
  }

  public getProfileFormGroup() {
    return this.productForm.get('profile') as FormGroup;
  }

  public onSubmit() {
    if (this.productForm.valid) {
      const _product = this.productForm.value;
      _product.profile = {
        ..._product.profile,
        ...this.dynamicProfileData,
      };
      this.dialogRef.close(_product);
    }
  }

  public onCancel() {
    this.dialogRef.close();
  }
}
