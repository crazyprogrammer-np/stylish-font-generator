let userInput = document.querySelector('#input');
let submitBtn = document.querySelector('#submit');
let displayBlocks = document.querySelectorAll('.font-preview div')
let displayTexts = document.querySelectorAll('.font-preview input');

submitBtn.addEventListener('click', function () {

    for (let i = 0; i < 23; i++) {

        displayBlocks[i].style.display = "flex";

        displayTexts[i].value = userInput.value;

        let copyBtn = document.createElement('i');
        copyBtn.setAttribute("class", "fa fa-copy");
        
        displayBlocks[i].appendChild(copyBtn);

        copyBtn.addEventListener('click',function(){
            //console.log(this.parentNode.children[0].value)
            copyText = this.parentNode.children[0];

            //copy the text
            copyText.select();
            copyText.setSelectionRange(0, 99999); //for mobile devices

            /* Copy the text inside the text field */
            document.execCommand("copy");

            
        })
    }

});
