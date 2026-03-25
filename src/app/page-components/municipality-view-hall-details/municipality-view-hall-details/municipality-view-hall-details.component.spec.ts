import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MunicipalityViewHallDetailsComponent } from './municipality-view-hall-details.component';

describe('MunicipalityViewHallDetailsComponent', () => {
  let component: MunicipalityViewHallDetailsComponent;
  let fixture: ComponentFixture<MunicipalityViewHallDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalityViewHallDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MunicipalityViewHallDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
