<template>
  <div class="skills row text-center">
    <!-- TODO: Create accordian here. -->
    <div v-for="skill in skills" v-bind:key="skill.id" class="col">
      <img class="d-inline mb-1" v-bind:src="'/images/' + skill + '.png'" width="28" height="28" />
      <h6 class="d-inline ml-2">{{ skill }}</h6>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "skills",
  data: function() {
      return {
          skills: ["Java", "JavaScript", "Python", "HTML", "CSS"]
      }
  }
  
};
</script>