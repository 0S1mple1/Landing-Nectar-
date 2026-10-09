# Tasks — Configuração do WhatsApp por variável de ambiente

## TASK-001

### Título

Definir leitura e validação tipadas da variável de WhatsApp

### Status

CONCLUIDA

### Requisitos

- RF-001
- RF-002
- RF-003

### Critérios de aceite

- CA-002
- CA-003
- CA-004
- CA-007

### Descrição

Criar uma fonte central tipada para ler `VITE_WHATSAPP_NUMBER` segundo as convenções Vite e determinar se o valor está configurado e contém somente dígitos. Não incluir número padrão nem substituir configuração inválida por valor de fallback.

### Arquivos esperados

- `src/vite-env.d.ts`
- `src/config/whatsapp.ts`

### Dependências

- Nenhuma.

### Definição de pronto

- O acesso à variável é tipado para TypeScript.
- A configuração expõe o número somente quando ele é não vazio e contém apenas dígitos; caso contrário, a configuração é considerada indisponível.
- Não existe número fixo de fallback.
- `npm run build` passa.

## TASK-002

### Título

Consumir a configuração no formulário de contato

### Status

CONCLUIDA

### Requisitos

- RF-001
- RF-002
- RF-003

### Critérios de aceite

- CA-001
- CA-002
- CA-003
- CA-004
- CA-007

### Descrição

Atualizar o formulário para usar a configuração centralizada no destino `wa.me` e no telefone visível. Quando a configuração estiver ausente ou inválida, impedir o redirecionamento e apresentar uma mensagem acessível informando que o contato está indisponível. Preservar a validação existente dos campos e a mensagem pré-preenchida.

### Arquivos esperados

- `src/components/ContactForm.tsx`
- `src/config/whatsapp.ts`

### Dependências

- TASK-001 — Definir leitura e validação tipadas da variável de WhatsApp.

### Definição de pronto

- Número visível e link `wa.me` derivam da mesma variável configurada.
- O valor do link contém somente o número validado e a mensagem codificada.
- Número vazio, ausente ou inválido não causa redirecionamento nem usa fallback.
- O estado indisponível é anunciado de forma acessível ao visitante.
- `npm run build` passa.

## TASK-003

### Título

Documentar configuração local e de publicação

### Status

CONCLUIDA

### Requisitos

- RF-004

### Critérios de aceite

- CA-005
- CA-006
- CA-007

### Descrição

Adicionar um exemplo versionável da variável de ambiente sem número real, documentar no README como definir `VITE_WHATSAPP_NUMBER` localmente e no ambiente de build/publicação, seu formato internacional em dígitos e que, por ser uma variável de frontend, o valor fica público no bundle e não deve conter segredos. Confirmar que `.env` local permanece ignorado pelo Git.

### Arquivos esperados

- `.env.example`
- `README.md`
- `.gitignore` (somente se ajustes forem necessários para manter `.env` local ignorado sem ignorar o exemplo)

### Dependências

- TASK-001 — Definir leitura e validação tipadas da variável de WhatsApp.

### Definição de pronto

- `.env.example` descreve `VITE_WHATSAPP_NUMBER` sem incluir o número real do estabelecimento.
- README explica configuração local, configuração no ambiente de build/publicação, formato aceito e exposição pública da variável frontend.
- O arquivo `.env` local continua ignorado e o arquivo de exemplo pode ser versionado.
- `npm run build` passa.
