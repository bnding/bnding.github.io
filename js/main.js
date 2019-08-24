
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

function alternateSections() {
    $(document).ready(function () {
        var count = 0;
        $("section").each(function (index) {
            if (count % 2 == 0) {
                $(this).css({"background-color": "#192024", "color": "#fff"})
            }
            count++;
        })
    })

}

alternateSections();
renderComponents();
