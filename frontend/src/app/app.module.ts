import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurgeonRankingComponent } from './components/surgeon-ranking/surgeon-ranking.component';
import { SurgeonService } from './services/surgeon.service';

@NgModule({
  declarations: [
    AppComponent,
    SurgeonRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SurgeonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
