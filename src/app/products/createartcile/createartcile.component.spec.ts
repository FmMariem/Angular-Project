import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateartcileComponent } from './createartcile.component';

describe('CreateartcileComponent', () => {
  let component: CreateartcileComponent;
  let fixture: ComponentFixture<CreateartcileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateartcileComponent]
    });
    fixture = TestBed.createComponent(CreateartcileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
