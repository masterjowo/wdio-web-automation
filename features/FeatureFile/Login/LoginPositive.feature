# language: id
Fitur: login online shop

  @Sprint2B @TestCase1
  Skenario konsep: Sebagai pengguna saya dapat login dengan benar (positive case)
    Diasumsikan user sudah berada pada halaman awal, user dapat melihat "Swag Labs"
    Ketika saya login melakukan pengisian <username> dan <password>
    Dan user menekan tombol login
    Maka user dapat melihat pesan <message>

    Contoh:
      | username        | password       | message    |
      | "standard_user" | "secret_sauce" | "Products" |
