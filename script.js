const product = [
    {
        id: 0,
        image: "/assest/chicken_chup.jpg",
        title: "chicken chup",
        details: "Chicken legs, greek yogurt, poppy seeds, garam masala",
        price: 15
    },

    {
        id: 1,
        image: "assest/fride_rice.jpg",
        title: "fride rice",
        details: " Transform leftover rice with peas, eggs, soy sauce, and carrots. Delicious on its own, or alongside any entrée.",
        price: 15
    }
];
const categories = [...new Set(product.map((item) => {
    return item
}))]
let i = 0;
document.getElementById("root").innerHTML = categories.map((item) => {
    var { image, title, price, details } = item;
    return (
        `<div class=" bg-base-100 h-[500px] shadow-xl">
                <figure><img class="h-[240px] w-full" src=${image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">${title}</h2>
                    <p>${details}</p>
                    <p>Price:<span class="">$${price}</span></p>`

                        +"<button onclick='addToCart("+(i++)+")' >Add To Cart</button>"+

                `</div>
            </div>`
    )
}).join('')

var cart = [];

function addToCart(a) {
    cart.push({ ...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a) {
    let j = 0;
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    
    if (cart.length == 0) {
        document.getElementById("cartItem").innerHTML = "Your Cart Is Empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map(
            (items) => {
                var { image, title, price } = items;
               total = total + price;
                document.getElementById("total").innerHTML = "$ "+total+".00";
                return (
                    `<div class="mb-4 w-full">
                    <div class="h-[130px] mx-auto flex  border-[10px] border-white shadow-lg">
                        <img class="mr-0 lg:mr-10 h-full w-[120px]" src=${image} alt="Shoes" />
                        <div class="flex flex-col items-start">
                        <h3 class="text-lg uppercase font-bold mb-2">${title}</h3>
                        <div class=" flex ">
                           <button class="w-[50px] h-[35px] border-2 shadow-md"><i class="fas fa-minus"></i></button>
                           <h2 id="case-number-field">1</h2>
                           <button id="btn-case-plus" class="w-[50px] h-[35px] border-2 shadow-md"><i class="fas fa-plus"></i></button>

                        </div>
                        <div class="w-full flex justify-between items-center" >
                        <p class="text-sm text-gray">${price}$/each</p>
                        <p id="upDown" class="text-black text-end p-5">${price}$</p>`

                        +"<button onclick='delElement("+(j++)+")' ><i class='fa-solid fa-trash'></i></button>"+
                        
                      `</div>
                        </div>
                        
                    </div>
                    
                    </div>`
                )
            }
        ).join('');
        // document.getElementById("btn-case-plus").addEventListener("click",function(){
        //     const caseNumberField = document.getElementById("case-number-field");
        //     const caseNumberString = caseNumberField.value;
        //     const previousCaseNumber = parseFloat(caseNumberString);
        //     console.log(previousCaseNumber);
        // })
    }
}

