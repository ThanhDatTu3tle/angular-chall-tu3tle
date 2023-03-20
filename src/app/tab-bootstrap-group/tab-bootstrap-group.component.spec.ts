import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBootstrapGroupComponent } from './tab-bootstrap-group.component';

describe('TabBootstrapGroupComponent', () => {
  let component: TabBootstrapGroupComponent;
  let fixture: ComponentFixture<TabBootstrapGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabBootstrapGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabBootstrapGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
