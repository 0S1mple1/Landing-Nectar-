# Plano — Identidade visual da Néctar Sorveteria

## 1. Contexto

A landing page da Néctar Sorveteria usa uma representação provisória da marca e uma paleta em tons de vinho e âmbar. O usuário forneceu uma imagem da fachada com a logo “Sorvetes Néctar Mauá” e definiu que a marca deve ser isolada da fotografia, removendo o fundo e as linhas visíveis. Durante a execução, o usuário autorizou usar uma nova imagem limpa que contém somente o lettering “Néctar” como variante da logo da página. O verde estimado da fachada, **#50963E (RGB 80, 150, 62)**, será a cor principal da página.

## 2. Requisitos Funcionais

### RF-001 — Apresentação da logo fornecida

Descrição:

A landing page deve apresentar a versão limpa da logo “Néctar” fornecida e aprovada pelo usuário, substituindo as representações provisórias da marca existentes na navegação e na seção principal. A logo deve manter sua proporção e permanecer legível em telas móveis e desktop.

Origem:

- RNF-001
- RNF-002

### RF-002 — Isolamento e recorte da logo

Descrição:

A imagem limpa fornecida durante a execução deve ser preparada como logo isolada: preservar o lettering “Néctar” e o elemento gráfico associado à marca, removendo o fundo verde opaco. O recorte deve acompanhar de perto os limites completos da arte, sem cortar letras, acentos, sombras ou o elemento gráfico, e permitir aplicação sobre os fundos da página.

Origem:

- RNF-001
- RNF-004

### RF-003 — Aplicação da cor verde principal

Descrição:

A identidade visual da landing page deve adotar **#50963E (RGB 80, 150, 62)** como cor principal, substituindo vinho e âmbar nessa função, sem comprometer o contraste e a legibilidade do conteúdo e dos controles.

Origem:

- RNF-002
- RNF-003
- RNF-004

## 3. Critérios de Aceite

### CA-001 — Logo apresentada nos pontos de identidade

Relacionado a:

- RF-001

Critério:

> Dado que a landing page é aberta em tela móvel ou desktop
>
> Quando o cabeçalho e a seção principal são exibidos
>
> Então ambos apresentam a logo fornecida, sem as representações provisórias anteriores e sem distorção de proporção.

Status: PASSOU

### CA-002 — Marca isolada e recorte íntegro

Relacionado a:

- RF-002

Critério:

> Dado que a imagem aprovada contém a logo “Néctar” sobre um fundo verde opaco
>
> Quando o arquivo preparado da marca é usado sobre um fundo verde uniforme
>
> Então somente o lettering “Néctar” e o elemento gráfico presentes na imagem permanecem visíveis, sem o fundo original, com todos os elementos completos e sem excesso de margem ao redor.

Status: PASSOU

### CA-003 — Verde aplicado como cor principal

Relacionado a:

- RF-003

Critério:

> Dado que as seções e componentes da landing page apresentam a identidade visual da marca
>
> Quando a nova identidade visual é aplicada
>
> Então #50963E (RGB 80, 150, 62) é usado como cor principal em lugar do vinho e âmbar como cores principais, e textos e controles permanecem legíveis.

Status: PASSOU

## 4. Matriz de Rastreabilidade

| RNF | RF | CA |
|---|---|---|
| RNF-001 | RF-001 | CA-001 |
| RNF-001 | RF-002 | CA-002 |
| RNF-002 | RF-001 | CA-001 |
| RNF-002 | RF-003 | CA-003 |
| RNF-003 | RF-003 | CA-003 |
| RNF-004 | RF-002 | CA-002 |
| RNF-004 | RF-003 | CA-003 |

## 5. Condição de Conclusão

- [x] Todos os RF definidos
- [x] Todos os RF possuem CA
- [x] Critérios são verificáveis
- [x] Matriz completa
