import { Component } from '@angular/core';
import { User } from './user.component';

export class Users  {
  public users: User[];
  public activeUser: User;

  constructor () {
    this.users = new Array<User>();
  }

  addUser (newUser: User): void {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i]._userName === newUser._userName) {
        alert("Where already exists account with such name, please choose enother name and try again")
        return;
      }
    }
    this.users.push(newUser);
  }

  deleteUser (user: User): void  {

  }
}
