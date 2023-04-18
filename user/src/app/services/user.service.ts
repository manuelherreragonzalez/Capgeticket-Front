import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:8888/user';

  public getUsers() {
    console.log( this.http.get<User[]>(this.userUrl));
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user: User) {
    return this.http.delete(this.userUrl + "/" + user.id);
  }

  public addUser(user: User) {
    return this.http.post<User>(this.userUrl+ "/add" , user);
  }

  public updateUser(user: User) {
    return this.http.put<User>(this.userUrl, user);
  }

  public detailsUser(user: User){
    return this.http.get<User>(this.userUrl + "/" + user.id);
  }
}
