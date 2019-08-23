
window.Vue = Vue;
new Vue({
    el: "#myExperience",
    components: {
        'experience': httpVueLoader("../VueComponents/experience.vue")
    }
})