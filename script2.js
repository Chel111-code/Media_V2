document.addEventListener('aos:in', ({ detail }) => {
  const garisTranslasi = detail.querySelectorAll('.garis-translasi');
  const titikMuncul = detail.querySelector('.titikMuncul_Translasi');

  // Jalankan animasi garis
  garisTranslasi.forEach((garis) => {
    garis.style.animationName = 'garis1Translasi';
  });

  // Jalankan animasi titik
  titikMuncul.style.animationName = 'titikMuncul_Translasi';
});

document.addEventListener('aos:in', ({ detail }) => {
  const garis3Translasi = detail.querySelector('#garis3Translasi');

  // Tambahkan kelas untuk animasi dengan penundaan
  garis3Translasi.classList.add('delayed-animation');
});

document.getElementById('lihatSegitiga').addEventListener('click', function () {
  var lihatSegitiga = document.getElementById('lihatSegitiga');
  var sectionSegitiga = document.getElementById('sectionSegitiga');
  var sectionSegitiga2 = document.getElementById('sectionSegitiga2');

  // Hide the lihatSegitiga element
  lihatSegitiga.classList.add('hidden');

  // Show the sectionSegitiga element
  sectionSegitiga.classList.remove('hidden');
  sectionSegitiga2.classList.remove('hidden');

  // Add the zoomOut class after 4 seconds, then hide the sectionSegitiga element after the animation
  setTimeout(function () {
    sectionSegitiga.classList.add('zoomOut');
    setTimeout(function () {
      sectionSegitiga.classList.add('hidden');
      sectionSegitiga.classList.remove('zoomOut');
      // Show the lihatSegitiga element again
    }, 1000); // Match the duration of the zoomOut animation
  }, 4000);
});

document.getElementById('lihatABCD').addEventListener('click', function () {
  var ABCD = document.getElementById('ABCD');
  var popABCD = document.getElementById('popABCD');
  var isiABCD = document.getElementById('isiABCD');
  var lihatABCD = document.getElementById('lihatABCD');

  // Hide the lihatSegitiga element
  ABCD.classList.remove('hidden');
  lihatABCD.classList.add('hidden');
  popABCD.classList.add('zoomIn');

  // Show the sectionSegitiga element

  // Add the zoomOut class after 4 seconds, then hide the sectionSegitiga element after the animation
  setTimeout(function () {
    popABCD.classList.remove('custom-utility');

    isiABCD.classList.add('zoomOut9');
    // Match the duration of the zoomOut animation
  }, 7000);
});

document.getElementById('lihatEFGH').addEventListener('click', function () {
  var EFGH = document.getElementById('EFGH');
  var popEFGH = document.getElementById('popEFGH');
  var isiEFGH = document.getElementById('isiEFGH');
  var lihatEFGH = document.getElementById('lihatEFGH');

  // Hide the lihatSegitiga element
  EFGH.classList.remove('hidden');
  lihatEFGH.classList.add('hidden');
  popEFGH.classList.add('zoomIn');

  // Show the sectionSegitiga element

  // Add the zoomOut class after 4 seconds, then hide the sectionSegitiga element after the animation
  setTimeout(function () {
    popEFGH.classList.remove('custom-utility');

    isiEFGH.classList.add('zoomOut9');
    // Match the duration of the zoomOut animation
  }, 7000);
});

document.getElementById('lihatBoyA').addEventListener('click', function () {
  var boyA = document.getElementById('boyA');
  var popBoyA = document.getElementById('popBoyA');
  var isiBoyA = document.getElementById('isiBoyA');
  var lihatBoyA = document.getElementById('lihatBoyA');

  // Hide the lihatSegitiga element
  boyA.classList.remove('hidden');
  lihatBoyA.classList.add('hidden');
  popBoyA.classList.add('zoomIn');
  isiBoyA.classList.add('scale-[1.6]');
  isiBoyA.classList.add('translate-x-4');

  // Show the sectionSegitiga element

  // Add the zoomOut class after 4 seconds, then hide the sectionSegitiga element after the animation
  setTimeout(function () {
    popBoyA.classList.remove('custom-utility');

    isiBoyA.classList.add('zoomOut9');
    isiBoyA.classList.remove('scale-[1.6]');
    // Match the duration of the zoomOut animation
  }, 8000);
});

document.getElementById('lihatBoyB').addEventListener('click', function () {
  var boyB = document.getElementById('boyB');
  var popBoyB = document.getElementById('popBoyB');
  var isiBoyB = document.getElementById('isiBoyB');
  var lihatBoyB = document.getElementById('lihatBoyB');

  // Hide the lihatSegitiga element
  boyB.classList.remove('hidden');
  lihatBoyB.classList.add('hidden');
  popBoyB.classList.add('zoomIn');
  isiBoyB.classList.add('scale-[1.6]');
  isiBoyB.classList.add('translate-x-4');

  // Show the sectionSegitiga element

  // Add the zoomOut class after 4 seconds, then hide the sectionSegitiga element after the animation
  setTimeout(function () {
    popBoyB.classList.remove('custom-utility');

    isiBoyB.classList.add('zoomOut9');
    isiBoyB.classList.remove('scale-[1.6]');
    // Match the duration of the zoomOut animation
  }, 8000);
});

document.getElementById('lihatBoyC').addEventListener('click', function () {
  var BoyC = document.getElementById('BoyC');
  var popBoyC = document.getElementById('popBoyC');
  var isiBoyC = document.getElementById('isiBoyC');
  var lihatBoyC = document.getElementById('lihatBoyC');

  // Hide the lihatSegitiga element
  BoyC.classList.remove('hidden');
  lihatBoyC.classList.add('hidden');
  popBoyC.classList.add('zoomIn');
  isiBoyC.classList.add('scale-[1.6]');
  isiBoyC.classList.add('translate-x-4');

  // Show the sectionSegitiga element

  // Add the zoomOut class after 4 seconds, then hide the sectionSegitiga element after the animation
  setTimeout(function () {
    popBoyC.classList.remove('custom-utility');

    isiBoyC.classList.add('zoomOut9');
    isiBoyC.classList.remove('scale-[1.6]');
    // Match the duration of the zoomOut animation
  }, 8000);
});

document.getElementById('lihatTrans1').addEventListener('click', function () {
  var Trans1 = document.getElementById('Trans1');
  var popTrans1 = document.getElementById('popTrans1');
  var isiTrans1 = document.getElementById('isiTrans1');

  var lihatTrans1 = document.getElementById('lihatTrans1');

  // Hide the lihatSegitiga element
  Trans1.classList.remove('hidden');
  lihatTrans1.classList.add('hidden');
  popTrans1.classList.add('zoomIn');
  isiTrans1.classList.add('scale-110');

  // Show the sectionSegitiga element

  // Add the zoomOut class after 4 seconds, then hide the sectionSegitiga element after the animation
  setTimeout(function () {
    popTrans1.classList.remove('custom-utility');
    isiTrans1.classList.add('scale-100');
    isiTrans1.classList.add('zoomOut9');

    // Match the duration of the zoomOut animation
  }, 8000);
});
document.getElementById('lihatTrans2').addEventListener('click', function () {
  var Trans2 = document.getElementById('Trans2');
  var popTrans2 = document.getElementById('popTrans2');
  var isiTrans2 = document.getElementById('isiTrans2');

  var lihatTrans2 = document.getElementById('lihatTrans2');

  // Hide the lihatSegitiga element
  Trans2.classList.remove('hidden');
  lihatTrans2.classList.add('hidden');
  popTrans2.classList.add('zoomIn');
  isiTrans2.classList.add('scale-110');

  // Show the sectionSegitiga element

  // Add the zoomOut class after 4 seconds, then hide the sectionSegitiga element after the animation
  setTimeout(function () {
    popTrans2.classList.remove('custom-utility');
    isiTrans2.classList.add('scale-100');
    isiTrans2.classList.add('zoomOut9');

    // Match the duration of the zoomOut animation
  }, 8000);
});

function trans1B() {
  const popupSalah = document.getElementById('popupSalah');
  popupSalah.classList.remove('hidden');
  popupSalah.classList.add('zoomIn');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);

  document.getElementById('trans1B').classList.add('hidden');
}

function trans1C() {
  document.getElementById('trans1ABC').classList.add('hidden');
  document.getElementById('imgbenarnich').classList.remove('hidden');
  document.getElementById('imgbenarnich').classList.add('zoomIn');
}

function trans1A() {
  const popupSalah = document.getElementById('popupSalah');
  popupSalah.classList.remove('hidden');
  popupSalah.classList.add('zoomIn');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);

  document.getElementById('trans1A').classList.add('hidden');
}

function trans2B() {
  const popupSalah = document.getElementById('popupSalah');
  popupSalah.classList.remove('hidden');
  popupSalah.classList.add('zoomIn');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);

  document.getElementById('trans2B').classList.add('hidden');
}

function trans2A() {
  document.getElementById('trans2AB').classList.add('hidden');
  document.getElementById('imgbenarwadaw').classList.remove('hidden');
  document.getElementById('imgbenarwadaw').classList.add('zoomIn');
}

function bangunA() {
  const popupSalah = document.getElementById('popupSalah');
  popupSalah.classList.remove('hidden');
  popupSalah.classList.add('zoomIn');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);

  document.getElementById('bangunA').classList.add('hidden');
}

function bangunB() {
  document.getElementById('bangunAB').classList.add('hidden');
  document.getElementById('imgbenarbangun').classList.remove('hidden');
  document.getElementById('imgbenarbangun').classList.add('zoomIn');
}

function bangunD() {
  const popupSalah = document.getElementById('popupSalah');
  popupSalah.classList.remove('hidden');
  popupSalah.classList.add('zoomIn');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);

  document.getElementById('bangunD').classList.add('hidden');
}

function bangunC() {
  document.getElementById('bangunCD').classList.add('hidden');
  document.getElementById('imgbenarbangunCD').classList.remove('hidden');
  document.getElementById('imgbenarbangunCD').classList.add('zoomIn');
}

document.getElementById('choiceC').addEventListener('click', handleClick);
document.getElementById('isiBoyC').addEventListener('click', handleClick);
document.getElementById('choiceB').addEventListener('click', handleClick2);
document.getElementById('isiBoyB').addEventListener('click', handleClick2);
document.getElementById('choiceA').addEventListener('click', handleClick3);
document.getElementById('isiBoyA').addEventListener('click', handleClick3);

function handleClick() {
  const popupSalah = document.getElementById('popupSalah');
  popupSalah.classList.remove('hidden');
  popupSalah.classList.add('zoomIn');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);

  document.getElementById('holeC').classList.add('hidden');
}

function handleClick2() {
  const popupBenar = document.getElementById('popupBenar');
  popupBenar.classList.remove('hidden');
  popupBenar.classList.add('zoomIn');
  setTimeout(() => {
    popupBenar.classList.add('hidden');
  }, 1500);

  document.getElementById('choiceui').classList.add('hidden');
  document.getElementById('imgBenar').classList.remove('hidden');
}

function handleClick3() {
  const popupSalah = document.getElementById('popupSalah');
  popupSalah.classList.remove('hidden');
  popupSalah.classList.add('zoomIn');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);

  document.getElementById('holeA').classList.add('hidden');
}

function transformB() {
  const popupSalah = document.getElementById('popupSalah');
  popupSalah.classList.remove('hidden');
  popupSalah.classList.add('zoomIn');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);

  document.getElementById('transformB').classList.add('hidden');
}

function transformA() {
  document.getElementById('transfomasiABC').classList.add('hidden');
  document.getElementById('imgbenarloh').classList.remove('hidden');
  document.getElementById('imgbenarloh').classList.add('zoomIn');
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
    { x: 8 * gridSize, y: 4 * gridSize },
    { x: 9 * gridSize, y: 7 * gridSize },
    { x: 6 * gridSize, y: 6 * gridSize },
  ];
  let points = [
    { x: 48, y: 24 },
    { x: 24, y: 72 },
    { x: 72, y: 72 },
  ];
  let dragPoint = null;

  // Target coordinates
  const targetPoints = [
    { x: 96, y: 120 },
    { x: 72, y: 48 },
    { x: 24, y: 96 },
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
}); // Fungsi untuk menganimasikan elemen

document.addEventListener('DOMContentLoaded', function () {
  var canvas1 = document.getElementById('canvas');
  var ctx1 = canvas1.getContext('2d');
  var gridSize1 = 24; // Ukuran grid
  var correctPoint = { x: 7, y: 4 }; // Contoh titik yang benar
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
      document.getElementById('benar2').classList.remove('hidden');
      document.getElementById('benar2').classList.add('inline-block');
      document.getElementById('salah2').classList.add('hidden');
      document.getElementById('benarA').classList.remove('hidden');
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

  // Aktifkan tombol "Check1"
  checkButton.removeAttribute('disabled');
}

const canvas9 = document.getElementById('canvas9');
const ctx = canvas9.getContext('2d');
const translateXInput = document.getElementById('translate-x');
const translateYInput = document.getElementById('translate-y');
const translateBtn = document.getElementById('translate-btn');
const resetBtn = document.getElementById('reset-btn');
const notif = document.getElementById('notif');
const gridSize = 30;

// Initial position for the point B
let pointB = { x: 120, y: 120, label: 'B' };
let pointBPrime = null;

// Draw the grid
function drawGrid() {
  ctx.strokeStyle = '#ddd';
  for (let x = 0; x <= canvas9.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas9.height);
    ctx.stroke();
  }
  for (let y = 0; y <= canvas9.height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas9.width, y);
    ctx.stroke();
  }
}

// Draw the point
function drawPoint(point, color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = 'black';
  ctx.fillText(point.label, point.x + 5, point.y - 5);
}

// Draw everything on the canvas
function draw() {
  ctx.clearRect(0, 0, canvas9.width, canvas9.height);
  drawGrid();
  drawPoint(pointB, 'gray');
  if (pointBPrime) {
    drawPoint(pointBPrime, 'green');
  }
}

draw();

// Utility function to translate a point
function translatePoint(point, dx, dy) {
  return { x: point.x + dx * gridSize, y: point.y + dy * -gridSize, label: point.label + "'" };
}

// Animate translation
function animateTranslation(start, end, duration) {
  const startTime = performance.now();

  function animate(time) {
    const elapsedTime = time - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    const dx = (end.x - start.x) * progress;
    const dy = (end.y - start.y) * progress;

    const currentPoint = { x: start.x + dx, y: start.y, label: start.label };

    draw();
    drawPoint(currentPoint, 'green');

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      const endPoint = { x: end.x, y: start.y, label: start.label };
      requestAnimationFrame(() => animateVertical(endPoint, end, duration));
    }
  }

  requestAnimationFrame(animate);
}

// Animate vertical translation
function animateVertical(start, end, duration) {
  const startTime = performance.now();

  function animate(time) {
    const elapsedTime = time - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    const dy = (end.y - start.y) * progress;

    const currentPoint = { x: start.x, y: start.y + dy, label: start.label };

    draw();
    drawPoint(currentPoint, 'green');

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      pointBPrime = end;
      draw();
    }
  }

  requestAnimationFrame(animate);
}

// Show notification
function showNotification() {
  notif.classList.remove('hidden');
  setTimeout(() => {
    notif.classList.add('hidden');
  }, 3000);
}

// Translate button click handler
translateBtn.addEventListener('click', () => {
  const dx = parseInt(translateXInput.value);
  const dy = parseInt(translateYInput.value);

  if (dx < -3 || dx > 3 || dy < -3 || dy > 3) {
    showNotification();
    return;
  }

  pointBPrime = null; // Remove the previous translation result
  const newPoint = translatePoint(pointB, dx, dy);
  animateTranslation(pointB, newPoint, 1000);
});

// Reset button click handler
resetBtn.addEventListener('click', () => {
  pointB = { x: 120, y: 120, label: 'B' };
  pointBPrime = null;
  draw();
});

function animateElement() {
  gsap.to('.contohTranslasi1_after', {
    opacity: 1,
    duration: 1,

    onComplete: function () {
      // Setelah animasi selesai, atur kembali opacity ke 0
      gsap.set('.contohTranslasi1_after', { delay: 3.95, opacity: 0 });
      // Panggil kembali fungsi animateElement setelah 4 detik
      gsap.delayedCall(7, animateElement);
    },
  });
}

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

function toggleTabs(selectedTab) {
  // Identifikasi elemen-elemen tab dan kotak
  const translasiTab = document.getElementById('translasi');
  const bukanTranslasiTab = document.getElementById('bukanTranslasi');
  const kotakBiru = document.getElementById('kotakBiru');
  const kotakOrange = document.getElementById('kotakOrange');
  const hapusplay = document.getElementById('play1');

  // Cek tab mana yang dipilih dan terapkan kelas yang sesuai
  if (selectedTab === 'translasi') {
    translasiTab.className =
      'text-teal-600  bg-white w-2/5 h-8 rounded-xl ml-1  flex justify-center items-center cursor-pointer';
    bukanTranslasiTab.className =
      'w-3/5 h-8 rounded-xl flex justify-center items-center cursor-pointer';

    kotakBiru.classList.remove('hidden');
    kotakOrange.classList.add('hidden');
  } else {
    bukanTranslasiTab.className =
      'text-teal-600  bg-white w-3/5 h-8 rounded-xl  flex justify-center items-center cursor-pointer';
    translasiTab.className =
      'w-2/5 h-8 rounded-xl ml-1 flex justify-center items-center cursor-pointer';

    kotakBiru.classList.add('hidden');
    kotakOrange.classList.remove('hidden');
  }
}

function removeanimateKotakbiru() {
  var animateKotakbiru = document.getElementById('animateKotakbiru');
  animateKotakbiru.classList.remove('hidden');

  var play1 = document.getElementById('play1');
  play1.classList.toggle('hidden');
}

function removeanimatejarakPertama() {
  var animatejarakPertama = document.getElementById('animatejarakPertama');
  animatejarakPertama.classList.remove('hidden');

  var play2 = document.getElementById('play2');
  play2.classList.toggle('hidden');

  var buram1 = document.getElementById('buram1');
  buram1.classList.toggle('opacity-30');
}

function removeanimatejarakKedua() {
  var animatejarakKedua = document.getElementById('animatejarakKedua');
  animatejarakKedua.classList.remove('opacity-30');

  var play3 = document.getElementById('play3');
  play3.classList.toggle('hidden');

  var buram2 = document.getElementById('buram2');
  buram2.classList.toggle('hidden');
}

function removeanimatejarakKetiga() {
  var animatejarakKetiga = document.getElementById('animatejarakKetiga');
  animatejarakKetiga.classList.remove('opacity-30');

  var play4 = document.getElementById('play4');
  play4.classList.toggle('hidden');

  var buram3 = document.getElementById('buram3');
  buram3.classList.toggle('hidden');
}

function removeIniya() {
  var iniya = document.getElementById('iniya');
  iniya.classList.remove('hidden');

  var play6 = document.getElementById('play6');
  play6.classList.toggle('hidden');

  var ohiniya = document.getElementById('ohiniya');
  ohiniya.classList.toggle('opacity-30');
}

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
  document.getElementById('line2').classList.add('hidden');
  document.getElementById('line3').classList.remove('hidden');
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
  document.getElementById('line6stengah').classList.remove('hidden');
}

function tomboline6stengah() {
  document.getElementById('line6stengah').classList.add('hidden');
  document.getElementById('linestengah2').classList.remove('hidden');
}

function tombolinestengah2() {
  document.getElementById('linestengah2').classList.add('hidden');
  document.getElementById('line7').classList.remove('hidden');
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

function tomboline10() {
  document.getElementById('line10').classList.add('hidden');
  document.getElementById('line11').classList.remove('hidden');
}

function tomboline11() {
  document.getElementById('line11').classList.add('hidden');
  document.getElementById('line10').classList.add('hidden');
  document.getElementById('line12').classList.remove('hidden');
}

function tomboline12() {
  document.getElementById('line12').classList.add('hidden');
  document.getElementById('line12stengah').classList.remove('hidden');
}

function tomboline12stengah() {
  document.getElementById('line12stengah').classList.add('hidden');
  document.getElementById('line13').classList.remove('hidden');
}

function tomboline13() {
  document.getElementById('line13').classList.add('hidden');
  document.getElementById('komik').classList.add('hidden');
  document.getElementById('line14').classList.remove('hidden');
}

const moveButton = document.getElementById('moveButton');
const movable = document.getElementById('movable');
const buttonline2 = document.getElementById('tomboline2');
const container = movable.parentElement;
let clickCount = 0;

moveButton.addEventListener('click', () => {
  if (clickCount < 3) {
    const containerWidth = container.clientWidth;
    const movableWidth = movable.clientWidth;
    const maxLeft = containerWidth - movableWidth;
    const moveDistance = maxLeft / 3;

    const currentLeft = parseInt(window.getComputedStyle(movable).left, 10) || 0;
    const newLeft = currentLeft + moveDistance;
    movable.style.left = `${newLeft}px`;
    clickCount++;

    if (clickCount === 3) {
      moveButton.disabled = true;
      moveButton.classList.add('opacity-0');
      buttonline2.classList.remove('hidden');
    }
  }
});

function yaline7() {
  document.getElementById('correctline7').classList.remove('hidden');
  document.getElementById('tomboline7').classList.remove('hidden');
  document.getElementById('questline7').classList.add('hidden');
  document.getElementById('img2line7').classList.remove('hidden');
  document.getElementById('imgline7').classList.add('hidden');
}

function bukanline7() {
  document.getElementById('wrongline7').classList.remove('hidden');
  document.getElementById('tomboline7').classList.remove('hidden');
  document.getElementById('questline7').classList.add('hidden');
  document.getElementById('img3line7').classList.remove('hidden');
  document.getElementById('imgline7').classList.add('hidden');
}

function yaline8() {
  document.getElementById('correctline8').classList.remove('hidden');
  document.getElementById('tomboline8').classList.remove('hidden');
  document.getElementById('questline8').classList.add('hidden');
  document.getElementById('img2line8').classList.remove('hidden');
  document.getElementById('imgline8').classList.add('hidden');
}

function bukanline8() {
  document.getElementById('wrongline8').classList.remove('hidden');
  document.getElementById('tomboline8').classList.remove('hidden');
  document.getElementById('questline8').classList.add('hidden');
  document.getElementById('img3line8').classList.remove('hidden');
  document.getElementById('imgline8').classList.add('hidden');
}

function yaline11() {
  document.getElementById('correctline11').classList.remove('hidden');
  document.getElementById('tomboline11').classList.remove('hidden');
  document.getElementById('questline11').classList.add('hidden');
  document.getElementById('gridline11').classList.add('hidden');
}

function bukanline11() {
  document.getElementById('wrongline11').classList.remove('hidden');
  document.getElementById('tomboline11').classList.remove('hidden');
  document.getElementById('questline11').classList.add('hidden');
  document.getElementById('gridline11').classList.add('hidden');
}
