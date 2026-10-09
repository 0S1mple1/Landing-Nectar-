# Plano — Configuração do WhatsApp por variável de ambiente

## 1. Requisitos Funcionais

### RF-001 — Número de WhatsApp configurável

Descrição:

A aplicação deve obter o número de contato da variável `VITE_WHATSAPP_NUMBER`, sem manter um número fixo no componente. O mesmo valor deve ser usado no destino `wa.me` e na informação de telefone exibida na seção de contato.

Origem:

- Objetivo e escopo definidos em `req.md`
- RNF-001 — Segurança de configuração frontend
- RNF-002 — Manutenibilidade
- RNF-003 — Compatibilidade técnica

### RF-002 — Formato válido para o número configurado

Descrição:

O número deve ser aceito apenas quando estiver configurado em formato internacional com dígitos somente, sem `+`, espaços ou pontuação. Um valor inválido não deve produzir link de WhatsApp.

Origem:

- Escopo definido em `req.md`
- RNF-003 — Compatibilidade técnica
- RNF-004 — Tratamento de configuração ausente

### RF-003 — Contato indisponível sem configuração válida

Descrição:

Quando `VITE_WHATSAPP_NUMBER` estiver ausente, vazia ou inválida, o formulário não deve redirecionar para um número padrão ou inválido e deve informar ao visitante que o contato está indisponível.

Origem:

- D-001 resolvida em `req.md`
- RNF-004 — Tratamento de configuração ausente

### RF-004 — Instruções de configuração documentadas

Descrição:

A documentação do projeto deve explicar como configurar `VITE_WHATSAPP_NUMBER` no ambiente local e no ambiente de build/publicação, esclarecer que o valor estará disponível no frontend e não deve ser considerado secreto, e oferecer exemplo sem versionar o `.env` local.

Origem:

- Escopo definido em `req.md`
- RNF-001 — Segurança de configuração frontend
- RNF-002 — Manutenibilidade

## 2. Critérios de Aceite

### CA-001 — Destino e telefone usam a variável

Relacionado a:

- RF-001

Dado:

Que `VITE_WHATSAPP_NUMBER` está configurada com um valor válido

Quando:

O visitante consulta o telefone e submete o formulário preenchido

Então:

O telefone apresentado corresponde à configuração e o link `wa.me` usa o mesmo número, incluindo a mensagem codificada do formulário.

### CA-002 — Número válido segue o formato exigido

Relacionado a:

- RF-002

Dado:

Que o número configurado contém somente dígitos e inclui DDI, DDD e número

Quando:

A configuração é consumida pela aplicação

Então:

O número é aceito como destino do WhatsApp sem acrescentar pontuação ao valor usado no link.

### CA-003 — Formato inválido é rejeitado

Relacionado a:

- RF-002

Dado:

Que `VITE_WHATSAPP_NUMBER` contém espaços, sinal de `+`, pontuação ou caracteres não numéricos

Quando:

O visitante tenta enviar o formulário

Então:

O site não redireciona para `wa.me` com esse valor e informa que o contato está indisponível.

### CA-004 — Variável ausente ou vazia

Relacionado a:

- RF-003

Dado:

Que `VITE_WHATSAPP_NUMBER` está ausente ou vazia

Quando:

O visitante tenta enviar o formulário

Então:

O envio não redireciona para um destino padrão ou inválido, e a interface informa que o contato está indisponível.

### CA-005 — Configuração local e publicação documentadas

Relacionado a:

- RF-004

Dado:

Que uma pessoa desenvolvedora prepara o projeto para execução local ou publicação

Quando:

Consulta o README e o arquivo de exemplo de configuração

Então:

Encontra o nome da variável, o formato esperado, como definir o valor localmente e no ambiente de build/publicação, e o aviso de que a variável frontend é pública e não deve guardar segredos.

### CA-006 — `.env` local não é versionado

Relacionado a:

- RF-004

Dado:

Que a pessoa desenvolvedora define a variável em `.env`

Quando:

Confere as regras de versionamento do projeto

Então:

O `.env` local permanece ignorado, enquanto um exemplo sem número real pode ser incluído no repositório.

### CA-007 — Build compatível

Relacionado a:

- RF-001
- RF-002
- RF-003
- RF-004

Dado:

Que as alterações da funcionalidade estão implementadas

Quando:

O comando `npm run build` é executado

Então:

A verificação TypeScript e o build de produção do Vite terminam sem erros.

## 3. Matriz de Rastreabilidade

| RNF | RF | CA |
|---|---|---|
| RNF-001 — Segurança de configuração frontend | RF-001 | CA-001 |
| RNF-001 — Segurança de configuração frontend | RF-004 | CA-005 |
| RNF-002 — Manutenibilidade | RF-001 | CA-001 |
| RNF-002 — Manutenibilidade | RF-004 | CA-005, CA-006 |
| RNF-003 — Compatibilidade técnica | RF-001 | CA-001, CA-007 |
| RNF-003 — Compatibilidade técnica | RF-002 | CA-002, CA-003, CA-007 |
| RNF-003 — Compatibilidade técnica | RF-003 | CA-004, CA-007 |
| RNF-004 — Tratamento de configuração ausente | RF-002 | CA-003 |
| RNF-004 — Tratamento de configuração ausente | RF-003 | CA-004 |

## 4. Condição de Conclusão

- [x] Todos os RF definidos
- [x] Todos os RF possuem ao menos um CA
- [x] Critérios objetivos e verificáveis
- [x] Matriz de rastreabilidade completa
