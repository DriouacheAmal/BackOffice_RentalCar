import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from 'src/app/Module/Users';

@Injectable({
  providedIn: 'root'
})
export class USERService {
  private baseUrl = 'http://localhost:8088';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl + "/users/");
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/users/" + id);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/users/admin/" + id);
  }

  updateUserStatus(id: number, status: string): Observable<any> {
    return this.http.put(this.baseUrl + `/users/admin/${id}/status`, { status });
  }

  restoreUser(id: number): Observable<any> {
    return this.http.post(this.baseUrl + `/users/admin/${id}/restore`, {});
  }
}
