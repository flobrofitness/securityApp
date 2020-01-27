import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    public singUpForm: FormGroup;

    constructor(
        public authService: AuthService
    ) { }

    ngOnInit() {
        this.setupForm();
    }

    public setupForm() {
        this.singUpForm = new FormGroup({
            firstName: new FormControl(''),
            // middleInitial: new FormControl(''),
            lastName: new FormControl(''),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\\.[a-zA-Z]{2,15}$')
            ]),
            password: new FormControl('', [
                Validators.required,
            ]),
            confirm: new FormControl('', [
                Validators.required,
            ]),
        });
    }

    public isFormInvalid(field: string) {
        return (this.singUpForm.get(field).invalid && this.singUpForm.get(field).touched);
    }

    public singUp() {

    }

}
