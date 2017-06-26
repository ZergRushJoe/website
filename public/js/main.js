/**
 * Created by jkarp on 5/30/2017.
 */
let  mainNavList = document.getElementsByClassName('ordered');

for(let i = 0; i < mainNavList.length;i++)
{
    mainNavList[i].style.zIndex = mainNavList.length-i;
    let span = mainNavList[i].children[1];
    let size = parseInt(span.offsetWidth);
    span.style.marginLeft = ((110-size)/2) +'px';
}