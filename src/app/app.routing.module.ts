import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormViewComponent } from '../views/form/form.component';
import { UsersViewComponent } from '../views/users/users.component';

@NgModule({
  declarations: [UsersViewComponent, FormViewComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'users', component: UsersViewComponent },
      { path: 'form', component: FormViewComponent },
      { path: '**', redirectTo: 'users' },
    ]),
    CommonModule,
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
