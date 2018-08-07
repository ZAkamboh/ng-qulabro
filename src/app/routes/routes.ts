import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from '../signup/signup.component';
import { EmailComponent } from '../signup/email/email.component';
import { VerifyComponent } from '../signup/verify/verify.component';
import { DetailsComponent } from '../signup/details/details.component';
import { InviteComponent } from '../signup/invite/invite.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full'
  }, // Replace redirect to the actual component for this route
  {
    path: 'signup',
    component: SignupComponent,
    children: [
      { path: 'verify', component: VerifyComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'invite', component: InviteComponent },
      { path: '', component: EmailComponent }
    ]
  },
  { path: 'login', redirectTo: '/signup' }, // Replace redirect to the actual component for this route
  { path: '**', redirectTo: '/signup' } // Replace redirect to the actual component for this route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
