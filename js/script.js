let layer = 1
const product_price = document.getElementById("price");
const product_qnt = document.getElementById("qnt");
const autochange = () =>{
    layer = Math.round(Math.random()*8)
    if(layer==0) layer=1;
} 

setInterval(() => {    
    autochange()
    show()
}, 5000);

setInterval(()=>{
    paypalMode()
    getTotalValue()
}, 1)

const show= ()=>{
    for(let i =1; i <= 8 ; i++) document.getElementById(i).style.opacity = 0 
    document.getElementById(layer).style.opacity = 1
} 
function show_nav() {
    document.getElementById("menu").style.opacity = 1;
    document.getElementById("menu").style.pointerEvents = "stroke";
}
function hide_nav(){
    document.getElementById("menu").style.opacity = 0;
    document.getElementById("menu").style.pointerEvents = "none";
}
function product_menu(){
    window.open("../pages/product.html", "_self")
}

const paypalMode = () =>{
    if(document.getElementById('pay').value === 'PayPal'){
        document.getElementById('cardinfo').style.display = 'none'
        document.getElementById('btn').classList.add("paypal-btn")
    }
    else{
        document.getElementById('cardinfo').style.display = 'flex'
        document.getElementById('btn').classList.remove("paypal-btn")
    }
}
    
document.getElementById("btn_minus1").addEventListener("click", ()=>{
        
    document.getElementById('qtn1').value--
    document.getElementById('price1').innerHTML =  eval(document.getElementById('price1').innerHTML+"-"+32.99)
})
document.getElementById("btn_minus2").addEventListener("click", ()=>{
    
    document.getElementById('qtn2').value--
    document.getElementById('price2').innerHTML =  eval(document.getElementById('price2').innerHTML+"-"+36.99)
})
document.getElementById("btn_minus3").addEventListener("click", ()=>{
    
    document.getElementById('qtn3').value--
    document.getElementById('price3').innerHTML =  eval(document.getElementById('price3').innerHTML+"-"+39.99)
})
    
    document.getElementById("btn_plus1").addEventListener("click", ()=>{
        
        document.getElementById('qtn1').value++
        document.getElementById('price1').innerHTML =  eval(document.getElementById('price1').innerHTML+"+"+32.99)
    })
    document.getElementById("btn_plus2").addEventListener("click", ()=>{
        
        document.getElementById('qtn2').value++
        document.getElementById('price2').innerHTML =  eval(document.getElementById('price2').innerHTML+"+"+36.99)
    })
    document.getElementById("btn_plus3").addEventListener("click", ()=>{
        
        document.getElementById('qtn3').value++
        document.getElementById('price3').innerHTML =  eval(document.getElementById('price3').innerHTML+"+"+39.99)
    })
    
const getTotalValue = ()=>{
    let total = document.getElementById('price1').innerHTML+ "+"
    for(let i=2; i<=3; i++){

        if(i !== 3)
            total += document.getElementById('price'+i).innerHTML + "+"
        else
            total+= document.getElementById('price'+i).innerHTML

    }
    document.getElementById('total').innerHTML=eval(total)
}