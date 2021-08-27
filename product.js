const Cards = [
        {
            name: "Original Business Cards",
            price: "50 cards from $19.99",
            image: "https://www.moo.com/dam/jcr:72d886d2-746a-4c68-a311-c55a9d80b615/paper-module-original-2-752x5642.jpg",
        },

        {
            name: "Cotton Business Cards",
            price: "50 cards from $26.99",
            image: "https://www.moo.com/.imaging/scale/dam/5d454446-c859-4d5c-bcdb-56e0cfe38e8e/CRB-4375-Cotton-BC-Category-Tile-752x5643.jpg",
        },
        {
            name: "Super Business Cards",
            price: "50 cards from $26.99",
            image: "https://www.moo.com/.imaging/scale/dam/85264548-af3c-4394-a10c-7608ae7804ab/CRB-4735-Super-Paper-module-752x5641.jpg",
        },
        {
            name: "Luxe Business Cards",
            price: "50 cards from $34.99",
            image: "https://www.moo.com/.imaging/scale/dam/4a549b06-c782-4f78-be99-2e7b02964516/CRB-5983-luxe-BC-module0.jpg",
    },
        {
            name: "Postcards",
            price: "25 postcards from $21.00",
            image: "https://www.moo.com/dam/jcr:cc36fb8f-2176-4977-ab62-deb71476dd29/MERCH-1426-PC-752x3762.jpg",
    },
        {
            name: "Flyers",
            price: "50 flyers from $35.00",
            image: "https://www.moo.com/dam/jcr:803fe556-9d04-4d90-830a-1dc8e953ba83/MERCH-1426-FL-752x3760.jpg",
    },
        {
            name: "Greeting Cards",
            price: "25 cards from $39.99",
            image: "https://www.moo.com/dam/jcr:441d84e3-0d42-4775-a955-b3bc741f8aef/MERCH-1426-GC-752x3760.jpg",
    },
        {
            name: "Invitations",
            price: "25 postcards from $21.00",
            image: "https://www.moo.com/.imaging/scale/dam/0656bd07-88e2-4eba-a357-72ecce8ceb52/MERCH-1426-Invitations-752x3761.jpg",
        },
        
    ];
    //convert into json
    const Cards_json = JSON.stringify(Cards);
    // Stor above data in localstorage
    localStorage.setItem("myCards", Cards_json);
    //Display on webpage
    let myCards = localStorage.getItem("myCards");

    //convert into operatable format, object!

    myCards = JSON.parse(myCards);
    //console.log(myCards);


    function showProducts() {
        let data_div = document.getElementById('data');

        myCards.forEach(function (product) {

            let div = document.createElement("div");

            let p_name = document.createElement("p");
            p_name.setAttribute("class","name")
            p_name.innerText = product.name;//we can use innerHTML and textContent as well in place of innerText
            
            let p_price = document.createElement("p");
            p_price.setAttribute("class","price")
            p_price.innerText = product.price;
           
            let image = document.createElement("img");
            image.src = product.image;
            
            let div_1 = document.createElement("div");
            div_1.setAttribute("class", "description");
            div_1.innerHTML = '<ul><li>Our “feel good” premium paper</li><li>Great quality and great value</li><li>Available in gloss or matte finishes</li></ul>';
           
           //create add to cart button then append it 
            let btn = document.createElement("button");
            btn.innerText = "Add to cart";

            btn.onclick = function () {
                addtoCart(product);
            }

            div.append(image, p_name, p_price,div_1,btn);
            data_div.append(div);//appending to parent div 
        })
    }
    showProducts();

    //checking if localstorge has anything or not
        if (localStorage.getItem("cart") === null) {
            localStorage.setItem("cart", JSON.stringify([]));
        }

         function addtoCart(p) {
                

                let cart_data = JSON.parse(localStorage.getItem("cart"));
              //  console.log(p);
             
              var flag = false;
              for(let i = 0;i<cart_data.length;i++){
                 //  console.log(cart_data[i].price);
                 if(cart_data[i].price == p.price){
                     flag = true;
                 } 
            } if(flag == false){
                cart_data.push(p);
            }
            else{
                alert("Already added in the cart");
            }
               


                localStorage.setItem("cart", JSON.stringify(cart_data));

}
function cartFunction() {
    window.location.href = "cart.html";
}
function show() {
        var box1 = document.getElementById("drop");

        box1.style.display = "block"



    }
    function showalter() {
        var box1 = document.getElementById("drop");

        box1.style.display = "none"

    }
function sign_In() {
    window.location.href = "signIn.html"
}