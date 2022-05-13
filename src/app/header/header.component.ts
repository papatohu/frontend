import { Component, OnInit } from '@angular/core';
import {UserManagementService} from "../services/user-management/user-management.service";
import {UserConfigService} from "../services/user-config/user-config.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  userName: Observable<any> | undefined;

  constructor(private userManagementService:UserManagementService, private userConfigService:UserConfigService) { }

  async ngOnInit(): Promise<void> {
    await new Promise(f => setTimeout(f, 2000));
    this.userName = this.userConfigService.getUserName()
  }

  logout() {
    this.userManagementService.logout()
  }
}
