function sbar(x)
{
    var sbar=document.getElementById(x.getAttribute("data-sbar"));
    var sbar_o=document.getElementById(x.getAttribute("data-sbar_o"));
    sbar.classList.toggle("sbar_block");
    sbar_o.classList.toggle("sbar_block");

}