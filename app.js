
// function showproduc(){
//     let divItem = ''
//     for (let i in product ) {
//         divItem += `
//         <div class="grid-item">
//                     <div> <img src="${product[i].igm}" alt=""> </div>
//                    <div class="comment-phrase"> 
//                     <p> ${product[i].name} </p>
//                     <p>${product[i].price}  </p>
//                     <div class="text-content-purchase">
//                         <button class="sell-amount"> Sell</button>
//                         <p id="amount">${product[i].amount}</p>
//                         <button class="buy-purchase">Buy</button>
//                     </div>
//                 </div>
//         `
//     }
//     document.getElementById("products").innerHTML = divItem

// }
// showproduc()

// let sellBtn=document.getElementsByClassName("sell-btn");
// let buyBtn = document.getElementsByClassName("buy-btn");
// let amount=document.getElementsByClassName("amount");

// function caculator() {
//     for (let i=0; i< sellBtn.length; i++) {
//         buyBtn[i].addEventListener('click',function (){
//             item[i].amount += 1
//             amount[i].innerText =item[i].amount
//         })
//         sellBtn[i].addEventListener('click',function(){
//             item[i].amount -=1
//             amount[i].innerText = item[i].amount
//         })
//     }
// }
// caculator()

let data = [
    {
        img: "./img/img2.jpg",
        name: "Samsung S22 Ultra ",
        price: " 6,999$",
        monney: 2070,
        amount: 0,
        id: 1,
    },
    {
        img: "./img/img3.jpg",
        name: "IPhone14 ",
        price: " 6,999$",
        monney: 1195,
        amount: 0,
        id: 2,

    }, {
        img: "./img/img4.jpg",
        name: "PS4 Gaming ",
        price: " 6,999$",
        monney: 1182,
        amount: 0,
        id: 3,

    }, {
        img: "./img/img5.jpg",
        name: "PS5-Gaming",
        price: " 6,999$",
        monney: 1649,
        amount: 0,
        id: 4,

    },
    {
        img: "./img/img6.jpg",
        name: "Cui-gaming",
        price: " 6,999$",
        monney: 422,
        amount: 0,
        id: 5,

    },
    {
        img: "./img/img7.jpg",
        name: "MackBook Pro",
        price: " 6,999$",
        monney: 2344,
        amount: 0,
        id: 7,

    },
    {
        img: "./img/img8.jpg",
        name: "apple bay mini",
        price: " 6,999$",
        monney: 344,
        amount: 0,
        id: 8,

    },
    {
        img: "./img/img9.jpg",
        name: "Case PC gaming",
        price: " 6,999$",
        monney: 1344,
        amount: 0,
        id: 9,

    },
    {
        img: "./img/img10.jpg",
        name: "Laptop Razer Gaming",
        price: " 6,999$",
        monney: 344,
        amount: 0,
        id: 10,

    },
    {
        img: "./img/img11.jpg",
        name: "Build PC Apple",
        price: " 6,999$",
        monney: 1344,
        amount: 0,
        id: 11,

    },
    {
        img: "./img/img7.jpg",
        name: "Ipad-Gen10",
        price: " 6,999$",
        monney: 744,
        amount: 0,
        id: 12,

    },
    {
        img: "./img/img7.jpg",
        name: "wear",
        price: " 6,999$",
        monney: 111111 ,
        amount: 0,
        id: 13,

    }

]
// function show sản phẩm:
let bitcoins = document.getElementById("totalMoney");
let remaining = 217000000000;
function showpProduct(item) {
    divItem = '';
    for (let i = 0; i < data.length; i++) {
        divItem += `
        <div class="grid-item" id="products">
            <div> <img src="./img/./img${i + 2}.jpg" alt=""> </div>
            <div class="comment-phrase">
                <p> ${data[i].name} </p>
                <p> $${data[i].monney}</p>
                <div class="text-content-purchase">
                    <button onclick="giamHang(${data[i].id})" disabled id="disable${data[i].id}" class="sell-btn"> Sell</button>
                    <p id="amount${data[i].id}" class="amount" disabled >${data[i].amount}</p>
                    <button onclick="muaHang(${data[i].id})" class="buy-btn">Buy</button>
                </div>
            </div>
        </div>
        `
    }
    let renderData = document.getElementById("renderData");
    renderData.innerHTML = divItem;
}
showpProduct();
// đây là hàm tăng giảm số lượng hàng
function muaHang(id) {
    console.log("4444", id);

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            let amount = document.getElementById(`amount${id}`).innerHTML;
            amount++;
            document.getElementById(`amount${id}`).innerHTML = amount;
            remaining = remaining - data[i].monney;
            const formatted = remaining.toLocaleString();
            bitcoins.innerHTML=`Remaining: $${formatted}`;
            let percent= document.getElementById("spended");
            // let newNumber= 10**6 
            percent= (217000000000- remaining) / 217000000000 * 100;
            let base = 10 ** 6;
            let result = Math.round(percent * base) /base;
            spended.innerHTML=`  Phan tram khoi tai san ${result}%`;
            if(amount == "0"){
                document.getElementById(`disable${data[i].id}`).disabled=true;
               
             }else{
                document.getElementById(`disable${data[i].id}`).disabled=false;
             }
        }
    }
    // tăng số lượng = button fix cứng
    // let amount=document.getElementById("amount").innerHTML;
    // amount++;
    // document.getElementById("amount").innerHTML=amount


}
function giamHang(id) {
    //cách  giảm số lương = button fix cứng
    // console.log("122")
    // let countPay = document.getElementById("amount").innerHTML;
    // console.log(countPay, "77777");
    // countPay--;
    // document.getElementById("amount").innerHTML = countPay
   
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            var amount = document.getElementById(`amount${id}`).innerHTML;
            amount--;
            document.getElementById(`amount${id}`).innerHTML = amount;
            remaining = remaining + data[i].monney;
            const formatted = remaining.toLocaleString();
            bitcoins.innerHTML=`Remaining: $${formatted}`;
            let percent= document.getElementById("spended");
            percent= (217000000000- remaining) / 217000000000 * 100;
            let base = 10 ** 6;
            let result = Math.round(percent * base) /base;
            spended.innerHTML=`  Phan tram khoi tai san ${result}%`;
            bitcoins.innerHTML=`Remaining: $${remaining}`;

            if(amount == "0"){
                document.getElementById(`disable${data[i].id}`).disabled=true;
               
             }else{
                document.getElementById(`disable${data[i].id}`).disabled=false;
             }
        }
       
    }

}


