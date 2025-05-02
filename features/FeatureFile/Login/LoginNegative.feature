# language: id
Fitur: login online shop

  @Sprint2B @TestCase1
  Skenario konsep: Sebagai pengguna saya tidak dapat login dengan akun yang salah (negative case)
    Diasumsikan user sudah berada pada halaman awal, user dapat melihat "Swag Labs"
    Ketika saya login melakukan <username> dan <password>
    Dan user menekan tombol login
    Maka user dapat melihat pesan <message>

    Contoh:
      | username      | password       | message                                                                   |
      | standard_user | secret_sauasce | Epic sadface: Username and password do not match any user in this service |
