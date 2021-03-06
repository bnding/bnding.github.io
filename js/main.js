
function init() {
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
        }
    });

    new Vue({
        el: "#skills",
        components: {
            'skills': httpVueLoader("../VueComponents/skills.vue")
        }
    });

    new Vue({
        el: "#my-footer",
        components: {
            'my-footer': httpVueLoader("../VueComponents/myFooter.vue")
        }
    });
}


init();
renderComponents();