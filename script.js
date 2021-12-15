let icon=document.getElementById("icon");
let input=document.getElementById("input");
let table=document.getElementById("table");
let tableBody=table.lastElementChild;


icon.onclick=function(){
    input.click();
}


input.onchange=function(e){
    for (const item of e.target.files) {
       var reader= new FileReader();
       reader.onloadend=function(e){
         //console.log(e.target.result);
         let tr=document.createElement("tr");
         let tdImage=document.createElement("td");
         let image=document.createElement("img");
         image.setAttribute("src",e.target.result)
         image.style.height="240px";
         image.style.width="300px"
         tdImage.append(image);
         let tdImageName=document.createElement("td");
         tdImageName.innerText=item.name;
         let tdSize=document.createElement("td")
         tdSize.innerText=item.size;
         let icon1=document.createElement("i");

         icon1.setAttribute("class","fas fa-trash-alt")
         tr.append(tdImage,tdImageName,tdSize,icon1);
         tableBody.append(tr);

        icon1.onclick=function(){
          tr.remove();
        }
         
       }
        
       reader.readAsDataURL(item);
    }
}