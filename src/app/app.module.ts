import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NonVegetarianItemsComponent } from './non-vegetarian-items/non-vegetarian-items.component';
import { VegetarianItemsComponent } from './vegetarian-items/vegetarian-items.component';
import { SidesAndDessertsComponent } from './sides-and-desserts/sides-and-desserts.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContactUsComponent,
    VegetarianItemsComponent,
    NonVegetarianItemsComponent,
    SidesAndDessertsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([
        { path:'**', redirectTo:'Home', pathMatch:'full'},
        { path:'contactus', component:ContactUsComponent },
        { path:'Vegetarian Items', component:VegetarianItemsComponent },
        { path:'Non-vegetarian Items', component:NonVegetarianItemsComponent },
        { path:'Sides & Desserts', component:SidesAndDessertsComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
