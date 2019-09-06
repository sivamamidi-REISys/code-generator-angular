import {AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, OnChanges, ViewChild, ChangeDetectorRef} from '@angular/core';
import { {{singularWord}} } from '../../models/{{plural}}.model';
import {ActivatedRoute, Router} from '@angular/router';
import { {{pluralWord}}Service} from '../../services/{{plural}}.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import { View{{singularWord}}DialogComponent} from '../view-{{singular}}-dialog/view-{{singular}}-dialog.component';
import {UserService} from '../../../user/services/user.service';

@Component({
  selector: 'app-{{plural}}-list',
  templateUrl: './{{plural}}-list.component.html',
  styleUrls: ['./{{plural}}-list.component.scss']
})
export class {{pluralWord}}ListComponent implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit, OnChanges {
  {{plural}}: any;
  message: string;
  refresh{{pluralWord}}Observable: any;
  {{plural}}ServiceObservable: any;
  loadContent: boolean = false;
  pageSizeOptions = [5, 10, 15, 20];
  pageSize: number = 10;
  page: number;
  userRoles: any = [];
  userRolesObservable: any;

  displayedColumns = [
    {{#each propertiesList}}
    '{{name}}', 
    {{/each}}  
 'actions'];

  dataSource: any;
  private paginator: MatPaginator;
  private sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  @ViewChild(MatSort, { static: false }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  constructor(public readonly {{plural}}Service: {{pluralWord}}Service,
              private readonly route: ActivatedRoute,
              public readonly router: Router,
              private dialog: MatDialog,
              private readonly userService: UserService,
              private readonly changeDetectorRef: ChangeDetectorRef) {
    //this.userRoles = this.userService.getCurrentUserRoles();
  }

  ngOnInit() {
    this.get{{pluralWord}}();
    this.refresh{{pluralWord}}Observable = this.{{plural}}Service.refresh{{pluralWord}}.asObservable().subscribe({{plural}} => {
      if ( {{plural}} ) {
        this.{{plural}} = {{plural}};
      }
    });

    this.userRolesObservable = this.userService.getUserRolesObservable().subscribe( userRoles => {
      if (userRoles) {
        this.userRoles = userRoles;
        this.changeDetectorRef.detectChanges();
      }
    });

    if (this.{{plural}}Service.message) {
      this.message = this.{{plural}}Service.message;
      setTimeout(() => {
        this.message = '';
      }, 3000);
    } else {
      this.message = '';
    }
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(x => console.log(x));
  }

  ngOnChanges() {}

  onPaginateChange(event) {
    console.log('event', event);
  }

  setDataSourceAttributes() {
    if (this.paginator && this.sort) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }

  ngOnDestroy() {
    if (this.refresh{{pluralWord}}Observable) {
      this.refresh{{pluralWord}}Observable.unsubscribe();
    }
    if (this.{{plural}}ServiceObservable) {
      this.{{plural}}ServiceObservable.unsubscribe();
    }
    if (this.userRolesObservable) {
      this.userRolesObservable.unsubscribe();
    }
    this.{{plural}}Service.message = '';
  }

  ngAfterViewChecked() {}

  get{{pluralWord}}() {
    this.loadContent = true;
    this.page = 0;
    this.{{plural}}ServiceObservable = this.{{plural}}Service.getListOf{{pluralWord}}().subscribe(t => {
      if (t) {
        this.{{plural}} = t['content'];
        this.{{plural}}Service.refresh{{pluralWord}}.next(this.{{plural}});
        this.dataSource = new MatTableDataSource<{{singularWord}}>(this.{{plural}});
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = function(data, filter: string): boolean {
          return data.{{properties.1.name}}.toString().toLowerCase().includes(filter);
        };
        this.loadContent = false;
      }
    });
  }

  delete{{singularWord}}({{singular}}Id) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      disableClose: true,
      width: '470px',
      height: '230px'
    });
    dialogRef.afterClosed().subscribe(confirmationResponse => {
      if (confirmationResponse) {
        this.{{plural}}Service.delete{{singularWord}}({{singular}}Id).subscribe(res => {
          if (res === null) {
            this.message = '{{singularWord}} Deleted Successfully!';
            setTimeout(() => {
              this.message = '';
            }, 3000);
            this.get{{pluralWord}}();
          }
        });
      }
    });
  }

  create{{singularWord}}() {
    this.router.navigateByUrl('/{{plural}}-list/create');
  }

  edit{{singularWord}}({{singular}}Id) {
    this.router.navigateByUrl('/{{plural}}-list/edit/' + {{singular}}Id);
  }

  view{{singularWord}}({{singular}}Id) {
    const dialogRef = this.dialog.open(View{{singularWord}}DialogComponent, {
      disableClose: false,
      width: '600px',
      height: '700px'
    });
    dialogRef.componentInstance.{{singular}}Id = {{singular}}Id;
  }
}
