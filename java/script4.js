document.addEventListener('DOMContentLoaded', function () {
  const sumbuCermin = document.getElementById('sumbuCermin');
  const animasisumbuCermin = document.getElementById('animasisumbuCermin');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === sumbuCermin && entry.intersectionRatio >= 1) {
          observer.unobserve(sumbuCermin);
          animasisumbuCermin.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(sumbuCermin);
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
        if (entry.target === rotasiBerlawanan && entry.intersectionRatio >= 0.7) {
          observer.unobserve(rotasiBerlawanan);
          animasirotasiBerlawanan.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 0.7,
    }
  );

  observer.observe(rotasiBerlawanan);
});

document.addEventListener('DOMContentLoaded', function () {
  const pusatTitik = document.getElementById('pusatTitik');
  const animasipusatTitik = document.getElementById('animasipusatTitik');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === pusatTitik && entry.intersectionRatio >= 0.7) {
          observer.unobserve(pusatTitik);
          animasipusatTitik.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 0.7,
    }
  );

  observer.observe(pusatTitik);
});

var specialAngles = [
  -360, -330, -315, -300, -270, -240, -225, -210, -180, -150, -135, -120, -90, -60, -45, -30, 0, 30,
  45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360,
];

function setRotation(degrees) {
  var kotak1 = document.getElementById('kotak1');
  var pusat = document.getElementById('pusat');
  var x =
    ((pusat.offsetLeft + pusat.offsetWidth / 2 - kotak1.offsetLeft) / kotak1.offsetWidth) * 100 +
    '%';
  var y =
    ((pusat.offsetTop + pusat.offsetHeight / 2 - kotak1.offsetTop) / kotak1.offsetHeight) * 100 +
    '%';
  kotak1.style.transformOrigin = x + ' ' + y;
  kotak1.style.transform = `rotate(${degrees}deg)`;
}

function findNearestAngle(currentAngle, direction) {
  var nearestAngle = specialAngles[0];
  var difference = Math.abs(currentAngle - specialAngles[0]);
  for (var i = 0; i < specialAngles.length; i++) {
    var currentDifference = Math.abs(currentAngle - specialAngles[i]);
    if (currentDifference < difference) {
      difference = currentDifference;
      nearestAngle = specialAngles[i];
    }
  }

  return nearestAngle;
}

function adjustRotation(direction) {
  var degreeInput = document.getElementById('degreeInput');
  var currentAngle = parseInt(degreeInput.value);

  if (direction === -1) {
    // Tombol panah kiri (-)
    for (var i = 0; i < specialAngles.length; i++) {
      if (currentAngle === specialAngles[i]) {
        if (i === 0) {
          currentAngle = specialAngles[specialAngles.length - 1];
        } else {
          currentAngle = specialAngles[i - 1];
        }
        break;
      }
    }
  } else {
    // Tombol panah kanan (+)
    for (var i = 0; i < specialAngles.length; i++) {
      if (currentAngle === specialAngles[i]) {
        if (i === specialAngles.length - 1) {
          currentAngle = specialAngles[0];
        } else {
          currentAngle = specialAngles[i + 1];
        }
        break;
      }
    }
  }

  degreeInput.value = currentAngle;
  setRotation(-currentAngle);
}

function setRotationFromInput() {
  var degreeInput = document.getElementById('degreeInput');
  var inputAngle = parseInt(degreeInput.value);
  var nearestAngle = findNearestAngle(inputAngle, 1);
  degreeInput.value = nearestAngle;
  setRotation(nearestAngle);
}

document.addEventListener('DOMContentLoaded', function () {
  const contohPertama = document.getElementById('contohPertama');
  const animasicontohPertama = document.getElementById('animasicontohPertama');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === contohPertama && entry.intersectionRatio >= 1) {
          observer.unobserve(contohPertama);
          animasicontohPertama.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(contohPertama);
});

document.addEventListener('DOMContentLoaded', function () {
  const bangunDatar = document.getElementById('bangunDatar');
  const rotasibangunDatar = document.getElementById('rotasibangunDatar');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === bangunDatar && entry.intersectionRatio >= 1) {
          observer.unobserve(bangunDatar);
          rotasibangunDatar.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(bangunDatar);
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
    { x: 48, y: 144 },
    { x: 24, y: 216 },
    { x: 96, y: 216 },
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
    ctx.strokeStyle = 'transparent'; // Warna grid

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
}

document.getElementById('Check2').addEventListener('click', function () {
  const activeButton = document.querySelector('#TesKedua1 .animate-ping');

  if (activeButton && activeButton.id === 'C2') {
    buttonsTesKedua1.forEach((button) => {
      if (button.id !== 'C2') {
        button.classList.add('hidden');
      }
    });
    // Jika benar, tampilkan pesan "Benar"
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
  // Menghapus kelas "bg-primary" dari semua tombol
  const buttons = document.querySelectorAll('#TesKedua1 button');
  buttons.forEach((button) => {
    button.classList.remove('animate-ping');
  });
  // Menambahkan kelas "bg-primary" ke tombol yang diklik
  this.classList.add('animate-ping');
}

// Tambahkan event listener ke setiap tombol di dalam div TesKedua1
const buttonsTesKedua1 = document.querySelectorAll('#TesKedua1 button:not(#Check2)');
buttonsTesKedua1.forEach((button) => {
  button.addEventListener('click', buttonClickHandler);
});

document.addEventListener('DOMContentLoaded', function () {
  const TesPertama1 = document.getElementById('TesPertama1');
  const animasiTesPertama1 = document.getElementById('animasiTesPertama1');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === TesPertama1 && entry.intersectionRatio >= 1) {
          observer.unobserve(TesPertama1);
          animasiTesPertama1.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(TesPertama1);
});

function toggleNavbar() {
  var sidebar = document.getElementById('sidebar');
  var wacawbutton = document.getElementById('sidebarToggle');
  var homeButton = document.getElementById('home');
  var judul = document.getElementById('judul');

  sidebar.classList.toggle('translate-x-full');
  sidebar.classList.toggle('translate-x-0');

  // Menggunakan kelas 'translate' yang telah didefinisikan
  wacawbutton.classList.toggle('translate-x-full');
  homeButton.classList.toggle('translate-x-full');

  judul.classList.toggle('hidden');
}
