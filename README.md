# Binar Academy Bootcamp - FSW - Chapter 9 - Sample API

Ini adalah repository RESTful API yang menjadi basis untuk materi chapter 9. Ikuti petunjuk di bawah dengan seksama untuk memastikan teman-teman dapat menjalankan RESTful API.

## Prasyarat

Sebelum memulai menyentuh repository, pastikan komputer teman-teman memenuhi prasyarat berikut:

- Sudah install Node.js & NPM
- Sudah install PostgreSQL
- Sudah install git

## Project setup

1. Fork repository ini. Ada tombol 'fork' di kanan atas. Setelah fork nanti akan muncul repository yang sama persis di akun teman-teman.
1. Clone repository teman-teman yang sudah di fork :

```sh
git clone https://github.com/{username_kalian}/ch8-challenge.git
```

3. Pindah ke folder repository yang sudah di clone dengan command `cd ch8-challenge`.
1. Install dependencies pada server dengan command `npm install`.
1. Untuk konfigurasi database, terdapat dua cara. Pertama, ubah langsung `/config/config.js`. Kedua (disarankan), menggunakan `env`. Untuk menggunakan `env`, cukup copy file `.env.example` dan paste menjadi `.env` atau bisa lakukan command `cp .env.example .env` lalu lakukan konfigurasi pada file `.env`.
1. Setelah konfigurasi database. Jalankan `sequelize db:create`.
1. Lanjutkan dengan menjalankan migrasi `sequelize db:migrate`

### Run

Untuk menjalankan aplikasi RESTful API, pastikan sudah berada pada directory `server`. Untuk menjalankan dalam mode development, jalankan command berikut:

```sh
npm run dev
```

Untuk menjalankan dalam mode biasa, jalankan command berikut:

```sh
npm run start
```
