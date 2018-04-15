import { Injectable } from '@angular/core';
import {RecetaInterface} from '../models/Receta';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class RecetaService {
recetaCollection: AngularFirestoreCollection<RecetaInterface>;
recetaDoc: AngularFirestoreDocument<RecetaInterface>;
recetas: Observable<RecetaInterface[]>;
receta: Observable<RecetaInterface>;
  constructor(
    private afs: AngularFirestore) { 
      this.recetaCollection = this.afs.collection('recetas', ref => ref);
    }

 addNewReceta(receta: RecetaInterface){
  this.recetaCollection.add(receta);
 }  

 getAllRecetas():Observable<RecetaInterface[]>{
  this.recetas = this.recetaCollection.snapshotChanges()
  .map(changes => {
    return changes.map(action => { 
      const data = action.payload.doc.data() as RecetaInterface;
      data.id = action.payload.doc.id;
      return data;
    });
  });
  return this.recetas;
 }   

 getOneReceta(idReceta: string){
  this.recetaDoc = this.afs.doc<RecetaInterface>(`recetas/${idReceta}`);
  this.receta = this.recetaDoc.snapshotChanges().map(action=>{
    if(action.payload.exists === false){
      return null;
    }else{
      const data = action.payload.data() as RecetaInterface;
      data.id = action.payload.id;
      return data;
    }
  });
  return this.receta;
 }  

 updateReceta(receta: RecetaInterface){
   this.recetaDoc = this.afs.doc(`recetas/${receta.id}`);
   this.recetaDoc.update(receta);
 }   
 deleteReceta(receta: RecetaInterface){
  this.recetaDoc = this.afs.doc(`recetas/${receta.id}`);
  this.recetaDoc.delete();
 }

}
