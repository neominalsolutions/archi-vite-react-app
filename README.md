# React TypeScript Vite Projesi

Bu proje, Vite + React + TypeScript + SWC kullanılarak oluşturulmuştur. Production ve development ortamları için optimize edilmiştir.

## 🚀 Başlangıç

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn

### Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Production build'i önizle
npm run preview
```

### Packages

```bash
npm i react-router
```

## 📁 Proje Yapısı

```
vite-reactapp/
├── src/
│   ├── components/     # React bileşenleri
│   ├── assets/         # Statik dosyalar (resim, font vb.)
│   └── ...
├── dist/               # Production build çıktısı
├── .env                # Ortak environment değişkenleri
├── .env.development    # Development ortamı değişkenleri
├── .env.production     # Production ortamı değişkenleri
└── vite.config.ts      # Vite konfigürasyonu
```

## ⚙️ Vite Konfigürasyon Ayarları

### Path Alias (Yol Kısaltmaları)

| Alias         | Yol                | Açıklama               |
| ------------- | ------------------ | ---------------------- |
| `@`           | `./src`            | Ana kaynak dizini      |
| `@components` | `./src/components` | Bileşenler dizini      |
| `@assets`     | `./src/assets`     | Statik dosyalar dizini |

**Kullanım Örneği:**

```typescript
// Eski yöntem
import Button from '../../../components/Button';

// Yeni yöntem
import Button from '@components/Button';
```

### Development Sunucu Ayarları

| Ayar          | Değer | Açıklama                               |
| ------------- | ----- | -------------------------------------- |
| `port`        | 3000  | Sunucu portu                           |
| `open`        | true  | Tarayıcıyı otomatik açar               |
| `cors`        | true  | Cross-Origin isteklerini etkinleştirir |
| `hmr.overlay` | true  | Hata mesajlarını tarayıcıda gösterir   |

### Build Ayarları

| Ayar                    | Development | Production    | Açıklama                       |
| ----------------------- | ----------- | ------------- | ------------------------------ |
| `sourcemap`             | ✅ Açık     | ❌ Kapalı     | Kaynak haritaları (debug için) |
| `minify`                | ❌ Kapalı   | ✅ esbuild    | Kod sıkıştırma                 |
| `chunkSizeWarningLimit` | 500 KB      | 500 KB        | Chunk boyutu uyarı limiti      |
| `console/debugger`      | ✅ Korunur  | ❌ Kaldırılır | Konsol logları                 |

### Chunk Stratejisi

Production build'de dosyalar otomatik olarak ayrılır:

| Chunk    | İçerik           | Amaç                                 |
| -------- | ---------------- | ------------------------------------ |
| `vendor` | react, react-dom | Ana kütüphaneler (cache verimliliği) |
| `index`  | Uygulama kodu    | Ana uygulama bundle'ı                |

### Dosya İsimlendirme

| Ortam       | Format             | Örnek               |
| ----------- | ------------------ | ------------------- |
| Development | `[name].js`        | `index.js`          |
| Production  | `[name]-[hash].js` | `index-a1b2c3d4.js` |

> **Not:** Hash eklemek, tarayıcı cache'ini otomatik olarak geçersiz kılar (cache busting).

## 🌍 Environment Değişkenleri

### Dosya Yapısı

```
.env                 # Tüm ortamlarda geçerli
.env.development     # npm run dev
.env.production      # npm run build
.env.local           # Yerel geliştirme (git'e eklenmez)
```

### Kullanım

Tüm environment değişkenleri `VITE_` prefix'i ile başlamalıdır:

```properties
# .env.development
VITE_API_URL=http://localhost:8080/api
VITE_DEBUG=true

# .env.production
VITE_API_URL=https://api.production.com
VITE_DEBUG=false
```

**Kod İçinde Erişim:**

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
const isDebug = import.meta.env.VITE_DEBUG === 'true';
```

### Global Sabitler

| Sabit             | Tip     | Açıklama                     |
| ----------------- | ------- | ---------------------------- |
| `__APP_VERSION__` | string  | package.json'daki versiyon   |
| `__DEV__`         | boolean | Development ortamında `true` |

**Kullanım:**

```typescript
if (__DEV__) {
	console.log('Development modunda çalışıyor');
}
console.log(`App Version: ${__APP_VERSION__}`);
```

## 🎨 CSS Ayarları

| Ayar               | Değer               | Açıklama                            |
| ------------------ | ------------------- | ----------------------------------- |
| `devSourcemap`     | Development'ta açık | CSS debug için kaynak haritaları    |
| `cssCodeSplit`     | true                | Her component için ayrı CSS dosyası |
| `localsConvention` | camelCase           | CSS Modules class isimlendirme      |

**CSS Modules Örneği:**

```css
/* Button.module.css */
.primary-button {
}
```

```typescript
// Button.tsx
import styles from './Button.module.css';
// styles.primaryButton olarak erişilir (camelCase)
```

## 📦 Bağımlılık Optimizasyonu

Pre-bundle edilen paketler:

- `react`
- `react-dom`

Bu paketler ilk yüklemede optimize edilir ve development sunucusu daha hızlı başlar.

## 🛠️ Komutlar

| Komut             | Açıklama                                  |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Development sunucusunu başlatır           |
| `npm run build`   | Production build oluşturur                |
| `npm run preview` | Production build'i yerel olarak test eder |
| `npm run lint`    | ESLint ile kod kontrolü yapar             |

## 📊 Production Optimizasyonları

1. **Minification**: esbuild ile hızlı sıkıştırma
2. **Tree Shaking**: Kullanılmayan kod otomatik kaldırılır
3. **Code Splitting**: Vendor ve uygulama kodu ayrılır
4. **Cache Busting**: Hash'li dosya isimleri
5. **Console Removal**: console.log ve debugger kaldırılır
6. **CSS Splitting**: Component bazlı CSS dosyaları

## 🔧 TypeScript Path Alias Desteği

`tsconfig.json` dosyasına aşağıdaki ayarları ekleyin:

```json
{
	"compilerOptions": {
		"baseUrl": ".",
		"paths": {
			"@/*": ["src/*"],
			"@components/*": ["src/components/*"],
			"@assets/*": ["src/assets/*"]
		}
	}
}
```

## 📝 Lisans

MIT
