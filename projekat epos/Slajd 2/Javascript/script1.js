function funkcija1(){
    var x = document.getElementById("divSlika1");
    var y = document.getElementById("slike10");
    if(x.style.display==="none"){
        x.style.display="block";
        y.style.display="none";
    }else{ 
        x.style.display="none";
        y.style.display="flex";
    }
};
funkcija1();
function f1(){
    function kreirajSrce(){
        const srce = document.createElement('div');
        srce.classList.add('srce');
        srce.style.left = Math.random() * 100 + "vw";
        srce.style.animationDuration = Math.random() * 2 + 3 + "s";
        srce.innerText = "⚽";
        document.body.appendChild(srce);
    
        setTimeout(() =>{
            srce.remove();
        }, 5000);
    
        };
        
    setInterval(kreirajSrce, 300);
}