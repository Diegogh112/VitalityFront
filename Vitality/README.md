# Vitality

Aplicación web desarrollada con Angular 17 para la gestión de salud y bienestar. Permite administrar usuarios, productos, categorías, objetivos de salud, seguimientos, compras y más.

## 🌐 Demo en producción

- **Frontend:** https://vitalityfront.netlify.app
- **Backend:** https://vitality-arquitectura-web.onrender.com

> El backend está alojado en Render con plan gratuito. Si no responde de inmediato, espera unos segundos mientras despierta.

## 🔐 Credenciales de acceso

| Rol | Usuario | Contraseña |
|-----|---------|------------|
| Administrador | `Diegogh10` | `password` |

## 🚀 Ejecutar en local

### Requisitos
- Node.js 18+
- Angular CLI 17

### Instalación

```bash
cd Vitality
npm install
ng serve
```

La aplicación estará disponible en `http://localhost:4200`.

> En modo desarrollo, el backend apunta a `https://vitality-arquitectura-web.onrender.com`.

## 🏗️ Build para producción

```bash
ng build
```

Los archivos generados se guardan en `dist/vitality/browser`.

## 🧪 Pruebas unitarias

```bash
ng test
```

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── components/     # Componentes por módulo (CRUD)
│   ├── services/       # Servicios HTTP
│   ├── models/         # Interfaces y modelos
│   ├── guard/          # Guards de autenticación
│   └── app.routes.ts   # Rutas de la aplicación
└── environments/       # Configuración por entorno
```
