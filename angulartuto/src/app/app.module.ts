import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent
    // Add other components, directives, or pipes here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Fix the import statement
    // Add other modules here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
