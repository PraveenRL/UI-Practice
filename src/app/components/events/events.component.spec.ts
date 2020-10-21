import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { EventsComponent } from './events.component';

xdescribe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('SHOULD CREATE COMPONENT', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD "ADD CLICK" IS CLICKED', () => {
    const h1 = de.query(By.css('h1'));
    const btn = de.query(By.css('#btnAddClick'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.countClicks).toEqual(parseInt(h1.nativeElement.innerText));
  });
});
