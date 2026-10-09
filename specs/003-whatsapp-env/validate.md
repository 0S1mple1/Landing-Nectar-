# Validação — Configuração do WhatsApp por variável de ambiente

## Resultado

APROVADO

## Resumo

Todos os 7 critérios de aceite passaram. O build TypeScript/Vite passou com variável ausente e com número válido; o build final sem variável não contém o número de teste. Comportamentos de configuração válida, inválida, ausente e vazia foram verificados em servidores Vite com ambientes isolados. A documentação e as regras Git também foram conferidas.

## Validação individual

### CA-001 — Destino e telefone usam a variável

Relacionado a:

- RF-001

Comportamento esperado:

O telefone exibido corresponde ao valor configurado e o formulário envia para `wa.me` usando o mesmo número e a mensagem codificada.

Comportamento encontrado:

Com `VITE_WHATSAPP_NUMBER=5511999998888`, a seção exibiu `5511999998888`. Após preencher e enviar o formulário, o navegador tentou navegar para `https://wa.me/5511999998888?text=Ol%C3%A1!%20Meu%20nome%20%C3%A9%20Teste.%0A%0AOl%C3%A1`, confirmando o mesmo número e a mensagem codificada.

Evidência:

- Vite dev server na porta 5175 iniciado com número de teste válido.
- Snapshot da seção `#contato` exibiu o número configurado.
- Evento de navegação do navegador confirmou o destino `wa.me` e a mensagem.

Resultado: PASSOU

### CA-002 — Número válido segue o formato exigido

Relacionado a:

- RF-002

Comportamento esperado:

Uma configuração contendo DDI, DDD e número, formada somente por dígitos, é aceita sem pontuação no destino WhatsApp.

Comportamento encontrado:

O número de teste `5511999998888` foi aceito, exibido sem pontuação e usado sem alteração no caminho do link `wa.me`.

Evidência:

- Vite dev server com valor válido; exibição e requisição observadas no navegador.
- Build com variável válida concluído com sucesso.

Resultado: PASSOU

### CA-003 — Formato inválido é rejeitado

Relacionado a:

- RF-002

Comportamento esperado:

Uma variável com caracteres não numéricos não deve gerar redirecionamento e deve informar indisponibilidade.

Comportamento encontrado:

Com `VITE_WHATSAPP_NUMBER=abc`, o contato exibido indicou indisponibilidade. Após preencher e enviar o formulário, o alerta “O contato pelo WhatsApp está indisponível no momento.” foi apresentado e a URL permaneceu na seção `#contato`.

Evidência:

- Vite dev server na porta 5174 iniciado com valor inválido.
- Navegador confirmou alerta e permanência em `http://127.0.0.1:5174/#contato`.

Resultado: PASSOU

### CA-004 — Variável ausente ou vazia

Relacionado a:

- RF-003

Comportamento esperado:

Sem configuração, ou com valor vazio, o formulário não deve redirecionar para um destino padrão e deve informar indisponibilidade.

Comportamento encontrado:

Nos casos sem variável e com `VITE_WHATSAPP_NUMBER` vazia, o número foi substituído pelo texto de indisponibilidade; ao enviar, o alerta acessível apareceu e a URL permaneceu na seção de contato.

Evidência:

- Vite dev server na porta 5176 sem variável: texto e alerta de indisponibilidade; sem navegação.
- Vite dev server na porta 5177 com variável vazia: mesmo texto e alerta; sem navegação.

Resultado: PASSOU

### CA-005 — Configuração local e publicação documentadas

Relacionado a:

- RF-004

Comportamento esperado:

README e arquivo de exemplo explicam variável, formato, configuração local e no build/publicação, além do fato de que variáveis `VITE_` são públicas.

Comportamento encontrado:

`.env.example` contém a chave `VITE_WHATSAPP_NUMBER` com valor vazio. O README explica copiar o exemplo para `.env`, preencher somente dígitos em formato internacional, definir a variável no ambiente de build antes de gerar o bundle e não usar segredos nessa variável pública.

Evidência:

- `.env.example`: chave documentada sem número real.
- `README.md`: instruções nas seções “Como executar” e “Publicação”.

Resultado: PASSOU

### CA-006 — `.env` local não é versionado

Relacionado a:

- RF-004

Comportamento esperado:

O arquivo `.env` local deve ser ignorado e `.env.example` deve permanecer versionável.

Comportamento encontrado:

`git check-ignore .env` identificou `.env` como ignorado; `.env.example` não foi ignorado.

Evidência:

- Saída do Git: `.env`.
- Checagem explícita: `.env.example is not ignored`.

Resultado: PASSOU

### CA-007 — Build compatível

Relacionado a:

- RF-001
- RF-002
- RF-003
- RF-004

Comportamento esperado:

`npm run build` deve concluir a checagem TypeScript e o build Vite sem erros.

Comportamento encontrado:

O build concluiu com sucesso sem variável e com número válido. Ao final, o build foi repetido sem variável para remover o valor de teste dos artefatos em `dist/`; uma busca no bundle confirmou que o número de teste não ficou presente.

Evidência:

- `env -u VITE_WHATSAPP_NUMBER npm run build`: passou.
- `VITE_WHATSAPP_NUMBER=5511999998888 npm run build`: passou.
- Build final sem variável: passou.
- Busca pelo número de teste nos bundles finais: nenhum resultado.

Resultado: PASSOU

## Critérios falhos

Nenhum.

## Matriz final

| Critério | Resultado |
|---|---|
| CA-001 | PASSOU |
| CA-002 | PASSOU |
| CA-003 | PASSOU |
| CA-004 | PASSOU |
| CA-005 | PASSOU |
| CA-006 | PASSOU |
| CA-007 | PASSOU |

Total: 7/7 passaram; 0 falhos; 0 bloqueados.
