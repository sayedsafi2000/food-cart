const products = [
    {
      id: 0,
      image: "/assest/chicken_chup.jpg",
      title: "chicken chup",
      details: "Chicken legs, greek yogurt, poppy seeds, garam masala",
      price: 15,
    },
    {
      id: 1,
      image: "assest/fride_rice.jpg",
      title: "fride rice",
      details:
        "Transform leftover rice with peas, eggs, soy sauce, and carrots. Delicious on its own, or alongside any entrée.",
      price: 15,
    },
  ];
  
  let cart = [];
  
  function addToCart(id) {
    const selectedItem = products.find((item) => item.id === id);
    if (selectedItem) {
      cart.push({ ...selectedItem, quantity: 1 });
      displayCart();
      var product = document.getElementById(id);
      var button = product.querySelector(".btn");
      button.setAttribute("disabled", "true");
    }
  }
  
  function removeCartItem(index,id) {
    cart.splice(index, 1);
    displayCart();
    let product = document.getElementById(`${id}`);
    let button = product.querySelector(".btn");
    button.removeAttribute("disabled", "true");
  }
  
  function updateQuantity(index, newQuantity) {
    if (newQuantity > 0) {
      cart[index].quantity = newQuantity;
      displayCart();
    }
  }
  
  function displayCart() {
    let total = 0;
    const cartContainer = document.getElementById("cartItem");
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "Your Cart Is Empty";
      document.getElementById("total").innerHTML = "$ 0.00";
    } else {
      cartContainer.innerHTML = cart
        .map((item, index) => {
          const { id, image, title, price, quantity } = item;
          total += price * quantity;
  
          return `
              <div class="mb-4 w-full">
                <div class="mx-auto flex items-center border-[10px] border-white shadow-lg">
                  <img class="mr-0 pl-4 lg:mr-10 h-full w-full lg:w-[120px]" src=${image} alt="Product" />
                  <div class="flex flex-col items-start">
                    <h3 class="text-lg uppercase font-bold mb-2">${title}</h3>
                    <div class="flex">
                      <button class="w-[50px] h-[35px] border-2 shadow-md" onclick="updateQuantity(${index}, ${quantity - 1
            })"><i class="fas fa-minus"></i></button>
                      <input class="bg-white w-[80px] text-center" value="${quantity}" readonly>
                      <button class="w-[50px] h-[35px] border-2 shadow-md" onclick="updateQuantity(${index}, ${quantity + 1
            })"><i class="fas fa-plus"></i></button>
                    </div>
                    <div class="w-full flex justify-between items-center">
                      <p class="text-sm text-gray">${price}$/each</p>
                      <p id="upDown" class="text-black text-end p-5">${price * quantity
            }$</p>
                      <button class="px-2 rounded-md bg-[#b20000] text-white border-none" onclick="removeCartItem(${index})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            `;
        })
        .join("");
  
      document.getElementById("total").innerHTML = `$ ${total.toFixed(2)}`;
    }
  
    document.getElementById("count").innerHTML = cart.length;
  }
  
  document.getElementById("root").innerHTML = products
    .map((item) => {
      const { id, image, title, price, details } = item;
      return `
          <div id=${id} class="bg-base-100 h-[500px] shadow-xl">
            <figure><img class="h-[240px] w-full" src=${image} alt="Product" /></figure>
            <div class="card-body">
              <h2 class="card-title">${title}</h2>
              <p>${details}</p>
              <p>Price:<span class="">$${price}</span></p>
              <button class='btn btn-active bg-[#b20000] text-white border-none ml-5' onclick='addToCart(${id})'>Add To Cart</button>
            </div>
          </div>
        `;
    })
    .join("");
  