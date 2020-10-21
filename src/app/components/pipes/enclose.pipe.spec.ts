import { EnclosePipe } from './enclose.pipe';

describe('EnclosePipe (with Parameters', () => {
  let pipe: EnclosePipe;

  it('CREATE AN INSTANCE', () => {
    pipe = new EnclosePipe();
    expect(pipe).toBeTruthy();
  });

  it('[Paramerter is passed] - SHOULD TEST PIPE WITH PARAMETER', () => {
    expect(pipe.transform('Sample text', 'curly')).toBe('{Sample text}');
  });

  xit('[Paramerter is not passed] - SHOULD TEST PIPE WITHOUT PARAMETER', () => {
    expect(pipe.transform('Sample text')).toBe('(Sample text)');
  });
});
