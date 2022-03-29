# Aluroni - React- lidando com arquivos estáticos

Professor Luiz Fernando Ribeiro

## Conteúdo do curso da Alura

- normalize
- absolute import
- import de imagem
- imports dinâmicos
- classnames

A aplicação é um cardápio de restaurante, separados em abas de acordo com os tipos de alimentos.

Desenvolvido com react e typescript.

## Template e CRA

Create React App (CRA) é uma biblioteca que cria a estrutura inicial de um projeto React com base nos padrões comuns adotados pela comunidade, incluindo ferramentas como testes.

Há várias maneiras de estruturar projetos com React dependendo das necessidades e preferências de quem está usando a ferramenta. Para isso o CRA oferece templates, que são variações do projeto padrão.

O CRA possui dois templates por padrão:

- cra-template que é o comum, usado quando nenhum template é definido;

- cra-template-typescript que possui todas as características do template acima junto de configurações necessárias para usar TypeScript no projeto.

Como qualquer um pode criar seu template, é possível criar vários projetos personalizados com React, pois templates podem ser disponibilizados como pacotes do npm.

Pesquisando por cra-template-\* no site do npm podemos encontrar vários templates criados pela comunidade.

O padrão adotado é sempre cra-template- seguido do nome do template.

## Instalando dependências

- css-modules
- sass

## Sass com CSS modules e Typescript

O Sass é uma variação do CSS, com funcionalidades adicionais, que agiliza a criação de estilos e deve ser compilada para CSS.

O Sass oferece algumas ferramentas que facilitam a escrita, como aninhamento. É escrito em desenvolvimento e compilado para CSS puro.

O Sass é utilizado pelos componentes via CSS Modules.

O CSS Modules e o TypeScript usados em componentes são convertidos em JavaScript para a aplicação rodar nos navegadores, e o Sass é convertido para CSS.

O typescript-plugin-css-modules oferece tipagem para os estilos e facilita o uso dos estilos como módulos em componentes pois possibilita o uso do autocomplete.

Todas essas bibliotecas trabalham juntas, fazendo algum tipo de conversão para que o código escrito seja compreendido pelo navegador.

- Sass facilita a escrita de estilos
- CSS modules facilita a aplicação desses estilos.
- TypeScript ajuda na experiência de desenvolvimento dos componentes.

## Import de imagens

Para adicionar uma imagem svg, importamos ela para que o webpack entenda o source (src) como um arquivo estático e não como uma string qualquer no momento de build.

## Absolute imports

Para o import absoluto, configuramos o arquivo tsconfig.json, adicionando o atributo `baseUrl` e definindo como src.

Desta forma, indicamos a url base para os imports, isso evita voltar pastas ao importar um arquivos

## Fontes

A fonte externa aplicada foi a `italiana`, retirada do google fonts, localizada em `https://fonts.google.com/`.

## Normalize

O normalize é uma alternativa para redefinições de css.

Ao invés de fazer o reset do css, podemos fazer o normalize utilizando a propriedade `@import-normalize` que atualmente não está em funcionamento.

Ou, usar o comando `npm install normalize.css` e importar na aplicação, antes do index.css principal.

## Padrão BEM

É uma metodologia ou padrão css usada, essa sigla significa Block Element Modifier (Bloco de Elemento Modificador) e consiste em nomear classes para os elementos da marcação html baseado na função estrutural do elemento e não na sua função de apresentação.

## Classnames

O classnames é uma biblioteca, serve como uma maneira de não ficar concatenando vários nomes de classes que precisam ser condicionais no mesmo elemento.
