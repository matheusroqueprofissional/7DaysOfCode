var numeroAdivinha = Math.floor(Math.random() * 10 + 1);
var vidas = 3;

while(vidas >0)
{alert("cuidado voce tem "+vidas+" vidas");
    var numerochutado = prompt("qual numero voce acha que é? ");
    if(numerochutado != numeroAdivinha)
    {
        vidas = vidas -1;
        
    }
    if(numerochutado == numeroAdivinha)
    {
        alert("parabens voce acertou muito bem");
    }

}
if(vidas == 0)
{
    alert("o numero correto era "+numeroAdivinha);
}