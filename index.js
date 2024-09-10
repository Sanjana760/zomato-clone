import { city } from "./city.js";
import {popularcity} from "./popularcity.js";
import {restaurant } from"./restaurant.js";
import {topRestaurant} from"./topRestaurant.js";
import {cityName} from"./citydataexplore.js";

let localitiesContainerEl= document.querySelector(".localities_container")

 let htmlLocalitiesList = city.map((el)=>{
    return `
     <div class="localities_list">
          <div class=" localities_card">
                <h3>${el.name}</h3>
                <p>${el.place}</p>
          </div>
            <i class=" fa-sharp fa-solid fa-angle-right"></i>
     </div>
    `
    
}).join("")
localitiesContainerEl.innerHTML =  htmlLocalitiesList 
  
/*let popularCityHTML = document.getElementById("popularcityId")*/


  function showData(clickId,displayId,toggle,data,join){

     document.getElementById(clickId).addEventListener("click",()=>{
          if(toggle){
              document.getElementById(displayId).style.display = "block"
              toggle = false
          }
          else{
               document.getElementById(displayId).style.display = "none"
               toggle = true
          }
     })


     let popularCityHTMLLInk = "";
for(let i = 0; i <data.length;i++){
      console.log(popularcity[i])
      popularCityHTMLLInk +=`
      <a class="popularcityName" href=${data[i].
            link}>${data[i].
            decs
            }</a>
      <span class="dot">${join}</span>
      `
 }
   document.getElementById(displayId).innerHTML =  popularCityHTMLLInk 
  }

  let toggle1=true;
 showData("popularCityListID","popularcityId",toggle1,popularcity,".")
    
  let toggle2=true;
 showData("restaurantID","restaurantDisplayDataID",toggle2,restaurant,".")
 

 console.log(topRestaurant)
 let toggle3=true;
 showData("topRestaurantID","topRestaurantDisplayID",toggle3,topRestaurant,"   ")
 

 let toggle4=true;
 showData("cityDiliverID","cityDiliverDisplayID",toggle4,cityName,"   ")
 