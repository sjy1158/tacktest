var ipt1=document.getElementById('ipt1');
var ipt2=document.getElementById("ipt2");
var cuo=document.getElementById("cuo");
var cuo2=document.getElementById("cuo2");
console.log(ipt1);
cuo.style.display="none";
ipt1.onkeyup=function(){
			
	if((/\s/.test(this.value)||!/^1\d{10}$/.test(this.value))&&this.value.length!=0){
	    cuo.style.display="block";
	}else{
		cuo.style.display="none";
	}

	
}

cuo2.style.display="none";
ipt2.onkeyup=function(){
	if((/\s/.test(this.value)||!/^[\da-z]{10}$/.test(this.value))&&this.value.length!=0){
		cuo2.style.display="block";
	}else{
		cuo2.style.display="none";
	}
}

