import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Diet, Gender, User } from '../../shared/models/user.model';

export type UserFormValue = Omit<User, 'id'>;

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  @Output() saved = new EventEmitter<UserFormValue>();
  modelForm: FormGroup;
  readonly gender = Gender;
  readonly diet = Diet;

  constructor(private formBuilder: FormBuilder) {
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
      diet: Diet.OMNIVOROUS,
      aboutMe: '',
      gender: Gender.MALE,
      dateOfBirth: new Date()
    };

    const user = this.user || defaultValues;
    this.modelForm = this.formBuilder.group({
      firstName: [user.firstName],
      lastName: [user.lastName],
      state: [user.state],
      city: [user.city],
      country: [user.country],
      aboutMe: [user.aboutMe],
      gender: [user.gender],
      diet: [user.diet],
      dateOfBirth: [user.dateOfBirth]
    });
  }
}
