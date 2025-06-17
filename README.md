# Project - Skolar -- Frontend
Project-Skolar bir çevrimiçi sınıf projesidir. Ders anlatımlarının yüklenebileceği, öğrencilerin sınıf içerisinden hem ders içeriklerine hem de ödevlere ulaşabileceği bir sistemdir. Bu repository'de projeye ait arayüz kodlarına ulaşabilirsiniz.

📌[**Backend Repository**](https://github.com/ugurcankuzu/project-skolar)

## ✨Özellikler
- Responsive Tasarım
- Rol Tabanlı Arayüzler (Student, Educator)
- Ödev Yükleme / Görüntüleme / Puanlama
- Google OAuth
- Motion ile zenginleştirilmiş animasyon ve geçişler

## 🛠️Tech Stack
- **Framework** - Next.js (App Router)
- **CSS Kütüphanesi** - TailwindCSS
- **Form Yönetimi ve Validasyon** - react-hook-form & Zod
- **Kimlik Doğrulama** - Google OAuth
- **Animasyon** - motion (Framer-motion)
- **Dil** - TypeScript

## 📂Klasör Yapısı
Proje, modern Next.js App Router mimarisine uygun yapılandırılmıştır:

- **/app** - Routing ve sayfa bileşenlerini içerir.
- **/components** - Proje genelinde kullanılan UI bileşenlerini içerir.
- **/animations** - motion için gerekli Variants barındırır.
- **/enums & /types** - TypeScript type ve enumları kapsar.
- **/helpers** - Aracı fonksiyonlar ve Fetch server actionları barındırır.
- **/hooks** - Custom hookları barındırır.
- **/store** - Context API state management için providerları ve contextleri barındırır.
- **/views** - Componentleri birleştiren genel view'ları barındırır.

## 📦Kurulum
1.  Repository Klonlama
```bash
git clone https://github.com/ugurcankuzu/project-skolar-front.git
```

2. NPM Paketlerinin Yüklenmesi
```bash
npm install
```

3. Environment Variable
```dotenv
API_URL = https://localhost:5000 (Kendi API adresinizi girin.)
GOOGLE_CLIENT_ID = (Kendinize ait Google Client ID)
```
4. Uygulamayı Çalıştırın (--experimental-https ile https olarak çalıştırabilirsiniz.)
```bash
npm run dev
```

Uygulama varsayılan olarak https://localhost:3000/ adresinde çalışmaya başlayacaktır.
