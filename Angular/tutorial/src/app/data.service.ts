import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    console.log(this.http.get('https://jsonplaceholder.typicode.com/users'));
    return this.http.get('https://jsonplaceholder.typicode.com/users') 
   }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId) 
  }
  getPosts() {
    console.log(this.http.get('https://jsonplaceholder.typicode.com/posts'));
    return this.http.get('https://jsonplaceholder.typicode.com/posts') 
  }
}
