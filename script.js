
let head=document.createElement("div");
head.setAttribute("id","head1");
head.innerText="Makeup API";


let div1=document.createElement("div");
div1.setAttribute("id","div1");
let div2=document.createElement("div");
div2.setAttribute("id","div2");

let inp=document.createElement("input");
inp.setAttribute("id","inp1");
inp.setAttribute("placeholder","Enter the Product Name");

let search=document.createElement("button");
search.setAttribute("id","search1");
search.setAttribute("class","btn btn-secondary btn-sm")

search.innerText="Search Product";
search.addEventListener("click",fetchData);

document.body.append(div1);
div1.append(head,div2);
div2.append(inp,search);

let div3=document.createElement("div");
div3.setAttribute("id","div3");

async function fetchData(){
div3.innerHTML="";

let val=document.getElementById("inp1").value;
console.log(val);

let data=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${val}`);
let res=await data.json();

console.log(res);
if(res.length!==0){

for(let i=0;i<res.length;i++){
    let resdiv=document.createElement("div");
    resdiv.setAttribute("id","resdiv1");
    resdiv.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="${res[i].api_featured_image}" alt="Product_Image" class="card-img-top">
    <h3>Brand : ${res[i].brand}</h3>
    <h5><strong>Name :</strong> ${res[i].name}</h5>
    <p><strong>Price : </strong>${res[i].price}</p>
    <p><strong>Product Link :</strong> <a href="${res[i].product_link}">Click here to view the Product</a></p>
    <p><strong>Description : </strong>${res[i].description}</p>
    </div><br>`;
    document.body.append(div3);
    div3.append(resdiv) ;
}
}else{
   
    div3.innerHTML=`<h6>No Results Found</h6>`;
    document.body.append(div3);
}
}
 
