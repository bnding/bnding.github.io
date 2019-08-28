
function init() {
    // hide slide content
    $(document).ready(function () {
        $(".slideContent").hide();
    })

    // Alternate section colors
    var count = 0;
    $("section").each(function (index) {
        if (count % 2 == 0) {
            $(this).css({ "background-color": "#192024", "color": "#fff" })
        }
        count++;
    })
}

function renderComponents() {
    window.Vue = Vue;
    new Vue({
        el: "#experience",
        components: {
            'experience': httpVueLoader("../VueComponents/experience.vue")
        },

    })

    new Vue({
        el: "#skills",
        components: {
            'skills': httpVueLoader("../VueComponents/skills.vue")
        }
    })
}


init();
renderComponents();