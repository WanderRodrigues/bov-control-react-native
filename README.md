## Avaliação React Native

Aplicativo mobile que apresenta previsão do tempo para a semana e o clima atual, baseado na geo-localização do dispositivo.

- usa a api do [OpenWeatherMap](https://openweathermap.org/api);
- grava localmente a previsão de até 7 dias para uso offline;
- previsão do clima nas próximas 24 horas;

\* requer conexão á internet no primeiro uso da aplicação

## Como rodar

### Emulador

1. clone o repositório
2. `$ yarn install && yarn android`

### Exportar em APK

1. clone o repositório
2. rode o comando:

```bash
$ yarn react-native bundle --platform android --dev false \
$ --entry-file index.js \
$ --bundle-output android/app/src/main/assets/index.android.bundle \
$ --assets-dest android/app/build/intermediates/res/merged/release/
```

3.  rode o comando: `$ cd android && ./gradlew assembleRelease`
4.  vá até o diretório `android\app\build\outputs\apk\release` e copie o arquivo `app-release.apk` no seu dispositivo

**Importante:** app não testado na plataforma iOS.
