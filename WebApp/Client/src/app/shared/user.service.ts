import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
    readonly rootUrl = 'http://localhost:21360/';
    constructor(private http: HttpClient) { }

    registerUser(user: User) {
        const body: User = {
            Username: user.Username,
            Password: user.Password,
            Email: user.Email,
            FirstName: user.FirstName,
            LastName: user.LastName
        }
        return this.http.post(this.rootUrl + 'api/User/Register', body);
    }

}
