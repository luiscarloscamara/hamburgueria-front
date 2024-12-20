import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  // Configuração do HotToast e do HttpClient para a aplicação inteira (global)
  providers: [
    provideHotToastConfig(),
    provideHttpClient(),
    ...appConfig.providers,
  ],
})
  .then(() => {
    console.log('Aplicação inicializada com sucesso!');
  })
  .catch((err) => console.error(err));
