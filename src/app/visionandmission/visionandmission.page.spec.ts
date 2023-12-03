import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisionandmissionPage } from './visionandmission.page';

describe('VisionandmissionPage', () => {
  let component: VisionandmissionPage;
  let fixture: ComponentFixture<VisionandmissionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisionandmissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
