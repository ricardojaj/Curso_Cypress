Funcionalidade: Cadastro no site Adopet

Cenario 1: Realizar um cadastro no site com sucesso

Passos:

O usuario acessa a página de cadastro.
O usuario preenche o campo "Nome".
O usuario preenche o campo "E-mail" com endereço de e-mail válido.
O usuario preenche o campo "Senha" com uma senha válida.
O usuario preenche o campo "Confirmacao de Senha" com a mesma senha inserida no passo anterior.
O usuario clica no botão cadastrar.

Resultado esperados:
O sistema processa as informações fornecidas.

Regra de negocio:
Email e senha

Cenario 2: Falha na tentativa de cadastro

Passos:

O usuario acessa a pagina de cadastro.
O usuario deixa os campos obrigatorios (nome, email, senha e confirmação de senha) em branco.
O usuario clica no botão "Cadastrar"

Resultados Esperados:

O sistema valida os campos obrigatorios em branco.
O sistema exibe mensagens de erro indicando que os campos obrigatorios devem ser preenchidos.

Cenario 3: Login no sistema com sucesso

Passos:

O usuario acessa a pagina de login
O usuario insere seu email "ana@email.com" e senha "Senha123" nos campos correspondentes.
O usuario clica no botão "Entrar"

Resultados Esperados:

O sistema autentica as credenciais fornecidas.
O sistema redireciona o usuario para a pagina "/home"

Cenário 4: Falha no login do sistema

Passos:

O usuário acessa a página de login.
O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
O usuário clica no botão "Entrar".
Resultados Esperados:

O sistema valida as credenciais fornecidas.
O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".
