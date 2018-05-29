var guzik = document.querySelector('#przycisk');
guzik.addEventListener('click', function(){
	console.log("elo")
	var kw=document.getElementById('kwadrat');
	poz=0;
	var czas=setInterval(ruszaj,10);
	
	
	function ruszaj(){
		poz++;
		if(poz==349){
		 clearInterval(czas);
	 }
	 
	 kw.style.top=poz+'px';
	 kw.style.left=poz+'px';
	 }
	 
});