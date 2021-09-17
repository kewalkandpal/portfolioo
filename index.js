///////////// Navbar Bg Change ////////////////

const nav = document.querySelector("nav");
document.addEventListener("scroll",()=>{
    let scrolltop = window.scrollY;
    scrolltop > 100 ? nav.classList.add("navChange") : nav.classList.remove("navChange");
});

///////////// Navbar toggel ///////////////////// 

const btn = document.querySelector(".toggel_nav_btn");
const ul = document.querySelector("ul");

btn.addEventListener("click",()=>{
    ul.classList.toggle("active");
});

////////////// dayNight mood ///////////////////
const day_night = document.querySelector("#day_night");
function change(){
    document.body.classList.toggle("lightMood");
    day_night.classList.toggle("dayNight");
}


/////////////// Project data ////////////////////

const data = [
    {
        logo:"image/hcj.png",
        proName:"Html Css Javascript Website",
        link:"https://kewalkandpal.github.io/gotour.github.io/",
        category:"website"
    },
    {
        logo:"image/react.png",
        proName:"React website",
        link:"https://kewalkandpal.github.io/carpoint/",
        category:"website"
    },
    {
        logo:"image/js.png",
        proName:"Corona Status Live (API)",
        link:"https://kewalkandpal.github.io/covidupdate/",
        category:"javascript"
    },
    {
        logo:"image/react.png",
        proName:"Shoping Cart",
        link:" https://kewalkandpal.github.io/shopingpoint/",
        category:"react"
    },
    {
        logo:"image/react.png",
        proName:"Hex Color Generator",
        link:"https://kewalkandpal.github.io/colorGenerator/",
        category:"react"
    }

];


const myProject = document.querySelector(".myProject");
const fBtn = document.querySelectorAll(".fBtn");

function filterCard(data){
    let myCard = data.map((val)=>{
        const {id,logo,proName,link,category} = val;
        return`
        <div class="col-lg-4 col-md-6 col-12 g-5">
        <div class="card">
            <h1 class="proLogo">
                <img src=${logo} class="img-fluid">
            </h1>
            <p class="projectName">${proName}</p>
            <button class="btn"><a href=${link} target="blank">show me</a></button>
        </div>
    </div>
        `;
    });
    myCard = myCard.join("");
    myProject.innerHTML = myCard;
};
filterCard(data);

fBtn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let category = e.currentTarget.dataset.id;
        let filterData = data.filter((val)=>{
            if(val.category === category){
                return val;
            }
        });
        if(category === "all"){
            filterCard(data);
        }else{
            filterCard(filterData);
        }
    });
    
});

///////////// Back to topBtn ////////////

const backToTop = document.querySelector(".toTop");
document.addEventListener("scroll",()=>{
    let top = window.scrollY;
    if(top > 100){
        backToTop.style.opacity = "1";
    }else{
        backToTop.style.opacity = "0";
    }
});

backToTop.addEventListener("click",()=>{
    this.document.scrolltop = 0;
    this.document.documentElement.scrollTop=0;
});
