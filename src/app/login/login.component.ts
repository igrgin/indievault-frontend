import {Component, inject, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    NgOptimizedImage,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  auth = inject(Auth);
  router = inject(Router);

  constructor() {
  }

  ngOnInit(): void {
    //TODO: Implement check for user login
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider).then(
      (result) => {
        if (result.user) {
          this.router.navigate(['subscribe']);
        }
      }
    )
  }

  login() {
    //TODO: CHECK IF USER EXISTS IN DB
    //TODO: IF USER EXISTS, REDIRECT TO HOME PAGE
    //TODO: IF USER DOES NOT EXIST, REDIRECT TO SUBSCRIBE PAGE
    //TODO: IF USER EXISTS BUT IS NOT SUBSCRIBED, REDIRECT TO SUBSCRIBE PAGE
    //TODO: IN MOCK, REDIRECT TO SUBSCRIBE PAGE
    this.router.navigate(['subscribe']);

  }


}
