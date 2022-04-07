function order()
{
    document.querySelector("#itemsPic").innerHTML = "";
    let show = document.createElement("p")
    show.style.color = "black";
    // show.style.fontSize = "30px";
    show.innerHTML = "Your Order Placed Please wait...";
    document.querySelector("#itemsPic").append(show);
    let ab = document.querySelectorAll('.check')
    for(let i =0;i<ab.length;i++){
        if(ab[i].checked==true){
            var result = ab[i].value
            console.log(result)
            break;
        }
    }

    let myPromise = new Promise(function(resolve,reject){

   setInterval(function(){
            
            if(result == "McAloo Tikki")
            {
                resolve("https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
            }
            else if(result == "McChicken")
            {
                resolve("https://images.pexels.com/photos/6697455/pexels-photo-6697455.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
            }
            else if(result == "McVeggie")
            {
                resolve("https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
            }
            else if(result == "McEgg")
            {
                resolve("https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
            }
            else if(result == "McPuff")
            {
                resolve("https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
            }

        },5000);

    });


    myPromise.then(function(res){
        console.log("res:",res)            
        document.querySelector("span").innerHTML = getRandomInt(1,50);
        document.querySelector("#itemsPic").innerHTML = "";
        let img = document.createElement("img");
        img.src = res;
        let h2 = document.createElement("h2");
        h2.innerHTML = `${result} Ready`;
        h2.style.color = "black";
        img.style.margin = "100px"
    
        document.querySelector("#itemsPic").append(img,h2);
    });

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}