Feature: Checkout em e-commerce

  Scenario: Compra completa com sucesso
    Given que acesso a página de login
    When faço login com usuário válido
    And adiciono um produto ao carrinho
    And inicio o checkout
    And preencho os dados obrigatórios do comprador
    And finalizo a compra
    Then devo visualizar a mensagem de pedido concluído

  Scenario: Login com senha inválida
    Given que acesso a página de login
    When tento login com senha inválida
    Then devo visualizar mensagem de erro no login

  Scenario: Checkout com campos obrigatórios em branco
    Given que acesso a página de login
    When faço login com usuário válido
    And adiciono um produto ao carrinho
    And inicio o checkout
    And tento continuar sem preencher os dados obrigatórios
    Then devo visualizar mensagem de erro no checkout


