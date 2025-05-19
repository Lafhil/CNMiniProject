import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from "../model/model";


// const APIURL=environment.API_KEY
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject?: BehaviorSubject<User>;
  public currentUser?: Observable<User>;

  constructor(private http: HttpClient) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  public get currentUserValue(): User {
    return this.currentUserSubject!.value;
  }

  login(username: string, password: string):User {
    let u:User=new User();
    u.nomUser=username;
    u.motPass=password;

    // return this.http.post<User>(APIURL+"/user/login", u)
    //   .pipe(map(user => {

        // login successful if there's a jwt token in the response
        if (u) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(u));
          this.currentUserSubject!.next(u);

        }
    return u;
      // }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject!.next(null!);
  }
}
