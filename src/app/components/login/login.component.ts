import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup;

  @Output() public onSubmitForm = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      authKey: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      const authKey = this.loginForm.get('authKey')?.value;
      sessionStorage.setItem('authKey', authKey);
      this.onSubmitForm.emit();
    } else {
      console.error('Form is invalid');
    }
  }
}
