import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  selector: 'app-dynamic-profile-fields',
  templateUrl: './dynamic-profile-fields.component.html',
  styleUrls: ['./dynamic-profile-fields.component.scss'],
})
export class DynamicProfileFieldsComponent {
  @Input() dynamicProfileData: Record<string, string> = {};
  @Output() dynamicProfileChange = new EventEmitter<Record<string, string>>();

  public newKey: string = '';
  public newValue: string = '';
  public editingKey: string | null = null; // Tracks the key currently being edited

  public get keys(): string[] {
    return Object.keys(this.dynamicProfileData);
  }

  setInputValue(key: string, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dynamicProfileData[key] = value;
  }

  addKeyValue(): void {
    if (this.newKey && !this.dynamicProfileData.hasOwnProperty(this.newKey)) {
      this.dynamicProfileData[this.newKey] = this.newValue;
      this.newKey = '';
      this.newValue = '';
      this.emitChanges();
    }
  }

  editValue(key: string): void {
    this.editingKey = key;
  }

  saveValue(key: string): void {
    this.editingKey = null;
    this.emitChanges();
  }

  deleteKey(key: string): void {
    delete this.dynamicProfileData[key];
    this.emitChanges();
  }

  private emitChanges(): void {
    this.dynamicProfileChange.emit(this.dynamicProfileData);
  }
}
