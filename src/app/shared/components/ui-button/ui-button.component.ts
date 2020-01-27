import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-ui-button',
    templateUrl: './ui-button.component.html',
    styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {


    @Input() public buttonId: string;
    @Input() public inProgress: boolean;
    @Input() public isDisabled: boolean;
    @Input() public buttonText: string;
    @Input() public iconClass: string;
    @Input() public additionalClasses: string;
    @Input() public alwaysEnableButton: boolean;
    @Input() public buttonType?: string;
    @Input() public textClass: string;

    @Output() public buttonWasClicked = new EventEmitter();

    @ViewChild('button', { static: false }) public button: ElementRef;

    constructor(
        // private activeCallService: ActiveCallService
    ) {
    }

    public ngOnInit() {
        this.buttonId = this.buttonId || null;
        this.inProgress = this.inProgress || false;
        this.isDisabled = this.isDisabled || false;
        this.buttonText = this.buttonText || '';
        this.iconClass = this.iconClass || '';
        this.additionalClasses = this.additionalClasses || '';
        this.alwaysEnableButton = this.alwaysEnableButton || false;
        this.buttonType = this.buttonType || 'button';
        this.textClass = this.textClass || 'cw-demibold-14';
    }

    // public ngAfterViewChecked() {
    //     if (this.button && (this.activeCallService.getActiveCalls.length || this.activeCallService.isCurrentlyPolling || this.isDisabled) && !this.alwaysEnableButton) {
    //         this.button.nativeElement.disabled = true;
    //     } else {
    //         this.button.nativeElement.disabled = false;
    //     }
    // }

    public emitClickAction() {
        if (!this.inProgress) {
            this.buttonWasClicked.emit();
        }
    }

}
