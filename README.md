# 🧱 Gulp + SAST: Secure Frontend Build

[](https://nodejs.org/)
[](https://www.npmjs.com/)
[](https://eslint.org/)
[](https://www.google.com/search?q=LICENSE)
[](https://www.google.com/search?q=https://github.com/OlegBon/itvdn-js-pug-ua/actions)
[](https://www.google.com/search?q=package.json)

Модульний Gulp 5 сетап з інтегрованим **статичним аналізом безпеки (SAST)** за допомогою **ESLint**. Автоматизує збірку (Pug, SCSS, JS) та **блокує** її при виявленні потенційних вразливостей або помилок якості коду. Побудований на ESM, з чистою архітектурою та логуванням.

## 🚀 Ключові можливості

- ✅ **Інтеграція SAST:** Автоматична перевірка JavaScript коду за допомогою **ESLint** під час збірки.
- ✅ **Блокування небезпечного коду:** Gulp-пайплайн **зупиняється** при виявленні помилок ESLint (напр., `no-eval`, `no-implied-eval`, `no-unused-vars`).
- ✅ Компіляція Pug → HTML
- ✅ SCSS → CSS з sourcemaps, autoprefixer, cssnano
- ✅ Live reload через Browsersync
- ✅ Централізоване управління шляхами (`path.js`)
- ✅ Чистий білд: `dev` (з SAST) і `prod` (оптимізований + SAST) середовища
- ✅ Інформативний логер з аналітикою

## 📦 Встановлення

```bash
npm install
```

> **Важливо:** Проєкт налаштований на використання **ESLint v8** та плагіна **`gulp-eslint-new`** для коректної роботи з "legacy" `.eslintrc.json` конфігурацією.

## 📦 Вимоги

- **Node.js** `>=18.x`
- **npm** `>=9.x`
- **Операційна система**: Windows, macOS або Linux
- **Текстовий редактор**: VS Code з розширеннями для Pug, SCSS, ESLint

> Перевірити версію Node.js: `node -v` > **Примітка:** Для HTML-валідації (`npm run htmlLint`, якщо використовується) потрібен JDK \>= 11.

## 🛠️ Скрипти

| Команда               | Опис                                                                         |
| --------------------- | ---------------------------------------------------------------------------- |
| `npm run dev`         | Запускає білд у режимі розробки з **SAST-перевіркою** та live reload         |
| `npm run prod`        | Збирає оптимізований продакшн-білд **з SAST-перевіркою** + запуск сервера    |
| `npm run tasks`       | Показує доступні Gulp-таски                                                  |
| `npm run htmlLint`    | Перевірка HTML-файлів на валідність (`dev`)                                  |
| `npm run jsLintSrc`   | Запуск **SAST-перевірки** (`eslint`) для `src/js` файлів                     |

## 📁 Структура проєкту (Ключові файли)

```
├── gulpfile.js/
│   ├── index.js               # Головні сценарії (dev/prod)
│   ├── path.js                # Шляхи
│   ├── styles.js              # SCSS
│   ├── templates-pug.js       # Pug
│   ├── templates-html.js      # HTML
│   ├── scripts.js             # JS: копіювання, **SAST (eslint)**, трансформація
│   └── logger.js              # Логер
├── src/
│   ├── js/script.js           # Вихідний JS
│   ├── pug/index.pug          # Вихідний Pug
│   └── scss/main.scss         # Вихідний SCSS
├── .eslintrc.json             # Конфігурація ESLint (з правилами безпеки)
└── package.json               # Залежності (eslint@8, gulp-eslint-new)
```

## 🛡️ Інтеграція SAST

- **Інструмент:** ESLint v8 (`eslint:recommended`, `google`, + явні правила `no-eval`, `no-implied-eval`).
- **Плагін:** `gulp-eslint-new` (сумісний з ESLint v8 та "legacy" конфігом).
- **Механізм:** Gulp-завдання `scriptLint` використовує `eslint.failAfterError()` для **зупинки збірки** при виявленні помилок.
- **Демонстрація:** У файлі `src/js/script.js` є закоментовані приклади коду (`eval`, `setTimeout` зі рядком, `unusedVariable`), які гарантовано викликають падіння збірки при розкоментуванні.

## 🙏 Подяки

Особлива подяка авторам навчальних курсів на платформі ITVDN, які надихнули на створення цього білд-сетапу:

- **Сластен Максим** — [Верстка сторінок з використанням Gulp](https://itvdn.com/ua/video/gulp)

  За чітке пояснення принципів роботи Gulp та побудову ефективного workflow.

- **Кінаш Станіслав** — [Шаблонізатор Pug](https://itvdn.com/ua/video/pug-ua)

  За глибоке занурення у синтаксис Pug та практичні приклади використання шаблонізатора.

> Ці матеріали стали основою для архітектурних рішень, які реалізовані в цьому проєкті.

## 🧠 Автор

[OlegBon](https://github.com/OlegBon)

## 📚 Корисні ресурси

- [Gulp.js Documentation](https://gulpjs.com/docs/en/getting-started/quick-start)
- [Pug.js Guide](https://pugjs.org/api/getting-started.html)
- [ESLint Documentation](https://www.google.com/search?q=https://eslint.org/docs/latest/) — офіційна документація ESLint
- [OWASP Top Ten](https://owasp.org/www-project-top-ten/) — головні вебвразливості
- [PostCSS Docs](https://postcss.org/)
- [Browsersync Docs](https://browsersync.io/docs)
- [ITVDN: Верстка сторінок з використанням Gulp](https://itvdn.com/ua/video/gulp)
- [ITVDN: Шаблонізатор Pug](https://itvdn.com/ua/video/pug-ua)
