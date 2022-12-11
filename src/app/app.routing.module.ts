import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'users', component: AppComponent },
      { path: 'form', component: FormComponent },
      { path: '**', redirectTo: 'users' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
