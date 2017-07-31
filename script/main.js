window.onload = function() {
    
    let imgNumber = Math.floor(Math.random() * 5) + 1;

    const slider = document.getElementById('slider');

    // Catching control buttons //
    const previous = document.getElementById('previous');

    const next = document.getElementById('next');
    
    // Changing photos automatically //
    function changePhoto() {
        
        imgNumber++;
        
        if (imgNumber > 5) imgNumber = 1;
        
        const slider = document.getElementById('slider');
    
        let file = '<img src="images/img' + imgNumber + '.jpg" />';
    
        slider.innerHTML = file;
    }
    
    
    // Changing to the next photo (auto change is stopped) //
    function nextSlide() {

        clearInterval(startSliding);
        
        imgNumber++;

         if (imgNumber > 5) imgNumber = 1; 

        let file = '<img src="images/img' + imgNumber + '.jpg" />';

        slider.innerHTML = file;
    }

    // Changing to the previous photo (auto change is stopped) //
    function prevSlide() {
        
        clearInterval(starSliding);
        
        imgNumber--;

        if (imgNumber < 1) imgNumber = 5;

        let file = '<img src="images/img' + imgNumber + '.jpg" />';

        slider.innerHTML = file;
    }
    
    const startSliding = setInterval(changePhoto, 3000);

    // Events for buttons //
    previous.onclick = prevSlide;
    next.onclick = nextSlide;


    
}
