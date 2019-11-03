# FlibustaBot

[Бот ВКонтакте](https://vk.me/f_bot) позволяющий искать и скачивать книги на сайте проекта Flibusta. 
По умолчанию использует домен: http://flibusta.is

Для работы с TOR'ом, используем [этот проект](https://github.com/FlyInk13/FlibustaBot).

## Запуск
```
npm install VK-Promise templang 
# https://www.npmjs.com/package/pm2
npm install pm2 -g
# редактируете ecosystem.config.js на ваш вкус
pm2 start ecosystem.config.js
# далее настраиваете Callback API на PROJECT_HOST/callback_api
```

## Зависимости
- nodejs - на нем работает бот
- npm 
    - VK-Promise - для общения с API ВКонтакте
    - templang - для парсинга templang переводов
    - pm2 - демон для nodejs (можно и без него обойтись) 
