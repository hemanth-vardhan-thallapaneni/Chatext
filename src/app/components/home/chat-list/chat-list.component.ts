import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  constructor() { }
   chats = [
    {
      name:'Chaitanya',
      image:'99886.png',
      message:'Hi, this is chaitanya!',
      last_seen:'1:05pm'
    },
    {
      name:'Karthik',
      image:'203524.jpg',
      message:'Hello, this is karthik!',
      last_seen:'12:15pm'
    }
   ]
  ngOnInit(): void {
  }

}
