# compassapi
Create api for company compass.


https://github.com/Conpass/challenges/blob/master/Backend-Challenge.md

git clone.

npm install
yarn install

renomear o arquivo env-exemplo para .env

preencher os dados das variaveis de ambiente

DB_HOST=host
DB_USER=user
DB_PASS=password
DB_NAME=banco

após:
yarn sequelize migrate

para executar o projeto é melhor com o yarn para executar os scripts configurado no package.json
"yarn dev" -> para executar a aplicação.

Aplicação conta com 

express,
body-parser,
sequelize,
pg,
jsonwebtoken,
bcryptjs.

Obs: estou colocando um arquivo para exporta no Insomnia (parecido com o postman). "Insomnia_2019-08-27.json".
