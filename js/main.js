
function renderComponents() {
    window.Vue = Vue;
    new Vue({
        el: "#myExperience",
        components: {
            'experience': httpVueLoader("../VueComponents/experience.vue")
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
