import { Component, Input } from '@angular/core';
import { ChartServiceService, Slider } from '../../services/chart-service.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: [ './slider.component.scss' ]
})
export class SliderComponent {
  @Input() state: Slider;

  constructor(private chartServiceService: ChartServiceService) {
  }

  onSlide(event: number[]) {
    this.chartServiceService.updateSlider(event);
  }
}
