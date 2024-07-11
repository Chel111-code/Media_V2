function byg() {
  document.getElementById('byg').classList.add('hidden');
  document.getElementById('chbayangan').classList.remove('hidden');
  const popupBenar = document.getElementById('popupBenar');
  popupBenar.classList.remove('hidden');
  setTimeout(() => {
    popupBenar.classList.add('hidden');
  }, 1500);
  popupBenar.classList.add('zoomIn');
}

function byg2() {
  document.getElementById('byg2').classList.add('hidden');

  const popupSalah = document.getElementById('popupSalah');
  popupSalah.classList.remove('hidden');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);
  popupSalah.classList.add('zoomIn');
}

function byg3() {
  const popupBingung = document.getElementById('popupBingung');
  document.getElementById('hapus').classList.add('hidden');

  popupBingung.classList.remove('hidden');
  setTimeout(() => {
    popupBingung.classList.add('hidden');
  }, 3000);
  popupBingung.classList.add('zoomIn');
}

function byg4() {
  const popupBingung = document.getElementById('popupBingung');
  document.getElementById('byg34').classList.add('hidden');

  popupBingung.classList.remove('hidden');
  setTimeout(() => {
    popupBingung.classList.add('hidden');
  }, 3000);
  popupBingung.classList.add('zoomIn');
}

document.getElementById('lihat').addEventListener('click', function () {
  const sumbuCermin = document.getElementById('sumbuCermin');
  const lihatButton = document.getElementById('lihat');

  sumbuCermin.classList.remove('hidden');
  sumbuCermin.classList.add('pop');
  lihatButton.classList.add('hidden');
});

document.getElementById('lihat90').addEventListener('click', function () {
  const semibilanPuluh = document.getElementById('90derajat');
  const lihat90 = document.getElementById('lihat90');

  semibilanPuluh.classList.remove('hidden');
  semibilanPuluh.classList.add('pop');
  lihat90.classList.add('hidden');
});

document.getElementById('lihat270').addEventListener('click', function () {
  const duatujuhpuluuh = document.getElementById('270derajat');
  const lihat270 = document.getElementById('lihat270');

  duatujuhpuluuh.classList.remove('hidden');
  duatujuhpuluuh.classList.add('pop');
  lihat270.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
  const rotasiSearah = document.getElementById('rotasiSearah');
  const animasirotasiSearah = document.getElementById('animasirotasiSearah');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === rotasiSearah && entry.intersectionRatio >= 1) {
          observer.unobserve(rotasiSearah);
          animasirotasiSearah.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(rotasiSearah);
});

document.addEventListener('DOMContentLoaded', function () {
  const rotasiBerlawanan = document.getElementById('rotasiBerlawanan');
  const animasirotasiBerlawanan = document.getElementById('animasirotasiBerlawanan');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === rotasiBerlawanan && entry.intersectionRatio >= 1) {
          observer.unobserve(rotasiBerlawanan);
          animasirotasiBerlawanan.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(rotasiBerlawanan);
});

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('geometryCanvas');
  const ctx = canvas.getContext('2d');
  const notification = document.getElementById('notification');
  const gridSize = 24; // Ukuran grid dalam piksel

  // Canvas dimensions
  canvas.width = 240;
  canvas.height = 240;

  // Triangle coordinates and draggable points
  const triangle = [
    { x: 2 * gridSize, y: 1 * gridSize },
    { x: 4 * gridSize, y: 4 * gridSize },
    { x: 1 * gridSize, y: 4 * gridSize },
  ];
  let points = [
    { x: 192, y: 144 },
    { x: 168, y: 192 },
    { x: 216, y: 192 },
  ];
  let dragPoint = null;

  // Target coordinates
  const targetPoints = [
    { x: 144, y: 24 },
    { x: 144, y: 96 },
    { x: 216, y: 48 },
  ];

  // Function to draw grid
  function drawGrid() {
    ctx.strokeStyle = '#ddd'; // Warna grid

    // Menggambar garis vertikal
    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Menggambar garis horizontal
    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }

  // Function to draw the initial state
  function drawInitialState() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();

    // Draw mirror line
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = 'transparent';
    ctx.stroke();

    // Draw static triangle
    drawTriangle(triangle, '#B5AAAA');

    // Draw draggable points
    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#3CD69F';
      ctx.fill();
      ctx.stroke();
    });

    // Connect draggable points
    drawTriangle(points, '#3CD69F');
  }

  function drawTriangle(points, color) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  // Mouse and touch event handlers
  function handleMouseDown(e) {
    const mousePos = getMousePos(canvas, e);
    dragPoint = getDragPoint(mousePos);
  }

  function handleMouseMove(e) {
    if (!dragPoint) return;
    const mousePos = getMousePos(canvas, e);
    dragPoint.x = mousePos.x;
    dragPoint.y = mousePos.y;
    drawInitialState();
  }

  function handleMouseUp(e) {
    if (dragPoint) {
      const snappedPos = snapToGrid(dragPoint);
      dragPoint.x = snappedPos.x;
      dragPoint.y = snappedPos.y;
    }
    dragPoint = null;
    drawInitialState();
    updateNotification();
  }

  // Touch event adaptations
  function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
    canvas.dispatchEvent(mouseEvent);
  }

  function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
    canvas.dispatchEvent(mouseEvent);
  }

  function handleTouchEnd(e) {
    if (dragPoint) {
      const snappedPos = snapToGrid(dragPoint);
      dragPoint.x = snappedPos.x;
      dragPoint.y = snappedPos.y;
    }
    dragPoint = null;
    drawInitialState();
    const mouseEvent = new MouseEvent('mouseup', {});
    canvas.dispatchEvent(mouseEvent);
  }

  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
  canvas.addEventListener('touchstart', handleTouchStart, false);
  canvas.addEventListener('touchmove', handleTouchMove, false);
  canvas.addEventListener('touchend', handleTouchEnd, false);

  // Utility functions
  function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  function getDragPoint(mousePos) {
    return points.find(
      (point) => Math.sqrt((point.x - mousePos.x) ** 2 + (point.y - mousePos.y) ** 2) < 10
    );
  }

  function snapToGrid(point) {
    return {
      x: Math.round(point.x / gridSize) * gridSize,
      y: Math.round(point.y / gridSize) * gridSize,
    };
  }

  function updateNotification() {
    const checkButton = document.getElementById('Check3');
    // Memeriksa apakah tombol "Check" telah diklik
    if (!checkButton.clicked) {
      // Jika belum diklik, tidak melakukan apa-apa
      return;
    }

    // Memeriksa apakah setiap titik berada dalam jarak tertentu dari titik target
    const tolerance = 10; // Jarak toleransi
    const correctPosition = points.every((point) =>
      targetPoints.some(
        (targetPoint) =>
          Math.abs(point.x - targetPoint.x) < tolerance &&
          Math.abs(point.y - targetPoint.y) < tolerance
      )
    );

    // Memperbarui pesan notifikasi berdasarkan hasil pengecekan
    if (correctPosition) {
      // Menghilangkan kelas hidden dari elemen dengan id 'benar3' jika posisi benar
      document.getElementById('benar3').classList.remove('hidden');
      document.getElementById('benar3').classList.add('inline-block');
      document.getElementById('salah3').classList.add('hidden');
    } else {
      document.getElementById('salah3').classList.remove('hidden');
      document.getElementById('salah3').classList.add('inline-block');
      document.getElementById('benar3').classList.add('hidden');
    }
    // Mengatur kembali status tombol "Check" menjadi belum diklik
    checkButton.clicked = false;
  }

  // Event listener untuk tombol "Check"
  document.getElementById('Check3').addEventListener('click', function () {
    // Set flag clicked ke true ketika tombol "Check" diklik
    this.clicked = true;
    // Panggil fungsi updateNotification setelah tombol diklik
    updateNotification();
  });

  drawInitialState();
});

// Ambil tombol "Check"
const checkButton = document.getElementById('Check1');

// Tambahkan event listener ke tombol "Check"
checkButton.addEventListener('click', function checkHandler() {
  // Ambil tombol yang sedang memiliki latar belakang gelap
  const activeButton = document.querySelector('#TesPertama1 .bg-secondary');

  // Jika tombol yang memiliki latar belakang gelap adalah tombol "C1"
  if (activeButton && activeButton.id === 'buttonC1') {
    // Tampilkan pesan "Benar"
    document.getElementById('benar1').classList.remove('hidden');
    document.getElementById('benar1').classList.add('inline-block');
    document.getElementById('buttonC1').classList.add('bg-[#7BFFD0]');
    document.getElementById('buttonC1').classList.remove('bg-secondary');

    document.getElementById('C1').classList.add('border-hijau');
    document.getElementById('C1').classList.add('bg-white');
    // Sembunyikan pesan "Salah"
    document.getElementById('salah1').classList.add('hidden');
  } else {
    // Tampilkan pesan "Salah"
    document.getElementById('salah1').classList.remove('hidden');
    document.getElementById('salah1').classList.add('inline-block');
    document.getElementById('buttonC1').classList.add('bg-[#7BFFD0]');
    document.getElementById('C1').classList.add('border-hijau');
    document.getElementById('C1').classList.add('bg-white');
    // Sembunyikan pesan "Benar"
    document.getElementById('benar1').classList.add('hidden');
  }

  // Menonaktifkan event listener untuk tombol "Check1"
  checkButton.removeEventListener('click', checkHandler);

  // Menonaktifkan event listener untuk div ABCD
  divs.forEach((div) => {
    div.removeEventListener('click', divClickHandler);
  });
});

// Dapatkan referensi ke semua elemen div ABCD
const divs = document.querySelectorAll('#TesPertama1 .flex');

// Tambahkan event listener ke setiap div ABCD
divs.forEach((div) => {
  div.addEventListener('click', divClickHandler);
});

// Fungsi untuk menangani klik pada div ABCD
function divClickHandler() {
  // Menghapus kelas "bg-secondary" dari semua tombol
  const buttons = document.querySelectorAll('#TesPertama1 button');
  buttons.forEach((button) => {
    button.classList.remove('bg-secondary');
  });
  // Menambahkan kelas "bg-secondary" ke tombol di dalam div yang diklik
  const button = this.querySelector('button');
  button.classList.add('bg-secondary');

  // Mengaktifkan tombol "Check1" dengan menghapus atribut disabled
  checkButton.removeAttribute('disabled');
}

// Dapatkan referensi ke tombol "Check2"
const checkButton2 = document.getElementById('Check2');

checkButton2.disabled = true; // Menonaktifkan tombol "Check2" secara default

// Tambahkan event listener ke tombol "Check2"
checkButton2.addEventListener('click', function () {
  const activeButton = document.querySelector('#TesKedua1 .animate-ping');

  if (activeButton && activeButton.id === 'C2') {
    // Logika jika kondisi terpenuhi
    buttonsTesKedua1.forEach((button) => {
      if (button.id !== 'C2') {
        button.classList.add('hidden');
      }
    });
    document.getElementById('benar2').classList.remove('hidden');
    document.getElementById('benar2').classList.add('inline-block');
    document.getElementById('C2').classList.add('bg-hijau');
    document.getElementById('C2').classList.remove('bg-primary', 'animate-ping');
    document.getElementById('animasiTes1').classList.add('rotateSembilanpuluh');
    document.getElementById('animasiTes1').classList.remove('hidden');
    document.getElementById('Bhasil').classList.remove('hidden');
    document.getElementById('abuabuB2').classList.remove('hidden');
    document.getElementById('90derajat').classList.remove('hidden');
  } else {
    // Logika jika kondisi tidak terpenuhi
    buttonsTesKedua1.forEach((button) => {
      if (button.id !== 'C2') {
        button.classList.add('hidden');
      }
    });
    document.getElementById('salah2').classList.remove('hidden');
    document.getElementById('salah2').classList.add('inline-block');
    document.getElementById('animasiTes1').classList.add('rotateSembilanpuluh');
    document.getElementById('animasiTes1').classList.remove('hidden');
    document.getElementById('C2').classList.add('bg-hijau');
    document.getElementById('C2').classList.remove('bg-primary');
    document.getElementById('Bhasil').classList.remove('hidden');
    activeButton.classList.remove('bg-primary');
    document.getElementById('abuabuB2').classList.remove('hidden');
    document.getElementById('90derajat').classList.remove('hidden');
  }

  buttonsTesKedua1.forEach((button) => {
    button.removeEventListener('click', buttonClickHandler);
  });
});

function buttonClickHandler() {
  // Menghapus kelas "animate-ping" dari semua tombol
  const buttons = document.querySelectorAll('#TesKedua1 button');
  buttons.forEach((button) => {
    button.classList.remove('animate-ping');
  });
  // Menambahkan kelas "animate-ping" ke tombol yang diklik
  this.classList.add('animate-ping');

  // Mengaktifkan tombol "Check2" jika ada tombol yang diklik
  checkButton2.disabled = false;
}

// Dapatkan referensi ke semua tombol di dalam div TesKedua1
const buttonsTesKedua = document.querySelectorAll('#TesKedua1 button:not(#Check2)');

// Tambahkan event listener ke setiap tombol di dalam div TesKedua1
buttonsTesKedua.forEach((button) => {
  button.addEventListener('click', function () {
    // Panggil fungsi buttonClickHandler setelah tombol diklik
    buttonClickHandler();
  });
});

// Tambahkan event listener ke setiap tombol di dalam div TesKedua1
const buttonsTesKedua1 = document.querySelectorAll('#TesKedua1 button:not(#Check2)');
buttonsTesKedua1.forEach((button) => {
  button.addEventListener('click', buttonClickHandler);
});

function toggleNavbar() {
  var sidebar = document.getElementById('sidebar');
  var judul = document.getElementById('judul');
  var sidebarToggle = document.getElementById('sidebarToggle');

  sidebar.classList.toggle('translate-x-full');
  sidebarToggle.classList.toggle('-translate-x-44');
  sidebar.classList.toggle('translate-x-0');
  sidebar.classList.toggle('text-primary');

  // Menambahkan atau menghapus kelas 'hidden'
  judul.classList.toggle('hidden');
}

function removeanimasiTesPertama1() {
  var animasiTesPertama1o = document.getElementById('animasiTesPertama1o');
  animasiTesPertama1o.classList.remove('opacity-30');

  var play1 = document.getElementById('play1');
  play1.classList.toggle('hidden');

  var animasiTesPertama1 = document.getElementById('animasiTesPertama1');
  animasiTesPertama1.classList.toggle('hidden');
}

function removeanimasicontohPertama() {
  var animasicontohPertama = document.getElementById('animasicontohPertama');
  animasicontohPertama.classList.remove('opacity-30');

  var play2 = document.getElementById('play2');
  play2.classList.toggle('hidden');

  var animasicontohPertamao = document.getElementById('animasicontohPertamao');
  animasicontohPertamao.classList.toggle('hidden');
}

function removerotasibangunDatar() {
  var rotasibangunDatar = document.getElementById('rotasibangunDatar');
  rotasibangunDatar.classList.remove('opacity-30');

  var play3 = document.getElementById('play3');
  play3.classList.toggle('hidden');

  var rotasibangunDataro = document.getElementById('rotasibangunDataro');
  rotasibangunDataro.classList.toggle('hidden');
}

function removeanimasipusatTitik() {
  var animasipusatTitik = document.getElementById('animasipusatTitik');
  animasipusatTitik.classList.remove('opacity-30');

  var play4 = document.getElementById('play4');
  play4.classList.toggle('hidden');

  var animasipusatTitiko = document.getElementById('animasipusatTitiko');
  animasipusatTitiko.classList.toggle('hidden');
}

document.getElementById('playback').addEventListener('click', function () {
  const playback = document.getElementById('animasirotasiBerlawanan');
  playback.classList.add('hidden');
  setTimeout(() => {
    playback.classList.remove('hidden');
  }, 50);
});

document.addEventListener('DOMContentLoaded', function () {
  var canvas1 = document.getElementById('canvas');
  var ctx1 = canvas1.getContext('2d');
  var gridSize1 = 24; // Ukuran grid
  var correctPoint = { x: 5, y: 3 }; // Contoh titik yang benar
  var clickedPoint = { x: -1, y: -1 }; // Titik yang dipilih oleh pengguna
  var checkButton2 = document.getElementById('Check4'); // Tombol "Check"
  var isCorrectPointClicked = false; // Status apakah titik yang benar telah diklik
  var isPointClicked = false; // Status apakah titik telah diklik

  canvas1.width = 240;
  canvas1.height = 240;

  function drawGrid() {
    ctx1.beginPath();
    for (var x = 0; x <= canvas1.width; x += gridSize1) {
      ctx1.moveTo(x, 0);
      ctx1.lineTo(x, canvas1.height);
    }
    for (var y = 0; y <= canvas1.height; y += gridSize1) {
      ctx1.moveTo(0, y);
      ctx1.lineTo(canvas1.width, y);
    }
    ctx1.strokeStyle = '#ddd';
    ctx1.stroke();
  }

  function drawPoint(x, y) {
    ctx1.beginPath();
    ctx1.arc(x * gridSize1, y * gridSize1, 4, 0, Math.PI * 2);
    ctx1.fillStyle = '#079292';
    ctx1.fill();
  }

  function clearcanvas1() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    drawGrid();
  }

  function snapToGrid(mouseX, mouseY) {
    return {
      x: Math.round(mouseX / gridSize1),
      y: Math.round(mouseY / gridSize1),
    };
  }

  function updateNotification() {
    if (isCorrectPointClicked) {
      document.getElementById('benar4').classList.remove('hidden');
      document.getElementById('benar4').classList.add('inline-block');
      document.getElementById('salah4').classList.add('hidden');
      document.getElementById('benarA').classList.remove('hidden');
    } else {
      document.getElementById('salah4').classList.remove('hidden');
      document.getElementById('salah4').classList.add('inline-block');
      document.getElementById('benar4').classList.add('hidden');
    }
  }

  canvas1.addEventListener('click', function (e) {
    if (isCorrectPointClicked) {
      // Jika titik yang benar sudah diklik, tidak melakukan apa-apa
      return;
    }

    var rect = canvas1.getBoundingClientRect();
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;

    var snappedPoint = snapToGrid(mouseX, mouseY);
    clickedPoint.x = snappedPoint.x;
    clickedPoint.y = snappedPoint.y;
    isPointClicked = true; // Menandai bahwa titik telah diklik

    clearcanvas1();
    drawPoint(clickedPoint.x, clickedPoint.y);
  });

  checkButton2.addEventListener('click', function () {
    if (!isPointClicked || isCorrectPointClicked) {
      // Jika titik belum diklik atau titik yang benar sudah diklik, tidak melakukan apa-apa
      return;
    }

    var correctPosition = clickedPoint.x === correctPoint.x && clickedPoint.y === correctPoint.y;
    isCorrectPointClicked = correctPosition; // Menandai status apakah titik yang benar telah diklik
    updateNotification();
  });

  drawGrid();
});
