import { HelloDirective } from './hello.directive';

xdescribe('HelloDirective', () => {
  it('should create an instance', () => {
    const directive = new HelloDirective();
    expect(directive).toBeTruthy();
  });
});
