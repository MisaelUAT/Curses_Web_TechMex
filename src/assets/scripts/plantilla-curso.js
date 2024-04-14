// Ranking Star

var star_1 = document.getElementById('star1');
var star_2 = document.getElementById('star2');
var star_3 = document.getElementById('star3');
var star_4 = document.getElementById('star4');
var star_5 = document.getElementById('star5');




starCalification()




// TODO: Stars in the clasification
function starCalification() {

    let star_array = [star_1, star_2, star_3, star_4, star_5];
    let i;
    let star_active;


    star_5.addEventListener("mouseover", () => {
        star_active = true;

        if (star_active == true) {

            star_5.style.cursor="pointer";
            

            for (i = 0; i < star_array.length; i++) {

                star_array[i].style.color = "orange";
                star_array[i].style.transition="color 0.8s ease-out"
                

                

            }

        }
    })


    star_5.addEventListener("mouseout", () => {

        star_active = false;

        if (star_active == false) {

            for (i = 0; i < star_array.length; i++) {

                star_array[i].style.color = "white";

            }

        }

    })

    star_4.addEventListener("mouseover", () => {
        star_active = true;

        if (star_active == true) {
            star_4.style.cursor="pointer";

            for (i = 0; i < star_array.length - 1; i++) {

                star_array[i].style.color = "orange";
                star_array[i].style.transition="color 0.8s ease-out"

            }

        }
    })

    star_4.addEventListener("mouseout", () => {

        star_active = false;

        if (star_active == false) {

            for (i = 0; i < star_array.length - 1; i++) {

                star_array[i].style.color = "white";

            }

        }

    })

    star_3.addEventListener("mouseover", () => {
        star_active = true;

        if (star_active == true) {

            star_3.style.cursor="pointer";
            for (i = 0; i < star_array.length - 2; i++) {

                star_array[i].style.color = "orange";
                star_array[i].style.transition="color 0.8s ease-out"

            }

        }
    })

    star_3.addEventListener("mouseout", () => {

        star_active = false;

        if (star_active == false) {

            for (i = 0; i < star_array.length - 2; i++) {

                star_array[i].style.color = "white";

            }

        }

    })

    star_2.addEventListener("mouseover", () => {
        star_active = true;

        if (star_active == true) {
            star_2.style.cursor="pointer";

            for (i = 0; i < star_array.length - 3; i++) {

                star_array[i].style.color = "orange";
                star_array[i].style.transition="color 0.8s ease-out"

            }

        }
    })


    star_2.addEventListener("mouseout", () => {

        star_active = false;

        if (star_active == false) {

            for (i = 0; i < star_array.length - 3; i++) {

                star_array[i].style.color = "white";

            }

        }

    })


    star_1.addEventListener("mouseover", () => {
        star_active = true;

        if (star_active == true) {

            star_1.style.cursor="pointer";

            for (i = 0; i < star_array.length - 4; i++) {

                star_array[i].style.color = "orange";
                star_array[i].style.transition="color 0.8s ease-out"

            }

        }
    })


    star_1.addEventListener("mouseout", () => {

        star_active = false;

        if (star_active == false) {

            for (i = 0; i < star_array.length - 4; i++) {

                star_array[i].style.color = "white";

            }

        }

    })


}
