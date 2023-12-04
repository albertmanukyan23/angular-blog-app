import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Sub} from "../models/sub";

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore) {
  }

  addSubs(subData: Sub) {

    this.afs.collection('subscribers').add(subData).then(() => {
      console.log('added subscriber');
    });
  }

  checkSubs(email: string) {
    return this.afs.collection('subscribers', ref =>
      ref.where('email', '==', email)).get();
  }
}
