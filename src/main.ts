import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// 模块注入
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
