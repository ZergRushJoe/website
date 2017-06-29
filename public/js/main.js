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
    mainNavList[i].addEventListener('click',selected,false)
}

window.onhashchange = function()
{
    document.getElementsByClassName('selected')[0].classList.remove('selected');

    for(let i = 0; i < mainNavList.length;++i)
    {
        if('#'+mainNavList[i].children[1].innerText == window.location.hash)
        {
            mainNavList[i].classList.add('selected');
        }

    }


};
function selected(e)
{
    window.location.hash = this.children[1].innerText;
}