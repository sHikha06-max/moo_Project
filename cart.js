// 1 - getting cart data, showing cart data,
     var count = 0;
    let cart_data = JSON.parse(localStorage.getItem("cart"));
    // console.log(cart_data);
     count = cart_data.length;
    //  let quantity = document.getElementById("quantity");
    //    quantity.innerHTML = `Quantity- ${count} `;
    let data_div = document.getElementById("data");
   // var total = 0;
   // var quantity = 0;
var sum = 0;
      let main_div_1 = document.getElementById("block");
//let main_div = document.getElementById("data_1");

cart_data.forEach(function (product) {
       
        let div = document.createElement("div");
        div.setAttribute("class","box")

        let div_1 = document.createElement("div");
        div_1.setAttribute("class", "box2")
        
        let div_2 = document.createElement("div");
        div_2.setAttribute("class", "box3")
        div_2.innerHTML = '<select name = "stickers" id="stickers"><option value="50 stickers">50 stickers</option><option value="60 stickers">60 stickers</option><option value="80 stickers">80 stickers</option><option value= "90 stickers">90 stickers</option></select>'
        
        let p_name = document.createElement("p");
        p_name.setAttribute("class", "name")
        p_name.innerText = product.name;

        let p_price = document.createElement("p");
         p_price.setAttribute("class","price")
        p_price.innerText = product.price;
        
        var Price = product.price.split(" ");
        var n = Price.length;
        var a = Price[n - 1];
        var k = a.split("$");
       var d = Number(k[1]);
       sum += d;

       
        div_1.append(p_name, p_price)
       
        let img = document.createElement("img");
        img.setAttribute("class", "image");

        img.src = product.image;

       

        div.append(img, div_1,div_2);

        data_div.append(div);

       // quantit 

    });
    
      //   let div_4 = document.createElement("div");
      //   div_4.setAttribute("class", "box4");

       
       // console.log(option.value);
        var select = document.getElementById("stickers").selectedIndex;
if (select == "50 stickers") {
           console.log("stickers");
        }
        // console.log(select);
        //console.log(d);
let cost = document.createElement("div")
cost.setAttribute("class", "cost");
        let p = document.createElement("p");
        p.innerHTML = `Items subtotal: $${sum}`;
        
      let shipping = document.createElement("p");
shipping.innerHTML = `Shipping (other shipping options available): $4.50`;
        
     let total = document.createElement("p");
        total.innerHTML = `Total:: $${sum+ 4.50}`;
cost.append(p, shipping, total);
        //div_4.append(p);
       data_div.append(cost);
        
//main_div_1.append(data_div);
        
       //total = total + Number(product.price);
         //console.log(sum);

    // let total_h1 = document.getElementById("total");

    // total_h1.innerHTML = `Total Price- ${total} `;


function thankyou() {
       setTimeout(function(){window.location.href= "success.html";  }, 3000);
       
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
function continueShopping() {
    window.location.href = "product.html"
}
