import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public authForm: FormGroup;
  public isTokenSet = false;
  public panelOpen = false;

  @Output() public onSubmitForm = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      token: ['', Validators.required],
    });
  }

  public ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.isTokenSet = true;
      this.panelOpen = false;
      this.authForm.get('token')?.setValue(token);
      this.onSubmitForm.emit();
    }
  }

  public onSubmit(): void {
    if (this.authForm.valid) {
      const token = this.authForm.get('token')?.value;
      sessionStorage.setItem('token', token);
      this.isTokenSet = true;
      this.panelOpen = false;
      this.onSubmitForm.emit();
    } else {
      console.error('Form is invalid');
    }
  }
}
