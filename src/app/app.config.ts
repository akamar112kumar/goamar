import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { accountReducer } from './store/account.reducer';
import { AccountEffects } from './store/account.effects';
import { Authinterceptors } from './services/auth/interceptors/authinterceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideHttpClient(),
    provideStore({ account: accountReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(AccountEffects),
    { provide: HTTP_INTERCEPTORS, useClass: Authinterceptors, multi: true }
]
};
