import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import { Contacts } from './contacts';

 
@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {

  constructor(private http: Http) { }

  getContacts(){
    return this.http.get('http://localhost/api/contacts').map(res => res.json());
  }

  addContacts(newContact){
    var header= new Headers();
    header.append('Content-Type','application/json');
    return this.http.post('http://localhost/api/contacts',newContact,{header: header}).map(res => res.json());
  }

  deleteContacts(id:any){
    return this.http.delete('http://localhost/api/contacts'+id).map(res => res.json()); 
  }
}
