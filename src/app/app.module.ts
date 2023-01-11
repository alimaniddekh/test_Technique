import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrePageComponent } from './components/registre-page/registre-page.component';
import { NextButtonComponent } from './components/next-button/next-button.component';
import { TimerComponent } from './components/timer/timer.component';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrePageComponent,
    NextButtonComponent,
    TimerComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
