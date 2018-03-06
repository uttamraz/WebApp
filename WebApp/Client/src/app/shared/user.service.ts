import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "./user";

@Injectable()
export class UserService {
    readonly rootUrl = 'http://localhost:21360/';
    constructor(private http: HttpClient) { }

    registerUser(user: any) {
        const body: any = {
            Username: user.Username,
            Password: user.Password,
            Email: user.Email,
            FirstName: user.FirstName,
            LastName: user.LastName
        }
        return this.http.post(this.rootUrl + 'api/User/Register', body);
    }

    getUser(): Observable<User[]> {
        return this.http.get<User[]>(this.rootUrl + 'api/User/UserList');
    }


}
