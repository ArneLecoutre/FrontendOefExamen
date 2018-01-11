import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './app-routing.module';
import { DokterOverviewComponent } from './DokterOverview/dokteroverview.component';
import { DokterService } from './services/Dokter.service';
import {Http,HttpModule,JsonpModule} from '@angular/http';
import {DokterDetailComponent} from './DokterDetail/dokterdetail.component';



@NgModule({
  declarations: [
    AppComponent,
    DokterOverviewComponent,
    DokterDetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  providers: [DokterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
