import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserManagementService} from "../../services/user-management/user-management.service";
import {Observable} from "rxjs";
import {User} from "../../interfaces/user-config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({});
  constructor(private formBuilder:FormBuilder, private userManagementService:UserManagementService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [],
      password: []
    })
  }
  error:boolean = false
  wrong_password:boolean = false
  onSubmit() {
    const userLogin:Observable<User> = this.userManagementService.login(
      this.form.controls["username"]["value"],
      this.form.controls["password"]["value"]
    )
    userLogin.subscribe((userJson:User) => {
      if(userJson.id == "ERROR") {
        this.determineError(userJson)
        return
      }
      this.userManagementService.successfulLogin(userJson)
    })
  }

  determineError(userJson:User):void {
    this.error = true
    if(userJson.username == "wrong Password"){
      this.wrong_password = true
      return
    }
  }

}
