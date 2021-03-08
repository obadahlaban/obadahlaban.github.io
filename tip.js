function calcTip()
{
    let fitsttotal= document.getElementById("subtotal");
    let tippercentage=document.getElementById("tip");
    let rslt=document.getElementById("total");
    let subtotal= fitsttotal.value;
    let tip=tippercentage.value;

    let result=subtotal*(tip/100);
    rslt.innerHTML="$" + result;


}