Feature: login online shop

  @Sprint2B @TestCase1
  Scenario Outline: Sebagai pengguna saya tidak dapat login dengan akun yang salah (negative case)
    Given user sudah berada pada halaman awal, user dapat melihat "Swag Labs"
    When saya login melakukan <username> dan <password>
    And user menekan tombol login
    Then user dapat melihat pesan <message>

    Examples:
      | username        | password       | message                                                                     |
      | "standard_user" | "secret_sauce" | "Epic sadface: Username and password do not match any user in this service" |
