window.onload=function (){
    const textArea=document.getElementById("textarea");
    textArea.style.fontSize="12pt";
    textArea.value="Obadah\n Laban\n";

}


function goBigger() {
    alert("Hello, world!");
    setInterval(function () {
        const textArea = document.getElementById('textarea');
        let fontSize = +textArea.style.fontSize.split('pt')[0];
        fontSize += 2;
        textArea.style.fontSize = `${fontSize}pt`;
    }, 500);

}

function  bling(){
    alert("Hello, world!");
    const bling = document.getElementById('bling');
    const textArea = document.getElementById('textarea');
    if (bling.checked) {
        textArea.style.textDecoration = 'underline';
        textArea.style.color = 'green';
        textArea.style.fontWeight = 'bold';
    } else {
        textArea.style.textDecoration = 'none';
        textArea.style.color = 'black';
        textArea.style.fontWeight = 'normal';
    }

}
