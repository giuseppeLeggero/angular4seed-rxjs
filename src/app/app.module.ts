import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
//import { Hmr } from '../environment/hmr';

/**
 * ngrx
 */
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/**
 * Import Reducers
 */
import { reducer as rootReducer } from './store/root/root.reducer';

/**
 * Platform and Environment providers/directives/pipes
 */
import { routes } from './app.routes';

/**
 * Import application Module
 */
import { SidebarModule } from './components/sidebar/sidebar.module';
import { NavbarModule } from './components/navbar/navbar.module';

/**
 * App is our top level component
 */
import { AppComponent } from './app.component';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({

  bootstrap: [AppComponent],

  declarations: [
    AppComponent
  ],

  imports: [ // import all module

    /**
     * main router module
     */
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules }),

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(rootReducer),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    RouterStoreModule.connectRouter(),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    /**
     * All used module
     */
    BrowserModule,
    FormsModule,
    HttpModule,
    SidebarModule,
    NavbarModule
  ],

  providers: [ // expose our Services and Providers into Angular's dependency injection
  ]

})

export class AppModule {
}

// export class AppModule extends Hmr {
//   constructor(public appRef: ApplicationRef, private store: Store<any> ) {
//     super(appRef, store);
//   }
// }
