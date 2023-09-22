const para = document.getElementById('para')
const display =0;
function hideShow(){
    if(display===1){
        para.style.display='block'
        display=0;
}else{
para.style.display='none';
display=1
}
}