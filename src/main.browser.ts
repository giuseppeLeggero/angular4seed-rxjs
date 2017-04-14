/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { hotModuleReplacement } from 'ngrx-store-hmr';
import { StoreModule } from '@ngrx/store';
import { decorateModuleRef } from './environment/environment';
import { reducer as rootReducer } from './app/store/root/root.reducer';
import { bootloader } from '@angularclass/hmr';

/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app/app.module';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(decorateModuleRef)
    .catch((err) => console.error(err));
}

// needed for hmr
// in prod this is replace for document ready
bootloader(main);
