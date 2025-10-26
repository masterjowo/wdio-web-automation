// Kelas Induk (Parent Class)
class Hewan {
  constructor(nama) {
    this.nama = nama;  // Properti nama
  }

  suara() {
    console.log(`${this.nama} mengeluarkan suara.`);
  }
}

// Kelas Turunan (Child Class)
class Kucing extends Hewan {
  constructor(nama, jenisBulu) {
    super(nama);  // Memanggil constructor dari parent class
    this.jenisBulu = jenisBulu;  // Properti baru di child class
  }

  // Method baru khusus untuk Kucing
  mendengkur() {
    console.log(`${this.nama} sedang mendengkur dengan bulu ${this.jenisBulu}.`);
  }
}

// 🔥 Cara Mengakses Properti & Metode yang Diwarisi
const meong = new Kucing('Meong', 'pendek');

// Mengakses properti dari parent class
console.log(meong.nama);  // Output: Meong

// Menggunakan metode yang diwarisi dari Hewan
meong.suara();  // Output: Meong mengeluarkan suara.
//test saja
// Menggunakan metode baru yang hanya ada di Kucing
meong.mendengkur();  // Output: Meong sedang mendengkur dengan bulu pendek.





////////////////////////////////////////////////////Akses Langsung ke Instance yang Sudah Di-export
// loginPage.ts
class LoginPage {
  open() {
    console.log('Opening Login Page');
  }
}

export const loginPage = new LoginPage();

// pages.ts
import { loginPage } from './loginPage';

export const pages = {
  login: loginPage
};

// main.ts
import { pages } from './pages';

pages.login.open();  // Output: Opening Login Page

/////////////////////////////////////////////////// Manual Instansiasi
// Page.ts
export class Page {
  constructor(public name: string) { }

  open() {
    console.log(`Opening page: ${this.name}`);
  }
}

// main.ts
import { Page } from './Page';

const loginPage = new Page('Login');
const dashboardPage = new Page('Dashboard');

loginPage.open();      // Output: Opening page: Login
dashboardPage.open();  // Output: Opening page: Dashboard
