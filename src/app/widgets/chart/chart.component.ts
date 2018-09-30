import { Component, OnInit } from '@angular/core';
import { Bar, ChartServiceService, Store } from '../../services/chart-service.service';

export interface DataSet {
  backgroundColor: string[];
  data: number[];
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: [ './chart.component.scss' ]
})
export class ChartComponent implements OnInit {
  visible = false;
  chartOptions = {
    responsive: true,
    legend: false,
    tooltips: false,
    label: false
  };
  colors = [ '#46B8AF', '#E5E5E5' ];
  labels: string[];
  bars: Bar[];

  constructor(private chartServiceService: ChartServiceService) {}

  ngOnInit() {
    this.chartServiceService.store$.subscribe(({ chart }: Store) => {
      // small hack, due to limitations of the plugin
      // <chart>.refresh() is private
      this.visible = false;
      this.labels = chart.labels;
      this.bars = chart.bars;
      setTimeout(() => this.visible = true);
    });
  }
}
