document.addEventListener("DOMContentLoaded", function() {
    
    // 1. DATA GALERI (ARRAY)
    // Cukup copy-paste satu baris ini saja untuk menambah foto baru
    const dataGaleri = [
        { foto: "https://picsum.photos/800/600?random=1", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/600/900?random=2", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/700/700?random=3", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/600/1000?random=4", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/900/600?random=5", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/800/500?random=6", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/700/800?random=7", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/600/600?random=8", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/800/700?random=9", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/900/900?random=10", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/700/600?random=11", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/800/800?random=12", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/600/700?random=13", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/900/800?random=14", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/700/900?random=15", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/800/600?random=16", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/600/800?random=17", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/700/700?random=18", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/900/600?random=19", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { foto: "https://picsum.photos/800/500?random=20", judul: "Lorem Ipsum", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
    ];

    const tempatGaleri = document.getElementById('tempat-galeri');

    // 2. LOGIKA PERULANGAN (MENCETAK HTML)
    // Jika berada di halaman galeri, jalankan pencetakan
    if (tempatGaleri) {
        let semuaKumpulanHTML = "";
        
        dataGaleri.forEach(item => {
            semuaKumpulanHTML += `
                <div class="galeri-item animasi-melayang">
                    <img src="${item.foto}" alt="${item.judul}">
                    <div class="galeri-overlay">
                        <h4>${item.judul}</h4>
                        <p>${item.deskripsi}</p>
                    </div>
                </div>
            `;
        });
        
        // Memasukkan seluruh cetakan tadi ke dalam HTML
        tempatGaleri.innerHTML = semuaKumpulanHTML;
    }

    // 3. ANIMASI MELAYANG (Untuk semua halaman)
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
