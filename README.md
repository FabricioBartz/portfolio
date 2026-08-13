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
| Estilização | CSS Modules + Tailwind CSS 4 |
| Ícones | React Icons |
| Envio de formulário | Web3Forms (API externa, sem backend próprio) |
| Lint | oxlint |

## Estrutura do Projeto

```
meu-portfolio/
├── public/
│   └── projects/          # Imagens dos projetos exibidos na galeria
├── src/
│   ├── components/
│   │   ├── buttons/        # Componentes de botão reutilizáveis (ex: BackArrow)
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

## Rodando o Projeto Localmente

### Pré-requisitos
- Node.js 18+ instalado
- Uma chave de acesso gratuita do [Web3Forms](https://web3forms.com/) (necessária para o formulário de contato funcionar)

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/FabricioBartz/meu-portfolio.git
cd meu-portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com sua chave do Web3Forms:
```
VITE_WEB3FORMS_ACCESS_KEY=sua_chave_aqui
```
> Esse arquivo já está no `.gitignore` e nunca deve ser commitado — cada pessoa que rodar o projeto usa sua própria chave.

4. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse `http://localhost:5173` no navegador.

### Build de produção

```bash
npm run build
```
Gera os arquivos estáticos otimizados na pasta `dist/`, prontos para hospedagem (ex: GitHub Pages, Vercel, Netlify).

> **Atenção ao publicar:** como o Vite "compila" a variável `VITE_WEB3FORMS_ACCESS_KEY` dentro dos arquivos finais no momento do `build`, ela precisa estar disponível **durante o processo de build** (não só localmente) — por exemplo, como *secret* configurado no GitHub Actions, se você automatizar o deploy para o GitHub Pages.

---

## Contato

- GitHub: [@FabricioBartz](https://github.com/FabricioBartz)
- LinkedIn: [fabriciofissbartz](https://linkedin.com/in/fabriciofissbartz)

---

Projeto desenvolvido para fins de aprendizado e apresentação profissional.
