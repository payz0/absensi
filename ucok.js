var today = new Date();
var tgl = today.getDate();
var jam = today.getHours();
var menit = today.getMinutes();
var sekarang = jam * 60 + menit;
var form = document.getElementById("formAbsen");
var info = document.getElementById("infoJam");
var clas = document.getElementById("clas");
var clasToken = document.getElementById("clasToken");
localStorage.clear();
if (sekarang > 60) {
  info.innerHTML = "Sesi 1 Jam 07:10";
}
if (sekarang > 540) {
  info.innerHTML = "Sesi 2 Jam 09:15";
}

var sesiToken = [
  {
    tgl: 20, //senin
    sesi: [
      { kelas: 7, en: ["A1234", "AZZZ1"] },
      { kelas: 8, en: ["B8881", "8HHHHL"] },
      { kelas: 9, en: ["C2323", "9WKWK1"] }
    ]
  },
  {
    tgl: 21, //selasa
    sesi: [
      { kelas: 7, en: ["A5534", "ADDD1"] },
      { kelas: 8, en: ["B9881", "8GGGL"] },
      { kelas: 9, en: ["C2003", "9MMM1"] }
    ]
  },
  {
    tgl: 22, //rabu
    sesi: [
      { kelas: 7, en: ["A3331", "ABAB1"] },
      { kelas: 8, en: ["B7891", "8NNN1"] },
      { kelas: 9, en: ["C2121", "9DEDE1"] }
    ]
  },
  {
    tgl: 23, //kamis
    sesi: [
      { kelas: 7, en: ["A5551", "AGTA1"] },
      { kelas: 8, en: ["B2040", "8MOBL"] },
      { kelas: 9, en: ["C1231", "9RRRU"] }
    ]
  },
  {
    tgl: 24, //jumat
    sesi: [
      { kelas: 7, en: ["A1111", "AJKJK"] },
      { kelas: 8, en: ["B7881", "8WOOW"] },
      { kelas: 9, en: ["C3322", "9HAH1"] }
    ]
  },
  {
    tgl: 25, //sabtu
    sesi: [
      { kelas: 7, en: ["A0001", "AZZZ1"] },
      { kelas: 8, en: ["B2113", "8FFFF"] },
      { kelas: 9, en: ["C3113", "9NNNN"] }
    ]
  }
];

var absen = [
  {
    kelas: 7,
    form: [
      "1FAIpQLScz3UsSt6_CkwIHPHk29K9MtcxeTT-_Y5xRLpKmxPcaJg_Ffg", //7a
      "1FAIpQLSfGxDDdc0nGgbGbKj3J_brDzBqkyjxhtFD6DAyUi58a-mVgRQ"
    ]
  }, //7b
  {
    kelas: 8,
    form: [
      "1FAIpQLScUjCG1HJRFr9BW0EmgoCupaDmTegQ7bnaO4c9jVPtUyCL_tw", //8a
      "1FAIpQLSemj4tfiroV1oO6US1PEzT0xmGnUwKLk6TkSacV4kMH3KmeKQ"
    ]
  }, //8b
  {
    kelas: 9,
    form: [
      "1FAIpQLSc8NlrIasJR3INie-3Sv0Af-szJWF_sTcIz0mGDa4qEskDPvw", //9a
      "1FAIpQLSeuWnfx9sSZ2pHbu-9wmgUhtt5L5WQGdJUGxK2FynF2OJFrmA"
    ]
  } //9b
];

clasToken.disabled = true;

function getToken(kelas) {
  clas.innerHTML = kelas;
  clasToken.value = "Loading..";
  var id = absen.findIndex((a) => {
    return a.kelas == kelas;
  });
  var idToken = sesiToken.findIndex((b) => {
    return b.tgl == tgl;
  });
  var getToken = sesiToken[idToken].sesi.filter((a) => {
    return a.kelas == kelas;
  })[0];
  var token = "Loading..";
  if (sekarang > 430 && sekarang < 540) {
    token = getToken.en[0];
    console.log("sesi 1");
    form.innerHTML =
      "<iframe src='https://docs.google.com/forms/d/e/" +
      absen[id].form[0] +
      "/viewform?embedded=true' width='100%' height='550' frameborder='0' marginheight='0' marginwidth='0' >Loading…</iframe>";
  }

  if (sekarang > 555 && sekarang < 660) {
    console.log("sesi 2");
    token = getToken.en[1];
    form.innerHTML =
      "<iframe src='https://docs.google.com/forms/d/e/" +
      absen[id].form[1] +
      "/viewform?embedded=true' width='100%' height='550' frameborder='0' marginheight='0' marginwidth='0' >Loading…</iframe>";
  } 
  setTimeout(() => {
    clasToken.disabled = false;
    clasToken.value = token;
  }, 1000);
}

function copyToken() {
  clasToken.select();
  clasToken.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(clasToken.value);
  alert("Token " + clasToken.value + " sudah dicopy ");
}
getToken(7);
