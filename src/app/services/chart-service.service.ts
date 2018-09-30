import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

const rawDate = [ 84, 14, 234, 37, 64, 42, 197, 11 ];

export interface Slider {
  connect: boolean;
  min: number;
  max: number;
  step: number;
  range: number[];
}

export interface Bar {
  active: boolean;
  value: number;
}

export interface Chart {
  labels: string[];
  bars: Bar[];
  dataSets?;
}

export interface Store {
  rawDate: number[];
  slider: Slider;
  chart: Chart;
}

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  store$ = new BehaviorSubject<Store>(this.initialStates(rawDate));

  // ## Store
  parseSlider(input: number[], range = [ 1, input.length ]): Slider {
    return {
      connect: true,
      min: 1,
      max: input.length,
      step: 1,
      range: range
    };
  }

  parseChart(input: number[], range = [ 1, input.length ]): Chart {
    const labels: string[] = new Array(input.length)
      .fill(undefined)
      .map((el, idx) => `#${++idx}`);

    const bars: Bar[] = input.map((el, idx) => {
      idx++;
      return {
        active: range[ 0 ] <= idx && idx <= range[ 1 ],
        value: el
      };
    });

    return {
      labels,
      bars
    };
  }

  initialStates(input: number[]): Store {
    return {
      rawDate: input,
      slider: this.parseSlider(input),
      chart: this.parseChart(input.sort((a, b) => b - a))
    };
  }

  updateStore(type: 'slider', payload: number[]) {
    // extendable
    if (type === 'slider') {
      const slider: Slider = this.parseSlider(
        this.store$.value.rawDate,
        payload
      );
      const chart: Chart = this.parseChart(
        this.store$.value.rawDate
          .sort((a, b) => b - a),
        slider.range
      );
      const state: Store = {
        ...this.store$.value,
        slider,
        chart
      };
      this.store$.next(state);
    }
  }

  // ## Events
  updateSlider(event: number[]) {
    this.updateStore('slider', event);
  }
}
