import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ConfirmationModalConfig, ConfirmationResult } from './confirmation-modal-configs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationModalComponent {
  confirmationConfig: ConfirmationModalConfig;

  constructor(private dialogRef: MatDialogRef<ConfirmationModalComponent>,
              @Inject(MAT_DIALOG_DATA) private data) {
    this.confirmationConfig = data;
  }

  confirm() {
    this.dialogRef.close(ConfirmationResult.CONFIRM);
  }

  cancel() {
    this.dialogRef.close(ConfirmationResult.CANCEL);
  }
}
