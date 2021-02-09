import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable() 

export class ProfileListService {
    constructor(private http:HttpClient) {

    }

    getUserList():Observable<any> {
        return this.http.get("https://reqres.in/api/users?page=2")
    }

    getSingleUser(id:any):Observable<any> {
        return this.http.get(`https://reqres.in/api/users/${id}`)
    }
}
