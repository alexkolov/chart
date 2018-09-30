import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { SliderComponent } from './widgets/slider/slider.component';
import { ChartComponent } from './widgets/chart/chart.component';
import { ToDatasetPipe } from './pipes/to-dataset.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ChartComponent,
    ToDatasetPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NouisliderModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
