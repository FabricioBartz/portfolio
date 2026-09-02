# Portfólio — Fabricio Fiss Bartz

Portfólio pessoal desenvolvido em **React + Vite**, apresentando minha trajetória, habilidades técnicas e projetos desenvolvidos como estudante de Ciência da Computação.

🔗 **Acesse online:** [fabriciobartz.github.io/portfolio](https://fabriciobartz.github.io/portfolio/)

---

## Sobre o projeto

Site pessoal desenvolvido com navegação por rotas, dividido em quatro seções: home, sobre mim, projetos e contato. Construído do zero como exercício prático de React, explorando roteamento client-side, componentização, CSS Modules e integração com uma API externa de envio de formulário.

## Funcionalidades

- **Home** — apresentação inicial com navegação rápida e links para redes sociais (GitHub, LinkedIn).
- **Sobre mim** — trajetória acadêmica e profissional, stack de tecnologias organizadas por categoria, e botão de download do currículo em PDF.
- **Projetos** — galeria dos projetos desenvolvidos, com imagem, título e link direto para cada um.
- **Contato** — formulário funcional de envio de mensagem (via [Web3Forms](https://web3forms.com/), sem necessidade de backend próprio), com opção de copiar o e-mail diretamente.

## Stack Técnica

| Camada | Tecnologia |
|---|---|
| Biblioteca UI | React 19 |
| Build tool | Vite |
| Roteamento | React Router DOM 7 |
| Estilização | CSS Modules |
| Ícones | React Icons |
| Envio de formulário | Web3Forms (API externa, sem backend próprio) |


## Estrutura do Projeto

```
meu-portfolio/
├── public/
│   └── projects/          # Imagens dos projetos exibidos na galeria
├── src/
│   ├── components/
│   │   ├── buttons/        # Componentes de botão reutilizáveis 
│   │   └── cards/           # Cards de projeto e de habilidades
│   ├── data/
│   │   └── projects.js      # Lista de projetos exibidos na página "Projetos"
│   ├── pages/
│   │   ├── Home.jsx          # Página inicial
│   │   ├── AboutMe.jsx        # Página "Sobre mim"
│   │   ├── Projects.jsx        # Galeria de projetos
│   │   └── Contact.jsx          # Formulário de contato
│   ├── App.jsx                   # Definição das rotas
│   └── main.jsx                    # Ponto de entrada da aplicação
└── vite.config.js
```
---

## Como Executar o Projeto

### Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina o [Node.js](https://nodejs.org/) (versão LTS recomendada) e o [Git](https://git-scm.com/).

---

## Contato

- GitHub: [@FabricioBartz](https://github.com/FabricioBartz)
- LinkedIn: [fabriciofissbartz](https://linkedin.com/in/fabriciofissbartz)

---

Projeto desenvolvido para fins de aprendizado e apresentação profissional.
