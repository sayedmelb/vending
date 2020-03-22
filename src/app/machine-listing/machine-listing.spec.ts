import { TestBed, async } from '@angular/core/testing';
import { MachineListing } from './machine-listing';

describe('CattleListing', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MachineListing
      ],
    }).compileComponents();
  }));

  it('should create the CatteListing page', () => {
    const fixture = TestBed.createComponent(MachineListing);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  
});
