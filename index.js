let products = JSON.parse(localStorage.getItem('product')) || [];

// const ui = (products) => {
//     console.log(products);
//     document.getElementById("ui").innerHTML = ''
//     products.map((product) => {
//      let img = document.createElement("img");
//      img.src = product.img;
//      let title = document.createElement("h2");
//      title.innerHTML = product.title;
//      let price = document.createElement("h3");
//      price.innerHTML = product.price;
//      let category = document.createElement("p");
//      category.innerHTML = product.category;
//      let div = document.createElement("div");
//      div.append(img,title,price,category);
//      document.getElementById("ui").appendChild(div);  
//     });
// };

// ui(products)
const ui = (products) => {
    document.getElementById("ui").innerHTML = "";
    let temp = ``;
    products.map((ele,product) => {
        temp += `<div>
        <img src=${ele.img} alt="" class="img">
        <h1>Title : ${ele.title}</h1>
        <h2>Price : ${ele.price}</h2>
        <h3>Category : ${ele.category}</h3>
        <button >Add to cart </button>
        </div>`;
    })
    document.getElementById("ui").innerHTML = temp;
};
    ui(products)


const productdata = (e) => {
    e.preventDefault();
    let product = {
        title:document.getElementById("title").value,
        img:document.getElementById("img").value,
        price:document.getElementById("price").value,
        category:document.getElementById("category").value,
    };
    products.push(product);
    localStorage.setItem("product", JSON.stringify(products));
    ui(products);
    
};


document.querySelector("form").addEventListener("submit", productdata)


// sorting by price 

const hendlelth = () => {
    let data = products.sort((a,b) => a.price - b.price);
    ui(data);
    console.log(data);
}

document.getElementById("lth").addEventListener("click",hendlelth);

const hendlehtl = () => {
    let data = products.sort((a,b) => b.price - a.price);
    ui(data);
    console.log(data);
}

document.getElementById("htl").addEventListener("click",hendlehtl);

// filter products by category 

const handleCategory = (cat) => {
    
}