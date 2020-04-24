## проект'News Explorer'
# Express.js-сервер
Версия проекта: v1.0.0

Проект доступен по ссылке: http://api.meste4ko.tk/

## API

`GET localhost:3000/users/me`
Возвращает информацию о пользователе (email, name).

`GET localhost:3000/articles`
возвращает все сохранённые пользователем статьи.

`POST localhost:3000/articles`
Создаёт статью с переданными в теле параметрами (keyword, title, text, date, source, link, image).

Пример запроса:
```
{
  "keyword": "Пёсики",
  "title": "Познакомьтесь с хорошим мальчиком",
  "text": "Этот хороший мальчик знает толк в теннисных мячиках и хрустящем корме.",
  "date": "20.02.2022",
  "source": "Новости, которые вы заслужили",
  "link": "https://dobro.com",
  "image": "https://cdn.fishki.net/upload/post/2017/10/08/2399690/tn/pembroke-welsh-corgi-vancouver-1.jpg"
}
```

`DELETE localhost:3000/articles/articleId`
Удаляет статью с заданным _id из сохраненных.

`POST localhost:3000/signup`
Cоздаёт пользователя с переданными в теле email, password, name.

Пример запроса:
```
{
    "name": "Ада Лавлейс",
    "email": "ada@gmail.com",
	"password": "veryStrongPassword12345"
}
```

`POST localhost:3000/signin`
Проверяет переданные в теле почту и пароль и возвращает JWT.

Пример запроса:
```
{
    "email": "ada@gmail.com",
	"password": "veryStrongPassword12345"
}
```

При запросе несуществующей страницы будет возвращен статус `404` и сообщение об ошибке.

## Как запустить сервер

`npm run start`
Запуск на `localhost:3000`.

`npm run dev`
Запуск на `localhost:3000` с с хот релоудом.

