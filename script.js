window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('border-b-2', 'bg-opacity-90', 'bg-[#FBFDFE]');
  } else {
    navbar.classList.remove('border-b-2', 'bg-opacity-90', 'bg-[#FBFDFE]');
  }
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

document.getElementById('lihatPopup').addEventListener('click', function () {
  document.getElementById('popUp').classList.remove('hidden');
  document.getElementById('popUp').classList.add('zoomIn');
});

document.getElementById('closePopup').addEventListener('click', function () {
  document.getElementById('popUp').classList.add('hidden');
});

document.getElementById('lihatPopup2').addEventListener('click', function () {
  document.getElementById('popUp2').classList.remove('hidden');
  document.getElementById('popUp2').classList.add('zoomIn');
});

document.getElementById('closePopup2').addEventListener('click', function () {
  document.getElementById('popUp2').classList.add('hidden');
});

document.getElementById('lihatEs').addEventListener('click', function () {
  document.getElementById('es').classList.remove('hidden');
  document.getElementById('es').classList.add('zoomIn');
  document.getElementById('lihatEs').classList.add('hidden');
});

function removeanimateTescuy1() {
  var animateTescuy1 = document.getElementById('animateTescuy1');
  animateTescuy1.classList.remove('hidden');

  var play2 = document.getElementById('play2');
  play2.classList.add('hidden');
}

function transformA() {
  const popupSalah = document.getElementById('popupSalah');
  popupSalah.classList.remove('hidden');
  popupSalah.classList.add('zoomIn');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);

  document.getElementById('transformA').classList.add('hidden');
}

function transformB() {
  document.getElementById('transfomasiABC').classList.add('hidden');
  document.getElementById('imgbenar').classList.remove('hidden');
  document.getElementById('imgbenar').classList.add('zoomIn');
}

function transformC() {
  const popupSalah = document.getElementById('popupSalah');
  popupSalah.classList.remove('hidden');
  popupSalah.classList.add('zoomIn');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);

  document.getElementById('transformC').classList.add('hidden');
}

function byg() {
  document.getElementById('bygFull').classList.add('hidden');
  document.getElementById('imgbenar2').classList.remove('hidden');
  document.getElementById('imgbenar2').classList.add('zoomIn');
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
    { x: 3 * gridSize, y: 1 * gridSize },
    { x: 4 * gridSize, y: 4 * gridSize },
    { x: 1 * gridSize, y: 5 * gridSize },
  ];
  let points = [
    { x: 48, y: 144 },
    { x: 24, y: 192 },
    { x: 96, y: 216 },
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
    drawTriangle(triangle, 'transparent');

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

function removeOhini() {
  var ohini = document.getElementById('ohini');
  ohini.classList.remove('hidden');

  var play1 = document.getElementById('play1');
  play1.classList.add('hidden');
}

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

document.addEventListener('DOMContentLoaded', function () {
  var shape = document.getElementById('shape');
  var handles = shape.querySelectorAll('.resize-handle');
  var isDragging = false;
  var startTouchX, startTouchY;
  var startWidth, startHeight;

  function updateSize(width, height) {
    shape.style.width = width + 'px';
    shape.style.height = height + 'px';
  }

  function getNewSize(touch) {
    var deltaX = touch.clientX - startTouchX;
    var deltaY = touch.clientY - startTouchY;
    var newWidth = startWidth + deltaX;
    var newHeight = startHeight + deltaY;

    // Limit resize within container
    newWidth = Math.min(newWidth, shape.parentElement.clientWidth);
    newHeight = Math.min(newHeight, shape.parentElement.clientHeight);

    return { width: newWidth, height: newHeight };
  }

  handles.forEach(function (handle) {
    handle.addEventListener('touchstart', function (e) {
      isDragging = true;
      var touch = e.touches[0];
      startTouchX = touch.clientX;
      startTouchY = touch.clientY;
      startWidth = shape.offsetWidth;
      startHeight = shape.offsetHeight;
    });
  });

  document.addEventListener('touchmove', function (e) {
    if (!isDragging) return;
    e.preventDefault();
    var touch = e.touches[0];
    var newSize = getNewSize(touch);
    updateSize(newSize.width, newSize.height);
  });

  document.addEventListener('touchend', function () {
    isDragging = false;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var canvas1 = document.getElementById('canvas');
  var ctx1 = canvas1.getContext('2d');
  var gridSize1 = 24; // Ukuran grid
  var correctPoint = { x: 2, y: 3 }; // Contoh titik yang benar
  var clickedPoint = { x: -1, y: -1 }; // Titik yang dipilih oleh pengguna
  var checkButton2 = document.getElementById('Check2'); // Tombol "Check"
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
    ctx1.arc(x * gridSize1, y * gridSize1, 3, 0, Math.PI * 2);
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
      document.getElementById('benar2').classList.remove('hidden');
      document.getElementById('benar2').classList.add('inline-block');
      document.getElementById('salah2').classList.add('hidden');
    } else {
      document.getElementById('salah2').classList.remove('hidden');
      document.getElementById('salah2').classList.add('inline-block');
      document.getElementById('benar2').classList.add('hidden');
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

function tomboline1() {
  document.getElementById('line1').classList.add('hidden');
  document.getElementById('line2').classList.remove('hidden');
}

function tunggu() {
  document.getElementById('imgline2').classList.add('hidden');
  document.getElementById('img2line2').classList.remove('hidden');
  document.getElementById('textline2').classList.add('hidden');
  document.getElementById('text2line2').classList.remove('hidden');
  document.getElementById('tunggu').classList.add('hidden');
  document
    .getElementById('ayo')
    .classList.add('-translate-y-7', '-translate-x-8', 'md:-translate-x-10', 'md:-translate-y-1');
}

function ayo() {
  document.getElementById('line2').classList.add('hidden');
  document.getElementById('line3').classList.remove('hidden');
}

function tomboline2() {
  document.getElementById('imgline3').classList.remove('scale-x-[-1]');
  document.getElementById('imgline3').classList.add('transisi3');
  document
    .getElementById('textline3')
    .classList.add(
      '-translate-x-[132px]',
      'translate-y-[30px]',
      'md:-translate-x-[222px]',
      'md:translate-y-[10px]'
    );
  document.getElementById('textline3').classList.add('rounded-br-none');
  document.getElementById('text2line3').classList.add('hidden');
  document.getElementById('tomboline2').classList.add('hidden');
  document.getElementById('tomboline3').classList.remove('hidden');
}

function tomboline3() {
  document.getElementById('line3').classList.add('hidden');
  document.getElementById('line4').classList.remove('hidden');
  document.getElementById('ikan').classList.add('ikan');
}

function tomboline4() {
  document.getElementById('line4').classList.add('hidden');
  document.getElementById('line5').classList.remove('hidden');
}

function tomboline5() {
  document.getElementById('line5').classList.add('hidden');
  document.getElementById('line6').classList.remove('hidden');
}

function tomboline6() {
  document.getElementById('line6').classList.add('hidden');
  document.getElementById('line7').classList.remove('hidden');
}

function yaline7() {
  document.getElementById('correctline7').classList.remove('hidden');
  document.getElementById('tomboline7').classList.remove('hidden');
  document.getElementById('questline7').classList.add('hidden');
}

function bukanline7() {
  document.getElementById('wrongline7').classList.remove('hidden');
  document.getElementById('tomboline7').classList.remove('hidden');
  document.getElementById('questline7').classList.add('hidden');
}

function yaline8() {
  document.getElementById('correctline8').classList.remove('hidden');
  document.getElementById('tomboline8').classList.remove('hidden');
  document.getElementById('questline8').classList.add('hidden');
}

function bukanline8() {
  document.getElementById('wrongline8').classList.remove('hidden');
  document.getElementById('tomboline8').classList.remove('hidden');
  document.getElementById('questline8').classList.add('hidden');
}

function tomboline7() {
  document.getElementById('line7').classList.add('hidden');
  document.getElementById('line8').classList.remove('hidden');
}

function tomboline8() {
  document.getElementById('line8').classList.add('hidden');
  document.getElementById('line9').classList.remove('hidden');
}

function tomboline9() {
  document.getElementById('line9').classList.add('hidden');
  document.getElementById('line10').classList.remove('hidden');
}

function tomboline11() {
  document.getElementById('line11').classList.add('hidden');
  document.getElementById('line10').classList.add('hidden');
  document.getElementById('line12').classList.remove('hidden');
}

function tomboline12() {
  document.getElementById('line12').classList.add('hidden');
  document.getElementById('line13').classList.remove('hidden');
}

function tomboline13() {
  document.getElementById('line13').classList.add('hidden');
  document.getElementById('komik').classList.add('hidden');
  document.getElementById('line14').classList.remove('hidden');
}
