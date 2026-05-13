# 📤 Guía: Publicar tu Portafolio en GitHub

¡Tu proyecto está completamente optimizado y listo para GitHub! Sigue estos pasos para publicarlo.

## 🚀 Paso 1: Crear un Repositorio en GitHub

### Opción A: Con GitHub CLI (Recomendado)

Si tienes instalado GitHub CLI:

```bash
# Ir a la carpeta del proyecto
cd c:\Users\lucia\Desktop\curriculum

# Autenticarse con GitHub
gh auth login

# Crear repositorio
gh repo create luciano-cv-portfolio --public --source=. --push --description "Un portafolio digital interactivo con React, TypeScript y Express"

# O si ya existe el repositorio (como en tu caso):
git remote add origin https://github.com/LucianoCMInteligencia/luciano-cv-portfolio.git
git push -u origin main
```

### Opción B: Manualmente en github.com

1. Ve a [github.com/new](https://github.com/new)
2. Nombre: `luciano-cv-portfolio`
3. Descripción: "Un portafolio digital interactivo con React, TypeScript y Express"
4. Elige **Public** para que sea visible
5. NO inicialices con README (ya lo tenemos)
6. Click en "Create repository"

## 🔗 Paso 2: Conectar tu Repositorio Local

Si elegiste la opción B (manual), ejecuta en PowerShell:

```powershell
# Ir a la carpeta del proyecto
cd c:\Users\lucia\Desktop\curriculum

# Establecer la rama como 'main'
git branch -M main

# Agregar el remoto
git remote add origin https://github.com/LucianoCMInteligencia/luciano-cv-portfolio.git

# Hacer push
git push -u origin main
```

## ✅ Verificación

```bash
# Verificar que el remoto está configurado
git remote -v

# Deberías ver:
# origin  https://github.com/tuusuario/luciano-cv-portfolio.git (fetch)
# origin  https://github.com/tuusuario/luciano-cv-portfolio.git (push)
```

## 📋 Checklist de GitHub

Después de hacer push, verifica:

- [ ] ✅ README.md muestra correctamente
- [ ] ✅ Archivos estáticos visibles
- [ ] ✅ Workflows en `.github/workflows/` están presentes
- [ ] ✅ LICENSE visible

## 🎯 Pasos Adicionales (Opcional pero Recomendado)

### 1. Actualizar Información del Perfil

En tu repositorio, ve a **Settings** → **Repository Details**:

```
Repository name: luciano-cv-portfolio
Description: Un portafolio digital interactivo con React, TypeScript y Express
Website: https://tu-sitio.com (si tienes uno)
Topics: portfolio, react, typescript, express, vite, portfolio-website, responsive-design
```

### 2. Configurar Ramas Protegidas

**Settings** → **Branches** → **Add branch protection rule**:

- Branch name pattern: `main`
- ✅ Require a pull request before merging
- ✅ Require status checks to pass
- ✅ Require code reviews

### 3. Activar GitHub Pages (Opcional)

Si quieres hostear en GitHub Pages:

**Settings** → **Pages**:
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/root` o `/dist` (depende de tu build)

## 🔄 Futuro: Actualizar Código

Cuando hagas cambios:

```bash
# Realizar cambios
# ...

# Hacer commit
git add .
git commit -m "feat: descripción del cambio"

# Hacer push
git push origin main
```

## 📱 Compartir tu Portafolio

```markdown
# Comparte en:

🔗 **GitHub**: https://github.com/LucianoCMInteligencia/luciano-cv-portfolio
👤 **Perfil**: https://github.com/LucianoCMInteligencia
📄 **Mi Portafolio**: https://tu-sitio.com

---

**Hecho con React, TypeScript, Express y ❤️**
```

## 🆘 Solución de Problemas

### Error: "remote origin already exists"

```bash
# Eliminar el remoto existente
git remote remove origin

# Agregar de nuevo
git remote add origin https://github.com/tuusuario/luciano-cv-portfolio.git
```

### Error: "Permission denied (publickey)"

```bash
# Necesitas agregar tu SSH key a GitHub
# Opción 1: Usar HTTPS (más fácil)
git remote set-url origin https://github.com/tuusuario/luciano-cv-portfolio.git

# Opción 2: Configurar SSH key
# Ver: https://docs.github.com/es/authentication/connecting-to-github-with-ssh
```

### Error: "fatal: branch 'main' does not exist"

Ya hemos creado el primer commit, así que no debería pasar. Pero si ocurre:

```bash
# Asegúrate de haber hecho commit
git log

# Si ves commits, intenta:
git push -u origin main
```

## 📚 Recursos

- [GitHub Docs](https://docs.github.com)
- [GitHub CLI](https://cli.github.com)
- [SSH Key Setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Git Basics](https://git-scm.com/book/en/v2)

---

## 🎉 ¡Felicidades!

Tu portafolio está:
- ✅ Optimizado
- ✅ Documentado
- ✅ Listo para producción
- ✅ Con CI/CD configurado

**Ahora es el momento de brillar en GitHub como portafolio profesional.**

---

**¿Necesitas ayuda?** Crea un issue en el repositorio o contacta al creador del proyecto.
