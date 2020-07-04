(function(){
    let slider = document.querySelectorAll('.slider');
    let counter = -1;

    setInterval(() => {
        counter++;    
        for(i = 0; i< slider.length; i++){             
            if(slider[counter]){
                slider[counter].style.display = 'block';
                slider[i].style.display = 'none'
                if(counter == 4){
                    counter = 0
                }
            }
        }
    },1500)
})()
