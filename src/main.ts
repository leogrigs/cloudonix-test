import { Injector, NgModuleRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { DynamicProfileFieldsComponent } from './app/components/dynamic-profile-fields/dynamic-profile-fields.component';
import { ProfileFieldsComponent } from './app/components/profile-fields/profile-fields.component';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((moduleRef: NgModuleRef<AppModule>) => {
    const injector: Injector = moduleRef.injector;
    const profileFieldsElement = createCustomElement(ProfileFieldsComponent, {
      injector,
    });
    const dynamicProfileFields = createCustomElement(
      DynamicProfileFieldsComponent,
      { injector }
    );
    customElements.define('profile-fields', profileFieldsElement);
    customElements.define('dynamic-profile-fields', dynamicProfileFields);
  })
  .catch((err) => console.error(err));
