import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  selector: 'app-profile-fields',
  templateUrl: './profile-fields.component.html',
  styleUrls: ['./profile-fields.component.scss'],
})
export class ProfileFieldsComponent {
  @Input() profileFormGroup!: FormGroup;
  @Input() profileDynamicKeys!: Record<string, string>;

  @Output() profileChange = new EventEmitter<any>();
}
