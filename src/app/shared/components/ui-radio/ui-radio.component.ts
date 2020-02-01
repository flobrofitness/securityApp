import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-ui-radio',
    templateUrl: './ui-radio.component.html',
    styleUrls: ['./ui-radio.component.scss']
})
export class UiRadioComponent implements OnInit {

    private radioBtns: any[];

    @Input() public inputId: string;
    @Input() public additionalClasses: string;
    @Input() public disabledFlag: boolean;
    @Input() public theFormGroup: FormGroup;
    @Input()
    public set radioButtons(radioBtns: any[]) {
        this.radioBtns = radioBtns && radioBtns.length ? radioBtns : [];
    }

    public get radioButtons() {
        return this.radioBtns;
    }

    constructor() {
        this.inputId = this.inputId || '';
        this.additionalClasses = this.additionalClasses || '';
        this.disabledFlag = this.disabledFlag || false;
    }

    ngOnInit() {

    }
}
