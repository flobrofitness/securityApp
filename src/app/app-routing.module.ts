import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { PageNotFoundComponent } from './shared/components';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component'
import { ProfileComponent } from './pages/profile/profile.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { DiaryComponent } from './pages/diary/diary.component';

// Import canActivate guard services
import { AuthGuard } from './core/guards/auth.guard';
import { SecureInnerPagesGuard } from './core/guards/secure-inner-pages.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/sign-in',
        pathMatch: 'full'
    },
    {
        path: 'sign-in',
        component: SignInComponent,
        canActivate: [SecureInnerPagesGuard]
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        canActivate: [SecureInnerPagesGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'verify-email',
        component: VerifyEmailComponent,
        canActivate: [SecureInnerPagesGuard]
    },
    {
        path: 'diary',
        component: DiaryComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
