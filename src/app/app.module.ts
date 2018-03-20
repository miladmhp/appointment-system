import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const appRoutes : Routes = [
	{ path: '', component: SignUpComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'profile', component: AdminProfileComponent}
]

@NgModule({
	declarations: [
        AppComponent,
		NavbarComponent,
		SignUpComponent,
		FooterComponent,
		LoginComponent,
		AdminProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes)
    ],
    providers:[],
    bootstrap: [AppComponent]
})

export class AppModule { }
