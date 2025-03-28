function animateTitle(Title = "@notsag✧˖°.", delay = 300) {
    let counter = 1;
    let direction = true;
    aniTitle = setInterval(function () {
        if (counter == Title.length)
            direction = false;
        if (counter == false)
            direction = true;
        counter = (direction == true) ? ++counter : --counter;
        let newTitle = (counter === 0) ? " " : Title.slice(0, counter);
        document.title = newTitle;
        
        if (!direction && counter === 1) { 
            counter = 1;
            direction = true;
        }
    }, delay);
}