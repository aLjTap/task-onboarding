# Proje Adı: Modern Oto Galeri Yönetim Sistemi (Galerim+)

## Proje Açıklaması

Bu proje, bir oto galerisinin envanterindeki araçları kaydetmesine, görüntülemesine, güncellemesine ve silmesine olanak tanıyan tam yığın (full-stack) bir web uygulamasıdır. Amaç, belirtilen modern teknolojileri kullanarak kullanıcı dostu ve etkili bir galeri yönetim platformu geliştirmektir.

## Teknoloji Yığını (Tech Stack)

*   **Mimari:** İstemci (Client) - Sunucu (Server)
*   **Frontend (İstemci):**
    *   **Kütüphane/Framework:** React
    *   **Yönlendirme (Routing):** Tanstack Router
    *   **Stil (Opsiyonel):** Tailwind CSS veya tercih edilen başka bir CSS çözümü (örn: Material UI, Bootstrap)
*   **Backend (Sunucu):**
    *   **Framework:** Hono (Node.js üzerinde)
*   **Veritabanı:**
    *   **Servis:** Turso (Dağıtık SQLite)
*   **ORM (Object-Relational Mapper):**
    *   **Kütüphane:** Drizzle ORM

## Temel Özellikler (Minimum Gereksinimler)

Öğrencinin tamamlaması beklenen temel özellikler şunlardır:

1.  **Yeni Araç Ekleme:**
    *   Kullanıcılar galeriye yeni bir araç ekleyebilmelidir.
    *   Her araç için en azından **Marka**, **Model**, **Yıl**, **Fiyat**, **Açıklama** ve **Görsel URL'si** (opsiyonel, başlangıçta sadece URL yeterli) bilgileri girilebilmelidir.
2.  **Araçları Listeleme:**
    *   Galerideki tüm araçlar ana sayfada bir liste veya kart düzeninde gösterilmelidir.
    *   Her araç için temel bilgiler (Marka, Model, Yıl, Fiyat) ve bir görseli (eğer URL varsa) görünmelidir.
3.  **Araç Bilgilerini Güncelleme:**
    *   Kullanıcılar mevcut bir aracın bilgilerini (Marka, Model, Yıl, Fiyat, Açıklama, Görsel URL'si) düzenleyebilmelidir.
4.  **Araç Silme:**
    *   Kullanıcılar galeriden bir aracı silebilmelidir.
5.  **Frontend Yönlendirme (Tanstack Router):**
    *   En azından aşağıdaki sayfalar için yönlendirme yapılmalıdır:
        *   Ana Sayfa / Araç Listesi (`/`)
        *   Yeni Araç Ekleme Sayfası (`/add-car`)
        *   Araç Düzenleme Sayfası (`/edit-car/:id`)
        *   Araç Detay Sayfası (Opsiyonel, ama önerilir: `/car/:id`)
6.  **Backend API (Hono):**
    *   Hono kullanılarak araçlar için CRUD (Create, Read, Update, Delete) işlemlerini gerçekleştiren RESTful API endpoint'leri oluşturulmalıdır:
        *   `GET /api/cars` - Tüm araçları listele
        *   `POST /api/cars` - Yeni araç ekle
        *   `GET /api/cars/:id` - Belirli bir aracı getir (Düzenleme ve detay sayfası için kullanılabilir)
        *   `PUT /api/cars/:id` - Belirli bir aracı güncelle
        *   `DELETE /api/cars/:id` - Belirli bir aracı sil
7.  **Veritabanı Entegrasyonu (Turso & Drizzle ORM):**
    *   Turso veritabanı, Drizzle ORM aracılığıyla backend uygulamasına bağlanmalı ve tüm araç verileri burada saklanmalıdır.
    *   Drizzle ORM kullanılarak veritabanı şeması (araçlar için bir `cars` tablosu) tanımlanmalı ve migrasyonlar yönetilmelidir.
        *   `cars` tablosu için örnek alanlar: `id` (otomatik artan), `make` (metin), `model` (metin), `year` (sayı), `price` (sayı), `description` (metin), `imageUrl` (metin, opsiyonel).


## Görevler Detaylı

1.  **Proje Yapısını Oluşturma:** Belirtilen `client` ve `server` klasör yapısını kurun. Her iki kısım için de `package.json` dosyalarını oluşturun.
2.  **Backend API Tasarımı ve Geliştirme (Hono & Drizzle & Turso):**
    *   Veritabanı şemasını Drizzle ORM ile `cars` tablosu için tanımlayın (marka, model, yıl, fiyat, açıklama, görsel URL'si gibi alanlar).
    *   Drizzle migrasyonlarını oluşturup Turso'ya uygulayın.
    *   Hono'da yukarıda belirtilen tüm CRUD API endpoint'lerini (`/api/cars` altında) Drizzle ORM kullanarak implemente edin.
    *   Gelen isteklerde temel validasyonları ekleyin (örn: fiyat pozitif bir sayı olmalı, yıl geçerli bir formatta olmalı).
3.  **Frontend Arayüz Geliştirme (React & Tanstack Router):**
    *   Araçları listeleyen bir ana sayfa (`CarList` bileşeni) oluşturun. Her araç bir `CarItem` bileşeni ile gösterilebilir.
    *   Yeni araç eklemek için bir form içeren bir sayfa/modal (`AddCarForm` bileşeni) oluşturun.
    *   Mevcut bir aracı düzenlemek için bir form içeren bir sayfa/modal (`EditCarForm` bileşeni) oluşturun. Bu forma tıklandığında, ilgili aracın ID'si ile `/edit-car/:id` rotasına gidilmelidir.
    *   Her araç öğesi için silme butonu ekleyin.
    *   Tanstack Router ile bu sayfalar arasında gezinmeyi sağlayın.
    *   Backend API'si ile etkileşim kurarak araç verilerini getirin, gönderin, güncelleyin ve silin.

