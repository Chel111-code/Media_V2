document.addEventListener('DOMContentLoaded', function () {
  const garisCermin1 = document.getElementById('garisCermin1'); // Ganti 'ID_element' dengan ID yang sesuai

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-garisCermin1');
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(garisCermin1);
});

document.addEventListener('DOMContentLoaded', function () {
  const pencerminan1 = document.getElementById('pencerminan1'); // Ganti 'ID_element' dengan ID yang sesuai

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-pencerminan1');
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(pencerminan1);
});

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

document.addEventListener('DOMContentLoaded', function () {
  const ContohRefleksi = document.getElementById('ContohRefleksi');
  const yahuu = document.getElementById('yahuu');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === ContohRefleksi && entry.intersectionRatio >= 1) {
          observer.unobserve(ContohRefleksi);
          yahuu.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(ContohRefleksi);
});

document.addEventListener('DOMContentLoaded', function () {
  const muncul1 = document.getElementById('muncul1');
  const svg1 = document.getElementById('svg1');
  const garisCermin3 = document.getElementById('garisCermin3');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === muncul1 && entry.intersectionRatio >= 1) {
          observer.unobserve(muncul1);
          svg1.classList.add('animate-tes1Pemahaman1');
          garisCermin3.classList.add('animate-garisCermin2');
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

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === muncul2 && entry.intersectionRatio >= 1) {
          observer.unobserve(muncul2);
          svg2.classList.add('animate-tes1Pemahaman2');
          garisCermin4.classList.add('animate-garisCermin2');
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

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === muncul3 && entry.intersectionRatio >= 1) {
          observer.unobserve(muncul3);
          svg3.classList.add('animate-tes1Pemahaman3');
          garisCermin5.classList.add('animate-garisCermin2');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(muncul3);
});

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
  const subjekHapusSumbu = document.getElementById('subjekHapusSumbu');
  const hapusSumbu = document.getElementById('hapusSumbu');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === subjekHapusSumbu && entry.intersectionRatio >= 1) {
          observer.unobserve(subjekHapusSumbu);
          hapusSumbu.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(subjekHapusSumbu);
});

document.addEventListener('DOMContentLoaded', function () {
  const subjkeHapusTitik = document.getElementById('subjkeHapusTitik');
  const hapusTitik = document.getElementById('hapusTitik');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === subjkeHapusTitik && entry.intersectionRatio >= 1) {
          observer.unobserve(subjkeHapusTitik);
          hapusTitik.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(subjkeHapusTitik);
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

document.addEventListener('DOMContentLoaded', function () {
  const subjekKedua = document.getElementById('subjekKedua');
  const hapusKedua = document.getElementById('hapusKedua');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === subjekKedua && entry.intersectionRatio >= 1) {
          observer.unobserve(subjekKedua);
          hapusKedua.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(subjekKedua);
});

document.addEventListener('DOMContentLoaded', function () {
  const hapusKeenam = document.getElementById('hapusKeenam');
  const keenam = document.getElementById('keenam');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === hapusKeenam && entry.intersectionRatio >= 1) {
          observer.unobserve(hapusKeenam);
          keenam.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(hapusKeenam);
});

document.addEventListener('DOMContentLoaded', function () {
  const hapusKetiga = document.getElementById('hapusKetiga');
  const ketiga = document.getElementById('ketiga');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === hapusKetiga && entry.intersectionRatio >= 1) {
          observer.unobserve(hapusKetiga);
          ketiga.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(hapusKetiga);
});

document.addEventListener('DOMContentLoaded', function () {
  const hapusKedua = document.getElementById('hapusKedua');
  const kedua = document.getElementById('kedua');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === hapusKedua && entry.intersectionRatio >= 1) {
          observer.unobserve(hapusKedua);
          kedua.classList.remove('hidden');
        }
      });
    },
    {
      threshold: 1,
    }
  );

  observer.observe(hapusKedua);
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
    { x: 48, y: 144 },
    { x: 24, y: 192 },
    { x: 96, y: 216 },
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
