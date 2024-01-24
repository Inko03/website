const select = document.getElementById("select-location")
const selectProperty = document.getElementById("select-property")
const selectPrice = document.getElementById("select-price")
const show3 = document.getElementById("price")
const show = document.getElementById("loca")
const show2 = document.getElementById("prop")
const propertiesOn = document.getElementById("properties-on")
const managment = document.getElementById("managment")
const sellProperties = document.getElementById("sell-properti")
const offerPick = document.getElementById("offer-pick")
const menu = document.getElementById("menu-burger")
const menuIn = document.getElementById("menu-burger-in")
const menuClick = document.getElementById("menu-to-click")
const menuu = document.getElementById("menu-burger")
const serch = document.getElementById("serch-button")
const alert = document.getElementById("alert")

document.getElementById("body").addEventListener("click",(e)=>{
    if(e.target.id!="menu-burger"){
        if(menuIn.classList.contains("burger-open")){
            menuIn.classList.remove("burger-open")
            menuClick.classList.remove("menu-active")
        }
    }
    if(e.target.getAttribute("name")){
        const element = document.getElementById(e.target.getAttribute("name"));
        element.scrollIntoView({block:"center"})
    }
    if(e.target.id==="menu-burger"){
        menuIn.classList.toggle('burger-open')
        menuClick.classList.toggle("menu-active")
    }
    if(e.target.id!="location-arrow"&&e.target.id!="loca" ){
        if(select.classList.contains("toggle")){
            select.classList.remove("toggle")
            select.parentElement.children[2].classList.remove("rotete")
            for(let i = 0; i<select.children.length;i++){
                    select.children[i].classList.remove("slow")
            }
        }
    }
    if(e.target.id!="property-arrow"&&e.target.id!="prop"){
        if(selectProperty.classList.contains("toggle")){
            selectProperty.classList.remove("toggle")
            selectProperty.parentElement.children[2].classList.remove("rotete")
            for(let i = 0; i<selectProperty.children.length;i++){
                selectProperty.children[i].classList.remove("slow")
        }
        }
    }
    if(e.target.id!="price-arrow"&&e.target.id!="price"){
        if(selectPrice.classList.contains("toggle")){
            selectPrice.classList.remove("toggle")
            selectPrice.parentElement.children[2].classList.remove("rotete")
            for(let i = 0; i<selectPrice.children.length;i++){
                selectPrice.children[i].classList.remove("slow")
        }
        }
    }
    if(e.target.id==="propertyType"||e.target.id==="property-arrow"||e.target.id==="prop"){
        selectProperty.classList.toggle('toggle')
        selectProperty.parentElement.children[2].classList.toggle("rotete")
        for(let i = 0; i<selectProperty.children.length;i++){
            setTimeout(()=>{
                selectProperty.children[i].classList.add("slow")
            },i*100)
        }
    }
    if(e.target.id==="location"||e.target.id==="location-arrow"||e.target.id==="loca"){
        select.classList.toggle('toggle')
        select.parentElement.children[2].classList.toggle("rotete")
        for(let i = 0; i<select.children.length;i++){
            setTimeout(()=>{
                select.children[i].classList.add("slow")
            },i*100)
        }
    }
    if(e.target.id==="price-type"||e.target.id==="price-arrow"||e.target.id==="price"){
        selectPrice.classList.toggle('toggle')
        selectPrice.parentElement.children[2].classList.toggle("rotete")
        for(let i = 0; i<selectPrice.children.length;i++){
            setTimeout(()=>{
                selectPrice.children[i].classList.add("slow")
            },i*100)
        }
    }
})
 

select.addEventListener("click",(e)=>{
    if(e.target.id==="select-location"){
    }else{
        show.textContent=e.target.textContent
    }
})
selectProperty.addEventListener("click",(e)=>{
    if(e.target.id==="select-property"){
    }else{
        show2.textContent=e.target.textContent
    }

 })
 selectPrice.addEventListener("click",(e)=>{
    if(e.target.id==="select-price"){
    }else{
        show3.textContent=e.target.textContent
    }
 })
offerPick.addEventListener("click",(e)=>{
    if(e.target.id==="go-to"){

    }else{
        if(e.target.id!="offer-pick"){
            for(let i = 0; offerPick.children.length>i;i++){
                if(offerPick.children[i].className==="what-offer more"){
                    offerPick.children[i].classList.toggle("more")
                    e.target.parentElement.classList.toggle("more")
                    offerPick.children[i].children[0].children[1].classList.toggle("small-what-tit")
                    e.target.children[1].classList.toggle("small-what-tit")
                    offerPick.children[i].children[0].children[2].classList.toggle("hide-description")
                    e.target.children[2].classList.toggle("hide-description")
                    offerPick.children[i].children[0].children[0].children[0].classList.toggle("hide")
                    e.target.children[0].children[0].classList.toggle("hide")
                }else{
                }
            }
           }
    }
})
const cha = document.getElementById("in-sec")
cha.addEventListener("click",(e)=>{
  for(let i = 0; i < cha.children.length; i++){
    if(cha.children[i].id===e.target.id){
    }else{
        e.target.classList.add("active")
        cha.children[i].classList.remove("active")
        break
    }
  }

})

serch.addEventListener('click',()=>{
    console.log(alert.children[0])
    alert.classList.toggle("alert-active")
})
alert.addEventListener('click',(e)=>{
    if(e.target.id==="exit-alert"){
        alert.classList.remove("alert-active")
    }
})
