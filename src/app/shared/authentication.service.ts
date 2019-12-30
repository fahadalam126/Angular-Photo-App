import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;

    this.userData.subscribe(
      user => this.SaveUserDataInLocalStorage(user.getIdToken()),
      err => console.error('UserData got an error: ' + err),
      () => console.log('UserData got a complete notification')
    );
  }

  SaveUserDataInLocalStorage(idToken){
    idToken.then(value => {
      //console.log("Got the Id Token", value);
      localStorage.setItem('idToken', value);
    });
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });    
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
  }  

}