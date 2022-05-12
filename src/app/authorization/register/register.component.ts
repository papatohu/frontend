import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";
import {UserManagementService} from "../../services/user-management/user-management.service";
import {sha256} from "js-sha256"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({});
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userManagementService:UserManagementService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid)
      return
    this.userManagementService.createNewUser(this.form.controls["username"].value, this.form.controls["password"].value)
  }

}
