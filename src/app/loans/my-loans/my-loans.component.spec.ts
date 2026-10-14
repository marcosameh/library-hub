import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyLoansComponent } from './my-loans.component';

describe('MyLoansComponent', () => {
  let component: MyLoansComponent;
  let fixture: ComponentFixture<MyLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLoansComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyLoansComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
