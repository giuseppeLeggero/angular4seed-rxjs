import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import  * as sidebar from './store/sidebar/sidebar.actions';
import  { State as rootState }  from './store/sidebar/sidebar.model';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'live-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.component.scss' ],
  templateUrl : './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private store: Store<rootState>) {}

  public ngOnInit() {
    top.alert = () => this.store.dispatch(new sidebar.EnableSidebarAction());
  }


}
