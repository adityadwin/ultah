// script.js - Penghitung total waktu dari 3 Maret 2007 hingga saat ini
document.addEventListener('DOMContentLoaded', function() {
    // Tanggal awal - 3 Maret 2007
    const startDate = new Date('2007-03-03T00:00:00');
    
    // Elemen untuk menampilkan counter
    const dayElement = document.getElementById('days');
    const hourElement = document.getElementById('hours');
    const minuteElement = document.getElementById('minutes');
    const secondElement = document.getElementById('seconds');
    
    // Fungsi untuk menghitung total waktu berlalu
    function updateCounter() {
        const currentDate = new Date();
        
        // Menghitung perbedaan dalam milidetik
        const timeDifference = currentDate.getTime() - startDate.getTime();
        
        // Menghitung total hari, jam, menit, dan detik
        const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        // Format angka dengan leading zero jika perlu
        const formattedHours = String(remainingHours).padStart(2, '0');
        const formattedMinutes = String(remainingMinutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        
        // Memperbarui elemen HTML dengan nilai yang dihitung
        if (dayElement) dayElement.textContent = totalDays;
        if (hourElement) hourElement.textContent = formattedHours;
        if (minuteElement) minuteElement.textContent = formattedMinutes;
        if (secondElement) secondElement.textContent = formattedSeconds;
    }
    
    // Memperbarui counter setiap detik
    updateCounter();
    setInterval(updateCounter, 1000);
});