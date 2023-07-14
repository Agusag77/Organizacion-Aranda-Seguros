window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("down", window.scrollY > 0);
})

addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const speed = 1000;

    const countersAnimation = () => {
        for (const counter of counters) {
            const counter_update = () => {
                let total_quantity = +counter.dataset.totalQuantity
                actual_value = +counter.innerText
                increment = total_quantity / speed;

                if (actual_value < total_quantity) {
                    counter.innerText = Math.ceil(actual_value + increment)
                    setTimeout(counter_update, 7);
                } else {
                    counter.innerText = total_quantity;
                }
            }
            counter_update();
        }
    }
    
    const countersAppear = elements => {
        elements.forEach(element => {
            if(element.isIntersecting) {
                element.target.classList.add('animate')
                element.target.classList.remove('hide')
                setTimeout(countersAnimation, 300)
            }
        });
    }

    const observer = new IntersectionObserver(countersAppear,{
         threshold: 0.75
    });

    const elementsHTML = document.querySelectorAll('.count')
    elementsHTML.forEach(elementHTML => {
        observer.observe(elementHTML)
    });
});



