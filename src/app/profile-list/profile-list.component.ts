import { Component, OnInit } from '@angular/core';
import { ProfileListService } from "./profile-list.service"
@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  userList:any[];
  constructor(private profileService:ProfileListService) {
    
    this.userList  = [];

    this.profileService.getUserList().subscribe(user => {
      this.userList = user.data;
    })

   }

  ngOnInit(): void {
  }

}
