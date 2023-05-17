import { Component, DoCheck } from '@angular/core';
import { RegisterModel } from '../../data-models/register.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'course-project-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements DoCheck {
  constructor(private authService: AuthService) {}
  register(registration: RegisterModel): void {
    this.authService.register(registration).subscribe();
  }
  ngDoCheck() {
    console.log('register check!');
  }
}
