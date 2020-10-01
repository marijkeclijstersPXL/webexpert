import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Contact } from "../Models/contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{
  name: string;
  email: string;
  phone: string;
  isFavorite: boolean;
  @Input() contact: Contact;
  @Output() onSubmit: EventEmitter<Contact> = new EventEmitter();

  ngOnInit(){
    this.name = 'John Doe';
    this.email = 'john.doe@gmail.com';
    this.phone = '011642839';
    this.isFavorite = false
  }
  onClick(): void{
    console.log('Button clicked. Status is favorite is: ' + this.isFavorite);
  }
  submit(){
    this.onSubmit.emit(this.contact);
  }
}
