
document.querySelectorAll(".role-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".role-switch button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});


document.querySelector(".eye-icon").addEventListener("click", () => {
  let passInput = document.getElementById("password");
  passInput.type = passInput.type === "password" ? "text" : "password";
});

document.getElementById("loginBtn").addEventListener("click", () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    window.location.href = "second.html"; 
  } else {
    alert("Login yoki parol xato ");
  }
});




const searchInput = document.querySelector('.in1');
const searchButton = document.querySelector('.btn3');
const products = Array.from(document.querySelectorAll('.card'));

function searchProduct() {
  const searchValue = searchInput.value.toLowerCase().trim();

  const filteredProducts = products.filter(product => {
    const productName = product.querySelector('h3')?.textContent.toLowerCase().trim() || '';
    return productName.includes(searchValue);
  });
  products.forEach(product => {
    product.style.display = 'none';
  });

  filteredProducts.forEach(product => {
    product.style.display = 'block';
  });
}


searchInput.addEventListener('input', searchProduct);


searchButton.addEventListener('click', searchProduct);


