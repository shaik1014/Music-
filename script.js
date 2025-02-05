

const menu = document.getElementById('menu');
const buttons = document.getElementById('buttons');
const button =document.querySelectorAll('.button');

menu.addEventListener('click', () => {
    
    if(buttons.classList.contains('animate'))
    {
        buttons.classList.remove('animate');

        button.forEach(button => {

            if(button!==menu){

                 button.classList.add('hidden');
            }
           
        })
    
    }

    else
    {
        buttons.classList.add('animate');

        button.forEach(button => {
            if(button!==menu){

                button.classList.remove('hidden');
            }
        });
    }


});
