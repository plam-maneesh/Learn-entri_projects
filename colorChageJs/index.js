const readBtn = document.getElementById('readbtn')
const greenBtn =document.getElementById('greenbtn')
const bgColor =document.getElementById('bg')

readBtn.addEventListener('click', readevent)
greenBtn.addEventListener('click', greenevent)

function readevent(){


    bgColor.classList.remove('green')
    bgColor.classList.add('read')
    
    console.log("bg working")
}

function greenevent(){


    bgColor.classList.remove('red') 
    bgColor.classList.add('green')


    console.log( 'greenbg working' )


}



