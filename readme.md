## Тестовое задание

Задание: разработать приложение todos, используя graphQl для работы с запросами

### Зависимости:

#### Backend:

Сервер:

-   [express](https://www.npmjs.com/package/express) - для запуска сервера
-   [graphql](https://www.npmjs.com/package/graphql)
-   [express-graphql](https://www.npmjs.com/package/express-graphql) - для связки express с graphql

Cors:

-   [cors](https://www.npmjs.com/package/cors)

#### FrontEnd:

-   [react](https://www.npmjs.com/package/react)
-   [graphql](https://www.npmjs.com/package/graphql)
-   [@apollo/client](https://www.npmjs.com/package/@apollo/client) - для записи запросов на backend

### Инициализация:

Копипастим эти строки:

#### [Сервер](https://github.com/evyz/todos-react-nodejs-graphql/tree/server):
```
git clone https://github.com/evyz/todos-react-nodejs-graphql.git -b server server
cd server
npm i
npm run dev
```
#### [Клиент](https://github.com/evyz/todos-react-nodejs-graphql/tree/client):
```
git clone https://github.com/evyz/todos-react-nodejs-graphql.git -b client client
cd client
npm i
npm run start
```

### Примечание:

Я не использовал БД, поэтому у меня все todos-ы хранятся просто в массиве на сервере.
Это означает, что при каждом перезапуске сервера - данные будут обнулятся до начального todo.


### Мини-презентация результата: 

_Я сделал минимальный css-стайлинг, т.к. моя задача показать функционал взаимодейства клиента с бекендом через graphql_

![2021-08-17_20-46-16_(online-video-cutter com)](https://user-images.githubusercontent.com/73714921/129776220-e1aa3a6e-69bd-4e1e-a67d-9ea035c89669.gif)


Happy hacking ✌️
