function verEntrada()
{
    var entrada=document.getElementById("cajaTexto").value;
    if(entrada=="")
    {
        window.alert("No has escrito ninguna entrada");
    }
    else
    {
        window.alert("La entrada escrita es "+entrada);
    }
}
