
window.onload= function(){
var start=document.querySelector("#start");;
var status=document.querySelector("#status");
var stat= document.getElementById("status");
var end=document.querySelector("#end");;
let bound= document.querySelectorAll(".boundary"); 
var mazeleave= document.getElementById("maze");
let win=true;

 
function startnow(){
let b= document.getElementById("boundary1");
b.addEventListener("mouseover", ()=>{
	change();
	b.classList.add('youlose');
	stat.innerHTML=" you lose";
	
	
})
b.addEventListener("mouseout", ()=>{
	unchange();
	b.classList.remove('youlose');
	
})
win=true;




}


function startnowb(){
for ( const x of bound){
	x.addEventListener("mouseover", ()=>{
	x.classList.add('youlose');
	stat.innerHTML=" you lose";
	
	change();
})


}


for ( const x of bound){
	x.addEventListener("mouseout", ()=>{
	x.classList.remove('youlose');
	stat.innerHTML=" you lose";
	
	unchange();
})

}

win=true;


}





function endf(){
console.log(win);
end.addEventListener("mouseenter", ()=>{
	// b.classList.add('youlose');
	 if (win === true ){
	 	console.log(win);
	stat.innerHTML=" You Win";
	console.log("winner"); 
}
	
})

end.addEventListener("mouseout", ()=>{
	if (win === true){
	stat.innerHTML=" You Win";
	alert("CONGRATULATIONS! YOU WIN!"); 
	}
})

}

function leave(){
	mazeleave.addEventListener("mouseleave",()=>{
change();

stat.innerHTML=" you lose";
	});
	 // win=false;
	 // console.log(win+ "leave");
}


function  go(){
	win=true;
	start.addEventListener("click",()=>{
		unchange();
stat.innerHTML=" Move your mouse through the maze";
win=true;
startnow();
startnowb();
leave();
endf();
	});
}

go();







function change(){

	bound.forEach(function (i,index){
		i.classList.add("youlose"); 
		
	} );
win=false;


}
function unchange(){

	bound.forEach(function (i,index){
		i.classList.remove("youlose"); 
		
	} );



}




}
