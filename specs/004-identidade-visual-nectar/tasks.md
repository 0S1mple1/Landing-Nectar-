# Tasks — Identidade visual da Néctar Sorveteria

## TASK-001 — Isolar e recortar a logo enviada

Status: CONCLUIDA

Requisitos:

- RF-002

Critérios de aceite:

- CA-002

Descrição:

Preparar a versão limpa aprovada pelo usuário como um arquivo de logo com transparência. Remover o fundo verde opaco, preservando o lettering “Néctar”, o elemento gráfico, acentos e detalhes visuais presentes na imagem. Fazer recorte justo em torno da arte completa, sem cortar partes nem deixar margem excessiva.

Arquivos esperados:

- `public/images/nectar-logo.png`
- Imagem fornecida pelo usuário: `Pasted Image.png` (referência de entrada, não editar)

Dependências:

- Nenhuma

Definição de pronto:

- O arquivo PNG mantém transparência fora da marca.
- A imagem não contém o fundo verde opaco da referência.
- O lettering e o elemento gráfico permanecem íntegros e legíveis.
- O recorte acompanha os limites da marca sem cortar detalhes ou deixar excesso de margem.
- O resultado foi inspecionado visualmente sobre fundo verde uniforme.

---

## TASK-002 — Exibir a logo no cabeçalho e no hero

Status: CONCLUIDA

Requisitos:

- RF-001

Critérios de aceite:

- CA-001

Descrição:

Substituir as representações tipográficas provisórias da marca no cabeçalho e na área de destaque principal pelo arquivo transparente produzido em TASK-001. Manter proporção, dimensões apropriadas para desktop e dispositivos móveis e alternativa textual acessível.

Arquivos esperados:

- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `public/images/nectar-logo.png`

Dependências:

- TASK-001

Definição de pronto:

- Cabeçalho e hero exibem a logo fornecida.
- A representação tipográfica provisória foi removida desses pontos.
- A imagem não é distorcida nem cortada em telas móveis ou desktop.
- A logo tem texto alternativo acessível.
- O build TypeScript e Vite passa.

---

## TASK-003 — Aplicar o verde como cor principal da página

Status: CONCLUIDA

Requisitos:

- RF-003

Critérios de aceite:

- CA-003

Descrição:

Atualizar a identidade visual dos componentes existentes para usar #50963E (RGB 80, 150, 62) como cor principal em substituição aos tons de vinho e âmbar atualmente usados nessa função. Aplicar a cor de forma consistente entre cabeçalho, hero, história, serviços, avaliações, formulário e localização, mantendo fundos neutros quando necessário e assegurando contraste legível para textos, links e controles, inclusive estados de foco.

Arquivos esperados:

- `src/index.css`
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/StorySection.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/ReviewsSection.tsx`
- `src/components/ContactForm.tsx`
- `src/components/LocationSection.tsx`

Dependências:

- Nenhuma

Definição de pronto:

- #50963E é a cor principal aplicada de maneira consistente nas seções e componentes identificados.
- Vinho e âmbar não permanecem como cores principais da identidade visual.
- Textos e elementos interativos mantêm contraste legível nos estados padrão, hover e foco.
- A página permanece responsiva sem alteração funcional das seções.
- O build TypeScript e Vite passa.

---

## Matriz de Tasks

| RF | CA | Task | Status |
|---|---|---|---|
| RF-001 | CA-001 | TASK-002 | CONCLUIDA |
| RF-002 | CA-002 | TASK-001 | CONCLUIDA |
| RF-003 | CA-003 | TASK-003 | CONCLUIDA |
