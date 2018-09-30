import { TestBed, async } from '@angular/core/testing';
import { NouisliderModule } from 'ng2-nouislider';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { SliderComponent } from './widgets/slider/slider.component';
import { ChartComponent } from './widgets/chart/chart.component';
import { ToDatasetPipe } from './pipes/to-dataset.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          SliderComponent,
          ChartComponent,
          ToDatasetPipe
        ],
        imports: [
          NouisliderModule,
          ChartsModule
        ]
      })
      .compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app)
      .toBeTruthy();
  }));
});
