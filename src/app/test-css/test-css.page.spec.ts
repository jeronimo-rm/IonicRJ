import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestCssPage } from './test-css.page';

describe('TestCssPage', () => {
  let component: TestCssPage;
  let fixture: ComponentFixture<TestCssPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
