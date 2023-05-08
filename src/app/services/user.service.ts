import { useAnimation } from '@angular/animations';
import { HttpClient, HttpClientJsonpModule, JsonpClientBackend } from '@angular/common/http';
import { Injectable, makeEnvironmentProviders } from '@angular/core';
import { Router } from '@angular/router';
import { ngbCarouselTransitionIn } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { getBootstrapBaseClassPlacement } from '@ng-bootstrap/ng-bootstrap/util/positioning';
import { variationPlacements } from '@popperjs/core';
import { zipWith } from 'rxjs';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(user:SignUp){
    this.http.post(`http://localhost:3000/users`,user,{observe:'response'}).subscribe((result)=>{
      console.warn(result);
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['/'])
      }
    })
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
  }
}












