import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { SectionComponent } from './component/section/section.component';
import { InfoComponent } from './component/info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CostCarComponent } from './component/cost-car/cost-car.component';
import { CalcComponent } from './component/calc/calc.component';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FormComponent,
    SectionComponent,
    InfoComponent,
    CostCarComponent,
    CalcComponent,
  ],
  imports: [BrowserModule, FormsModule, NouisliderModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
