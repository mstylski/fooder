import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooksRecipesComponent } from './cooks-recipes.component';

describe('CooksRecipesComponent', () => {
  let component: CooksRecipesComponent;
  let fixture: ComponentFixture<CooksRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooksRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooksRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
