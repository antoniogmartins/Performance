# Jmeter (Testes de Performance (Stress/Carga/Pico) incluindo o SmokeTests - Api)

### 🚀 Cadastro/Consulta de Bookers
## 🔖 Requisitos funcionais
- [X] Deve retornar os bookingid ao cadastrar um novo booker
- [X] Deve retornar 201 ao cadastrar um novo booker
- [X] Deve retornar 400 ao tentar cadastrar com o payload vazio ou incompleto
- [X] Deve retornar 400 se o campo depositpaid ou o totalprice estiver(em) nulo(s)
- [X] Deve retornar 200 ao buscar por todos os bookers cadastrados
- [X] Deve retornar 400 ao tentar pesquisar pelos bookers cadastrados utilizando um hostname inválido 

| campos             | descrição                             | tipo     | obrigatório |
| :----------------- | :------------------------------------ | :------- | :---------- |
| firstname          | primeiro nome ao cadastrar um booker  | texto    | sim         |
| lastname           | segundo nome ao cadastrar um booker   | texto    | sim         |
| totalprice         | preco total                           | numero   | sim         |
| depositpaid        | valor do pagamento do deposito        | valor    | sim         |
| bookingdates       | data do booking                       | data     | sim         |
| checking           | data do checking                      | data     | sim         |
| checkout           | data do checkout                      | data     | sim         |
| additionaneeds     | necessidades adicionais               | texto    | sim         |

## 🔖 Requisitos não funcionais
### Cadastro do Booker

- [X] O cadastro com sucesso deve ocorrer em até 2 segundo(s)
- [X] Cadastros sem sucesso devem ocorrer em até 2 segundo(s)
- [X] Deve poder cadastrar até 1000 bookers simultâneos
- [X] A margem de erro no cadastro deve ser de pelo menos 2%

### Consulta pelos Bookers

- [X] A Cnsulta realizada com sucesso deve ocorrer em até 1 segundo(s)
- [X] As Consulta sem sucesso devem ocorrer em até 1 segundo(s)
- [X] Deve poder Consultar por todos bookers cadastrados de forma simulatanea
- [X] A margem de erro na consulta deve ser de pelo menos 1%

## 🚀 Tecnologias
- [Restfull-Broker] - Local onde se encontra disponibilizada a Api
- [k6] - ferramenta utilzada para criacao dos scritps de testes automatizados considerando os teste de carga, performance, stress etc...
- [Geracao de massa] - para a geracao de massa dinamica, poderiamos ter utilizado o uuuid ou o randomString
  Fontes:  


## 👨🏻‍💻 Como executar os testes de performance em cima das apis, do projeto booker
- Faça download e instale o K6 em seu computador
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
Apos considerar a execucao dos smoke testes realizados utilizando 1 usuario, durante 60 segundos, observamos que: 
- [X] Consideramos uma requisicao utilizando o metodo POST e o metodo GET
- [X] Foi considerado um sleep de 0.3s entre os requests  
- [X] Não foram apresentadas falhas durante a execucao dos testes
- [X] Foram realizadas validações sobre o status code com sucesso - smoke tests
- [X] A quantidade de dados recebidos foi de 1.2mb e enviados 31Kb para o servidor
- [X] A media do tempo total de envio/recebimento dos dados foi de 538ms
- [X] Atingimos a quantidade de 51 requisicoes durante este perido de 1m01.7ss
- [X] Observamos que tivemos picos de 423.67s (Considerando os 2 requests)

## 🚀 Evidencia dos Smoke Tests executados
Dashboards

![Captura de ecrã de 2023-10-20 16-49-47](https://github.com/antoniogmartins/JmeterServices/assets/35534493/c7ed0fb7-af96-46db-91a7-fcda9c99a68a)

![Captura de ecrã de 2023-10-20 16-49-51](https://github.com/antoniogmartins/JmeterServices/assets/35534493/13ec6057-de56-420a-bd78-12509e104d86)

![Captura de ecrã de 2023-10-20 16-49-53](https://github.com/antoniogmartins/JmeterServices/assets/35534493/936ef8e2-6b87-468d-bd0a-e5ccc9d72c8d)

![Captura de ecrã de 2023-10-20 16-49-58](https://github.com/antoniogmartins/JmeterServices/assets/35534493/871a6039-1634-4d56-889b-fc6d90905662)

![Captura de ecrã de 2023-10-20 16-50-00](https://github.com/antoniogmartins/JmeterServices/assets/35534493/83ebc43b-7bc5-4581-afb4-4a210046aab1)


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

![Captura de ecrã de 2023-10-20 16-53-06](https://github.com/antoniogmartins/JmeterServices/assets/35534493/23393a05-df4d-4a6a-807d-85459f6ba13f)

![Captura de ecrã de 2023-10-20 16-53-09](https://github.com/antoniogmartins/JmeterServices/assets/35534493/959d49fb-69b4-44ab-98d0-1031622ce181)

![Captura de ecrã de 2023-10-20 16-53-12](https://github.com/antoniogmartins/JmeterServices/assets/35534493/d153635e-eb85-417b-9342-b56a14bb6daf)

![Captura de ecrã de 2023-10-20 16-53-16](https://github.com/antoniogmartins/JmeterServices/assets/35534493/89799c68-1008-4f41-a505-7cf38017c8c4)

![Captura de ecrã de 2023-10-20 16-53-33](https://github.com/antoniogmartins/JmeterServices/assets/35534493/dd3c71d3-419c-4feb-98c8-cc1a09b4a8b4)


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

![Captura de ecrã de 2023-10-20 14-36-16](https://github.com/antoniogmartins/JmeterServices/assets/35534493/9a5cf174-a626-41f2-aece-ce15af587665)

![Captura de ecrã de 2023-10-20 14-36-19](https://github.com/antoniogmartins/JmeterServices/assets/35534493/f98b0e1d-3ac6-4bc9-ad3b-7a86bce9068d)

![Captura de ecrã de 2023-10-20 14-36-22](https://github.com/antoniogmartins/JmeterServices/assets/35534493/5ff625aa-89ac-49d6-9701-92c0fabf869a)

![Captura de ecrã de 2023-10-20 14-36-27](https://github.com/antoniogmartins/JmeterServices/assets/35534493/510241cd-2b02-4f03-878d-dd2eebf0ece9)

![Captura de ecrã de 2023-10-20 14-36-34](https://github.com/antoniogmartins/JmeterServices/assets/35534493/3413a7ae-cbeb-48e4-a2e2-4a5ad43c2f9b)


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
![Captura de ecrã de 2023-10-20 13-35-31](https://github.com/antoniogmartins/JmeterServices/assets/35534493/536fb293-1740-46b6-9e57-32be7eb59024)

![Captura de ecrã de 2023-10-20 14-12-44](https://github.com/antoniogmartins/JmeterServices/assets/35534493/981e5ed0-82e5-41c7-9c8b-a285f9067c65)

![Captura de ecrã de 2023-10-20 14-12-53](https://github.com/antoniogmartins/JmeterServices/assets/35534493/cbb13751-2f73-4426-bf78-7d8a4af5dc9f)

![Captura de ecrã de 2023-10-20 14-12-57](https://github.com/antoniogmartins/JmeterServices/assets/35534493/71d8af6c-3bfc-488d-a632-6d71b9f8182a)

![Captura de ecrã de 2023-10-20 14-13-02](https://github.com/antoniogmartins/JmeterServices/assets/35534493/f1303b6f-1012-407f-aa09-445f82a6dd21)



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

