import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, Inject, OnDestroy} from '@angular/core';
// import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  title = 'angular8-app';
  fillerNav = [
    {name:'Animation', link:'animation'},
    {name:'Autocomplete', link:'/autocomplete'},
    {name:'Bulk Delete', link:'/bulkdelete'},
    {name : 'Dropdown', link:'/dropdown'},
    {name : 'Embed Video', link:'/embedvideo'},
    {name : 'Form Difference',link:'/forms'}
  ];


constructor(changeDetectorRef: ChangeDetectorRef, 
  media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
      }
    
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
