import { ToDatasetPipe } from './to-dataset.pipe';
import { Bar } from '../services/chart-service.service';
import { DataSet } from '../widgets/chart/chart.component';

describe('ToDatasetPipe', () => {
  const pipe = new ToDatasetPipe();

  it('create an instance', () => {
    expect(pipe)
      .toBeTruthy();
  });

  it('survives undefined', () => {
    const input = undefined;
    const output: DataSet[] = [ { backgroundColor: [], data: [] } ];

    expect(pipe.transform(input))
      .toEqual(output);
  });

  it('transforms correctly', () => {
    const input: Bar[] = [
      { active: false, value: 234 },
      { active: true, value: 197 },
      { active: true, value: 84 },
      { active: true, value: 64 },
      { active: true, value: 42 },
      { active: true, value: 37 },
      { active: true, value: 14 },
      { active: true, value: 11 }
    ];

    const output: DataSet[] = [
      {
        backgroundColor: [
          '#E5E5E5',
          '#46B8AF',
          '#46B8AF',
          '#46B8AF',
          '#46B8AF',
          '#46B8AF',
          '#46B8AF',
          '#46B8AF'
        ],
        data: [ 234, 197, 84, 64, 42, 37, 14, 11 ]
      }
    ];

    expect(pipe.transform(input))
      .toEqual(output);
  });
});
