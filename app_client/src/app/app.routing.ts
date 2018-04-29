import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { FollowComponent } from './follow/follow.component';

import { AuthGuard } from './auth.guard';

export const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'message', component: MessageComponent, canActivate: [AuthGuard]},
  { path: 'follow', component: FollowComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'login' }
];
