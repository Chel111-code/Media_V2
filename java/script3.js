const wahyu = document.getElementById('wahyu');
const wahyuBayang = document.getElementById('wahyu-bayang');
const containerWahyu = document.getElementById('containerWahyu');
const mirrorLineX = containerWahyu.offsetWidth / 2;
const margin = 20; // Mengurangi batas pergeseran dengan margin 20px

// Initial positions
const wahyuInitialX = 50; // Initial X position of wahyu
wahyu.style.left = `${wahyuInitialX}px`;
wahyuBayang.style.left = `${2 * mirrorLineX - wahyuInitialX - wahyu.offsetWidth}px`;

function startDrag(event) {
  event.preventDefault(); // Prevent default behavior
  let startX = event.clientX || event.touches[0].clientX;

  function onMouseMove(event) {
    let x = event.clientX || event.touches[0].clientX;
    let deltaX = x - startX;
    let newLeft = wahyu.offsetLeft + deltaX;

    // Ensure the element stays within the horizontal bounds of the container
    if (newLeft < margin) newLeft = margin;
    if (newLeft > mirrorLineX - wahyu.offsetWidth / 2 - margin)
      newLeft = mirrorLineX - wahyu.offsetWidth / 2 - margin;
    byg;
    wahyu.style.left = newLeft + 'px';
    // Update the mirrored element's position
    let wahyuCenterX = newLeft + wahyu.offsetWidth / 2;
    let wahyuBayangCenterX = 2 * mirrorLineX - wahyuCenterX;
    wahyuBayang.style.left = wahyuBayangCenterX - wahyuBayang.offsetWidth / 2 + 'px';

    startX = x;
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchmove', onMouseMove);
    document.removeEventListener('touchend', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('touchmove', onMouseMove);
  document.addEventListener('touchend', onMouseUp);
}

wahyu.addEventListener('mousedown', startDrag);
wahyu.addEventListener('touchstart', startDrag);

document.addEventListener('DOMContentLoaded', function () {
  const muncul1 = document.getElementById('muncul1');
  const svg1 = document.getElementById('svg1');
  const garisCermin3 = document.getElementById('garisCermin3');
  const aksenA = document.getElementById('aksenA');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === muncul1 && entry.intersectionRatio >= 1) {
          observer.unobserve(muncul1);
          svg1.classList.add('animate-tes1Pemahaman1');
          garisCermin3.classList.add('animate-garisCermin2');
          aksenA.classList.add('aksen');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(muncul1);
});

document.addEventListener('DOMContentLoaded', function () {
  const muncul2 = document.getElementById('muncul2');
  const svg2 = document.getElementById('svg2');
  const garisCermin4 = document.getElementById('garisCermin4');
  const aksenB = document.getElementById('aksenB');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === muncul2 && entry.intersectionRatio >= 1) {
          observer.unobserve(muncul2);
          svg2.classList.add('animate-tes1Pemahaman2');
          garisCermin4.classList.add('animate-garisCermin2');
          aksenB.classList.add('aksen');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(muncul2);
});

document.addEventListener('DOMContentLoaded', function () {
  const muncul3 = document.getElementById('muncul3');
  const svg3 = document.getElementById('svg3');
  const garisCermin5 = document.getElementById('garisCermin5');
  const aksenC = document.getElementById('aksenC');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === muncul3 && entry.intersectionRatio >= 1) {
          observer.unobserve(muncul3);
          svg3.classList.add('animate-tes1Pemahaman3');
          garisCermin5.classList.add('animate-garisCermin2');
          aksenC.classList.add('aksen');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(muncul3);
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

function removeIniya() {
  var iniya = document.getElementById('iniya');
  iniya.classList.remove('hidden', 'opacity-30');

  var play1 = document.getElementById('play1');
  play1.classList.toggle('hidden');
}

function removeyahuu() {
  var yahuu = document.getElementById('yahuu');
  yahuu.classList.remove('hidden');

  var play2 = document.getElementById('play2');
  play2.classList.toggle('hidden');

  var yahuu1 = document.getElementById('yahuu1');
  yahuu1.classList.toggle('opacity-30');
}

function removetes1() {
  var tes1 = document.getElementById('tes1');
  tes1.classList.toggle('inline');
}

document.getElementById('play3').addEventListener('click', function () {
  const TesPertama1 = document.getElementById('TesPertama1');
  TesPertama1.classList.add('hidden');
  setTimeout(() => {
    TesPertama1.classList.remove('hidden');
  }, 50);
});

function removehapusSumbu() {
  var hapusSumbu = document.getElementById('hapusSumbu');
  hapusSumbu.classList.remove('opacity-30');

  var play4 = document.getElementById('play4');
  play4.classList.toggle('hidden');

  var hapusSumbu0 = document.getElementById('hapusSumbu0');
  hapusSumbu0.classList.toggle('hidden');
}

function removehapusTitik() {
  var hapusTitik = document.getElementById('hapusTitik');
  hapusTitik.classList.remove('opacity-30');

  var play5 = document.getElementById('play5');
  play5.classList.toggle('hidden');

  var hapusTitik0 = document.getElementById('hapusTitik0');
  hapusTitik0.classList.toggle('hidden');
}

document.getElementById('play6').addEventListener('click', function () {
  const TesPertama2 = document.getElementById('TesPertama2');
  TesPertama2.classList.add('hidden');
  setTimeout(() => {
    TesPertama2.classList.remove('hidden');
  }, 50);
});

function removehapusKedua() {
  var hapusKedua = document.getElementById('hapusKedua');
  hapusKedua.classList.remove('opacity-30');

  var play7 = document.getElementById('play7');
  play7.classList.toggle('hidden');

  var kedua = document.getElementById('kedua');
  kedua.classList.toggle('hidden');
}

function choiceA() {
  const popupBenar = document.getElementById('popupBenar');
  popupBenar.classList.remove('hidden');
  popupBenar.classList.add('zoomIn');
  setTimeout(() => {
    popupBenar.classList.add('hidden');
  }, 1500);

  document.getElementById('choice').classList.add('hidden');
  document.getElementById('imgbenar').classList.remove('hidden');
  document.getElementById('imgbenar').classList.add('zoomIn');
}

function choiceB() {
  const popupSalah = document.getElementById('popupSalah');
  popupSalah.classList.remove('hidden');
  popupSalah.classList.add('zoomIn');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);
  document.getElementById('choiceB').classList.add('hidden');
}

function choiceC() {
  const popupSalah2 = document.getElementById('popupSalah');
  popupSalah2.classList.remove('hidden');
  popupSalah.classList.add('zoomIn');
  setTimeout(() => {
    popupSalah2.classList.add('hidden');
  }, 1500);
  document.getElementById('choiceC').classList.add('hidden');
}

function sq1() {
  document.getElementById('quest1').classList.add('hidden');
  document.getElementById('q1').classList.remove('hidden');
  document.getElementById('pilihan1').classList.add('hidden');
  popupBenar.classList.remove('hidden');
  setTimeout(() => {
    popupBenar.classList.add('hidden');
  }, 1500);
  popupBenar.classList.add('zoomIn');
}

function tq1() {
  document.getElementById('quest1').classList.add('hidden');
  document.getElementById('q1').classList.remove('hidden');
  document.getElementById('pilihan1').classList.add('hidden');
  popupSalah.classList.remove('hidden');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);
  popupSalah.classList.add('zoomIn');
}

function sq2() {
  document.getElementById('quest2').classList.add('hidden');
  document.getElementById('q2').classList.remove('hidden');
  document.getElementById('pilihan2').classList.add('hidden');
  popupBenar.classList.remove('hidden');
  setTimeout(() => {
    popupBenar.classList.add('hidden');
  }, 1500);
  popupBenar.classList.add('zoomIn');
}

function tq2() {
  document.getElementById('quest2').classList.add('hidden');
  document.getElementById('q2').classList.remove('hidden');
  document.getElementById('pilihan2').classList.add('hidden');
  popupSalah.classList.remove('hidden');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);
  popupBenar.classList.add('zoomIn');
}

function sq3() {
  document.getElementById('quest3').classList.add('hidden');
  document.getElementById('q3').classList.remove('hidden');
  document.getElementById('pilihan3').classList.add('hidden');
  popupBenar.classList.remove('hidden');
  setTimeout(() => {
    popupBenar.classList.add('hidden');
  }, 1500);
  popupBenar.classList.add('zoomIn');
}

function tq3() {
  document.getElementById('quest3').classList.add('hidden');
  document.getElementById('q3').classList.remove('hidden');
  document.getElementById('pilihan3').classList.add('hidden');
  popupSalah.classList.remove('hidden');
  setTimeout(() => {
    popupSalah.classList.add('hidden');
  }, 1500);
  popupSalah.classList.add('zoomIn');
}

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

function removehapusKetiga() {
  var hapusKetiga = document.getElementById('hapusKetiga');
  hapusKetiga.classList.remove('opacity-30');

  var play8 = document.getElementById('play8');
  play8.classList.toggle('hidden');

  var ketiga = document.getElementById('ketiga');
  ketiga.classList.toggle('hidden');
}

function removehapusKeenam() {
  var hapusKeenam = document.getElementById('hapusKeenam');
  hapusKeenam.classList.remove('opacity-30');

  var play9 = document.getElementById('play9');
  play9.classList.toggle('hidden');

  var keenam = document.getElementById('keenam');
  keenam.classList.toggle('hidden');
}
// Batas baru

function toggleNavbar() {
  var sidebar = document.getElementById('sidebar');
  var wacawbutton = document.getElementById('sidebarToggle');
  var homeButton = document.getElementById('home');
  var judul = document.getElementById('judul');

  sidebar.classList.toggle('translate-x-full');
  sidebar.classList.toggle('translate-x-0');
  sidebar.classList.toggle('text-primary');
  sidebar.classList.toggle('text-white');

  // Menggunakan kelas 'translate' yang telah didefinisikan
  wacawbutton.classList.toggle('translate-x-4');
  homeButton.classList.toggle('translate-x-4');

  judul.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
  const muncul4 = document.getElementById('muncul4');
  const animatemuncul4 = document.getElementById('animatemuncul4');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === muncul4 && entry.intersectionRatio >= 1) {
          observer.unobserve(muncul4);
          animatemuncul4.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(muncul4);
});

document.addEventListener('DOMContentLoaded', function () {
  const muncul5 = document.getElementById('muncul5');
  const animatemuncul5 = document.getElementById('animatemuncul5');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === muncul5 && entry.intersectionRatio >= 1) {
          observer.unobserve(muncul5);
          animatemuncul5.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(muncul5);
});

document.addEventListener('DOMContentLoaded', function () {
  const muncul6 = document.getElementById('muncul6');
  const animatemuncul6 = document.getElementById('animatemuncul6');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === muncul6 && entry.intersectionRatio >= 1) {
          observer.unobserve(muncul6);
          animatemuncul6.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(muncul6);
});

document.addEventListener('DOMContentLoaded', function () {
  const selectPertama = document.getElementById('selectPertama');
  const pertama = document.getElementById('pertama');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === selectPertama && entry.intersectionRatio >= 1) {
          observer.unobserve(selectPertama);
          pertama.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(selectPertama);
});

// batas
// Fungsi untuk menangani klik pada div ABCD
// Mendapatkan referensi ke tombol "Check2"
const checkButton2 = document.getElementById('Check2');

checkButton2.addEventListener('click', function () {
  // Memeriksa apakah tombol "Check2" sudah pernah diklik sebelumnya
  if (!this.disabled) {
    const activeButton = document.querySelector('#TesPertama2 .bg-secondary');

    if (activeButton && activeButton.id === 'buttonC2') {
      document.getElementById('benar2').classList.remove('hidden');
      document.getElementById('benar2').classList.add('inline-block');
      document.getElementById('buttonC2').classList.add('bg-[#7BFFD0]');
      document.getElementById('buttonC2').classList.remove('bg-secondary');
      document.getElementById('C2').classList.add('border-hijau');
      document.getElementById('C2').classList.add('bg-white');
    } else {
      document.getElementById('salah2').classList.remove('hidden');
      document.getElementById('salah2').classList.add('inline-block');
      document.getElementById('buttonC2').classList.add('bg-[#7BFFD0]');
      document.getElementById('C2').classList.add('border-hijau');
      document.getElementById('C2').classList.add('bg-white');
    }

    // Menonaktifkan tombol "Check2" setelah diklik
    this.disabled = true;

    // Menonaktifkan event listener pada divs2 setelah tombol "Check2" diklik
    divs2.forEach((div) => {
      div.removeEventListener('click', divClickHandler2);
    });
  }
});

// Fungsi untuk menangani klik pada div ABCD
function divClickHandler2() {
  // Menghapus kelas "bg-secondary" dari semua tombol
  const buttons = document.querySelectorAll('#TesPertama2 button');
  buttons.forEach((button) => {
    button.classList.remove('bg-secondary');
  });
  // Menambahkan kelas "bg-secondary" ke tombol di dalam div yang diklik
  const button = this.querySelector('#TesPertama2 button');
  button.classList.add('bg-secondary');

  // Mengaktifkan tombol "Check2" dengan menghapus atribut disabled
  checkButton2.removeAttribute('disabled');
}

// Dapatkan referensi ke semua elemen div ABCD di konten kedua
const divs2 = document.querySelectorAll('#TesPertama2 .flex');

// Tambahkan event listener ke setiap div ABCD di konten kedua
divs2.forEach((div) => {
  div.addEventListener('click', divClickHandler2);
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
    { x: 3 * gridSize, y: 1 * gridSize },
    { x: 4 * gridSize, y: 4 * gridSize },
    { x: 1 * gridSize, y: 5 * gridSize },
  ];
  let points = [
    { x: 192, y: 144 },
    { x: 168, y: 192 },
    { x: 216, y: 192 },
  ];
  let dragPoint = null;

  // Target coordinates
  const targetPoints = [
    { x: 144, y: 144 },
    { x: 120, y: 216 },
    { x: 216, y: 168 },
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

document.addEventListener('DOMContentLoaded', function () {
  var canvas1 = document.getElementById('canvas');
  var ctx1 = canvas1.getContext('2d');
  var gridSize1 = 24; // Ukuran grid
  var correctPoint = { x: 1, y: 2 }; // Contoh titik yang benar
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
