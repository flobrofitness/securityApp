import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
    declarations: [
        HeaderComponent,
        SideBarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatButtonToggleModule
    ],
    exports: [
        HeaderComponent,
        SideBarComponent
    ]
})
export class CoreModule { }
