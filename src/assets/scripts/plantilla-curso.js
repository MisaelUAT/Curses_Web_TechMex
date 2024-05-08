//*Variables
// Ranking Star
var star_1 = document.getElementById('star1');
var star_2 = document.getElementById('star2');
var star_3 = document.getElementById('star3');
var star_4 = document.getElementById('star4');
var star_5 = document.getElementById('star5');
//Inputs of the Page
const input_codesc = document.getElementById("input_codesc");
const textarea_comment = document.getElementById("exampleFormControlTextarea1");
//Buttons
var button_codesc = document.getElementById("button-addon2");




//*Llamados de Metodos
starCalification();
limitWorks(input_codesc, 10, true, button_codesc);
heightScroll(textarea_comment);


// TODO: Stars in the clasification
function starCalification() {

    let star_array = [star_1, star_2, star_3, star_4, star_5];
    let i;
    let star_active;


    star_5.addEventListener("mouseover", () => {
        star_active = true;

        if (star_active == true) {

            star_5.style.cursor = "pointer";


            for (i = 0; i < star_array.length; i++) {

                star_array[i].style.color = "orange";
                star_array[i].style.transition = "color 0.8s ease-out"




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
            star_4.style.cursor = "pointer";

            for (i = 0; i < star_array.length - 1; i++) {

                star_array[i].style.color = "orange";
                star_array[i].style.transition = "color 0.8s ease-out"

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

            star_3.style.cursor = "pointer";
            for (i = 0; i < star_array.length - 2; i++) {

                star_array[i].style.color = "orange";
                star_array[i].style.transition = "color 0.8s ease-out"

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
            star_2.style.cursor = "pointer";

            for (i = 0; i < star_array.length - 3; i++) {

                star_array[i].style.color = "orange";
                star_array[i].style.transition = "color 0.8s ease-out"

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

            star_1.style.cursor = "pointer";

            for (i = 0; i < star_array.length - 4; i++) {

                star_array[i].style.color = "orange";
                star_array[i].style.transition = "color 0.8s ease-out"

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

//TODO: Limite in the Inputs
function limitWorks(input_event, limit, is_button, button_function) {


    input_event.addEventListener(('keyup'), function () {

        if (input_event.value.length > limit) {
            input_event.style.borderColor = "red";
            if (is_button == true) {
                button_colors(false, button_function)
            }
        }

        else if (input_event.value.length < limit) {
            input_event.style.borderColor = "blue"
            if (is_button == true) {
                button_colors(null, button_function)
            }

        }

        else if (input_event.value.length == limit) {
            input_event.style.borderColor = "green"
            if (is_button == true) {
                button_colors(true, button_function)
            }
        }


    })

}
//TODO: Height of the TextArea
function heightScroll(textarea_event) {

    textarea_event.addEventListener(('input'), function () {
        textarea_comment.style.overflow = "hidden";
        textarea_event.style.height = "5px";
        textarea_event.style.height = (textarea_event.scrollHeight) + "px";


    })

}





//* Subfunction: Buttons
function button_colors(is_sucess, button_event) {

    if (is_sucess == true) {

        button_event.style.borderColor = "green";
        button_event.style.color = "green";

        button_event.addEventListener(('mouseover'), function () {

            button_event.style.backgroundColor = "green";
            button_event.style.color = "white";
        })

        button_event.addEventListener(('mouseout'), function () {

            button_event.style.backgroundColor = "white";
            button_event.style.color = "green";
        })
    }

    if (is_sucess == false) {

        button_event.style.borderColor = "red";
        button_event.style.color = "red";

        button_event.addEventListener(('mouseover'), function () {

            button_event.style.backgroundColor = "red";
            button_event.style.color = "white";
        })

        button_event.addEventListener(('mouseout'), function () {

            button_event.style.backgroundColor = "white";
            button_event.style.color = "red";
        })
    }

    if (is_sucess == null) {

        button_event.style.borderColor = "blue";
        button_event.style.color = "blue";

        button_event.addEventListener(('mouseover'), function () {

            button_event.style.backgroundColor = "blue";
            button_event.style.color = "white";
        })

        button_event.addEventListener(('mouseout'), function () {

            button_event.style.backgroundColor = "white";
            button_event.style.color = "blue";
        })
    }


}








