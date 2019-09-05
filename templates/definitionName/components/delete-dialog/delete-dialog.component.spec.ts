import { DeleteDialogComponent } from './delete-dialog.component';
import { MatButton } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  inject,
  async,
  fakeAsync,
  flushMicrotasks,
  ComponentFixture,
  TestBed,
  tick
} from '@angular/core/testing';
import {
  NgModule,
  Component,
  Directive,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// helper classes
// tslint:disable-next-line:directive-selector
@Directive({ selector: 'dir-with-view-container' })
class DlgTestViewContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

@Component({
  selector: 'app-arbitrary-component',
  template: `<dir-with-view-container></dir-with-view-container>`
})
class DlgTestChildViewContainerComponent {
  @ViewChild(DlgTestViewContainerDirective, { static: false })
  childWithViewContainer: DlgTestViewContainerDirective;

  get childViewContainer() {
    return this.childWithViewContainer.viewContainerRef;
  }
}

// Create a real (non-test) NgModule as a workaround for
// https://github.com/angular/angular/issues/10760
const TEST_DIRECTIVES = [
  DlgTestViewContainerDirective,
  DlgTestChildViewContainerComponent,
  DeleteDialogComponent
];

@NgModule({
  imports: [MatDialogModule, ReactiveFormsModule, NoopAnimationsModule],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [DeleteDialogComponent]
})
class DialogTestModule {}

describe('DeleteDialogComponent', () => {
  let dialog: MatDialog;
  let dialogRef: MatDialogRef<DeleteDialogComponent>;
  let overlayContainerElement: HTMLElement;
  let viewContainerFixture: ComponentFixture<
    DlgTestChildViewContainerComponent
  >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DialogTestModule],
      declarations: [],
      providers: [
        {
          provide: OverlayContainer,
          useFactory: () => {
            overlayContainerElement = document.createElement('div');
            return { getContainerElement: () => overlayContainerElement };
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(inject([MatDialog], (d: MatDialog) => {
    dialog = d;
  }));

  beforeEach(() => {
    viewContainerFixture = TestBed.createComponent(
      DlgTestChildViewContainerComponent
    );
    viewContainerFixture.detectChanges();

    dialogRef = dialog.open(DeleteDialogComponent);
    viewContainerFixture.detectChanges();
  });

  it('should be created', fakeAsync(() => {
    expect(dialogRef.componentInstance instanceof DeleteDialogComponent).toBe(
      true,
      'Failed to open'
    );
    const heading = overlayContainerElement.querySelector('h3');
    expect(heading.innerText).toEqual('Delete {{singularWord}}?');

    dialogRef.close();
    tick(500);
    viewContainerFixture.detectChanges();
  }));

  it('should click Yes button', async(() => {
    const afterCloseCallback = jasmine.createSpy('afterClose callback');

    dialogRef.afterClosed().subscribe(afterCloseCallback);
    (overlayContainerElement.querySelector(
      '.buttonYes'
    ) as HTMLButtonElement).click();
    viewContainerFixture.detectChanges();

    viewContainerFixture.whenStable().then(() => {
      expect(
        overlayContainerElement.querySelector('mat-dialog-content')
      ).toBeNull('Dialog box is closed');
      expect(afterCloseCallback).toHaveBeenCalledWith(true);
    });
  }));

  it('should click No button', async(() => {
    const afterCloseCallback = jasmine.createSpy('afterClose callback');

    dialogRef.afterClosed().subscribe(afterCloseCallback);
    (overlayContainerElement.querySelector(
      '.buttonNo'
    ) as HTMLButtonElement).click();
    viewContainerFixture.detectChanges();

    viewContainerFixture.whenStable().then(() => {
      expect(
        overlayContainerElement.querySelector('mat-dialog-content')
      ).toBeNull('Dialog box is closed');
      expect(afterCloseCallback).toHaveBeenCalledWith(false);
    });
  }));
});
