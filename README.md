# Tagmar 1ª Edição para Foundry VTT (não oficial)

Sistema de jogo para o [Foundry VTT](https://foundryvtt.com) (v13 e v14) com a ficha, as rolagens e os compêndios do RPG **Tagmar, 1ª edição (1991)**.

> Versão de testes. A lógica foi testada com o Foundry simulado, mas ainda falta teste de uso real. Abra uma *issue* se algo não funcionar.

## Índice

- [Instalação e primeiro mundo](#instalação-e-primeiro-mundo)
- [Primeiros passos com a ficha](#primeiros-passos-com-a-ficha)
- [Compêndios incluídos](#compêndios-incluídos)
- [Rolagens e botões](#rolagens-e-botões)
- [Macros opcionais](#macros-opcionais)
- [Atualização e solução de problemas](#atualização-e-solução-de-problemas)
- [Autoria e histórico](#autoria-e-histórico)
- [Licenciamento e conteúdo](#licenciamento-e-conteúdo)

## Instalação e primeiro mundo

1. No Foundry, abra **Game Systems → Install System**.
2. No campo **Manifest URL**, cole:

   `https://github.com/claezius/tagmar1e-foundry/releases/latest/download/system.json`

3. Clique em **Install**. Depois crie um mundo escolhendo o sistema **Tagmar 1ª Edição (não oficial)**.
4. Ao abrir o mundo como Mestre, o sistema pergunta se deve criar os compêndios. Responda **Sim**.

Instalação manual: baixe `system.zip` da página de *Releases*, descompacte em `Data/systems/tagmar1e/` (o arquivo `system.json` fica direto nessa pasta) e reinicie o Foundry.

## Primeiros passos com a ficha

1. Crie um ator do tipo **personagem**.
2. Preencha nome, raça, profissão, estágio, **altura** (`175` ou `1,75`) e **peso** (kg).
3. Digite as características iniciais (soma dos 2 maiores de 3d10, conforme o livro) e o modificador racial. A ficha mostra o total e o ajuste.
4. Escolha armadura, escudo e elmo.
5. Use **Rolar EH** para a Energia Heróica e **Aplicar** ao lado da Energia Física.

A ficha calcula sozinha: ajustes das características, Energia Física (tabela IV-3.1.1), Velocidade Base, Defesa (e sem consciência), Resistência Física, Resistência à Magia, Karma máximo, total e pontos das habilidades, e a tabela *Ataque x Defesa* e o *Dano* de cada arma.

## Compêndios incluídos

Criados no mundo (69 itens): **Habilidades** (27), **Armas** (21), **Armaduras, escudos e elmos** (9), **Raças** (6) e **Profissões** (6).

Arraste itens para a ficha: habilidade vira uma linha no nível 1, arma vira uma linha de arma, armadura/escudo/elmo equipa o item, raça preenche o modificador racial e profissão preenche a profissão (com aviso se a combinação não existir, tabela II-4.7).

Para criar ou completar os compêndios depois, rode em um macro de script: `await game.tagmar1e.popularCompendios()`.

## Rolagens e botões

- **⚔ (arma):** pergunta a Defesa do alvo, monta a coluna (nível + ajuste de Agilidade + valor da arma contra a Defesa), rola o d20 na Tabela de Resolução e mostra cor, dano, crítico e falha.
- **🎲 (habilidade):** dificuldade por cor (Rotineiro a Absurdo), tentativas (+2 níveis a cada nova) e sucesso pelo menor número da cor na coluna.
- **Aplicar dano:** dano normal na EH, EF com absorção da armadura, crítico direto na EF.

## Macros opcionais

A pasta `macros/` tem macros de script independentes da ficha (ataque, habilidade, dano e um teste simples por coluna). A pasta `dados/` tem as tabelas digitalizadas em JSON.

## Atualização e solução de problemas

- Para atualizar, use **Update** no Foundry; ele segue a última *Release*.
- Se os compêndios não aparecerem, rode `await game.tagmar1e.popularCompendios()` em um macro de script como Mestre.
- Ao relatar um erro, informe a versão do Foundry e a mensagem do console (F12).
- Fichas criadas na versão 0.2.x: o campo "total" das habilidades passa a ser o **nível**.

Ainda faltam: magias (só nome e nível por enquanto), arquétipos prontos, criaturas, ataque desarmado e Karma atual automático.

## Autoria e histórico

- **Tagmar** é um RPG brasileiro lançado em 1991 pela Editora GSA. Criadores: Marcelo Rodrigues, Ygor Moraes Esteves da Silva, Julio Augusto Cezar Junior e Leonardo Nahoum Pache de Faria.
- Este sistema é um projeto de fãs, sem vínculo com os autores. A estrutura segue o exemplo do sistema [Tagmar 3ER Oficial](https://github.com/piratabarba-blip/tagmar3er-oficial), feito para a 3ª edição.

## Licenciamento e conteúdo

- O repositório **não contém texto do livro**: só nomes e números das tabelas e regras de cálculo, para uso em mesa. É preciso ter o livro para jogar.
- Uso **não comercial**.
- Licença do código: *a definir pelo mantenedor do repositório*. Antes de divulgar, confirme com os autores de Tagmar a permissão para distribuir os dados da 1ª edição.
