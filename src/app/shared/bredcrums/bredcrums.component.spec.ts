import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BredcrumsComponent } from './bredcrums.component';

describe('BredcrumsComponent', () => {
  let component: BredcrumsComponent;
  let fixture: ComponentFixture<BredcrumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BredcrumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BredcrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
