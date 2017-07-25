window.onload = function() {
    
    let imgNumber = Math.floor(Math.random() * 5) + 1;
    
    function changePhoto() {
        
        imgNumber++;
        
        if (imgNumber > 5) imgNumber = 1;
        
        const slider = document.getElementById('slider');
    
        let file = '<img src="images/img' + imgNumber + '.jpg" />';
    
        slider.innerHTML = file;
    }
    
    setInterval(changePhoto, 4000);
    
}