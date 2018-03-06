import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
    providers: []
})
export class SignUpComponent implements OnInit {
    form: FormGroup;
    public users = [];

    constructor(fb: FormBuilder, private _userService: UserService) {

        this.form = fb.group({
            Username: ['',Validators.minLength(3)],
            Password: ['', Validators.minLength(3)],
            Email: ['', Validators.email],
            FirstName: '',
            LastName: '',
        });

    }
    ngOnInit() { }

    OnSubmit() {
        this._userService.registerUser(this.form.value).subscribe();
    }

    GetUser() {
        this._userService.getUser().subscribe(
            data => this.users = data
        );
    }
}
