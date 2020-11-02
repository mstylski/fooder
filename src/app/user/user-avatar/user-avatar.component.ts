import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})

export class UserAvatarComponent implements OnInit {
  centered = false;
  SERVER_URL = `${ environment.apiUrl }/file-upload/avatars`;
  readonly user$ = this.authService.user$;

  constructor(private httpClient: HttpClient,
              private authService: AuthService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onAvatarImageSelect(event) {
    if (event.target.files.length > 0) {
      const files = event.target.files[0];
      const formData = new FormData();
      formData.append('files', files);
      this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(() => {
        this.authService.pushUser();
        this.snackBar.open('Avatar has been added successfully!', null, {
          panelClass: ['green-snackbar']
        });
      });
    }
  }

  deleteAvatar() {
    this.authService.deleteAvatar().subscribe(() => {
      this.authService.pushUser();
      this.snackBar.open('Avatar has been deleted successfully!', null, {
        panelClass: ['green-snackbar']
      });
    });
  }
}
