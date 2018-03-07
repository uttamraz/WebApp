import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './services/user.service';
import { ValidationComponent } from './validation/validation.component';


@NgModule({
    declarations: [
        AppComponent,
        SignUpComponent,
        ValidationComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
