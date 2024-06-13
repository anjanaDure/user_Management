import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model.ts';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  searchText: string = '';

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.users = this.userService.getUsers();
    this.filteredUsers = this.users;
  }

  applyFilter(): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  editUser(user: User): void {
    // Navigate to the edit form with the user ID
  }

  confirmDelete(userId: number): void {
    // Open a confirmation dialog
  }
}
