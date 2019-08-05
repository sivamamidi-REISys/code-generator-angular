import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { {{pluralWord}}Component } from './{{plural}}.component';
import {RouterTestingModule} from '@angular/router/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';

describe('{{pluralWord}}Component', () => {
  let component: {{pluralWord}}Component;
  let fixture: ComponentFixture<{{pluralWord}}Component>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        {{pluralWord}}Component
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent({{pluralWord}}Component);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('div'));
    htmlElement = debugElement.nativeElement;
  });

  it('should create {{pluralWord}}Component', async(() => {
    fixture = TestBed.createComponent({{pluralWord}}Component);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should be wrapped in the {{plural}}-wrapper', async(() => {
    expect(htmlElement.className.includes('{{plural}}-wrapper'));
  }));

});
