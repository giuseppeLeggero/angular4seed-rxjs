import { NgModule, ApplicationRef } from '@angular/core';
import { Store, StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
import { removeNgStyles, createNewHosts, createInputTransfer, bootloader } from '@angularclass/hmr';
import 'rxjs/add/operator/take';

export abstract class Hmr {
  constructor(public appRef: ApplicationRef, private _store: Store<any> ) {}
  protected hmrOnInit(store) {

    if (!store || !store.rootState) {
        return;
    }

    // restore state by dispatch a SET_ROOT_STATE action
    if (store.rootState) {
      this._store.dispatch({
        type: 'SET_ROOT_STATE',
        payload: store.rootState
      });
    }

    if ('restoreInputValues' in store) {
        store.restoreInputValues();
    }

    this.appRef.tick();
    Object.keys(store).forEach( (prop) => delete store[prop] );
  }

  protected hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map( (cmp) => cmp.location.nativeElement );
    this._store.take(1).subscribe( (s) => store.rootState = s);
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.restoreInputValues  = createInputTransfer();
    removeNgStyles();
  }

  protected hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
