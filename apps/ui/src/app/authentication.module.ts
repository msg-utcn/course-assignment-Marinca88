import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './presentational/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { RegisterComponent } from './containers/register/register.component';
import { RegisterFormComponent } from './presentational/register-form/register-form.component';
import { MatButtonModule } from '@angular/material/button';

export const authenticationRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexModule,
    MatInputModule,
    NgIf,
    MatButtonModule,
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent,
  ],
  exports: [LoginFormComponent, RegisterFormComponent],
})
export class AuthenticationModule {}
