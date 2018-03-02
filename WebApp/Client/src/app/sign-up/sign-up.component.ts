import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { EmailValidator } from '@angular/forms';
import { UserService } from "../shared/user.service";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    constructor() { }
    test: User;
    ngOnInit() {
        
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form != null) {
            form.reset();
            this.test = {
                Username: '',
                Password: '',
                Email: '',
                FirstName: '',
                LastName: ''
            };
        }
    }

    OnSubmit(form?: NgForm)
    {
    }
}
