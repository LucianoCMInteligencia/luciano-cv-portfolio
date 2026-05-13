# Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! Este es un portafolio personal, pero apreciamos las sugerencias, mejoras y feedback.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Estándares de Código](#estándares-de-código)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Reportar Bugs](#reportar-bugs)
- [Solicitar Nuevas Características](#solicitar-nuevas-características)

## 🤝 Código de Conducta

Se espera que todos los contribuyentes mantengan un ambiente respetuoso, inclusivo y profesional.

### Nuestro Compromiso

Estamos comprometidos con proporcionar un ambiente acogedor para todos, independientemente de su edad, tamaño corporal, discapacidad, etnia, identidad/expresión de género, nivel de experiencia, educación, estado socioeconómico, nacionalidad, apariencia personal, raza, religión, o identidad y orientación sexual.

## 🚀 Cómo Contribuir

### Preparar tu Entorno

1. **Fork** el repositorio
2. **Clonar** tu fork localmente:
   ```bash
   git clone https://github.com/tuusuario/luciano-cv-portfolio.git
   cd luciano-cv-portfolio
   ```
3. **Crear rama** para tu feature:
   ```bash
   git checkout -b feature/mi-feature
   ```

### Tipos de Contribuciones

#### 🐛 Reportar Bugs

Antes de crear un reporte de bug, verifica la lista de issues para asegurarte de que no existe uno similar.

**Cómo enviar un buen reporte de bug:**

- Usa un título claro y descriptivo
- Proporciona descripción detallada del comportamiento observado
- Proporciona un ejemplo concreto para reproducir el problema
- Describe el comportamiento observado
- Explica cuál sería el comportamiento esperado
- Incluye capturas de pantalla si es relevante
- Incluye información del sistema (SO, navegador, versión de Node)

#### 💡 Solicitar Nuevas Características

Las sugerencias de features son bienvenidas. Por favor:

- Usa un título claro y descriptivo
- Proporciona descripción detallada de la característica propuesta
- Proporciona ejemplos específicos para demostrar cómo funcionaría
- Describe casos de uso actuales que no cubrimos

#### 🔄 Pull Requests

**Proceso:**

1. Completa los cambios en tu rama
2. Ejecuta los tests y verificaciones:
   ```bash
   pnpm check      # Verificar tipos
   pnpm format     # Formatear código
   ```
3. Crea un pull request hacia `main`
4. Sigue la plantilla de PR
5. Espera el review

## 📝 Estándares de Código

### TypeScript

- Usa tipos explícitos donde sea posible
- Evita `any` - usa `unknown` si es necesario
- Respeta las configuraciones de `tsconfig.json`

### Componentes React

```typescript
// ✅ Bueno
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>
      {label}
    </button>
  );
};

export default Button;

// ❌ Evitar
function Button(props) {
  return <button {...props}>{props.children}</button>;
}
```

### Estilos

- Usa Tailwind CSS para estilos
- Evita estilos inline
- Mantén la consistencia con la paleta de colores existente

### Formato de Código

- Ejecuta `pnpm format` antes de hacer commit
- El proyecto usa Prettier con configuración estándar
- Líneas máximo 100 caracteres

### Commits

```bash
# Mensajes de commit claros y descriptivos
git commit -m "feat: agregar nuevo componente Modal"
git commit -m "fix: corregir error en renderizado de lista"
git commit -m "docs: actualizar README"
```

**Prefijos recomendados:**
- `feat:` Nueva característica
- `fix:` Arreglo de bug
- `docs:` Cambios en documentación
- `style:` Cambios de formato/estilos
- `refactor:` Refactorización de código
- `perf:` Mejoras de rendimiento
- `chore:` Cambios en build/dependencias
- `test:` Agregar o actualizar tests

## 🔄 Proceso de Pull Request

1. Completa el titulo y descripción del PR
2. Vincula los issues relacionados
3. Asegúrate de que los tests pasan
4. El código será revisado
5. Realiza cambios según feedback
6. Será merged una vez aprobado

### Plantilla de PR

```markdown
## Descripción
Breve descripción de los cambios

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva característica
- [ ] Breaking change
- [ ] Cambio de documentación

## Cómo se probó esto
Describe los pasos para probar tus cambios

## Checklist
- [ ] Mi código sigue los estándares de estilo del proyecto
- [ ] He realizado una auto-revisión de mi propio código
- [ ] He comentado código complejo
- [ ] He actualizado la documentación relevante
- [ ] Mis cambios no generan nuevas warnings

## Issues Relacionados
Cierra #(número del issue)
```

## 🐛 Reportar Bugs

### Cómo reportar un bug

Crea un issue con el label `bug` y proporciona:

1. **Resumen**: Descripción clara del problema
2. **Pasos para reproducir**: 
   ```
   1. Ve a '...'
   2. Haz click en '...'
   3. Observa el error
   ```
3. **Comportamiento esperado**: Qué debería pasar
4. **Comportamiento actual**: Qué está sucediendo
5. **Capturas/Videos**: Si es posible
6. **Ambiente**:
   - OS: [ej. Windows 11]
   - Navegador: [ej. Chrome 120]
   - Node: [ej. v20.10.0]

## 💡 Solicitar Nuevas Características

Abre un issue con el label `enhancement` y describe:

1. **¿Qué problema resuelve?**
2. **Descripción de la solución deseada**
3. **Alternativas consideradas**
4. **Contexto adicional**

## ❓ Preguntas

- Crea una issue con el label `question`
- O contacta directamente al autor

## 📚 Recursos

- [Documentación React](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Radix UI Docs](https://www.radix-ui.com/docs)

## 🙏 Agradecimientos

¡Gracias por tu tiempo y contribución! Apreciamos tu ayuda para mejorar este proyecto.

---

**¡Esperamos tu participación! 🎉**
