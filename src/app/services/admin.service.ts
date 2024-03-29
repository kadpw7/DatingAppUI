import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsersWithRoles(){
    return this.http.get<Partial<User>[]>(this.baseUrl + 'admin/users-with-roles');
  }

  updateUserRoles(username: string, roles: string[]){
    return this.http.post(this.baseUrl + 'Admin/edit-roles/' + username + '?roles=' + roles, {});
  }
}
