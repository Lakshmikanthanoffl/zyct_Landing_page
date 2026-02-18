import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyZyctComponent } from './why-zyct.component';

describe('WhyZyctComponent', () => {
  let component: WhyZyctComponent;
  let fixture: ComponentFixture<WhyZyctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyZyctComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyZyctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
