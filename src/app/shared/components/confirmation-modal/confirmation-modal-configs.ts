export enum ConfirmationResult {
  CONFIRM = 'confirm',
  CANCEL = 'cancel',
}

export interface ConfirmationModalConfig {
  title: string;
  body: string;
  confirmBtnText: string;
  cancelBtnText: string;
}
