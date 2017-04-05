import { Component } from '@angular/core';
import { Users } from './userList.component';
import { User }    from './user.component';

@Component({
  selector: 'reg-form',
  template: `<h2>REGISTATION</h2>
  <form>
    <label for for="userName">Account name</label>
    <input type="text" name="userName" id = "userName" #userName (blur)="user._accountName = userName.value"><br/>
    <label for for="password">Password</label>
    <input type="text" name="password" id="password" #pwd (blur)="user._password = pwd.value"><br/>
    <label for for="firstName">First name</label>
    <input type="text" name="firstName" id="firstName" #firstName (blur)="user._firstName = firstName.value"><br/>
    <label for for="lastName">Last name</label>
    <input type="text" name="lastName" id="lastName" #lastName (blur)="user._lastName = lastName.value"><br/>
    <label for for="phone">Phone</label>
    <input type="text" name="phone" id="phone" #phone (blur)="user._phone = phone.value"><br/>
    <label for for="age">Age</label>
    <input type="text" name="age" id="age" #age (blur)="user._age = age.value"><br/>
    <input type="submit" id="register" value="Registration" (click)="onSubmit()">
  </form>`
})

export class RegFormComponent {
  Users = new Users();
  user = new User();

  onSubmit()  {
    this.Users.addUser(this.user);
  }
}
