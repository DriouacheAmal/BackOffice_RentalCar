/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8088';
  apiUrl: any;
  router: any;

  constructor(private http: HttpClient) {}
  logout() {
    // Clear any authentication tokens or user data
    // Clear tokens and user data
    localStorage.removeItem('token'); // Assuming token is stored in localStorage
    localStorage.removeItem('user');  // Assuming user data is stored in localStorage

    // Redirect to LoginComponent
    this.router.navigate(['/login']);
  }

  login(credentials: {email:String, password:String}):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials)
      .pipe(tap(response=> {
        if(response && response.token){
          localStorage.setItem('token',response.token);
        }
      }));

  }
 /* logout():void{
    localStorage.removeItem('token');
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }

}*/
