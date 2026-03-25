import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MunicipalityBookingsComponent } from './municipality-bookings.component';

describe('MunicipalityBookingsComponent', () => {
  let component: MunicipalityBookingsComponent;
  let fixture: ComponentFixture<MunicipalityBookingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalityBookingsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MunicipalityBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
