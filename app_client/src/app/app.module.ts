import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';

import { UserService } from './_services/user.service';
import { appRoutes } from './app.routing';
import { AuthService} from './_services/auth.service';
import { AuthGuard } from './auth.guard';
import { MessageService} from './_services/message.service';
import { FollowComponent } from './follow/follow.component';
import {FollowService} from './_services/follow.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MessageComponent,
    FollowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [UserService,
  AuthService, AuthGuard, MessageService, FollowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
