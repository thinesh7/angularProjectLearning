// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { RootModule } from "./app-01-myapp/root.module";
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
import { RootModule } from "./app-2.2 - nested-param/root-module/root.module";

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(RootModule)
    .catch(err => console.error(err));
