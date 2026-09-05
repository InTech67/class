document.addEventListener("DOMContentLoaded", function() {
    
    /* ==========================================
       1. DATA ANGGOTA KELAS (47 Orang)
       ========================================== */
    const dataAnggota = [
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        },
        {
            foto: "https://picsum.photos/150/150?random=$",
            nama: "Lorem Ipsum",
            peran: "Lorem Ipsum Dolor",
            bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
        }
        
    ];

    // Proses Mencetak Kartu Anggota ke HTML
    const tempatAnggota = document.getElementById('tempat-anggota');
    if (tempatAnggota) {
        let htmlAnggota = "";
        dataAnggota.forEach(item => {
            htmlAnggota += `
                <div class="card animasi-melayang">
                    <img src="${item.foto}" alt="Foto ${item.nama}">
                    <h3>${item.nama}</h3>
                    <p class="role">${item.peran}</p>
                    <p class="bio">${item.bio}</p>
                </div>
            `;
        });
        tempatAnggota.innerHTML = htmlAnggota;
    }


    /* ==========================================
       2. DATA GALERI FOTO
       ========================================== */
    const dataGaleri = [
        { foto: "https://picsum.photos/800/600?random=1", judul: "Juara Class", deskripsi: "Momen selebrasi menang lomba." },
        { foto: "https://picsum.photos/600/900?random=2", judul: "Praktikum Biologi", deskripsi: "Mengamati sel di lab." },
        { foto: "https://picsum.photos/700/700?random=3", judul: "Tugas PKWU", deskripsi: "Hasil karya kerajinan kelompok 2." }
        // Tambahkan data galeri lainnya di sini...
    ];

    // Proses Mencetak Foto Galeri ke HTML
    const tempatGaleri = document.getElementById('tempat-galeri');
    if (tempatGaleri) {
        let htmlGaleri = "";
        dataGaleri.forEach(item => {
            htmlGaleri += `
                <div class="galeri-item animasi-melayang">
                    <img src="${item.foto}" alt="${item.judul}">
                    <div class="galeri-overlay">
                        <h4>${item.judul}</h4>
                        <p>${item.deskripsi}</p>
                    </div>
                </div>
            `;
        });
        tempatGaleri.innerHTML = htmlGaleri;
    }


    /* ==========================================
       3. LOGIKA ANIMASI MELAYANG (SCROLL)
       ========================================== */
    const elemenAnimasi = document.querySelectorAll('.animasi-melayang');
    const pengamatScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('muncul');
            }
        });
    }, { threshold: 0.1 });

    elemenAnimasi.forEach(elemen => {
        pengamatScroll.observe(elemen);
    });

});