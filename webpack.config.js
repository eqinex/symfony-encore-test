const Encore = require('@symfony/webpack-encore');
const path = require('path');

// Информация по конфигурации взята с https://symfony.com/doc/current/frontend/encore/index.html#optimizing
// Вручную сконфигурируйте операционное окружение, если оно еще не сконфигурировано командой "encore".
// Это полезно когда вы используете инструменты, полагающиеся на файл webpack.config.js.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // каталог, где будут храниться скомпилированные ресурсы
    .setOutputPath('public/build/')
    // публичный путь, используемый веб-сервером для доступа к пути вывода
    .setPublicPath('/build')
    // необходимо только для развертывания CDN или суб-каталога
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Добавьте одну запись 1 для каждой "страницы" вашего приложения
     * (включая те, которые есть на каждой странице - например, "app")
     *
     * Каждая запись станет в результате одним файлом JavaScript (например, app.js)
     * и одним файлом CSS (например, app.css) если ваш JavaScript испортирует CSS.
     */
    .addEntry('app', './src/index.tsx')

    // Если подключен, Webpack "разделяет" ваши файлы на меньшие части для большей минимизации.
    // .splitEntryChunks()

    // будет требовать дополнительный тег скрипта для runtime.js
    // но, вам скорее всего это будет нужно, разве что вы не создаете приложение из одной страницы
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Подключите и сконфигурируйте другие функции ниже. Чтобы увидеть полный список
     * функций, см.:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // включает хешированные имена файлов (например, app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-transform-class-properties');
    })
    // включает полизаполнение @babel/preset-env
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    .addAliases({
        '@': path.resolve(__dirname, 'src'),
    })

    // раскомментируйте, если используете React
    .enableReactPreset()

    // включает поддержку Sass/SCSS
    .enableSassLoader()

    // раскомментируйте, если вы используете TypeScript
    .enableTypeScriptLoader()

    // раскомментируйте, чтобы получить атрибуты integrity="..." вашего скрипта и тегов ссылки
    // требует WebpackEncoreBundle 1.4 или новее
    //.enableIntegrityHashes(Encore.isProduction())

    // раскомментируйте, если у вас есть проблемы с плагином jQuery
    .autoProvidejQuery()

    // раскомментируйте, если вы используете API Platform Admin (композитор требует api-admin)
    //.addEntry('admin', './assets/admin.js')
;

module.exports = Encore.getWebpackConfig();
