import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormModalComponent } from './recipe-form-modal.component';

describe('RecipeFormModalComponent', () => {
  let component: RecipeFormModalComponent;
  let fixture: ComponentFixture<RecipeFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
