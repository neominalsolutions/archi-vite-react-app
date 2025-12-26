# 🎯 Archi Vite React App

Modern web uygulaması geliştirmek için React, TypeScript, Vite ve ileri düzey state yönetimi teknolojilerini kullanarak oluşturulmuş, architectural best practices'i takip eden kapsamlı bir örnek proje.

---

## 📋 İçindekiler

- [Proje Özeti](#proje-özeti)
- [Özellikler](#özellikler)
- [Teknoloji Stack'i](#teknoloji-stacki)
- [Kurulum](#kurulum)
- [Proje Yapısı](#proje-yapısı)
- [State Yönetimi](#state-yönetimi)
- [Sayfalar ve Özellikler](#sayfalar-ve-özellikler)
- [API Entegrasyonu](#api-entegrasyonu)
- [Kullanılan Paketler](#kullanılan-paketler)
- [Komutlar](#komutlar)

---

## 🎯 Proje Özeti

Bu proje, React uygulamalarında modern geliştirme yaklaşımlarını gösteren bir referans uygulamadır. Context API, Redux Toolkit, RTK Query gibi state yönetimi çözümlerini pratikte nasıl kullanacağınızı, API entegrasyonunu, form yönetimini ve component mimarisini öğretir.

---

## ✨ Özellikler

### 1. **Çoklu State Yönetimi Yaklaşımları**

- **Context API**: Sepet yönetimi (CartProvider)
- **Redux Toolkit**: Redux ile sepet ve ürün state'i yönetimi
- **RTK Query**: Modern async data fetching ve caching

### 2. **Kapsamlı Routing Sistemi**

- Nested Routes ve Nested Layouts
- Error Boundaries
- Loader'lar ile veri ön yükleme
- React Router v7 özellikleri

### 3. **UI Component Mimarisi**

- **Atomic Design Pattern**: Atoms, Molecules, Organisms, Templates
- Material-UI (MUI) entegrasyonu
- Tailwind CSS styling
- Responsive tasarım

### 4. **Form Yönetimi**

- React Hook Form entegrasyonu
- Yup validation schema
- Custom form components

### 5. **API Entegrasyonu**

- RESTful API çağrıları (JSONPlaceholder, OData)
- RTK Query caching mekanizması
- Error handling ve loading states
- Request debouncing

### 6. **Hook Örnekleri**

- `useState` - State yönetimi
- `useEffect` - Lifecycle ve side effects
- `useCallback` - Function memoization
- `useSelector/useDispatch` - Redux state
- Custom hooks

### 7. **Scroll-to-Top Butonu**

- Sayfa aşağı kaydırıldığında otomatik görünme
- Yumuşak scroll animasyonu
- Fixed positioning

### 8. **Type Safety**

- TypeScript ile tam tip güvenliği
- Strict type checking
- IDE autocomplete desteği

---

## 🛠️ Teknoloji Stack'i

### Frontend Framework

- **React 19.2.0** - UI kütüphanesi
- **React Router 7.11.0** - Routing çözümü
- **React DOM 19.2.0** - DOM rendering

### State Yönetimi

- **Redux Toolkit 2.11.2** - State management
- **React Redux 9.2.0** - Redux bindings
- **RTK Query** - Async state management

### UI & Styling

- **Material-UI 7.3.6** - Component library
- **Material-UI Icons 7.3.6** - Icon set
- **Tailwind CSS 4.1.18** - Utility-first CSS
- **Emotion 11.14.0** - CSS-in-JS

### Form Yönetimi

- **React Hook Form 7.69.0** - Form state yönetimi
- **Yup 1.7.1** - Schema validation

### HTTP Client

- **Axios 1.13.2** - HTTP requests

### Fonts

- **Fontsource Roboto 5.2.9** - Google Fonts

### Build Tools

- **Vite 7.2.4** - Build tool
- **TypeScript 5.9.3** - Type system
- **ESLint 9.39.1** - Code linting
- **Vite Plugin React SWC 4.2.2** - Fast refresh

---

## 📥 Kurulum

### Gereksinimler

- Node.js 16+
- npm veya yarn

### Adımlar

```bash
# Proje klasörüne girin
cd archi-vite-react-app

# Bağımlılıkları yükleyin
npm install

# Development server'ı başlatın
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Linting kontrolü
npm run lint
```

---

## 📁 Proje Yapısı

```
src/
├── layout/                    # Layout komponenları
│   ├── main.layout.tsx       # Ana sayfa layoutu (Scroll-to-Top butonu ile)
│   └── post.layout.tsx       # Post sayfaları layoutu
│
├── pages/                     # Sayfalar
│   ├── index/
│   │   ├── home.page.tsx     # Ana sayfa
│   │   ├── react.hooks.page.tsx  # React Hooks örnekleri
│   │   └── atomic-design.page.tsx # Atomic Design örneği
│   ├── post/
│   │   ├── pages/
│   │   │   ├── index.page.tsx    # Post V1 (useState + useEffect)
│   │   │   └── index-v2.page.tsx # Post V2 (RTK Query)
│   │   └── components/
│   │       └── post.form.tsx     # Post Form komponenti
│   ├── product/
│   │   ├── products.page.tsx  # Ürün listesi
│   │   └── products.pagev2.tsx # RTK Query ile ürün listesi
│   ├── cart/
│   │   ├── cart.summary.page.tsx   # Context API ile sepet
│   │   ├── cart.summary.v2.page.tsx # Redux ile sepet
│   │   └── components/
│   │       └── cart.summary.tsx
│   └── error.tsx              # Error boundary
│
├── ui/                        # Atomic Design Components
│   ├── atoms/                 # Temel components
│   │   ├── Typography.tsx
│   │   ├── Link.tsx
│   │   ├── Icon.tsx
│   │   └── ProfileCircle.tsx
│   ├── molecules/             # Basit kombinasyonlar
│   │   ├── Card.tsx
│   │   ├── CardHeader.tsx
│   │   ├── CardContent.tsx
│   │   ├── CardFooter.tsx
│   │   └── UserInfo.tsx
│   ├── organisms/             # Kompleks yapılar
│   │   ├── MainBar.tsx        # Üst navigasyon menu
│   │   └── PostCard.tsx
│   └── templates/             # Sayfa templates
│       ├── PostGrid.tsx
│       └── PostSummary.tsx
│
├── store/                     # Redux Store
│   ├── store.ts              # Store konfigürasyonu
│   ├── cart/
│   │   └── cart.slice.ts     # Cart reducer
│   └── products/
│       └── product.slice.ts  # Product reducer
│
├── api/                       # RTK Query APIs
│   ├── postApi/
│   │   └── post.api.ts       # Post API endpoints
│   └── productApi/
│       └── product.api.ts    # Product API endpoints
│
├── context/                   # Context API
│   ├── cart/
│   │   ├── cart.context.ts   # Cart context tanımı
│   │   └── cart.provider.tsx # Cart provider
│   └── theme/
│       └── readme.md
│
├── model/                     # TypeScript Types & Interfaces
│   ├── post.ts
│   ├── product.ts
│   └── cart.ts
│
├── client/                    # API Client Utilities
│   ├── post.client.ts
│   ├── jsonplaceholder.client.ts
│   └── post.client.ts
│
├── routes/
│   └── main.routes.ts        # Route konfigürasyonu
│
├── utils/
│   └── debounce.ts           # Utility fonksiyonları
│
├── App.tsx                   # Ana App komponenti
├── main.tsx                  # Entry point
└── index.css                 # Global styles
```

---

## 🔄 State Yönetimi

Proje üç farklı state yönetimi yaklaşımını örneklemektedir:

### 1. Context API + useState

**Dosya**: `src/context/cart/cart.provider.tsx`

```tsx
// Basit state yönetimi için Context API kullanımı
const [cart, setCart] = useState<CartState>(initialCartState);
```

**Kullanım**: `src/pages/cart/cart.summary.page.tsx`

### 2. Redux Toolkit Slices

**Dosya**: `src/store/cart/cart.slice.ts`

```typescript
const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addItem: (state, action) => {...},
    removeItem: (state, action) => {...},
    clearCart: (state) => {...},
  },
});
```

**Kullanım**: `src/pages/cart/cart.summary.v2.page.tsx`

### 3. RTK Query (Async Data Fetching)

**Dosya**: `src/api/productApi/product.api.ts`

```typescript
const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://services.odata.org/...'}),
  endpoints: (builder) => ({
    getProducts: builder.query<ODataResponse<Product>, void>({...}),
    getProductsFilterByName: builder.query<ODataResponse<Product>, {name:string}>({...}),
  }),
});
```

**Caching**: Varsayılan 60 saniye cache, custom TTL konfigürasyonu desteği

---

## 📄 Sayfalar ve Özellikler

### 🏠 Ana Sayfa (Home)

- **Yol**: `/`
- **Dosya**: `src/pages/index/home.page.tsx`
- **Özellik**: Karşılama sayfası

### ⚙️ React Hooks Eğitimi

- **Yol**: `/hooks`
- **Dosya**: `src/pages/index/react.hooks.page.tsx`
- **Özellikler**:
  - `useState` kullanımı
  - `useEffect` lifecycle hooks
  - Async data fetching örneği

### 🎨 Atomic Design Örneği

- **Yol**: `/atomic-design`
- **Dosya**: `src/pages/index/atomic-design.page.tsx`
- **Özellikler**:
  - PostSummary Template
  - PostGrid Template
  - Component composition örnekleri

### 📝 Post Sayfaları

#### V1 - Klasik useState + useEffect

- **Yol**: `/posts/home`
- **Dosya**: `src/pages/post/pages/index.page.tsx`
- **Özellikler**:
  - Manual state yönetimi
  - useEffect ile data fetching
  - Error handling
  - Loading states

#### V2 - RTK Query

- **Yol**: `/posts/v2`
- **Dosya**: `src/pages/post/pages/index-v2.page.tsx`
- **Özellikler**:
  - RTK Query hooks
  - useCallback memoization
  - React Hook Form entegrasyonu
  - Automatic caching

### 🛍️ Ürün Sayfaları

#### V1 - Temel Listing

- **Yol**: `/products`
- **Dosya**: `src/pages/product/products.page.tsx`
- **Özellikler**: Basit ürün listesi

#### V2 - RTK Query + Search

- **Yol**: `/products-v2`
- **Dosya**: `src/pages/product/products.pagev2.tsx`
- **Özellikler**:
  - RTK Query ile filtreleme
  - Debounced search
  - Redux Toolkit ile sepet entegrasyonu
  - OData API entegrasyonu

### 🛒 Sepet Sayfaları

#### Context API Versiyonu

- **Yol**: `/cart-summary`
- **Dosya**: `src/pages/cart/cart.summary.page.tsx`
- **Özellikler**:
  - Context API ile state yönetimi
  - Ürün ekleme/çıkarma
  - Toplam fiyat hesabı

#### Redux Toolkit Versiyonu

- **Yol**: `/cart-summary-v2`
- **Dosya**: `src/pages/cart/cart.summary.v2.page.tsx`
- **Özellikler**:
  - Redux state management
  - useSelector/useDispatch hooks
  - Type-safe dispatch

---

## 🌐 API Entegrasyonu

### Kullanılan API'lar

#### 1. JSONPlaceholder

- **URL**: `https://jsonplaceholder.typicode.com`
- **Endpoints**:
  - `GET /posts` - Post listesi

#### 2. OData Northwind Service

- **URL**: `https://services.odata.org/northwind/northwind.svc/`
- **Endpoints**:
  - `GET /Products` - Tüm ürünler
  - `GET /Products?$filter=substringof(...)` - Ürün arama

### RTK Query Caching

```typescript
// 120 saniye cache süresi
keepUnusedDataFor: 120,

// Tab arası geçişlerde refetch
refetchOnFocus: true,

// İnternet bağlantı geri gelince refetch
refetchOnReconnect: true,
```

---

## 📦 Kullanılan Paketler

### Production Dependencies

| Paket               | Versiyon | Amaç                       |
| ------------------- | -------- | -------------------------- |
| react               | 19.2.0   | React framework            |
| react-dom           | 19.2.0   | React DOM rendering        |
| react-router        | 7.11.0   | Client-side routing        |
| @reduxjs/toolkit    | 2.11.2   | Redux state management     |
| react-redux         | 9.2.0    | Redux React bindings       |
| @mui/material       | 7.3.6    | Material Design components |
| @mui/icons-material | 7.3.6    | Material Design icons      |
| tailwindcss         | 4.1.18   | Utility-first CSS          |
| @tailwindcss/vite   | 4.1.18   | Tailwind Vite plugin       |
| react-hook-form     | 7.69.0   | Form state management      |
| yup                 | 1.7.1    | Schema validation          |
| axios               | 1.13.2   | HTTP client                |
| @emotion/react      | 11.14.0  | CSS-in-JS                  |
| @emotion/styled     | 11.14.1  | Styled components          |
| @fontsource/roboto  | 5.2.9    | Roboto font                |

### Development Dependencies

| Paket                    | Versiyon | Amaç               |
| ------------------------ | -------- | ------------------ |
| typescript               | 5.9.3    | Type system        |
| vite                     | 7.2.4    | Build tool         |
| @vitejs/plugin-react-swc | 4.2.2    | Fast refresh       |
| eslint                   | 9.39.1   | Code linting       |
| typescript-eslint        | 8.46.4   | TypeScript linting |
| @types/react             | 19.2.5   | React types        |
| @types/react-dom         | 19.2.3   | React DOM types    |
| @types/node              | 24.10.1  | Node.js types      |

---

## 🚀 Komutlar

### Development

```bash
npm run dev
```

- Vite development server'ı başlatır
- Hot Module Replacement (HMR) etkin
- `http://localhost:5173` adresinde çalışır

### Build

```bash
npm run build
```

- TypeScript derleme: `tsc -b`
- Vite production build
- Optimized bundle oluşturur

### Lint

```bash
npm run lint
```

- ESLint ile kod kontrolü
- React hooks linting
- TypeScript linting

### Preview

```bash
npm run preview
```

- Production build'i lokal olarak önizleme
- Build dosyalarını test etmek için

---

## 🎓 Öğrenme Kaynakları

### Hooks Örnekleri

- **useState**: State yönetimi
- **useEffect**: Lifecycle ve side effects
- **useCallback**: Function memoization
- **useSelector**: Redux state okuma
- **useDispatch**: Redux actions dispatch

### Design Patterns

- Atomic Design Pattern
- Compound Components
- Custom Hooks
- Context API
- Redux Slices

### Best Practices

- TypeScript ile type safety
- Error boundaries
- Lazy loading
- Memoization
- Debouncing (search)
- Code splitting

---

## 🔍 Önemli Dosyalar

### Store Configuration

- `src/store/store.ts` - Redux store setup
- `src/store/cart/cart.slice.ts` - Cart reducer
- `src/store/products/product.slice.ts` - Product reducer

### API Definitions

- `src/api/postApi/post.api.ts` - Post API
- `src/api/productApi/product.api.ts` - Product API

### Layouts

- `src/layout/main.layout.tsx` - Scroll-to-Top butonu ile main layout
- `src/layout/post.layout.tsx` - Post sayfaları sub-layout

### Context

- `src/context/cart/cart.context.ts` - Cart context
- `src/context/cart/cart.provider.tsx` - Cart provider

### Routes

- `src/routes/main.routes.ts` - Route konfigürasyonu (Nested routes, loaders, error boundaries)

---

## 🎯 Geliştirme İpuçları

1. **Redux DevTools Integration**: Redux DevTools browser extension ile state debugging
2. **React DevTools**: React component hierarchy ve props debugging
3. **Network Tab**: API requests ve responses monitoring
4. **Console Warnings**: Unused imports ve performance warnings

---

## 📝 Lisans

Bu proje eğitim amaçlı olarak oluşturulmuştur.

---

## 👤 Kontribütörler

Archi Vite React App - Modern React Development Practices Example

---

**Son Güncelleme**: Aralık 2025
