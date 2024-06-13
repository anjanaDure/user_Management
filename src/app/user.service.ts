import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {
    // Load initial data from localStorage
    const data = localStorage.getItem('users');
    this.users = data ? JSON.parse(data) : [];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    user.id = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
    this.users.push(user);
    this.saveUsers();
  }

  updateUser(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      this.saveUsers();
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    this.saveUsers();
  }

  private saveUsers(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
