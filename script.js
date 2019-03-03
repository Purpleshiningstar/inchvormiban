var images= new Array();

images[0]="arajin.jpg";
images[1]='erkrord.jpg';
images[2]="kapuyt.jpg";
var x=0;
//var narot=document.getElementById('nkar');


function prevbut()
{
	var narot=document.getElementById('nkar');
	if (x==0)
	{
		narot.src=images[2];
		x=2;
	}
	else if (x==1)
	{
		narot.src=images[0];
		x=0;
	}
	else if (x==2)
	{
		narot.src=images[1];
		x=1;
	}
}

function nextbut()
{
	var narot=document.getElementById('nkar');
   if (x==0)
   {
   	    narot.src=images[1];
   	    x=1;
   }
        else if (x==1)
   {
   	narot.src=images[2];
   	    x=2;
   }
   else if (x==2)
   {
   	narot.src=images[0];
   	x=0;
   }
}


window.onload= function()
{
document.getElementById("previous").addEventListener("click", prevbut);
document.getElementById("Next").addEventListener("click", nextbut);
//var narot=document.getElementById('nkar');
}
