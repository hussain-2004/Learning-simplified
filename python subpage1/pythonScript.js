var x=document.getElementsByClassName('accordion');
for(i=0;i<x.length;i++){
    x[i].onclick=function()  //ananomous functions i.e functions having no name
    {
        var d=this.nextElementSibling;
        if (d.style.height){
            d.style.height=null;
        }
        else{
            d.style.height=d.scrollHeight+"px";
        }
    }
}