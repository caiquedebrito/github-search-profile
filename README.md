# GitHub Profile Search - React Application

Este projeto tem como objetivo desenvolver uma aplicação em React que permite buscar perfis do GitHub e exibir informações detalhadas do usuário conforme um layout previamente definido no Figma.

[Acesse a aplicação aqui 👆](https://github-search-profile-sigma.vercel.app/)

## 📝 Objetivo

O objetivo é criar uma aplicação que faça a busca de perfis no GitHub e exiba as seguintes informações do usuário:

- Nome do usuário
- Foto de perfil
- Bio do usuário

Além disso, a aplicação deve lidar com erros e exibir mensagens quando o perfil não for encontrado.

## 🔗 Layout no Figma

O layout para a interface do usuário foi projetado no Figma. Você pode acessar o layout clicando [aqui](https://www.figma.com/proto/DqtFxC6312M32mLt8FpJjq/inovation-class?page-id=22%3A2864&node-id=22-4293&viewport=359%2C115%2C0.25&t=SHsEqEgaMrXGMKwv-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=22%3A4293&show-proto-sidebar=1).

## ✅ Requisitos

### Funcionalidades

1. **Campo de Busca**
   - Campo de entrada para o usuário digitar o nome de um perfil do GitHub.
   
2. **Exibição de Informações**
   - Ao clicar no botão de busca, a aplicação fazr uma requisição para a API do GitHub e exibir as seguintes informações do perfil:
     - Nome do usuário
     - Foto de perfil
     - Bio

3. **Tratamento de Erros**
   - Exibi mensagens de erro claras caso o perfil do GitHub não seja encontrado.

4. **Estilização**
   - A aplicação segue o layout do Figma mencionado acima. Foi utilizado Tailwind CSS para estilizar a aplicação.

5. **Efeitos Visuais e Loading**
   - Para melhorar a experiência do usuário foi adicionado um indicador de carregamento enquanto a requisição está sendo processada.

6. **Dark mode**
   - Adição dos temas light e dark na interface da aplicação

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **GitHub API**: Para buscar as informações dos perfis dos usuários.
- **CSS Framework**: Utilização do Tailwind para a estilização da aplicação.

## ⚙️ Como Rodar o Projeto

1. **Clonar o Repositório**
   Clone o repositório do projeto para sua máquina local:

   ```bash
   git clone https://github.com/caiquedebrito/github-profile-search.git
   cd github-profile-search

2. **Instalação das dependências**
    ```
    npm i
    ```

3. **Execução da aplicação**
    ```
    npm run dev
    ```

4. **Acessando a aplicação**
  No navegador acesse `http://localhost:5173/`

## 📸 Preview

![Image](https://github.com/user-attachments/assets/12888233-9bc0-467c-8c9a-926e92cdac06)

![Image](https://github.com/user-attachments/assets/1af98b5c-402c-43d4-a223-3e24c14397aa)
