// Menunggu kerangka HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    // Memilih semua elemen yang ditandai dengan class 'animasi-melayang'
    const elemenAnimasi = document.querySelectorAll('.animasi-melayang');

    // Membuat alat pemantau guliran layar
    const pengamatScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Jika elemen (Wali Kelas / Struktur Organisasi) mulai terlihat di layar
            if (entry.isIntersecting) {
                // Tambahkan class 'muncul' agar CSS menggerakkannya ke atas
                entry.target.classList.add('muncul');
                
                // Opsional: Hentikan pemantauan jika sudah muncul agar animasi tidak berulang-ulang
                pengamatScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Animasi berjalan saat 10% bagian elemen terlihat
    });

    // Menerapkan pemantau ke seluruh kartu dan elemen yang sudah dipilih
    elemenAnimasi.forEach(elemen => {
        pengamatScroll.observe(elemen);
    });

});
