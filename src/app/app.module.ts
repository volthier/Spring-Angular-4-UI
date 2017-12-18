import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { DataTableModule, ButtonModule,InputTextModule, InputMaskModule, CalendarModule } from 'primeng/primeng';
import { ItemService } from './item/item.service';
import { enableProdMode } from '@angular/core';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent

  ],
  imports: [
    BrowserModule,
    DataTableModule,
    ButtonModule,
    InputTextModule, 
    InputMaskModule, 
    CalendarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
