import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { SecureInnerPagesGuard } from '../../core/guards/secure-inner-pages.guard';

const routes: Routes = [
    {
        path: 'sign-in',
        component: SignInComponent,
        canActivate: [SecureInnerPagesGuard]
    }
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignInRoutingModule { }
