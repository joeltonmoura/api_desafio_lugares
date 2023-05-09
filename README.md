# api_desafio_lugares
Este repositório contém o código fonte de uma API desenvolvida como parte de um desafio técnico.

## Instalação
Para executar o código em ambiente de desenvolvimento, execute o seguinte comando:
```js
yarn dev:start
```

Para gerar o build, execute o seguinte comando:
```js
yarn build
```
## Endpoints
A API contém os seguintes endpoints:

## atualizarPaises

Esta rota implementa três interfaces de serviço:
* **IserviceExtrairUlrBandeiras**: responsável por fazer um webscraping para obter a lista de países e imagens de bandeiras.
* **IserviceSalvarImagem**: responsável por salvar as imagens na pasta local.
* **IserviceAtulizarPais**: responsável por salvar no banco de dados o nome do país e o caminho da imagem.

**Método: POST**
**Rota: http://localhost:8888/atualizarPaises**

## criarLocal
Esta rota implementa as interfaces de serviço para criação de um local a ser visitado:

* **IserviceGetPais**: responsável por verificar se o país existe.
* **IserviceGetLocal**: responsável por verificar se o local já existe para o país.
* **IserviceCreatelocal**: responsável por criar o local no banco de dados.
 
**Método: POST**
**Rota: http://localhost:8888/criarLocal**

Body:
```json
{
  "idpais": number,
  "local": string,
  "meta": string
}
```
## getllocal
Esta rota implementa a interface que localiza os locais na base:

* **IserviceGetLocal**: responsável por verificar se o local existe.
A regra de negócio para filtrar os locais ou não dependerá da forma como a rota é chamada. É possível passar três parâmetros como filtro:

id: número.
local: string.
idpais: número.
Método: GET

**Rota: http://localhost:8888/getllocal**

Se chamada desta forma, a rota retornará todos os locais cadastrados:

**Rota: http://localhost:8888/getllocal?local=Tal%20lugar**

Se chamada desta forma, a rota fará o filtro por local.

## atualizarlocal
Esta rota implementa a interface IserviceAtualizarLocal, que espera receber como parâmetro um objeto de algum local que já existe para ser atualizado.

**Método: PUT**

**Rota: http://localhost:8888/atualizarlocal**

Body:
```json
{
  "id": number,
  "meta": string,
  "local": string
}
```


![image](https://user-images.githubusercontent.com/40373926/236967275-4aae8c60-f428-48df-9a7c-67c5e3e76778.png)

![image](https://user-images.githubusercontent.com/40373926/236967293-04e391be-8ff5-4c3c-9cff-143e07878ae0.png)

![image](https://user-images.githubusercontent.com/40373926/236967339-8499a4f4-7489-4cc7-b9ff-434506c61736.png)

![image](https://user-images.githubusercontent.com/40373926/236967499-fb6c1f95-9ca1-46da-b553-e754a1529d24.png)




