function openTab(evt, tabName)
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabCont");
    for(i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tabBtn");
    for(i = 0; i < tablinks.length; i++)
    {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}