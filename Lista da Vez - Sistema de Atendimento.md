# Lista da Vez - Sistema de Atendimento

Sistema web para gerenciamento de lista da vez de vendedores, com funcionalidades de drag and drop e painel administrativo.

## 🚀 Deploy

**URL da Aplicação:** https://snriavui.manus.space

## 📋 Funcionalidades

### Interface Principal
- ✅ Lista da vez com três colunas (Lista de espera, Em serviço, Fora da loja)
- ✅ Cards dos vendedores com avatares e informações
- ✅ Sistema de drag and drop entre colunas
- ✅ Menu de contexto para mudança de status
- ✅ Controle de tempo de atendimento
- ✅ Navegação com abas (Lista da Vez, Campanhas, Rankings)

### Painel Administrativo
- ✅ Sistema de autenticação
- ✅ Gerenciamento completo de vendedores
- ✅ Funcionalidades de adicionar, editar e excluir
- ✅ Sistema de upload de fotos
- ✅ Tabela com informações dos vendedores

## 🔐 Credenciais de Acesso

**Painel Administrativo:**
- Usuário: `admin`
- Senha: `admin123`

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones
- **@hello-pangea/dnd** - Drag and drop
- **Framer Motion** - Animações

## 🏗️ Estrutura do Projeto

```
lista-da-vez/
├── src/
│   ├── components/
│   │   ├── ui/          # Componentes shadcn/ui
│   │   ├── AdminLogin.jsx
│   │   └── AdminPanel.jsx
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos globais
│   └── main.jsx         # Entry point
├── public/              # Arquivos estáticos
└── dist/               # Build de produção
```

## 🚀 Como Usar

### Interface Principal
1. Acesse a aplicação em https://snriavui.manus.space
2. Visualize os vendedores organizados por status
3. Arraste e solte vendedores entre as colunas para alterar status
4. Use o menu de contexto (três pontos) para mudanças rápidas de status

### Painel Administrativo
1. Clique no ícone de escudo no cabeçalho
2. Faça login com as credenciais: admin/admin123
3. Gerencie vendedores:
   - **Adicionar:** Clique em "Adicionar Vendedor"
   - **Editar:** Use o menu de ações na tabela
   - **Excluir:** Use o menu de ações na tabela
   - **Upload de foto:** Disponível ao adicionar/editar

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- 💻 Desktop
- 📱 Tablet
- 📱 Mobile

## 🎨 Design

Interface moderna e profissional com:
- Design limpo e intuitivo
- Cores organizadas por status
- Transições suaves
- Feedback visual para interações
- Componentes acessíveis

## ⚡ Performance

- Build otimizado com Vite
- Componentes lazy-loaded
- CSS otimizado com Tailwind
- Imagens otimizadas

## 🔄 Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm run dev

# Build para produção
pnpm run build
```

## 📄 Licença

Este projeto foi desenvolvido para demonstração das funcionalidades solicitadas.

---

**Desenvolvido com ❤️ usando React e tecnologias modernas**

