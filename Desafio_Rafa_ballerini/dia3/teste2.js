/*Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de 
se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue 
apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida. 
*/



const escolha01 = prompt("EAE DEV QUAL AREA VOCE PRETENDE SEGUIR A DE FRONT-END[1] OU BACK-END[2]?");
const erro =alert("erro insira um dado valido, 1 ou 2;");
let contador =3

if(escolha01 == 1)
{   contador ==4
    const escolha02front = prompt("parabens voce escolhei frontend- pelo visto voce adora essa area de cuidar da interface dos usuarios\n agora me dia, voce prefere aprender React ou aprender Vue?");
    if(escolha02front == 1)
    {
        const escolha03front = prompt("entao voce gosta de react? que bacana é uma otima framework pra se aprender mesmo");
    }

    if(escolha02front == 2)
    {
        const escolha03front = prompt("entao voce gosta de VUE? que bacana é uma otima framework pra se aprender mesmo")
    }
    else{
        erro
    }

    stop();
}



if(escolha01 == 2)
{contador ==4
    const escolha02back = prompt("parabens voce escolheu backend, pelo visto voce curte aprender sobre linguagens de servidores e tal :)\n agora me diga voce prefere C# ou aprender Java");
    if(escolha02back == 1)
    {
        const escolha03back = prompt("hmm entao voce gosta de C#\nMas agora que voce ja sabe JAVA e mais algumas linguagens backend e algumas linguagens front como HTML CSS me diz, voce quer se especializar nessa area e virar um DEV super bom da area ou pretende se tornar fullstack(programador front-end e back-end");
    }
    if(escolha02back == 2)
    {
        const escolha03back = prompt("hmm entao voce gosta de Java\nMas agora que voce ja sabe JAVA e mais algumas linguagens backend e algumas linguagens front como HTML CSS me diz, voce quer se especializar nessa area e virar um DEV super bom da area ou pretende se tornar fullstack(programador front-end e back-end");
    }
    else{
        erro
    }

}


else{
    erro
}