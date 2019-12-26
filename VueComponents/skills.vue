<template>
  <div class="row text-center skillBar">
    <div v-for="skills in skills" v-bind:key="skills.id" class="col skill">
      <div class="skillContent" v-on:click="slideDown(skills.titleClass)">
        <img
          class="d-inline mb-1"
          v-bind:src="'/images/' + skills.title + '.png'"
          width="28"
          height="28"
        />
        <h6 class="d-inline ml-2">{{ skills.title }}</h6>
        <div v-bind:class="skills.titleClass + 'Content'">
          <ul>
            <li v-for="details in skills.skills" v-bind:key="details.id">
              <!-- <img
                class="imgSection"
                v-if="checkImg('images/' + details + '.png')==='true'"
                v-bind:src="'images/' + details + '.png'"
                width="25"
                height="25"
              /> -->
              {{details}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "skills",
  data: function() {
    return {
      skills: [
        {
          title: "Java",
          titleClass: "Java",
          skills: ["Object Oriented Programming", "Data Structures"]
        },
        {
          title: "Python",
          titleClass: "Python",
          skills: ["Pandas", "NumPy", "BeautifulSoup"]
        },
        {
          title: "Web Development",
          titleClass: "WebDevelopment",
          skills: [
            "Vue (This website is built with Vue!)",
            "jQuery",
            "JavaScript",
            "JSON",
            "HTML",
            "CSS",
            "BootStrap"
          ]
        },
        {
          title: "Coursework",
          titleClass: "Coursework",
          skills: [
            "Introduction to Artificial Intelligence",
            "Graph Theory",
            "Data Structures",
            "Systems Programming",
            "Algorithms",
            "Principles of Programming Languages",
            "Discrete Mathematics",
            "Linear Optimization"
          ]
        }
      ]
    };
  },
  methods: {
    slideDown: function(skill) {
      $(".skillContent div")
        .not("." + skill + "Content")
        .slideUp(500);
      $("." + skill + "Content").slideToggle(1000);
    },

    // checkimg: function(path) {
    //   $(".myimage").error(function() {
    //     alert(path);
    //     return false;
    //   });
    //   return true;
    // }
  },
  created: function() {
    $(document).ready(function() {
      $(".skillContent div").hide();
    });
  }
};
</script>

<style scoped>
.skillBar {
  margin-top: 40px;
}
.skillContent {
  cursor: pointer;
}

h6 {
  padding-bottom: 4px;
  border-bottom: 2px solid #69b9ff;
  border-radius: 10%;
}
</style>