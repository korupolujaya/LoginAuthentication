
import { Routes , RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';



const router:Routes=[
    {path: '', redirectTo: '/signup', pathMatch: 'full'},
   
    {path: 'signup', component:RegistrationComponent },
    {path: 'signin', component:LoginComponent }
];

export const routing = RouterModule.forRoot(router);
