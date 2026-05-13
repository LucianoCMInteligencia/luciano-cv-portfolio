# 🛠 Guía de Configuración Local para Desarrollo

Esta guía te ayuda a configurar el proyecto en tu máquina para desarrollo.

## 📋 Requisitos Previos

### Windows

```powershell
# Verificar versiones instaladas
node --version      # v20 o superior
pnpm --version      # v10.4.1 o superior (opcional, usa npm si no lo tienes)
git --version       # Cualquier versión reciente
```

**Descargar:**
- [Node.js LTS](https://nodejs.org/) - Incluye npm
- [Git for Windows](https://git-scm.com/download/win)
- [pnpm](https://pnpm.io/installation) - Opcional pero recomendado

## 📦 Instalación del Proyecto

### 1. Clonar el Repositorio

```bash
# Usando HTTPS
git clone https://github.com/tuusuario/luciano-cv-portfolio.git
cd luciano-cv-portfolio

# O usando SSH (si tienes configuradas las claves)
git clone git@github.com:tuusuario/luciano-cv-portfolio.git
cd luciano-cv-portfolio
```

### 2. Instalar Dependencias

**Con pnpm (Recomendado):**
```bash
pnpm install
```

**Con npm:**
```bash
npm install
```

## 🚀 Iniciar Desarrollo

### Modo Desarrollo

```bash
# Con pnpm
pnpm dev

# Con npm
npm run dev
```

Accede a: http://localhost:5173

### Servidor Express en Paralelo (Producción)

En otra terminal:

```bash
# Primero hacer build
pnpm build

# Luego iniciar servidor
NODE_ENV=production pnpm start

# Accede a: http://localhost:3000
```

## 🔍 Otros Comandos

```bash
# Verificar tipos TypeScript
pnpm check

# Formatear código
pnpm format

# Ver cambios sin formatear
pnpm format --check

# Build para producción
pnpm build

# Ver bundle en local
pnpm preview

# Limpiar cache
rm -r dist node_modules
pnpm install
```

## 📁 Estructura del Workspace

```
curriculum/
├── client/           # Frontend React (Puerto 5173)
│   ├── src/         # Código fuente
│   ├── public/      # Assets estáticos
│   └── index.html   # HTML entry point
├── server/          # Backend Express (Puerto 3000)
│   └── index.ts     # Servidor Node.js
├── shared/          # Código compartido
├── pnpm-lock.yaml   # Lock file de dependencias
├── tsconfig.json    # Config TypeScript
├── vite.config.ts   # Config Vite
└── package.json     # Dependencias y scripts
```

## 🎨 Desarrollo del Frontend

### Agregar un Componente

1. Crear archivo en `client/src/components/`

```typescript
// client/src/components/MyComponent.tsx
interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return <div className="p-4">{title}</div>;
};

export default MyComponent;
```

2. Importar y usar:

```typescript
// client/src/pages/Home.tsx
import MyComponent from "@/components/MyComponent";

export default function Home() {
  return <MyComponent title="Mi Componente" />;
}
```

### Agregar Estilos

El proyecto usa Tailwind CSS:

```typescript
<div className="p-4 bg-blue-500 text-white rounded-lg">
  Texto estilizado
</div>
```

### Usar Context (Tema Oscuro)

```typescript
import { useTheme } from "@/contexts/ThemeContext";

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Tema actual: {theme}
    </button>
  );
}
```

## 🔧 Desarrollo del Backend

### Agregar Ruta Express

Edita `server/index.ts`:

```typescript
app.get("/api/data", (_req, res) => {
  res.json({ message: "Hello from Express!" });
});
```

### Variables de Entorno

Crea `.env`:

```
NODE_ENV=development
PORT=3000
```

Usar en código:

```typescript
const port = process.env.PORT || 3000;
```

## 🐛 Debugging

### VS Code Debugging

Crea `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/server/index.ts",
      "preLaunchTask": "tsc: build - tsconfig.json"
    }
  ]
}
```

### Console Logs

```typescript
// Frontend
console.log("Debug:", variable);

// Backend
console.log("Server log:", variable);
```

## 📊 Verificaciones de Calidad

```bash
# Todo-in-one check
pnpm check && pnpm format && npm run build

# O individualmente
pnpm check       # TypeScript
pnpm format      # Prettier
pnpm build       # Build completo
```

## 🚀 Antes de Hacer Push

1. Verificar tipos: `pnpm check`
2. Formatear: `pnpm format`
3. Hacer build: `pnpm build`
4. Probar en local: `NODE_ENV=production pnpm start`
5. Commit: `git commit -m "feat: descripción"`
6. Push: `git push origin main`

## 🆘 Problemas Comunes

### "Module not found" error

```bash
# Limpiar e reinstalar
rm -rf node_modules
pnpm install
```

### TypeScript errors

```bash
# Actualizar tipos
pnpm install --save-dev @types/node @types/react @types/react-dom

# Verificar
pnpm check
```

### Puerto ocupado

```bash
# Cambiar puerto en vite.config.ts o package.json
PORT=5174 pnpm dev
```

### Build falla

```bash
# Verificar y limpiar
pnpm check
pnpm format
rm -rf dist
pnpm build
```

## 📚 Recursos

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide)
- [Express.js Docs](https://expressjs.com)
- [Git Basics](https://git-scm.com/book/en/v2)

## 💡 Tips para Productividad

1. **VS Code Extensions:**
   - ES7+ React/Redux/React-Native snippets
   - Prettier - Code formatter
   - Tailwind CSS IntelliSense

2. **Atajos útiles:**
   - `Ctrl+Shift+P`: Command Palette
   - `Ctrl+F5`: Reload window
   - `F12`: Developer Tools

3. **Git Workflow:**
   ```bash
   git checkout -b feature/mi-feature
   # Hacer cambios
   git add .
   git commit -m "feat: descripción"
   git push origin feature/mi-feature
   # Crear PR en GitHub
   ```

---

**¡Listo para desarrollar!** Si tienes dudas, consulta la documentación o crea un issue.
