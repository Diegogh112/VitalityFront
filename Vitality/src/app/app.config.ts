import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { JwtModule} from '@auth0/angular-jwt';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
export function tokenGetter(){return sessionStorage.getItem('token');}
export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideClientHydration(),
    provideHttpClient(withFetch()), provideAnimationsAsync(), provideAnimationsAsync(),

  ],
};
=======
  providers: [provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ['localhost:8083'],
          disallowedRoutes: ['http://localhost:8080/login/forget'],
        },
      })
    ), provideAnimationsAsync(),
  ]
};
>>>>>>> origin/maria
