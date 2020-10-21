import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SquarePipe } from './square.pipe';

xdescribe('SquarePipe', () => {
  let pipe: SquarePipe;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SquarePipe],
      imports: [FormsModule]
    })
      .compileComponents();
    pipe = new SquarePipe();
  });

  it('CREATE AN INSTANCE', () => {
    expect(pipe).toBeTruthy();
  });

  it('SHOULD CHECK PIPE TRANSFORMS THE NUMBER INTO ITS SQUARE', () => {
    expect(pipe.transform(10)).toBe(100);
    expect(pipe.transform('10a')).toBe('Not a number');
  });

});
