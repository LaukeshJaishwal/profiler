import { Component, OnInit } from '@angular/core';
import { ProfileListService } from "../profile-list/profile-list.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})


export class ProfileViewComponent implements OnInit {
  profile:any;
  constructor(
    private profileService:ProfileListService, 
    private route:ActivatedRoute) {

      this.profile = {
        avatar: "",
        email: "",
        first_name: "",
        id: null,
        last_name: ""
      }

    this.route.params.subscribe(params => {
      console.log(params);
      this.profileService.getSingleUser(params.id).subscribe(user => {
        console.log(user);
        this.profile =  user.data;
      })
    })

   }

  ngOnInit(): void {
  }

}
