import { Gender, UpdateProfileHttpPayload, UserResponse } from '../../../shared/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RecipeFormModalComponent } from '../../../recipes/recipe-form-modal/recipe-form-modal.component';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional } from '@angular/core';
import { UserService } from '../../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-form-modal-component',
  templateUrl: './user-form-modal-component.html',
  styleUrls: ['./user-form-modal-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserFormModalComponent implements OnInit {
  modelForm: FormGroup;
  gender: Gender;
  httpPayload: UpdateProfileHttpPayload;
  user: UserResponse;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<RecipeFormModalComponent>,
              private userService: UserService,
              @Optional() @Inject(MAT_DIALOG_DATA) data: { data: UpdateProfileHttpPayload },
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const defaultValues = {
      firstName: '',
      lastName: '',
      city: '',
      state: '',
      country: 'Poland',
      diet: '',
      aboutMe: '',
      age: '',
      gender: Gender,
    };
    const user = this.httpPayload || defaultValues;
    this.modelForm = this.formBuilder.group({
      firstName: [user.firstName],
      lastName: [user.lastName],
      city: [user.city],
      state: [user.state],
      country: [user.country],
      diet: [user.diet],
      aboutMe: [user.aboutMe],
      age: [user.age],
      gender: [Gender]
    });
  }

  editUser() {
    this.userService.editUserData(this.modelForm.value, this.user.token).subscribe(() => {
      this.dialogRef.close(true);
      this.snackBar.open('User data has been updated successfully!', null, {
        panelClass: ['green-snackbar']
      });
    });
  }
  close() {
    this.dialogRef.close();
  }
}
