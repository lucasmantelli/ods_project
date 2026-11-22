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
├── index.html          # página inicial
├── tutorials.html      # busca de tutoriais
├── artigo.html         # detalhe de um tutorial
├── golpes.html         # busca de golpes
├── golpe.html          # detalhe de um golpe
├── glossario.html      # glossário
├── sobre.html          # página sobre o projeto
├── articles.json       # conteúdo dos tutoriais e golpes
├── vite.config.ts      # configuração do Vite (com Tailwind CSS)
├── package.json
└── src/
    ├── articleSearch.js  # busca e listagem de tutoriais
    ├── articleSetup.js   # carrega o conteúdo das páginas de detalhe
    ├── scamSearch.js     # busca e listagem de golpes
    ├── scamSetup.js
    ├── style.css
    └── assets/           # imagens
```

## Justificativa palheta de cores

A paleta usa tons de ciano e azul-petróleo, cores associadas à calma, à confiança e à segurança. Como o site orienta pessoas idosas a usar ferramentas digitais com segurança, essas cores reforçam essa sensação. Tons de azul também são usados em serviços públicos digitais, como o gov.br.

| Cor               | Uso                                                    |
|-------------------|--------------------------------------------------------|
| #1B5159           | textos, títulos e botões (contraste ~8,9:1 com branco) |
| #0E7C8C           | cor principal, em textos grandes e destaques           |
| #79E2F2           | detalhes decorativos                                   |
| #E5FCFF | fundos de seções                                       |

*Paleta gerada com o [Adobe Color](https://color.adobe.com) a partir da [imagem de destaque do site](https://pixabay.com/pt/illustrations/cibernético-segurança-em-formação-4084714/), disponível no Pixabay.*