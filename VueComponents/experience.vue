<template>
  <div class="ml-4">
    <div v-for="item in jsonData" v-bind:key="item.id">
      <div v-if="item.numPositions == 1">
        <img
          class="imgSection"
          v-bind:src="'images/' + item.company + '.png'"
          width="25"
          height="25"
        />
        <h4 class="d-inline col-md-1">{{ item.company }}</h4>
        <h6 class="d-inline col-md-11">{{ item.start }} - {{ item.end }}</h6>
        <h6 class="position col-md-4">{{ item.position }}</h6>
        <ul class="ml-4 mr-4">
          <li v-for="bullets in item.experience" v-bind:key="bullets.id">{{ bullets }}</li>
        </ul>
      </div>
      <div v-else>
        <img
          class="imgSection"
          v-bind:src="'images/' + item.company + '.png'"
          width="25"
          height="25"
        />
        <h4 class="d-inline col-md-1">{{ item.company }}</h4>
        <h6 class="d-inline col-md-11">{{ item.start }} - {{ item.end }}</h6>
        <div v-for="(n,i) in item.numPositions" v-bind:key="n">
          <h6 class="position d-inline col-md-1">{{ item.positions[i].position }}</h6>
          <h6
            class="position d-inline col-md-11"
          >{{ item.positions[i].start }} - {{ item.positions[i].end }}</h6>
          <ul class="ml-4 mr-4">
            <li
              v-for="bullets in item.positions[i].experience"
              v-bind:key="bullets.id"
            >{{ bullets }}</li>
          </ul>
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
          company: "General Motors",
          start: "June 2020",
          end: "Present",
          numPositions: 1,
          position: "Software Developer",
          experience: [
            "Technologies: Angular, Springboot",
            "Other responsibilities: System support"
          ]
        },

        {
          company: "Local Wisdom",
          start: "June 2019",
          end: "June 2020",
          numPositions: 1,
          position: "Developer Intern",
          experience: [
            "Designing iPad and Desktop web applications for agencies and clients of Janssen Pharmaceuticals.",
            "Automating extraction of drug safety information provided by agencies into HTML and optimized work proficiency for other developers using Python.",
            "Using Python Tensorflow for live object detection.",
            "Technologies used: Vue.js, Bootstrap, jQuery, CSS, HTML, and Google Web Designer",
            "Other responsibilities: Development of advertisement material, contribution in website layout and design"
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
              end: "September 2019",
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
              end: "May 2020",
              experience: [
                "Identifying and troubleshooting bugs, applications, connectivity, compatibility, and software for students and faculty.",
                "Collaborating with coworkers to provide satisfying service for patrons with device problems.",
                "Maintaining over 50 computers in each computer lab on three sites for the students and faculty to use."
              ]
            }
          ]
        },
        {
          company: "Language Pilgrim LLC",
          start: "May 2017",
          end: "August 2018",
          numPositions: 1,
          position: "Web Developer Intern",
          experience: [
            "Assisted a Senior Software Developer update the backend of a website for Educational Testing Service (ETS).",
            "Data processed the ETS database through Python to make compatible in JSON.",
            "Used JQuery to update a search bar that identified key words.",
            "Created a Basketball Database using SQLite and website for the Developer",
            "Managed the database and data processed the database using Python."
          ]
        }
      ]
    };
  }
};
</script>