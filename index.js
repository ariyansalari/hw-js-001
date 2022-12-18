const textcontent=document.querySelector("body")
textcontent.style.backgroundColor="green"
textcontent.style.display="flex";
textcontent.style.justifyContent="center";
textcontent.style.alignItems="center"
textcontent.style.fontSize="80px"

let input=prompt("please Enter tamrin js-01 :")
console.log(input)

function reverse()
{
    const arraysplit=input.split("");

    const arrayreverse=arraysplit.reverse();
console.log(arrayreverse)
    const arrayjoin=arrayreverse.join("");
    textcontent.innerHTML=arrayjoin;

    arrayjoin.replace(","," ");

    return arrayjoin;
}

reverse();