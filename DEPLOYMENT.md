# Guía de Deployment

Esta guía explica cómo desplegar el portafolio a producción.

## 📋 Opciones de Deployment

### 1. Vercel (Recomendado)

**Ventajas:**
- Deployment automático desde GitHub
- HTTPS gratuito
- CDN global
- Muy fácil de configurar

**Pasos:**

1. Ir a [vercel.com](https://vercel.com)
2. Conectar tu cuenta de GitHub
3. Importar el repositorio
4. Configurar variables de entorno si es necesario
5. ¡Listo! Vercel desplegará automáticamente

### 2. Netlify

**Pasos:**

1. Ir a [netlify.com](https://netlify.com)
2. Conectar tu repositorio de GitHub
3. Configurar:
   - Build command: `pnpm build`
   - Publish directory: `dist`
4. Hacer push a main para deployar

### 3. Railway.app

**Pasos:**

1. Ir a [railway.app](https://railway.app)
2. Crear nuevo proyecto
3. Conectar repositorio GitHub
4. Configurar variables:
   - `NODE_ENV`: production
5. Railway detectará automáticamente y desplegará

### 4. Heroku (Legacy pero funciona)

```bash
# Instalar CLI de Heroku
npm install -g heroku

# Login
heroku login

# Crear app
heroku create tu-app-name

# Desplegar
git push heroku main
```

### 5. VPS Manual (DigitalOcean, Linode, etc.)

1. Crear instancia con Node.js
2. Clonar repositorio
3. Instalar dependencias: `pnpm install`
4. Build: `pnpm build`
5. Usar PM2 o supervisor para mantener servidor activo

```bash
# Ejemplo con PM2
npm install -g pm2
pm2 start dist/index.js --name "portfolio"
pm2 startup
pm2 save
```

## 🔐 Variables de Entorno

Si necesitas variables de entorno, créalas en `.env.production`:

```bash
NODE_ENV=production
PORT=3000
```

## 📦 Build para Producción

```bash
# Compilar proyecto
pnpm build

# Esto genera:
# - dist/client/ (frontend compilado)
# - dist/index.js (servidor compilado)
# - dist/public/ (archivos estáticos)
```

## 🚀 Verificación Pre-Deployment

Antes de desplegar:

```bash
# Verificar tipos
pnpm check

# Hacer build local
pnpm build

# Probar en local
NODE_ENV=production pnpm start

# Verificar en http://localhost:3000
```

## 📊 Performance Checks

Después de desplegar:

- [ ] Página carga en < 3s
- [ ] Lighthouse score > 90
- [ ] No errores en consola
- [ ] Responsive en móvil
- [ ] Links funcionales
- [ ] Formularios (si aplica) funcionan

## 🔄 CI/CD Automático

Este repositorio incluye workflows de GitHub Actions que:

1. **En PR**: Verifica tipos, formatea código
2. **En push a main**: Ejecuta tests y despliega

Ver `.github/workflows/` para configuración.

## 🐛 Solución de Problemas

### Build falla

```bash
# Limpiar cache
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Servidor no inicia

```bash
# Verificar que dist/ existe
ls -la dist/

# Verificar archivos
node dist/index.js
```

### Puerto ocupado

```bash
# Usar puerto diferente
PORT=3001 pnpm start
```

## 📝 Notas

- El proyecto usa Express.js como backend
- Vite se configura para servir SPA
- La carpeta `dist/public` contiene archivos estáticos

---

¿Preguntas? Crear un issue en el repositorio.
