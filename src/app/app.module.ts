import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { router } from "./routing";
import { ProfileListService } from "./profile-list/profile-list.service"


@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    ProfileViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [ProfileListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
