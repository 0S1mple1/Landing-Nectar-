# Requisitos — Identidade visual da Néctar Sorveteria

## 1. Contexto

A landing page da Néctar Sorveteria já possui uma identidade visual em tons de vinho e âmbar e um logotipo tipográfico provisório. O usuário compartilhou o perfil da empresa no Google Maps e pediu para usar o verde da fachada. A imagem principal mostra a marca “Sorvetes Néctar Mauá” aplicada em um painel verde. Durante a execução, o usuário forneceu e autorizou uma versão limpa da logo contendo o lettering “Néctar”, sem as palavras “Sorvetes” e “Mauá”, como variante a ser usada na página.

## 2. Objetivo

Definir os requisitos para incorporar à landing page a logo identificada na imagem principal do Google Maps e estabelecer um tom de verde coerente com a fachada como parte da identidade visual da empresa.

## 3. Escopo

### Incluído

- Usar a versão limpa da logo “Néctar” fornecida pelo usuário na página; a foto do perfil compartilhado permanece como referência para a cor verde.
- Identificar e registrar uma estimativa reproduzível do verde predominante no painel da fachada.
- Incorporar a logo e o verde à identidade visual da landing page existente, preservando legibilidade e consistência entre as seções.
- Usar o verde como cor principal da landing page, substituindo vinho e âmbar como cores principais.

### Não incluído

- Alterar conteúdo, estrutura ou funcionalidades da landing page.
- Recriar ou redesenhar a marca além do necessário para usar a logo da imagem de referência.
- Tratar o tom estimado a partir da fotografia como especificação oficial de cor da empresa.
- Executar alterações na aplicação nesta etapa de requisitos.

## 4. Requisitos Não Funcionais

### RNF-001 — Legibilidade da marca

Descrição:

A logo deverá permanecer identificável e legível nas diferentes larguras de tela, sem distorção de proporção.

### RNF-002 — Acessibilidade e contraste

Descrição:

O uso do verde e da logo deverá manter contraste suficiente para leitura dos textos e controles, com alternativa textual apropriada para a imagem da marca.

### RNF-003 — Consistência visual

Descrição:

A identidade visual deverá usar o tom escolhido de forma consistente nas superfícies definidas para a página e conviver de maneira intencional com as cores existentes.

### RNF-004 — Fidelidade da cor de referência

Descrição:

A cor deverá ser documentada em HEX e RGB. Como foi estimada de uma fotografia sujeita a iluminação, sombras e compressão, o valor não deverá ser apresentado como padrão oficial sem validação da empresa.

## 5. Restrições Técnicas

- A referência visual fornecida é uma fotografia do painel da fachada, não um arquivo vetorial ou manual oficial de marca.
- A amostra representativa do painel verde na foto é aproximadamente **HEX #50963E / RGB (80, 150, 62)**, um verde folha médio. O valor é uma estimativa sujeita às condições da fotografia.
- A aplicação atual usa React, TypeScript, Vite e Tailwind CSS.
- A aplicação já contém cores em tons de vinho e âmbar; o verde deverá ser a cor principal, substituindo essas cores nessa função.

## 6. Tecnologias

| Categoria | Tecnologia |
|---|---|
| Framework | React 19 |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS 4 |
| Testes | Não há script de testes configurado |
| Build | Vite 6; script `npm run build` executa TypeScript e build |

## 7. Dúvidas

### D-001

Pergunta:

O verde identificado (#50963E) deve substituir vinho e âmbar como cor principal da landing page, ou deve ser usado como cor complementar, mantendo essas cores como principais?

Status: RESOLVIDA

Resposta:

Usar o verde #50963E como cor principal, substituindo vinho e âmbar como cores principais.

---

## 8. Condição de Conclusão

- [x] Contexto definido
- [x] Objetivo definido
- [x] Escopo definido
- [x] Requisitos não funcionais definidos
- [x] Restrições identificadas
- [x] Todas as dúvidas resolvidas

## Atualização durante a execução

O usuário aprovou o uso da nova imagem limpa com o lettering “Néctar”, embora ela não contenha “Sorvetes” nem “Mauá”. Essa variante substitui a exigência anterior de preservar o lettering completo da foto da fachada.

Dúvidas pendentes: 0
