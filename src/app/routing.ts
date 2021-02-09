import { Routes } from "@angular/router";

import { ProfileListComponent } from "./profile-list/profile-list.component";
import { ProfileViewComponent } from "./profile-view/profile-view.component";


export const router:Routes = [
    {
        path:"profile-list",
        component:ProfileListComponent
    },
    {
        path:"profile-view/:id",
        component:ProfileViewComponent
    },
    {
        path:"",
        redirectTo:"/profile-list",
        pathMatch:"full"
    }
]