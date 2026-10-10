# VitalU

<div align="middle">
  <img #logo src="https://github.com/Steel-Hard/Steel-Hard/blob/main/assets/vitalu-gitlogo.gif" align="middle">
</div>

# 🍏 OBJETIVO
Desenvolver um sistema de gerenciamento nutricional que permita aos usuários registrar dados fisiológicos e nutricionais, calcular calorias e acompanhar o consumo diário por meio de relatórios, garantindo segurança, disponibilidade e usabilidade do sistema.

# 🗂️ SPRINTS
| Sprint | Datas | Sprint Backlog |
|:------:| :-----: | :--------------: |
| 1 | :calendar: 02/09/2024 | ➡️ [Ver](https://github.com/Steel-Hard/VitalU/blob/main/docs/sprint1.md) |
| 2 | :calendar: 23/09/2024 | ➡️ [Ver](https://github.com/Steel-Hard/VitalU/blob/main/docs/sprint2.md) |
| 3 | :calendar: 14/10/2024 | ➡️ [Ver](https://github.com/Steel-Hard/VitalU/blob/main/docs/sprint3.md) |

# 📰 PRODUCT BACKLOG

### ⚙️ Requisitos Funcionais (RF)

| ID | Descrição |
| :-: | -------- |
| RF01 | O sistema deve permitir o cadastro de novos usuários mediante a inserção de nome, e-mail e senha. |
| RF02 | O sistema deve permitir a autenticação (login) do usuário utilizando e-mail e senha previamente cadastrados. |
| RF03 | O sistema deve permitir que o usuário cadastre e atualize seus dados biológicos (peso, altura, data de nascimento e gênero). |
| RF04 | O sistema deve permitir que o usuário defina seu objetivo nutricional selecionando entre as opções: ganhar, manter ou perder massa. |
| RF05 | O sistema deve permitir que o usuário altere seu objetivo nutricional a qualquer momento. |
| RF06 | O sistema deve disponibilizar uma ferramenta de busca de alimentos que retorne as respectivas informações nutricionais cadastradas. |
| RF07 | O sistema deve permitir que o usuário cadastre manualmente novos alimentos e suas tabelas nutricionais caso não sejam encontrados na busca. |
| RF08 | O sistema deve calcular o consumo de calorias dos alimentos selecionados, permitindo ao usuário salvar o registro no seu diário ou realizar apenas uma simulação (sem salvar). |
| RF09 | O sistema deve armazenar o histórico de consumo calórico do usuário e exibir um painel de resumo gráfico com a soma das calorias ingeridas diariamente. |
| RF10 | O sistema deve restringir o acesso ao registro e à visualização de informações nutricionais, permitindo-o apenas para usuários autenticados. |

### 🛠️ Requisitos Não Funcionais (RNF)    

| ID | Descrição |
| :-: | -------- |
| RNF01 | O sistema deve criptografar as senhas dos usuários usando técnicas adequadas. |
| RNF02 | O sistema deve ter uma disponibilidade de 99%, minimizando a inatividade. |
| RNF03 | O sistema deve ser intuitivo e de fácil navegação, permitindo que o usuário realize ações sem dificuldades técnicas. |
| RNF04 | O front-end deve utilizar o framework React Com Typescript para a criação de UIs interativas. |
| RNF05 | O back-end deve utilizar a linguagem tipada TypeScript + Express. |
| RNF06 | O Banco De Dados deve ser o PostgreeSql sendo possível utilizar interfaces gráfica como psql ou pgAdmin. |
| RNF07 | O backlog do produto deve ser gerenciado utilizando a ferramenta de gestão Trello. |
| RNF08 | A equipe de desenvolvimento deve ser dividida em funções específicas para otimização do trabalho. |
| RNF09 | O sistema deve permitir a integração com APIs para consulta de dados nutricionais. |

# 👫 USER STORIES
| Como (Ator) | Quero (Ação) | Para (Motivo) |
| :---------: | ------------ | ------------- |
| Visitante | Realizar meu cadastro na plataforma informando nome, e-mail e senha | Criar meu perfil e ter acesso às funcionalidades de monitoramento nutricional |
| Usuário | Fazer login com minhas credenciais (e-mail e senha) | Acessar meu painel pessoal de forma segura e privada |
| Usuário | Registrar minhas medidas corporais (peso, altura, idade e gênero) | Descobrir o meu gasto calórico basal estimado |
| Usuário | Definir meu objetivo principal (ganhar, manter ou perder peso) | Receber uma meta diária de calorias personalizada para a minha realidade |
| Usuário | Atualizar minhas medidas corporais e objetivos a qualquer momento | Ajustar minha meta calórica automaticamente conforme meu corpo e meus planos mudam |
| Usuário | Buscar alimentos específicos em uma base de dados | Consultar a tabela nutricional (calorias e macros) antes de consumi-los ou registrá-los |
| Usuário | Cadastrar novos alimentos ou receitas manualmente | Conseguir contabilizar itens específicos que não constam na base de dados padrão |
| Usuário | Visualizar o saldo de calorias atualizado conforme registro minhas refeições | Saber o quanto ainda posso consumir ao longo do dia para não ultrapassar minha meta |
| Usuário | Acessar um resumo ou histórico do meu consumo em dias anteriores | Avaliar meu progresso, disciplina e constância a longo prazo |
| Administrador do Sistema | Que registros de consumo diário com mais de 3 meses sejam expurgados automaticamente | Otimizar os custos de armazenamento e manter a performance do banco de dados |
| Product Owner | Integrar a busca de alimentos com uma API externa de nutrição | Oferecer aos usuários um catálogo extenso e confiável sem a necessidade de cadastrar tudo manualmente |

# ❤️‍🔥 BURNDOWN
<img src= "https://github.com/Steel-Hard/VitalU/blob/main/docs/burndown.jpg" />
<img src= "https://github.com/Steel-Hard/VitalU/blob/main/docs/sprint2_burndown.jpeg" />
<img src="https://github.com/Steel-Hard/VitalU/blob/main/docs/sprint3_burndown.jpeg"/>

# 🖼️ WIREFRAME
<div align="middle">
<img src="https://github.com/Steel-Hard/VitalU/blob/main/docs/wireframe.jpg" />
</div>

# 🔗 LINKS
### 🧮 [Trello](https://trello.com/b/eAk8ygNM/vital-u)
### 🖌️ [Figma](https://www.figma.com/design/0zdcRwlcWlTIJ311FKKpDa/Untitled?node-id=1-16&m=dev&t=P1S4mLtsn3krv4SI-1)
### 🏦 [Modelo Conceitual do BD](https://github.com/Steel-Hard/VitalU/blob/main/docs/ERD.png)

# 🖥️ EQUIPE

| CARGO | NOME | SOCIAL MEDIA |
| :---: | :--: | :----------: |
| Scrum Master |  Claudio Santos | <a target="_blank" href="https://github.com/claudsaints"><img  src="https://skillicons.dev/icons?i=github"></a> <a target="_blank" href="https://github.com/claudsaints"><img  src="https://skillicons.dev/icons?i=linkedin"></a> |
| Product Owner | Nicolas Aquino | <a target="_blank" href="https://github.com/Nickaqui"><img  src="https://skillicons.dev/icons?i=github"></a> <a target="_blank" href="https://www.linkedin.com/in/nicolas-aquino-b8bbaa154"><img  src="https://skillicons.dev/icons?i=linkedin"></a> |
|     Dev     | Breno de Luca | <a target="_blank" href="https://github.com/brn-lc"><img  src="https://skillicons.dev/icons?i=github"></a> <a target="_blank" href="https://br.linkedin.com/in/brenoluca"><img  src="https://skillicons.dev/icons?i=linkedin"></a> |
|     Dev     | Claudio Perretti | <a target="_blank" href="https://github.com/ClauPerretti"><img  src="https://skillicons.dev/icons?i=github"></a>  <a target="_blank" href="https://ww.linkedin.com/in/claudio-perretti-junior-3a290b310"><img  src="https://skillicons.dev/icons?i=linkedin"></a> |
|     Dev     | Luiz Felipe | <a target="_blank" href="https://github.com/felipe-sant"><img  src="https://skillicons.dev/icons?i=github"></a> <a target="_blank" href="https://www.linkedin.com/in/lfelipesant/"><img  src="https://skillicons.dev/icons?i=linkedin"></a> |
|     Dev     | Vitor Francisco | <a target="_blank" href="https://github.com/frevisto"><img  src="https://skillicons.dev/icons?i=github"></a> <a target="_blank" href="https://www.linkedin.com/in/vitor-francisco-ab6860235"><img  src="https://skillicons.dev/icons?i=linkedin"></a> |
