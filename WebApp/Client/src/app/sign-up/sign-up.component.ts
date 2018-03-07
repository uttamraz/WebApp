import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../services/user';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
    providers: []
})
export class SignUpComponent implements OnInit {
    form: FormGroup;
    private users = [];
    private user: any;
    private active: string;

    constructor(private fb: FormBuilder, private _userService: UserService) { }
    ngOnInit() {

        this.form = this.fb.group({
            Username: ['', Validators.minLength(3)],
            Password: ['', Validators.minLength(3)],
            Email: ['', Validators.email],
            FirstName: '',
            LastName: '',
        });
    }

    OnSubmit() {
        this._userService.registerUser(this.form.value).subscribe();
    }

    OnEdit(id: string) {
        this.user = this.users.filter(u => u.Id == id)[0];
        this.form = this.fb.group({
            Username: [this.user.Username, Validators.minLength(3)],
            Password: ['', Validators.minLength(3)],
            Email: [this.user.Email, Validators.email],
            FirstName: this.user.FirstName,
            LastName: this.user.LastName,
        });
        this.active = 'active';
    }

    GetUser() {
        this._userService.getUser().subscribe(
            data => this.users = data
        );
    }
}
