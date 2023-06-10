// Data untuk dropdown Lowongan
var lowonganData = ["System Administrator", "Programmer", "Technical Writter"];

// Data untuk dropdown Posisi
var posisiData = ["Jakarta", "Bandung"];

// Simpan data yang telah disubmit secara lokal menggunakan variable Array
let dataPendaftar = [];

// Fungsi untuk validasi input tidak boleh kosong
function validateInput(input) {
  return input.trim() !== "";
}

// Fungsi untuk validasi email
function validateEmail(email) {
  // Lakukan validasi dengan menggunakan data pendaftar yang sudah disimpan
  const emailExists = dataPendaftar.some((pendaftar) => pendaftar.email === email);
  return !emailExists;
}

// Fungsi untuk melakukan pendaftaran
function daftarLowongan(fullname, email, lowongan) {
  // Validasi input tidak boleh kosong
  if (!validateInput(fullname) || !validateInput(email) || !validateInput(lowongan)) {
    console.log("Harap lengkapi semua inputan.");
    return;
  }

  // Validasi email
  if (!validateEmail(email)) {
    console.log("Email yang Anda masukkan sudah terdaftar.");
    return;
  }

  // Validasi kuota tersedia
  let kuotaTersedia = 0;
  switch (lowongan.toLowerCase()) {
    case "system administrator":
      kuotaTersedia = 1;
      break;
    case "programmer":
      kuotaTersedia = 2;
      break;
    case "technical writter":
      kuotaTersedia = 3;
      break;
    default:
      console.log("Lowongan yang Anda pilih tidak valid.");
      return;
  }

  if (kuotaTersedia > 0) {
    // Jika terdapat kuota yang tersedia
    console.log(`Anda dapat memilih lowongan ${lowongan}.`);

    // Tambahkan data pendaftar ke array
    dataPendaftar.push({ nama: fullname, email: email, lowongan: lowongan });

    kuotaTersedia--;

    if (kuotaTersedia <= 2) {
      // Jika kuota tersisa hanya 2 pendaftar
      console.log(`Kuota tersisa untuk ${lowongan} hanya 2 pendaftar.`);
    }
  } else {
    // Jika jumlah kuota sudah terpenuhi
    console.log(`Mohon maaf, rekrutasi untuk ${lowongan} sudah penuh dan tidak dapat dipilih.`);
  }
}

// Contoh penggunaan
const nama = "John Doe";
const email = "johndoe@example.com";
const lowongan = "Programmer";

daftarLowongan(nama, email, lowongan);
