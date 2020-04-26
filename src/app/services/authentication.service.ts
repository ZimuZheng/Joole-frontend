import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, BehaviorSubject} from 'rxjs';

import {catchError, map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {User} from '../models/user.model';

const url = 'http://localhost:8080/joole';

@Injectable()
export class AuthenticationService implements OnInit {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  ngOnInit() {
  }

  userHttpInfo(): void {
    console.log('User http service...');
  }

  login(name, pwd) {
    const user = {
      username: name,
      password: pwd
    };
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    return this.http.post<any>('http://localhost:8080/joole/user/login', JSON.stringify(user), options)
      .pipe(map(userlogin => {
        console.log(userlogin)
        if (userlogin && userlogin.token) {
          localStorage.setItem('currentUser', JSON.stringify(userlogin));
          this.currentUserSubject.next(userlogin);
        }
        catchError(this.handleError<any>('login', []));
        return userlogin;
      }));
  }

  register(name, eml, fname, lname, pwd) {
    const user = {
      username: name,
      password: pwd,
      email: eml,
      firstname: fname,
      lastname: lname
    };
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };

    return this.http.post<any>('http://localhost:8080/user/createUser', JSON.stringify(user), options)
      .pipe(map(userSignUp => {
        if (userSignUp && (userSignUp.token)) {
          localStorage.setItem('newUser', JSON.stringify((userSignUp)));
        }
        return userSignUp;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('login');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}