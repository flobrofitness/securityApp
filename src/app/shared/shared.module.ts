import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatCardModule,
    MatGridListModule } from '@angular/material';

import {
    PageNotFoundComponent,
    InputComponent,
    FormErrorComponent,
    UiButtonComponent
} from './components/';
import { WebviewDirective } from './directives/';
import { UiSelectComponent } from './components/ui-select/ui-select.component';
import { UiRadioComponent } from './components/ui-radio/ui-radio.component';

@NgModule({
    declarations: [
        PageNotFoundComponent,
        WebviewDirective,
        InputComponent,
        FormErrorComponent,
        UiButtonComponent,
        UiSelectComponent,
        UiRadioComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,

        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        // MatError,
        MatButtonModule,
        MatCardModule,
        MatGridListModule
    ],
    exports: [
        TranslateModule,
        WebviewDirective,
        FormsModule,
        ReactiveFormsModule,
        InputComponent,
        FormErrorComponent,
        UiButtonComponent,
        UiSelectComponent,
        UiRadioComponent,

        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        // MatError,
        MatButtonModule,
        MatCardModule,
        MatGridListModule
    ]
})
export class SharedModule { }
