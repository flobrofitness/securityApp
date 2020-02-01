import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/user';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    public accountTypeRadioButtons: any[] = [{
        value: 'Officer',
        disabled: false
    }, {
        value: 'Admin',
        disabled: false
    }];
    public shiftList: any[] =  [
        {id: 1, name: '12am-8am'},
        {id: 2, name: '8am-4pm'},
        {id: 3, name: '10am-6pm'},
        {id: 4, name: '4pm-12am'}
    ];
    public dayList: any[] = [
        {id: 1, name: 'Monday'},
        {id: 2, name: 'Tuesday'},
        {id: 3, name: 'Wednesday'},
        {id: 4, name: 'Thursday'},
        {id: 5, name: 'Friday'},
        {id: 6, name: 'Saturday'},
        {id: 7, name: 'Sunday'}
    ];
    public signUpForm: FormGroup;

    constructor(
        public authService: AuthService
    ) { }

    ngOnInit() {
        this.setupForm();
    }

    public setupForm() {
        this.signUpForm = new FormGroup({
            accountType:  new FormControl('Officer'),
            firstName: new FormControl(''),
            middleName: new FormControl(''),
            lastName: new FormControl(''),
            dob: new FormControl(''),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\\.[a-zA-Z]{2,15}$')
            ]),
            address: new FormControl(''),
            mobilePhone: new FormControl(''),
            workPhone: new FormControl(''),
            password: new FormControl('', [
                Validators.required,
            ]),
            confirm: new FormControl('', [
                Validators.required,
            ]),
            rank: new FormControl('', [
                Validators.required,
            ])
        });

        const accountType = this.signUpForm.get('accountType') as FormControl;

        accountType.valueChanges.subscribe((aT) => {
            if (aT === 'Officer') {
                this.signUpForm.removeControl('dayOnePreference');
                this.signUpForm.removeControl('dayOnePreference');
                this.signUpForm.removeControl('dayTwoPreference');
            } else {
                this.signUpForm.addControl('shiftPreference', new FormControl('', Validators.required));
                this.signUpForm.addControl('dayOnePreference', new FormControl('', Validators.required));
                this.signUpForm.addControl('dayTwoPreference', new FormControl('', Validators.required));
            }
            this.signUpForm.updateValueAndValidity();
        });
    }

    public get isAccountTypeAdmin(): boolean {
        return this.signUpForm.value.accountType === 'Admin';
    }

    public isFormInvalid(field: string) {
        return (this.signUpForm.get(field).invalid && this.signUpForm.get(field).touched);
    }

    public singUp() {
        const rank = this.signUpForm.get('rank') ? this.signUpForm.get('rank').value : '';
        const shiftPreference = this.signUpForm.get('workPhone') ? this.signUpForm.get('workPhone').value : '';
        const dayOnePreference = this.signUpForm.get('dayOnePreference') ? this.signUpForm.get('dayOnePreference').value : '';
        const dayTwoPreference = this.signUpForm.get('dayTwoPreference') ? this.signUpForm.get('dayTwoPreference').value : '';

        const newUser: User = {
            uid: '',
            accountType: this.signUpForm.get('accountType').value,
            firstName: this.signUpForm.get('firstName').value,
            middleName: this.signUpForm.get('middleName').value,
            lastName: this.signUpForm.get('lastName').value,
            dob: this.signUpForm.get('dob').value,
            email: this.signUpForm.get('email').value,
            address: this.signUpForm.get('address').value,
            mobilePhone: this.signUpForm.get('mobilePhone').value,
            workPhone: this.signUpForm.get('workPhone').value,
            rank,
            shiftPreference,
            dayOnePreference,
            dayTwoPreference,
            userVerified: false,
            photoURL: ''
        };

        this.authService.signUp(newUser, this.signUpForm.get('password').value);
    }

}
