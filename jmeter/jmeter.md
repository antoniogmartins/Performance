# Jmeter (Testes de Stress/Carga/Pico incluindo o SmokeTests - Api)

### 🚀 Cadastro/Consulta de Livros
## 🔖 Requisitos funcionais
- [X] Deve retornar todos os livros cadastrados
- [X] Deve retornar 201 ao cadastrar um novo livro
- [X] Deve retornar 400/415 ao tentar cadastrar com o payload vazio ou incompleto
- [X] Deve retornar 400 se o campo  estiver(em) nulo(s)
- [X] Deve retornar 200 ao buscar por todos os livros cadastrados
- [X] Deve retornar 200 ao alterar as informações correspondente a um livro cadastrado
- [X] Deve retornar 200 ao deletar um livros cadastrado
- [X] Deve retornar 400 ao tentar pesquisar pelos livros cadastrados utilizando um hostname inválido 

| campo(s)           | descrição                             | tipo     | obrigatório |
| :----------------- | :------------------------------------ | :------- | :---------- |
| id                 | identificador do cadastro de um livro | numero   | sim         |
| title              | nome do livro                         | texto    | sim         |
| description        | descrição do livro                    | texto    | sim         |
| pagecount          | quantidades de paginas do livro       | numero   | sim         |
| excerpt            | detalhes sobre o livro                | texto    | sim         |
| publishDate        | data da publicação do livro           | data     | sim         |

## 🔖 Requisitos não funcionais
### Cadastro de um Livro

- [X] O cadastro com sucesso deve ocorrer em até 1 segundo(s)
- [X] Cadastros sem sucesso devem ocorrer em até 2 segundo(s)
- [X] Deve poder cadastrar até 50 livros simultâneos
- [X] A margem de erro no cadastro deve ser de pelo menos 2%

### Consulta pelos Livros

- [X] A Cnsulta realizada com sucesso deve ocorrer em até 1 segundo(s)
- [X] As Consulta sem sucesso devem ocorrer em até 1 segundo(s)
- [X] Deve poder Consultar por todos livros cadastrados de forma simulatanea
- [X] A margem de erro na consulta deve ser de pelo menos 1%

## 🚀 Tecnologias
- [Restfull-Broker] - Local onde se encontra disponibilizada a Api
- [Jmeter] - ferramenta utilzada para criacao dos scripts de testes automatizados considerando os teste de carga, performance, stress, pico, etc...
- [Geracao de massa] - para a geracao de massa dinamica, poderiamos ter utilizado o uuuid ou o randomString
  Fontes:  


## 👨🏻‍💻 Como executar os testes de performance em cima das apis, do projeto booker
- Faça download e instale o jmeter em seu computador
- Crie uma pasta em seu computador, 
- Baixe os scripts de testes automatizados dentro desta pasta utilizando o seguinte comando:
  Git clone <<nome_projeto>>
- Dentro do projeto, na pasta "Scripts_Testes" >> "k6_pap_teste_carga_performance.js"
  execute a seguinte linha de comando:
  Ex:
  Para rodar os testes
  k6 run <<k6_pap_teste_carga_performance.js>>
  
  Para simular utilizando 10 usuarios(vus) em 30 segundos(duration):  
  k6 run --vus 10 --duration 30s <<k6_pap_teste_carga_performance.js>>

Obs.: É preciso que vc esteja conectado a internet

## 🔖 Análise do Smoke Tests realizados
Apos considerar a execucao dos smoke testes realizados utilizando 10 usuarios, durante 20 segundos, observamos que: 
- [X] Consideramos varias requisições de utilizando o metodo GET, POST, PUT e o metodo DELETE
- [X] Foi considerado um sleep de 0.3s entre os requests  
- [X] Não foram apresentadas falhas durante a execucao dos testes
- [X] Foram realizadas validações sobre o status code com sucesso - smoke tests
- [X] A quantidade de dados recebidos foi de 0.30 mb e enviados 0.91Kb para o servidor
- [X] A media do tempo total de envio/recebimento dos dados foi de 538ms
- [X] Atingimos a quantidade de 50 requisicoes durante este perido de 20s
- [X] Observamos que tivemos picos de 45.71 (considerando o request de Pesquisar por todos os livros)

## 🚀 Evidencia dos Smoke Tests executados
Dashboards

![Captura de ecrã de 2023-10-22 11-40-49](https://github.com/antoniogmartins/Performance/assets/35534493/3750c976-b4f0-4e2f-be2b-55a658b31178)

![Captura de ecrã de 2023-10-22 11-40-53](https://github.com/antoniogmartins/Performance/assets/35534493/155408ae-cc40-44a4-bbd6-f476159be6f0)

![Captura de ecrã de 2023-10-22 11-41-06](https://github.com/antoniogmartins/Performance/assets/35534493/e9284ed8-84a0-46e3-a318-0d297df24c41)

![Captura de ecrã de 2023-10-22 11-41-11](https://github.com/antoniogmartins/Performance/assets/35534493/41daf7ac-bc40-426c-ad5c-be5bf63c39c2)

![Captura de ecrã de 2023-10-22 11-41-25](https://github.com/antoniogmartins/Performance/assets/35534493/9b0697ea-2b9d-47ad-80b5-697a4bf0a29f)


## 🔖 Análise dos Testes de Carga realizados
Ja para os testes de carga, utilizamos o seguinte range de testes: 
    { duracao: '480s', com 20,30,40,50,60,70,80,90 e 100 usuários }
    
Apos considerar a execucao da bateria dos Testes de Stress mencionado acima, observamos que: 
- [X] Consideramos uma requisicao utilizando o metodo POST e o metodo GET
- [X] Foi considerado o sleep de 0.3s entre os requests  
- [X] Não foram apresentadas falhas dos requests durante a execucao dos testes
- [X] Foi apresentadas uma falha quanto a http_req_duration = tempo de resposta superou 1000s
- [X] Foram realizadas validações sobre o status code com sucesso
- [X] A quantidade de dados recebidos foi de 57mb e enviados 688Kb para o servidor
- [X] A media do tempo total de envio/recebimento dos dados foi de 33,91ms
- [X] Atingimos a quantidade de 1060 requisicoes durante este perido de 1m33s
- [X] Observamos que tivemos picos de 6.06s (Considerando os 2 requests)

## 🚀 Evidencia dos testes de Carga executados
Dashboards




## 🔖 Análise dos Testes de Stress realizados
Ja para os testes de stress, utilizamos o seguinte range de testes: 
    { duracao: '275s', com 25 usuários },
    { duracao: '250s', com 50 usuários },
    { duracao: '225s', com 75 usuários },
    { duracao: '200s', com 100 usuários },
    { duracao: '175s', com 125 usuários },
    { duracao: '150s', com 150 usuários },
    { duracao: '125s', com 180 usuários }
    
- [X] Consideramos varias requisições de utilizando o metodo GET, POST, PUT e o metodo DELETE
- [X] Foram realizados validações sobre o status code com sucesso
- [X] Taxas de erros/quantidades de erros associados ao request de "Pesquisar Livros" abaixo de 1%
- [X] A quantidade de dados recebidos foi de 1.10Kb/sec e enviados 0.88 Kb/sec para o servidor. Somente o request de
      Pesquisar 1 livro que estava se comportando diferente do esperado
- [X] A media do tempo total de envio/recebimento dos dados foi de 10.1/sec
- [X] Tivemos uma media de 2,5 requests/sec
- [X] Chegamos a um total de 180 usuários simultaneos
- [X] O(s) request(s) de "Adicionar Livro", "Atualizar Livros" e "Pesquisar por Todos Livros" apresentaram um tempo de
      retorno em alguns momentos acima do desejado (é necessario uma análise)

## 🚀 Evidencia dos Testes de Stress executados
Dashboards




## 🔖 Análise dos Testes de Pico realizados
Ja para os testes de carga, utilizamos o seguinte range de testes: 
    { duracao: '10m', alterando entre 60 a 160 usuários por 5 segundos, delay: 120 }
    
- [X] Consideramos varias requisições de utilizando o metodo GET, POST, PUT e o metodo DELETE
- [X] Foram realizados validações sobre o status code com sucesso
- [X] Pequenas taxas de erros/quantidades de erros ao executar os testes abaixo de 1%
- [X] A quantidade de dados recebidos foi de 2.80 Kb/sec e enviados 2.2Kb/sec para o servidor. Somente o request de
      Pesquisar 1 livro que estava se comportando diferente do esperado
- [X] A media do tempo total de envio/recebimento dos dados foi de 24,4 sec
- [X] Tivemos uma media de 4,5 requests/sec
- [X] Chegamos a um total de 160 usuários simultaneos
- [X] O(s) request(s) de "Adicionar Livro" e "Pesquisar por Todos Livros" apresentaram um tempo de retorno em alguns
      momentos acima do desejado (é necessario uma análise) 

## 🚀 Evidencia dos Testes de Pico executados

Dashboards




## 🚀  Integracao Continua
É possivel realizar os testes de performance(stress/carga/pico) utilizando o GitActions configurado em 
//github/workflows/k6.yml
=> Sempre que uma versao do codigo do script de teste:  "K6_pap_teste_carga_performance.js" é atualizado automaticamente é gerado um job e os testes são executados. Ao final serão exibidas as metricas dos testes

## 🚀 Evidencia dos Testes de Performance sendo executados direto do GitActions



## 🚀 Relatorio Final
Para uma melhor visualizacao de todos os membros do times é possivel gerar um relatorio de execução, a cada ciclo de testes, em formato html.


## 🚀 Análise Final
Foi observado que todos os testes passaram com exito, mas as apis envolvidas na execucao dos testes demonstraram que estao com o tempo de retorno acima do esperado: 2s, além da ocorrência de algums falhas, sendo necessária uma revisao por parte da equipe de desenvolvimento

## 🚀 Fontes - Documentação da Api
https://restful-booker.herokuapp.com/apidoc/

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
---
Feito com 💜 &nbsp;por Antonio Martins 👋 &nbsp;
[Meu linkedin](https://www.linkedin.com/in/antoniogoncmartins/)

