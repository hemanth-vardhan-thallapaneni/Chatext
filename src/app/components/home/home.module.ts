import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    ChatWindowComponent,
    ChatListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
