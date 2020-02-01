import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-ui-select',
    templateUrl: './ui-select.component.html',
    styleUrls: ['./ui-select.component.scss']
})
export class UiSelectComponent implements OnInit {

    private itemList: any[];

    @Input() public placeHolderText: string;
    @Input() public inputId: string;
    @Input() public additionalClasses: string;
    @Input() public disabledFlag: boolean;
    @Input() public theFormGroup: FormGroup;
    @Input() public defaultValue: string;

    @Input()
    public set items(items: any[]) {
        this.itemList = items ? items : [];
    }

    public get items() {
        return this.itemList;
    }

    constructor() {
        this.placeHolderText = this.placeHolderText || '';
        this.inputId = this.inputId || '';
        this.additionalClasses = this.additionalClasses || '';
        this.disabledFlag = this.disabledFlag || false;
        this.defaultValue = this.defaultValue || '';
    }

    ngOnInit() {
    }

}
