import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNickNameComponent } from './edit-nick-name.component';

describe('EditNickNameComponent', () => {
  let component: EditNickNameComponent;
  let fixture: ComponentFixture<EditNickNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNickNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNickNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
