import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNewComponent } from './dynamic-new.component';

describe('DynamicNewComponent', () => {
  let component: DynamicNewComponent;
  let fixture: ComponentFixture<DynamicNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
