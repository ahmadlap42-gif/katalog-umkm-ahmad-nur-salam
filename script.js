// ===============================
// PENCARIAN DAN FILTER PRODUK
// ===============================

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productCards = document.querySelectorAll(".product-card");
const emptyState = document.getElementById("emptyState");

function filterProducts() {
// Pastikan elemen pencarian dan kategori tersedia
if (!searchInput || !categoryFilter) return;

```
const keyword = searchInput.value.toLowerCase().trim();
const selectedCategory = categoryFilter.value;

let totalVisible = 0;

productCards.forEach(function (card) {
    const productName = (card.dataset.name || "").toLowerCase();
    const productCategory = card.dataset.category || "";

    const matchesName = productName.includes(keyword);

    const matchesCategory =
        selectedCategory === "semua" ||
        productCategory === selectedCategory;

    if (matchesName && matchesCategory) {
        card.hidden = false;
        totalVisible++;
    } else {
        card.hidden = true;
    }
});

// Tampilkan pesan jika produk tidak ditemukan
if (emptyState) {
    emptyState.hidden = totalVisible > 0;
}
```

}

// Jalankan pencarian ketika pengguna mengetik
if (searchInput) {
searchInput.addEventListener("input", filterProducts);
}

// Jalankan filter ketika kategori berubah
if (categoryFilter) {
categoryFilter.addEventListener("change", filterProducts);
}

// ===============================
// MENU NAVIGASI UNTUK HP
// ===============================

const menuToggle = document.getElementById("menuToggle");
