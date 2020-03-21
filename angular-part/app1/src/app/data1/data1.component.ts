import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts'
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css'],
  providers:[ContactsServiceService]
})
export class Data1Component implements OnInit {

  constructor(private contactService : ContactsServiceService) { }

  contacts :Contacts[];
  first_name: String;
  last_name: String;
  address : String;
  city: String;
  state: String;

  addContact(){
    const newContact ={
      first_name:this.first_name,
      last_name:this.last_name,
      address:this.address,
      city:this.city,
      state:this.state
    }
    this.contactService.addContacts(newContact)
                            .subscribe(contact =>{
                              this.contacts.push(contact);
                              this.contactService.getContacts()
                                .subscribe(contacts => this.contacts = contacts);
                            })
  }

  

  ngOnInit() {
    this.contactService.getContacts()
                                .subscribe(contacts => this.contacts = contacts);
  }

}
