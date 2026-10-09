# Requisitos — Configuração do WhatsApp por variável de ambiente

## 1. Contexto

O número do WhatsApp da Néctar Sorveteria está definido diretamente no componente `src/components/ContactForm.tsx`. Ele é usado para montar o link `wa.me` submetido pelo formulário e também aparece como texto visível na seção de contato. O projeto usa React, TypeScript e Vite no frontend; atualmente `.env` está listado no `.gitignore`.

## 2. Objetivo

Definir os requisitos para que o número do WhatsApp seja configurado por variável de ambiente em vez de permanecer hardcoded no componente, mantendo consistente o número mostrado ao visitante e o destino do formulário.

## 3. Escopo

### Incluído

- Obter o número de WhatsApp usado pelo formulário a partir de configuração de ambiente compatível com Vite.
- Usar a variável `VITE_WHATSAPP_NUMBER`, contendo o número em formato internacional aceito pelo link `wa.me`, apenas com dígitos (DDI, DDD e número, sem `+`, espaços ou pontuação).
- Usar o mesmo valor configurado tanto no link de destino WhatsApp quanto no número apresentado ao visitante na seção de contato.
- Documentar como configurar a variável nos ambientes de desenvolvimento e publicação.
- Fornecer um exemplo de configuração sem exigir que o `.env` local seja versionado.
- Evitar versionar valores definidos no arquivo local `.env`.

### Não incluído

- Alterar o fluxo de preenchimento e envio do formulário, além do necessário para consumir a configuração externa.
- Introduzir backend, serviço de segredos ou integração diferente do link `wa.me`.
- Armazenar credenciais ou segredos no frontend.
- Alterar a formatação, o texto ou a aparência do número na seção de contato, além de obter seu valor da configuração.

## 4. Requisitos Não Funcionais

### RNF-001 — Segurança de configuração frontend

O valor fornecido à aplicação frontend deve ser tratado como informação pública, pois variáveis de ambiente expostas ao código cliente são incorporadas ao bundle. A variável não deve conter segredos.

### RNF-002 — Manutenibilidade

O número deve ter uma única fonte configurável e a documentação deve explicar a configuração local e a necessidade de definir a variável no ambiente de build/publicação. Um arquivo de exemplo pode ser versionado, mas o arquivo local `.env` não.

### RNF-003 — Compatibilidade técnica

A configuração deve funcionar com o mecanismo de variáveis de ambiente do Vite e continuar passando o build e a verificação TypeScript existentes.

### RNF-004 — Tratamento de configuração ausente

Quando o número não estiver configurado, o formulário não deve iniciar o redirecionamento ao WhatsApp e deve informar ao visitante que o contato está indisponível.

## 5. Restrições Técnicas

- Framework: React; linguagem: TypeScript.
- Build/dev server: Vite; variáveis acessíveis ao código cliente devem seguir as convenções Vite.
- `.env` já está ignorado pelo Git.
- O número aparece em `src/components/ContactForm.tsx` tanto no redirecionamento `wa.me` quanto como telefone visível.
- `README.md` contém as instruções atuais de execução e deverá receber instruções de configuração quando a decisão pendente for resolvida.
- O projeto não possui testes frontend identificados; `npm run build` executa verificação de tipos e build Vite.
- Esta etapa não deve alterar o código da aplicação.

## 6. Tecnologias

| Categoria | Tecnologia |
|---|---|
| Framework | React |
| Linguagem | TypeScript |
| Build e ambiente frontend | Vite |
| Estilização | Tailwind CSS |
| Testes | Não configurados |
| Validação disponível | `npm run build` |

## 7. Dúvidas

### D-001 — RESOLVIDA

Pergunta:

Qual comportamento você deseja quando a variável do número não estiver configurada: (a) impedir o uso do formulário e informar que o contato está indisponível; (b) impedir o build até que seja configurada; ou (c) manter o número atual como fallback?

Status: RESOLVIDA

Resposta:

Impedir o envio do formulário e informar que o contato está indisponível, sem usar um valor fallback.

## 8. Condição de Conclusão

- [x] Contexto definido
- [x] Objetivo definido
- [x] Escopo definido
- [x] Requisitos não funcionais definidos
- [x] Restrições identificadas
- [x] Tecnologias identificadas
- [x] Todas as dúvidas resolvidas

Dúvidas pendentes: 0
