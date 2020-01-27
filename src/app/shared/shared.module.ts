import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    PageNotFoundComponent,
    InputComponent,
    FormErrorComponent
} from './components/';
import { WebviewDirective } from './directives/';

@NgModule({
    declarations: [
        PageNotFoundComponent,
        WebviewDirective,
        InputComponent,
        FormErrorComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        TranslateModule,
        WebviewDirective,
        FormsModule,
        ReactiveFormsModule,
        InputComponent,
        FormErrorComponent
    ]
})
export class SharedModule { }
