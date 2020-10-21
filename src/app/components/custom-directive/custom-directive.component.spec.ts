import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CustomDirectiveComponent } from './custom-directive.component';
import { HelloDirective } from './hello.directive';

xdescribe('CustomDirectiveComponent', () => {
  let component: CustomDirectiveComponent;
  let fixture: ComponentFixture<CustomDirectiveComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CustomDirectiveComponent,
        HelloDirective
      ],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('SHOULD CREATE COMPONENT', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD TEST DIRECTIVE FOR ITS CHANGES TO DIV', () => {
    component.username = 'Rudra';
    let btn = debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', {});

    fixture.detectChanges();

    let div = debugElement.query(By.css('#customDiv'));
    expect(div.nativeElement.innerText).toContain('Hello Rudra');
    expect(div.nativeElement.style.backgroundColor).toBe('green');

    div.triggerEventHandler('mouseover', null);
    fixture.detectChanges();

    expect(div.nativeElement.style.backgroundColor).toBe('orange');
    expect(div.nativeElement.style.fontSize).toBe('28px');
  });
});
