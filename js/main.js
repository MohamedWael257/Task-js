let all_products = document.querySelector(".products")
let products = document.querySelectorAll(".product")
let product_title = document.querySelectorAll(".products .product-title")
let product_price = document.querySelectorAll(".products .product-b-price")
let add_product = document.querySelectorAll(".products .add-product")

let content = document.querySelector(".content")
let showbtn = document.querySelector(".showbtn")
let total = 0;
add_product.forEach(function (btn, index_btn) {
    btn.addEventListener('click', function () {
        product_title.forEach(function (pro_title, index_pro_title) {
            if (index_btn === index_pro_title) {
                // console.log(pro_title.innerHTML);
                content.innerHTML += pro_title.innerHTML + " , "
            }
        })
        product_price.forEach(function (pro_price, index_pro_price) {
            if (index_btn === index_pro_price) {
                // console.log(pro_price.innerHTML);
                total += +(pro_price.innerHTML)
                // console.log(total);
            }
        })
        // console.log(index, " : ", btn.innerHTML);
        if (content.innerHTML != "") {
            showbtn.style.display = "block"
        }

    })

})


showbtn.addEventListener('click', function () {
    let res_total = document.createElement('p')
    res_total.innerHTML = "Total Price : " + total + "EGB"
    document.body.append(res_total)
})