import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {
  }

  success(message: string) {
    this.snackBar.open(message, null, {
      panelClass: ['green-snackbar']
    });
  }

  error(message: string) {
    this.snackBar.open(message, null, {
      panelClass: ['red-snackbar']
    });
  }
}
