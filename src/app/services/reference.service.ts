import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewReference(record) {
    return this.firestore.collection('References').add(record);
  }

  read_References() {
    return this.firestore.collection('References').snapshotChanges();
  }

  update_Reference(recordID, record) {
    this.firestore.doc('References/' + recordID).update(record);
    console.log('updated');
  }

  delete_Reference(record_id) {
    this.firestore.doc('References/' + record_id).delete();
  }
}