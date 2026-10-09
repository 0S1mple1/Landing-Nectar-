# Requisitos — Avaliações de clientes

## 1. Contexto

A landing page da Néctar Sorveteria já possui uma seção de avaliações acessível pela navegação principal. No momento, essa seção exibe uma mensagem de estado vazio. O conteúdo das avaliações é mantido em dados estáticos no projeto, sem integração automática com plataformas externas.

## 2. Objetivo

Definir os requisitos para apresentar a média geral de 4,3 estrelas e 143 avaliações no total, além de três avaliações fornecidas pela empresa com nota, nome e comentário.

## 3. Escopo

### Incluído

- Exibir na seção Avaliações a média geral de 4,3 estrelas e o total de 143 avaliações.
- Exibir três cards de avaliações, cada qual com nota em estrelas, nome da pessoa e comentário.
- Usar os dados informados pela empresa:

| Nota | Nome | Comentário |
|---|---|---|
| 5 estrelas | Maria Aparecida Rodrigues | Atendimento notal mil. |
| 5 estrelas | `Diogo da silva  reis` | Excelente sorveteria, muito boa mesmo. É tradicional e muito antiga. Já fui na época da escola, há 16 anos. Qualidade máxima! |
| 5 estrelas | Adriana dias rodrigues ribeiro | Sorvetes variados e saborosos! Preços acessíveis em opções de embalagens de 5 e 10 litros. Experimente o sabor ninho trufado e você irá se surpreender! |
- Manter a seção alcançável pelo link Avaliações da navegação existente.

### Não incluído

- Integração, sincronização ou coleta automática de avaliações em plataformas externas.
- Painel administrativo, backend ou armazenamento dinâmico de avaliações.
- Exibir as 143 avaliações individualmente; somente os três comentários fornecidos fazem parte deste escopo.

## 4. Requisitos Não Funcionais

### RNF-001 — Responsividade

O resumo da nota e os cards devem permanecer legíveis e utilizáveis em dispositivos móveis e desktops, sem causar rolagem horizontal da página.

### RNF-002 — Acessibilidade

As notas devem ser compreensíveis por tecnologias assistivas, e a estrutura semântica dos cards deve associar cada comentário à respectiva autoria e avaliação.

### RNF-003 — Consistência visual

A seção deve preservar os padrões visuais e de espaçamento já usados na landing page.

### RNF-004 — Manutenibilidade

O resumo e as avaliações devem permanecer editáveis como conteúdo estático no projeto, sem dependência de serviços externos.

## 5. Restrições Técnicas

- A aplicação existente usa React, TypeScript e Tailwind CSS.
- A seção está implementada em `src/components/ReviewsSection.tsx`; os dados e o tipo de avaliação estão em `src/data/reviews.ts`.
- A definição atual de avaliação contém autoria e comentário, mas ainda não contém nota.
- Não foram encontrados arquivos de testes frontend no projeto; o script `build` executa TypeScript e Vite.
- Esta etapa não deve alterar o código da aplicação.

## 6. Tecnologias

| Categoria | Tecnologia |
|---|---|
| Framework | React |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS |
| Build e verificação de tipos | Vite e TypeScript (`npm run build`) |
| Testes | Não configurados |

## 7. Dúvidas

### D-001 — RESOLVIDA

Pergunta:

No primeiro comentário, você escreveu “Atendimento notal mil.”. Deseja manter exatamente esse texto ou corrigir para “Atendimento nota mil.”?

Status: RESOLVIDA

Resposta:

Manter exatamente “Atendimento notal mil.”.

## 8. Condição de Conclusão

- [x] Contexto definido
- [x] Objetivo definido
- [x] Escopo definido
- [x] Requisitos não funcionais relevantes definidos
- [x] Restrições técnicas identificadas
- [x] Tecnologias identificadas
- [x] Todas as dúvidas resolvidas

Dúvidas pendentes: 0
