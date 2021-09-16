localStorage.clear();
var waktu = new Date();
var tgl = waktu.getDate();
var sesi = 0;
$("#sesi1").show();
$("#sesi2").hide();
// console.log(tgl);
var sesiToken = [
  {
    tgl: 20, //senin
    sesi: [
      { kelas: 7, token: ["A1234", "AZZZ1"] },
      { kelas: 8, token: ["B8881", "8HHHHL"] },
      { kelas: 9, token: ["C2323", "9WKWK1"] }
    ]
  },
  {
    tgl: 21, //selasa
    sesi: [
      { kelas: 7, token: ["A5534", "ADDD1"] },
      { kelas: 8, token: ["B9881", "8GGGL"] },
      { kelas: 9, token: ["C2003", "9MMM1"] }
    ]
  },
  {
    tgl: 22, //rabu
    sesi: [
      { kelas: 7, token: ["A3331", "ABAB1"] },
      { kelas: 8, token: ["B7891", "8NNN1"] },
      { kelas: 9, token: ["C2121", "9DEDE1"] }
    ]
  },
  {
    tgl: 23, //kamis
    sesi: [
      { kelas: 7, token: ["A5551", "AGTA1"] },
      { kelas: 8, token: ["B2040", "8MOBL"] },
      { kelas: 9, token: ["C1231", "9RRRU"] }
    ]
  },
  {
    tgl: 24, //jumat
    sesi: [
      { kelas: 7, token: ["A1111", "AJKJK"] },
      { kelas: 8, token: ["B7881", "8WOOW"] },
      { kelas: 9, token: ["C3322", "9HAH1"] }
    ]
  },
  {
    tgl: 25, //sabtu
    sesi: [
      { kelas: 7, token: ["A0001", "AZZZ1"] },
      { kelas: 8, token: ["B2113", "8FFFF"] },
      { kelas: 9, token: ["C3113", "9NNNN"] }
    ]
  }
];

function getToken(kelas) {
  $("#clas").text(kelas);
  $("#clas1").text(kelas);
  sesiToken.forEach((a) => {
    if (a.tgl == tgl) {
      a.sesi.forEach((b) => {
        if (b.kelas == kelas) {
          document.getElementById("clasToken").value = b.token[sesi];
          document.getElementById("clasToken1").value = b.token[sesi];
          // $("#clasToken1").value(b.token[sesi]);
          // $("#clasToken").value(b.token[sesi]);
          $("button").text("Copy");
          $("button").attr("class", "btn-info btn ");
        }
      });
    }
  });
  if ($("button:contains(Copy)")) {
    // console.log($("#clasToken1").text());
    var copyText = document.getElementById("clasToken");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    alert("Token " + copyText.value + " sudah dicopy ");
  }
}

$("#7").show();
$("#8").hide();
$("#9").hide();
$("#72").show();
$("#82").hide();
$("#92").hide();

$("#sesi1-tab").on("click", function (e) {
  e.preventDefault();
  $("#sesi1").show();
  $("#sesi2").hide();
  sesi = 0;
  $("button").text("Klik token");
  $("button").attr("class", "btn-info btn btn-danger");
});

$("#sesi2-tab").on("click", function (e) {
  e.preventDefault();
  $("#sesi1").hide();
  $("#sesi2").show();
  sesi = 1;
  $("button").text("Klik token");
  $("button").attr("class", "btn-info btn btn-danger");
});

$("#7-tab").on("click", function (e) {
  e.preventDefault();
  $("#7").show();
  $("#8").hide();
  $("#9").hide();
  $("#72").show();
  $("#82").hide();
  $("#92").hide();
  $("button").text("Klik token");
  $("button").attr("class", "btn-info btn btn-danger");
  $("#clas").text(7);
  $("#clas1").text(7);
  document.getElementById("clasToken").value = "Loading..";
  document.getElementById("clasToken1").value = "Loading..";
});
$("#8-tab").on("click", function (e) {
  e.preventDefault();
  $("#8").show();
  $("#7").hide();
  $("#9").hide();
  $("#82").show();
  $("#72").hide();
  $("#92").hide();
  $("button").text("Klik token");
  $("button").attr("class", "btn-info btn btn-danger");
  $("#clas").text(8);
  $("#clas1").text(8);
  document.getElementById("clasToken").value = "Loading..";
  document.getElementById("clasToken1").value = "Loading..";
});
$("#9-tab").on("click", function (e) {
  e.preventDefault();
  $("#9").show();
  $("#7").hide();
  $("#8").hide();
  $("#92").show();
  $("#72").hide();
  $("#82").hide();
  $("button").text("Klik token");
  $("button").attr("class", "btn-info btn btn-danger");
  $("#clas").text(9);
  $("#clas1").text(9);
  document.getElementById("clasToken").value = "Loading..";
  document.getElementById("clasToken1").value = "Loading..";
});

if (tgl > 1) {
  if (waktu.getHours() < 7 || waktu.getHours() > 8) {
    $("#info1").show();
    $(".infoAbsen1").hide();
  } else {
    $("#info1").hide();
    $(".infoAbsen1").show();
  }
  if (waktu.getHours() < 9 || waktu.getHours() > 10) {
    $("#info2").show();
    $(".infoAbsen2").hide();
  } else {
    $("#info2").hide();
    $(".infoAbsen2").show();
  }
} else {
  $("#info2").show();
  $(".infoAbsen2").hide();
  $("#info1").show();
  $(".infoAbsen1").hide();
}
