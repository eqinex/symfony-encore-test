# Структура проекта
```
/src
│
├── app
│   ├── provider
│   │   └── ...
│   ├── styles
│   │   └── ...
│   └── types
│       └── ...
├── assets
│   ├── images
│   └── ...
│
├── components
│   └── ...
│
├── entities
│   └── ...
│
├── features
│   └── ...
│
├── pages
│   ├── ProductionPage
│   │   ├── ui
│   │   │   ├── ProductionPage.tsx
│   │   │   ├── ProductionPage.lazy.tsx
│   │   │   └── ProductionPage.module.scss
│   │   └── index.ts
│   └── ...
│
├── shared
│   ├── const
│   │   └── ...
│   ├── hooks
│   │   └── ...
│   └── sagas
│       └── ...
│
├── widgets
│   ├── Header
│   │   ├── ui
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.scss
│   │   └── index.ts
│   ├── Footer
│   │   ├── ui
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.scss
│   │   └── index.ts
│   └── ...
│
├── App.tsx
└── index.js
```

## Структура директорий

### 1. `app`
Содержит файлы и папки, связанные с основным функционалом приложения.
Предоставляет различные конфигурации провайдеров, маршрутизации и др.

### 2. `assets`
Содержит статические ресурсы проекта, такие как изображения и другие медиа-файлы.

### 3. `components`
Включает в себя презентационные компоненты, ответственные за отображение данных и пользовательский интерфейс.
Может содержать логику для текущего компонента.

### 4. `features`
Части приложения, которые реализуют конкретную функциональность или предоставляют определенные возможности.
А так же, объекты данных, модели или сущности, связанные с бизнес-логикой приложения.

### 5. `pages`
Содержит компоненты, представляющие отдельные страницы вашего приложения.

### 6. `shared`
Общие компоненты, константы, хуки и саги, которые могут использоваться в разных частях проекта.

### 7. `widgets`
Включает в себя компоненты макета, определяющие общую структуру страниц или разделов (Например, Header и Footer приложения).

### 8. `index.js`
Точка входа приложения (Entry point). Используется для рендеринга корневого компонента (например, `<App />`) в DOM и настройки основных параметров, таких как маршрутизация.

### 9. `App.tsx`
Корневой компонент.

## Запуск локальных сборок

### Файл `.build_v3.sh` в корне корневого tmk-sale модуля
Запускает локальную сборку нового дизайна.

## Конфигурация маршрутизации для Apache (Локальная разработка)
Чтобы на локальном стенде параллельно отобразить 2 дизайна (старого и нового), необходимо настроить конфигурацию. Пример:

```
<VirtualHost *:80>
    ServerAdmin example@example.ru
    ServerName localhost
    ServerAlias debug.localhost
    DocumentRoot /var/www/tmk-sale/cometp/public

    SetEnv APPLICATION_ENV "development"

    <Directory "/var/www/tmk-sale/cometp/public">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        DirectoryIndex index2.0.php
    </Directory>

    <Location "/v2/">
        DirectoryIndex index2.0.php
    </Location>

    <Location "/v3/">
       	DirectoryIndex index3.0.php
    </Location>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

В таком случае, версия старого дизайна будет доступена по url `../v2` (использование index2.0.php), нового по `../v3` (index3.0.php).
