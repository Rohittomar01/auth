import { Routes } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { CreateAccountComponent } from './authentication/create-account/create-account.component';
import { DoneScreenComponent } from './authentication/done-screen/done-screen.component';
import { SignupSigninComponent } from './authentication/signup-signin/signup-signin.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
export const routes: Routes = [
    {
        path: "",
        redirectTo: "signUp_SignIn",
        pathMatch: "full"

},
    {
        path: "signUp_SignIn",
        component: SignupSigninComponent,
    },
    {
        path: "signup",
        component: SignupComponent,
    },
    {
        path: "createAccount",
        component: CreateAccountComponent,
    },
    {
        path: "singin",
        component: SignInComponent,
    },
    {
        path: "done",
        component: DoneScreenComponent,
    }

];
