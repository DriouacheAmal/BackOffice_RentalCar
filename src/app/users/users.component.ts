import { Component, OnInit } from '@angular/core';
import { USERService } from './serviceUser/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  deletedUsers: any = [];
  editedUser: any = {}; // Object to hold the user being edited

  constructor(private userService: USERService) {} // Inject UserService in the constructor

  ngOnInit(): void {
    this.getAllUsers(); // Fetch users when the component initializes
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res: any) => {
      console.log(res);
      this.users = res;
    });
  }

  toggleUserStatus(user: any, status: string): void {
    this.userService.updateUserStatus(user.userId, status).subscribe(
      (res: any) => {
        console.log(`User ${status.toLowerCase()}d successfully`, res);
        user.active = status; // Update the user's status in the frontend
      },
      (error: any) => {
        console.error(`Error ${status.toLowerCase()}ing user`, error);
      }
    );
  }

  confirmDelete(user: any) {
    const isConfirmed = confirm(`Are you sure you want to deactivate ${user.firstname}?`);
    if (isConfirmed) {
      this.toggleUserStatus(user, 'INACTIVE');
    }
    
  }

  deleteUser(user: any): void {
    const confirmDelete = confirm('Are you sure you want to delete this user?');

    if (confirmDelete) {
      this.toggleUserStatus(user, 'INACTIVE'); // Change the user's status to 'INACTIVE' instead of removing
    }
  }

  restoreUser(user: any): void {
    this.userService.restoreUser(user.userId).subscribe(
      (res) => {
        console.log('User restored successfully:', res);
        this.deletedUsers = this.deletedUsers.filter((u: any) => u.userId !== user.userId);
        this.getAllUsers();
      },
      (error) => {
        console.error('Error restoring user:', error);
      }
    );
  }
}
