import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ProductListComponent } from './product-list.component';
import { ProductListService } from './product-list.service';

xdescribe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let debugElement: DebugElement;
  let productService: ProductListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [FormsModule],
      providers: [ProductListService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    productService = TestBed.inject(ProductListService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('SHOULD CREATE PRODUCT SERVICE', () => {
    expect(productService).toBeTruthy();
  });

  it('SHOULD TEST FILTER LIST PRODUCT (done)', (done) => {
    component.searchText = 'fresh';
    let productSpy = spyOn(productService, 'filterProductList').and.callThrough();

    component.filterProductList({});
    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      //Get text from first <li> of the list
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
      done();
    });
  });

  it('SHOULD TEST FILTER LIST PRODUCT (waitForAsync)', waitForAsync(() => {
    component.searchText = 'fresh';
    let productSpy = spyOn(productService, 'filterProductList').withArgs('fresh').and.callThrough();
    component.filterProductList({});

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = debugElement.query(By.css('#product_0'))?.nativeElement.innerText;
      expect(value).toContain(component.searchText);
    });
  }));

  it('SHOULD TEST FILTER LIST PRODUCT (fakeAasync)', fakeAsync(() => {
    component.searchText = 'fresh';
    let productSpy = spyOn(productService, 'filterProductList').withArgs('fresh').and.callThrough();
    component.filterProductList({});

    tick(); //Hold the below until the above promise is executed
    fixture.detectChanges();
    const value = debugElement.query(By.css('#product_0'))?.nativeElement.innerText;
    expect(value).toContain(component.searchText);
  }));

  it('EXAMPLE - fakeAsync and tick - TEST THE ASYNCHRONOUS CODE IN SYNCHRONOUS WAY', fakeAsync(() => {
    let isLoggedIn = false;
    setTimeout(() => { isLoggedIn = true; }, 100);

    expect(isLoggedIn).toBe(false);
    tick(50);
    expect(isLoggedIn).toBe(false);
    tick(50);
    expect(isLoggedIn).toBe(true);
  }));

})
