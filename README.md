<div align="center">

# ⚡ TaskFlow: Modern & Reaktif Görev Yönetim Sistemi

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-00599C?style=for-the-badge&logo=database&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

<p align="center">
  Saf JavaScript (Vanilla JS ES6+), modern CSS Custom Properties ve anlamsal HTML5 mimarisi ile inşa edilmiş, harici kütüphane bağımlılığı bulunmayan, reaktif durum yönetimli görev ve iş akışı optimizasyon aracı.
</p>

[Özellikler](#-temel-özellikler) • [Mimari & Veri Akışı](#-sistem-mimarisi-ve-veri-akışı) • [Teknik Detaylar](#-teknik-derinlik-ve-algoritmalar) • [Kurulum](#-kurulum-ve-yerel-%C3%A7al%C4%B1%C5%9Ft%C4%B1rma) • [Yol Haritası](#-yol-haritas%C4%B1-roadmap)

---

</div>

## 📌 Proje Genel Bakışı

**TaskFlow**, modern web standartlarına tam uyumlu olarak geliştirilmiş hafif (zero-dependency) bir web uygulamasıdır. Proje, modern web tarayıcılarının yerel API'lerini (DOM API, Web Storage API, Event Loop) en yüksek verimlilikle kullanarak harici bir framework (React, Vue vb.) ihtiyacı olmadan bileşen tabanlı durum yönetiminin nasıl kurgulanabileceğini somutlaştırır.

### Temel Hedefler:
- **Sıfır Dış Bağımlılık (Zero-Dependency):** Ekstra paket veya derleyici (Webpack/Babel) gerektirmeden saf tarayıcı motoru üzerinde çalışır.
- **Kalıcı Durum (Persistent State):** İstemci tarafında `localStorage` tabanlı senkronizasyon ile kesintisiz kullanıcı deneyimi sunar.
- **Modüler ve Güvenli Kodlama:** XSS açıklarına karşı sanitize edilmiş girdi mekanizmaları ve immutability (değişmezlik) prensiplerine uygun dizi manipülasyonları içerir.

---

## ✨ Temel Özellikler

### 🎯 Fonksiyonel Özellikler
* **CRUD Yetenekleri:** Görev oluşturma, önceliklendirme, tamamlama durumu değiştirme ve tekil/toplu silme.
* **Öncelik Derecelendirmesi:** Görsel renk kodlaması ile ayrılmış dinamik öncelik seviyeleri (`Düşük`, `Orta`, `Yüksek`).
* **Çok Modlu Filtreleme:** Tek tıkla `Tümü`, `Bekleyen` ve `Tamamlanan` durumlarına göre anlık filtreleme.
* **Canlı İstatistik Paneli:** Toplam, tamamlanan ve bekleyen görev adetlerini anlık hesaplayan sayaç motoru.
* **Akıllı Boş Durum (Empty State):** Liste boş olduğunda veya filtreye uygun eleman bulunmadığında kullanıcıyı bilgilendiren dinamik bildirim katmanı.

### 🎨 UI & UX Tasarım İlkeleri
* **Modern Dark Mode:** Göz yormayan, kontrast standartlarına (WCAG) uygun modern koyu renk paleti.
* **CSS Custom Properties (Değişkenler):** Tema ve renk yönetimini tek bir noktadan sağlayan dinamik `:root` yapısı.
* **Responsive Layout:** CSS Flexbox ve Fluid Typography kullanılarak mobil, tablet ve masaüstü cihazlara tam uyum.
* **Mikro Etkileşimler:** Buton odaklanmaları, kart yükselmeleri (`translateY`) ve görsel durum geçişleri.

---

## 🏗️ Sistem Mimarisi ve Veri Akışı

Uygulama, klasik **MVC (Model-View-Controller)** mimarisinin Vanilla JS uyarlamasını kullanır:
