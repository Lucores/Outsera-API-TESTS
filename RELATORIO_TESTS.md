Relatório de Testes

**Automatizar e validar o fluxo de checkout em um e-commerce, cobrindo cenários positivos e negativos.

- Cypress
- Cucumber (BDD)
- JavaScript



Cenários

Cenários positivos:
- Login com usuário válido
- Adição de produto ao carrinho
- Checkout completo com sucesso

Cenários negativos:
- Login com senha inválida
- Checkout com campos obrigatórios em branco

---

Resultado

| Cenário | Resultado |
|--------|----------|
| Login válido | Sucesso |
| Checkout completo | Sucesso |
| Login inválido | Falha esperada |
| Checkout incompleto | Falha esperada |

---

Evidências

- Screenshots disponíveis em: `cypress/screenshots`
- Vídeos disponíveis em: `cypress/videos`

---

#Observações
Os testes foram estruturados utilizando boas práticas, com separação entre cenários e steps, garantindo clareza e manutenção.

---

#Conclusão
Os testes validam corretamente os fluxos críticos da aplicação, cobrindo comportamentos esperados e falhas previstas.


## Evidências de Execução

### Testes de API

- Execução realizada com sucesso
- Total de testes: 7
- Status: Todos passaram

Vídeo da execução:
- cypress/videos/posts.cy.js.mp4

---

### Testes E2E (Checkout)

#### Cenário: Checkout com sucesso
- Resultado: Passou
 Vídeo:
- cypress/videos/checkout.feature.mp4

Screenshot:
- cypress/screenshots/checkout/checkout-completo-sucesso.png

---

#### Cenário: Campos obrigatórios em branco
- Resultado: Falha esperada (validação correta)

Screenshot:
- cypress/screenshots/checkout/checkout-campos-obrigatorios.png

---

## Observações

- Os vídeos são gerados automaticamente pelo Cypress
- Screenshots foram capturados para validação de cenários críticos
- Testes negativos foram tratados como sucesso quando a validação esperada ocorreu

