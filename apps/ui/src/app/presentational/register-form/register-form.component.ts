import { Component, DoCheck, EventEmitter, Output } from '@angular/core';
import { RegisterModel } from '../../data-models/register.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'course-project-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements DoCheck {
  @Output() register = new EventEmitter<RegisterModel>();

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  registration() {
    this.register.emit({
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    } as RegisterModel);
  }

  ngDoCheck() {
    console.log('register check!');
  }
}
