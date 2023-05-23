Feature: Cadastrar

  Como usuario de acessar o sistema para realizar meu cadastro pessoal

  @focus
  Scenario: Cadastro de usuário
    Given que acesso o site Tinnova
    And clico no button Entrar
    And clico no button Adicionar
    When preencho minhas informaoes
    Then meu cadastro e realizar com sucesso
    And clico no button Guarda


