import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './shared/public/public.component';
import { SecureComponent } from './shared/secure/secure.component';
import { PUBLIC_ROUTES } from './shared/public/publicroute';
import { SECURE_ROUTES } from './shared/secure/secureroutes';


const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: PUBLIC_ROUTES
  },
  {
    path: '',
    component: SecureComponent,
    children: SECURE_ROUTES

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: "enabled", scrollPositionRestoration: "enabled"})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
