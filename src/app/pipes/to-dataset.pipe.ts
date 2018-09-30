import { Pipe, PipeTransform } from '@angular/core';
import { Bar } from '../services/chart-service.service';
import { DataSet } from '../widgets/chart/chart.component';

@Pipe({
  name: 'toDataset'
})
export class ToDatasetPipe implements PipeTransform {

  transform(bars: Bar[] = [], args?: any): DataSet[] {
    return  [
      bars.reduce(
        (dataSet: DataSet, el: Bar) => {
          return {
            backgroundColor: [
              ...dataSet.backgroundColor,
              el.active ? '#46B8AF' : '#E5E5E5'
            ],
            data: [
              ...dataSet.data,
              el.value
            ]
          };
        },
        { backgroundColor: [], data: [] }
      )
    ];
  }
}
