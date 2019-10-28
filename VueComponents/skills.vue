<template>
  <div class="row text-center skillBar">
    <div v-for="skill in skills" v-bind:key="skill.id" class="col skill">
      <div class="skillContent" v-on:click="slideDown">
        <img class="d-inline mb-1" v-bind:src="'/images/' + skill + '.png'" width="28" height="28" />
        <h6 class="d-inline ml-2">{{ skill }}</h6>
        <!-- <div class="slideContent"> -->
        <!-- <div v-bind:class="skill +  'Content'">
          <p>Content per skill</p>
        </div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "skills",
  data: function() {
    return {
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "Other"]
    };
  },
  methods: {
    slideDown: function(event) {
      $(".slideContent").slideToggle();
      console.log(event);
    }
  },
  created: function() {
    $(document).ready(function() {
      $(".slideContent").hide();
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