<template>
  <div>
    <div v-for="item in jsonData" v-bind:key="item.id">
      <div v-if="item.numPositions == 1">
        <h4 class="d-inline col-md-1">{{ item.company }}</h4>
        <h6 class="d-inline col-md-11">{{ item.start }} - {{ item.end }}</h6>
        <h6 class="position col-md-1">{{ item.position }}</h6>
        <ul class="ml-4 mr-4">
          <li v-for="bullets in item.experience" v-bind:key="bullets.id">{{ bullets }}</li>
        </ul>
      </div>
      <div v-else>
        <h4 class="d-inline col-md-1">{{ item.company }}</h4>
        <h6 class="d-inline col-md-11">{{ item.start }} - {{ item.end }}</h6>
        <div v-for="(n,i) in item.numPositions" v-bind:key="n">
          <h6 class="position col-md-4">{{ item.positions[i].position }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "experience",
  data: function() {
    return {
      jsonData: [
        {
          company: "Local Wisdom",
          start: "June 2019",
          end: "Present",
          numPositions: 1,
          position: "Developer Intern",
          experience: [
            "Designing iPad and Desktop web applications for agencies and clients of Janssen Pharmaceuticals.",
            "Automating Important Safety Information provided by agencies into HTML and optimized work proficiency for other developers using Python.",
            "Using Python Tensorflow for live object detection.",
            "Regularly using Vue.js, Bootstrap, jQuery, CSS, and HTML for development. ",
            "Using Google Web Designer for small banner advertisement projects."
          ]
        },

        {
          company: "Rutgers Office of Information Technology",
          numPositions: 2,
          start: "August 2017",
          end: "Present",
          positions: [
            {
              position: "Residential Network Dispatch",
              start: "September 2018",
              end: "Present",
              experience: [
                "Providing internet service through Mac Authentication Bypass (MAB) for devices that do not support 802.1x.",
                "Using Fluke Networks Linkrunner diagnostic tool to verify port activity pull information from the DHCP server for on-campus users.",
                "Identifying and removing ransomware, spyware, trojans, viruses, and worms.",
                "Assuming duties as an IT Consultant."
              ]
            },
            {
              position: "IT Consultant",
              start: "August 2017",
              end: "Present",
              experience: [
                "Identifying and troubleshooting bugs, applications, connectivity, compatibility, and software for students and faculty.",
                "Collaborating with coworkers to provide satisfying service for patrons with device problems.",
                "Maintaining over 50 computers in each computer lab on three sites for the students and faculty to use."
              ]
            }
          ]
        }
      ]
    };
  },
  created: function() {
    if (this.numPositions > 1) {
      alert(this.company);
    }
  }
};
</script>