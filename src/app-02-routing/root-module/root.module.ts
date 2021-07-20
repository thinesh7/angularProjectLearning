import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RootComponent } from './components/root/root.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './root-routing.module';
import { UsersModule } from '../user-module/users.module';

@NgModule({
  declarations: [RootComponent, HeaderComponent, FooterComponent, AboutComponent, ContactComponent],
  imports: [CommonModule,BrowserModule,AppRoutingModule,UsersModule],
  bootstrap:[RootComponent]
})
export class RootModule { }
