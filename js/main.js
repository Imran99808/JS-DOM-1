const milestonesData=JSON.parse(data).data;

console.log(milestonesData[0]._id);

// load milestone data

function loadMilestones(){
    const miletones=document.querySelector(".milestones");
   
    let count="";
   
    for(let i=0;i<milestonesData.length;i++){
        let count1="";
      for(let j=0;j<milestonesData[i].modules.length;j++){
               count1+=`<div class="module border-b">
              <p class="emon">${milestonesData[i].modules[j].name}</p>
           </div>`;
       }
       count+=`<div class="milestone border-b" id="${i}">
       <div class="flex">
         <div class="checkbox"><input onclick="check(this)" type="checkbox"></div>
           <div onclick="openM(this,${i})">
               <p>
                  
                   ${
                       milestonesData[i].name
                   
                   }
                   <span><i class="fas fa-chevron-down"></i></span>
               </p>
           </div>
       </div>
       <div class="hidden_panel">
       ${count1}
       </div>
       </div>`;
    //   console.log(count);
    }

 miletones.innerHTML=count;

}
function openM(milestonesElement, id){
 
    const currentpanel=milestonesElement.parentNode.nextElementSibling;
    const showpanel=document.querySelector(".show");
    const activepanel=document.querySelector(".active");
    const activepane=document.querySelector(".activ");
      

   if(!currentpanel.classList.contains("show") && showpanel){
      
      showpanel.classList.remove("show");
    // // currentpanel.classList.toggle("show");
    //  activepanel.classList.remove("active");
   
   }
   currentpanel.classList.toggle("show");
   if(!milestonesElement.classList.contains("active") && activepanel){
    activepanel.classList.remove("active");
   }
   
   milestonesElement.classList.toggle("active");
    
   
  
   
   console.log(activepane);

   showimg(id);
}
function showimg(id){
   const milestoneImage=document.querySelector(".milestoneImage");
   const name=document.querySelector(".title");
   const details=document.querySelector(".details")
   if(id!=0){
    milestoneImage.style.opacity="0";
    milestoneImage.src=milestonesData[id].image;
   }
    name.innerText=milestonesData[id].name;
    details.innerText=milestonesData[id].description;
}
const milestoneImage=document.querySelector(".milestoneImage");
milestoneImage.onload=function(){
    this.style.opacity="1";
};

function check(checkbox){
 const milestones=document.querySelector(".milestones");
 const doneList=document.querySelector(".doneList");
 const mark=checkbox.parentNode.parentNode.parentNode;
   const count="";
   const count2="";
 if(checkbox.checked){
    mark.remove();
    doneList.append(mark);
      sort(doneList);
    
 }else{
    mark.remove();
    milestones.append(mark);
      sort(milestones);
     
 }
 console.log(mark.parentNode);
 
}
// 1st try this function not use okk
function Srt(milestones,donelistid){
  loadMilestones();
   for(let i=0;i<donelistid.children.length;i++){
     const count=donelistid.children[i].id;
    //  console.log(count);
     const  milestonesid=document.getElementById(count);
     milestones.removeChild(milestonesid);

   }
}
 
//  2nd try.........
// sorting logic use...
 function sort(bothid){
  

 for(let i=0;i<bothid.children.length;i++){
 

  var f1=bothid.children[i].id;
 
  var  milestoneid1=document.getElementById(f1);
  for(let j=i+1;j<bothid.children.length;j++){
    var f2=bothid.children[j].id;
   var milestoneid2=document.getElementById(f2);
   
     let count;
     console.log("f2"+ f2);
    if(parseInt(f1)>parseInt(f2)){

       count=milestoneid1;
       bothid.replaceChild(milestoneid2, milestoneid1);
      bothid.append(count);
      console.log(bothid.children);
    }
  }
  
 
 }
     
}
loadMilestones();
console.log('emon');