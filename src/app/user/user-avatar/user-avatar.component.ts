import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { NotificationService } from '../../shared/notification.service';

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
              private notificationService: NotificationService) {
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
        this.notificationService.success('Avatar has been added successfully!');
      });
    }
  }

  deleteAvatar() {
    this.authService.deleteAvatar().subscribe(() => {
      this.authService.pushUser();
      this.notificationService.success('Avatar has been deleted successfully!');
    });
  }
}
