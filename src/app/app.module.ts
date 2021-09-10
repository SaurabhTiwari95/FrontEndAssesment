import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsHomeComponent } from './news-home/news-home.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './global.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
