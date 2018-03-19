import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [
        AppComponent,
		NavbarComponent,
		SignUpComponent,
		FooterComponent,
		LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
		HttpModule
    ],
    providers:[],
    bootstrap: [AppComponent]
})

export class AppModule { }
