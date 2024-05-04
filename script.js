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
    { x: 5 * gridSize, y: 1 * gridSize },
    { x: 4 * gridSize, y: 4 * gridSize },
    { x: 1 * gridSize, y: 5 * gridSize },
  ];
  let points = [
    { x: 48, y: 48 },
    { x: 24, y: 120 },
    { x: 96, y: 144 },
  ];
  let dragPoint = null;

  // Target coordinates
  const targetPoints = [
    { x: 72, y: 120 },
    { x: 144, y: 168 },
    { x: 168, y: 96 },
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

document.addEventListener('DOMContentLoaded', function () {
  const jajargenjang = document.getElementById('jajargenjang');
  const ohini = document.getElementById('ohini');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === jajargenjang && entry.intersectionRatio >= 1) {
          observer.unobserve(jajargenjang);
          ohini.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(jajargenjang);
});

document.addEventListener('DOMContentLoaded', function () {
  const TesPertama1 = document.getElementById('TesPertama1');
  const animateTescuy1 = document.getElementById('animateTescuy1');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === TesPertama1 && entry.intersectionRatio >= 1) {
          observer.unobserve(TesPertama1);
          animateTescuy1.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(TesPertama1);
});

const checkButton = document.getElementById('Check1');

// Tambahkan event listener ke tombol "Check"
checkButton.addEventListener('click', function checkHandler() {
  // Ambil tombol yang sedang memiliki latar belakang gelap
  const activeButton = document.querySelector('#TesPertama1 .bg-secondary');

  // Jika tombol yang memiliki latar belakang gelap adalah tombol "C1"
  if (activeButton && activeButton.id === 'buttonA1') {
    // Tampilkan pesan "Benar"
    document.getElementById('benar1').classList.remove('hidden');
    document.getElementById('benar1').classList.add('inline-block');
    document.getElementById('buttonA1').classList.add('bg-[#7BFFD0]');
    document.getElementById('buttonA1').classList.remove('bg-secondary');

    document.getElementById('A1').classList.add('border-hijau');
    document.getElementById('A1').classList.add('bg-white');
    // Sembunyikan pesan "Salah"
    document.getElementById('salah1').classList.add('hidden');
  } else {
    // Tampilkan pesan "Salah"
    document.getElementById('salah1').classList.remove('hidden');
    document.getElementById('salah1').classList.add('inline-block');
    document.getElementById('buttonA1').classList.add('bg-[#7BFFD0]');
    document.getElementById('A1').classList.add('border-hijau');
    document.getElementById('A1').classList.add('bg-white');
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

  // Aktifkan tombol "Check1"
  checkButton.removeAttribute('disabled');
}

// Dapatkan referensi ke semua elemen div ABCD
const divs = document.querySelectorAll('#TesPertama1 .flex');

// Tambahkan event listener ke setiap div ABCD
divs.forEach((div) => {
  div.addEventListener('click', divClickHandler);
});

setTimeout(function () {
  gsap.to('#tes_pengetahuan5', {
    duration: 3,
    scale: 1.7, // Skala elemen menjadi 1.7
    ease: 'power1.inOut',
    opacity: 1,
    repeat: -1,
    yoyo: true, // Mengizinkan animasi mundur
  });

  gsap.to('#tes_pengetahuan5', {
    duration: 6,
    scale: 0.8, // Skala elemen menjadi 0.8
    ease: 'power1.inOut',
    opacity: 1,
    repeat: -1,
    yoyo: true, // Mengizinkan animasi mundur
    delay: 3, // Menunda animasi agar dimulai setelah animasi sebelumnya selesai
  });
}, 0);

function toggleNavbar() {
  var sidebar = document.getElementById('sidebar');
  var wacawbutton = document.getElementById('sidebarToggle');
  var homeButton = document.getElementById('home');
  var judul = document.getElementById('judul');

  sidebar.classList.toggle('translate-x-full');
  sidebar.classList.toggle('translate-x-0');

  // Menggunakan kelas 'translate' yang telah didefinisikan
  wacawbutton.classList.toggle('translate-x-4');
  homeButton.classList.toggle('translate-x-4');

  judul.classList.toggle('hidden');
}

document.getElementById('slider1').addEventListener('input', function () {
  var value = this.value;
  var image = document.getElementById('image-to-translate');
  image.style.transform = 'translateX(' + value + 'px)';
});

document.getElementById('slider2').addEventListener('input', function () {
  var scaleValue = this.value;
  var scaledElement = document.getElementById('image-to-dilate');

  // Mengatur skala elemen berdasarkan nilai slider
  scaledElement.style.transform = 'scale(' + scaleValue + ')';
});

document.addEventListener('DOMContentLoaded', function () {
  var handle = document.querySelector('.resize-handle');
  var isDragging = false; // Menandakan apakah sedang menggeser atau tidak
  var offsetX, offsetY;

  handle.addEventListener('touchstart', function (e) {
    isDragging = true;
    var touch = e.touches[0];
    // Menyimpan posisi awal sentuhan
    offsetX = touch.clientX - this.offsetLeft;
    offsetY = touch.clientY - this.offsetTop;
  });

  document.addEventListener('touchmove', function (e) {
    if (!isDragging) return; // Berhenti jika tidak sedang menggeser
    e.preventDefault();
    var touch = e.touches[0];
    // Menghitung posisi baru elemen
    var newX = touch.clientX - offsetX;
    var newY = touch.clientY - offsetY;
    // Menyesuaikan posisi elemen
    handle.style.left = newX + 'px';
    handle.style.top = newY + 'px';
  });

  document.addEventListener('touchend', function () {
    isDragging = false; // Menghentikan menggeser ketika sentuhan dilepas
  });
});
