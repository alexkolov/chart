import { TestBed, inject } from '@angular/core/testing';

import { ChartServiceService, Store } from './chart-service.service';

describe('ChartServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ChartServiceService ]
    });
  });

  it('should be created', inject([ ChartServiceService ], (service: ChartServiceService) => {
    expect(service)
      .toBeTruthy();
  }));

  it('should initialize correctly', inject([ ChartServiceService ], (service: ChartServiceService) => {
    const params: number[] = [ 234, 197, 84, 64, 42, 37, 14, 11 ];

    const output: Store = {
      rawDate: [ 234, 197, 84, 64, 42, 37, 14, 11 ],
      slider: {
        connect: true,
        min: 1,
        max: 8,
        step: 1,
        range: [ 1, 8 ]
      },
      chart: {
        labels: [ '#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8' ],
        bars: [
          { active: true, value: 234 },
          { active: true, value: 197 },
          { active: true, value: 84 },
          { active: true, value: 64 },
          { active: true, value: 42 },
          { active: true, value: 37 },
          { active: true, value: 14 },
          { active: true, value: 11 }
        ]
      }
    };

    expect(service.initialStates(params))
      .toEqual(output);
  }));
});
