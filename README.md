# ods_project

> Este trabalho apresenta a concepção de um projeto que tem como finalidade auxiliar na inclusão da população idosa no uso de ferramentas digitais. De acordo com o Instituto Brasileiro de Geografia e Estatística (IBGE), o número de pessoas idosas aumentou 56% entre 2010 e 2022. No entanto, apenas 74,5% desse público utiliza a internet. Segundo pesquisa do mesmo instituto, entre os idosos que não utilizam a internet, o principal motivo relatado, com 66,5% das respostas, foi não saber utilizá-la. A partir desses dados, e em alinhamento com o Objetivo de Desenvolvimento Sustentável (ODS) 4 – Educação de Qualidade, especificamente com a meta 4.4, foram definidos objetivos que buscam auxiliar essa população a utilizar a internet com mais autonomia. Esse conteúdo será disponibilizado por meio de um site, adaptado às necessidades desse público, que apresentará tutoriais sobre serviços do cotidiano, como o uso do Pix e o acesso ao gov.br, além de orientações para evitar golpes digitais.


## Stack

- [Vite](https://vite.dev/) — bundler e servidor de desenvolvimento
- JavaScript (ES Modules)
- HTML e CSS

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm

## Como rodar

```bash
# instalar dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Por padrão, a aplicação fica disponível em http://localhost:5173.

## Scripts

| Comando           | Descrição                                   |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento        |
| `npm run build`   | Gera a build de produção na pasta `dist/`   |
| `npm run preview` | Serve localmente a build de produção        |

## Estrutura

```
.
├── index.html       # ponto de entrada HTML
├── public/          # arquivos estáticos
└── src/
    ├── main.js      # ponto de entrada JavaScript
    ├── counter.js
    ├── style.css
    └── assets/      # imagens e ícones
```
