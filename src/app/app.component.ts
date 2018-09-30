import { Component } from '@angular/core';
import { ChartServiceService, Slider } from './services/chart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  get slider(): Slider {
    return this.chartServiceService.store$.value.slider;
  }

  constructor(private chartServiceService: ChartServiceService) {}
}
