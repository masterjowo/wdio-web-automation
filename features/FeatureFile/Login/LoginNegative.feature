# language: id
Fitur: User melakukan pengetesan mengunakan ocr pada Login Online Shop
  Sebagai pengguna,
  Saya ingin dapat melakukan login dengan benar,
  Sehingga saya bisa mengakses halaman produk dalam aplikasi.

  @Sprint2B @TestCase1
  Skenario: Pengguna berhasil login dengan kredensial yang valid
    Diketahui pengguna berada pada halaman utama dan dapat melihat teks "Welcome to our store"
    Jika pengguna menekan tombol Login
    Maka pengguna diarahkan ke halaman "Welcome, Please Sign In!" atau halaman login
    Ketika pengguna memasukkan <email> dan <password>
    Jika pengguna menekan tombol Login atau Submit
    Maka pengguna dapat melihat email telah login <nama_email>

    Contoh:
      | email              | password   | nama_email         |
      | testsaja@gmail.com | admin12345 | testsaja@gmail.com |
