# Automação de Testes End-to-End com Cypress - SauceDemo

Este é um projeto de automação de testes end-to-end utilizando **Cypress**. Nele, eu utilizei o padrão **Page Object Model (POM)** para estruturar testes claros, reutilizáveis e fáceis de manter.

Os cenários foram criados com base na aplicação **[SauceDemo](https://www.saucedemo.com/)**, simulando fluxos reais de login, busca de produtos e checkout/finalização da compra.

---

### Pré-requisitos

Necessário ter instalado:

- **Node.js** (versão recomendada: 22.x ou superior)  
- **npm** (versão recomendada: 11.x ou superior)

### Instalação de dependências

- No terminal, executar `npm install` ou `npm i` para instalar as dependências.

### Execução dos testes

#### Versão interativa

- `npm run cyopen`: Abre o Cypress App, permitindo acompanhar a execução dos testes via interface gráfica

#### Versão headless (recomendada para pipelines CI/CD):

- `npm run cytest`: Executa todas as `specs` do projeto em modo headless