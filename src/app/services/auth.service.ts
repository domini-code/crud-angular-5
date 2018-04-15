import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup ( new firebase.auth.GoogleAuthProvider());
  }

  getAuth(){
    return this.afAuth.authState.map(auth => auth);
  }

  logout(){
    return this.afAuth.auth.signOut();
  }

}
