#api_desafio_lugares
Este repositório contém o código fonte de uma API desenvolvida como parte de um desafio técnico.

Para excutar o codigo em ambiente de dev 
executar yarn ou npm dev:start

para gera o build
executar yarn ou npm build

Este Api contem 4 end point 
/atualizarPaises (Utilziado para atualizar a lista de repositorios de fotos)
/criarLocal (Utilizando para criar os local que deseja visitar)
/getllocal (Utilizado para pegar os local que dejea )
/atualizarlocal (Utilizado para atulizar local ou meta já cadastrados)


atualizarPaises:
Esta rota implementa tres interface de serviço 
IserviceExtrairUlrBandeiras: Respoavel por fazer um webscraping para pegar a lista de paises e imagem
IserviceSalvarImagem: Resposavel por salvar as imagem na pasta local
IserviceAtulizarPais: Responavel por salvar no banco de dados o nome do pais e path da imagem

Metado: POST
Rota: http://localhost:8888/atualizarPaises

criarLocal:
Esta rota implemtna as interface de serviço para criação de um local a ser visitado
IserviceGetPais: Respovel por verifcar se o pais existe
IserviceGetLocal: Resposavel por verificar se o local já existe para o pais 
IserviceCreatelocal: Resposavel por criar o local no banco dados 

Metado: POST
Rota: http://localhost:8888/criarLocal
Body: { "idpais": number, "local": string, "meta": string } 

getllocal
Esta rota implenta a interface que localiza os local na base 
IserviceGetLocal:  Resposavel por verificar se o local 
Sua regra de negocio permir filtrar os locais ou não vai depedender da forma que chamar a rota
Podedndo passar Tres parametros como filtro
id: number
local: string
idpais: number 

METADO: GET
Rota: http://localhost:8888/getllocal
Se chamar desta forma vai retorna todos Locais cadastrado

Rota: http://localhost:8888/getllocal?local=Tal%20lugar
se chamar desta forma vai fazer o filtro por local

atualizarlocal
Este rota impmenta a interface IserviceAtualizarLocal
que espera rececber como parametro um objeto de algum lcoal que ja egiste para ser atualizado

METADO: PUT
Rota: http://localhost:8888/atualizarlocal
Body: { "id": number, "meta": string, "local": string }


![image](https://user-images.githubusercontent.com/40373926/236967275-4aae8c60-f428-48df-9a7c-67c5e3e76778.png)

![image](https://user-images.githubusercontent.com/40373926/236967293-04e391be-8ff5-4c3c-9cff-143e07878ae0.png)

![image](https://user-images.githubusercontent.com/40373926/236967339-8499a4f4-7489-4cc7-b9ff-434506c61736.png)

![image](https://user-images.githubusercontent.com/40373926/236967499-fb6c1f95-9ca1-46da-b553-e754a1529d24.png)




