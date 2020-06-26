<template>
  <div>
    <p>I'm always excited for new opportunities :)</p>
    <input v-model="subject" placeholder="Subject"/>
    <textarea v-model="message" placeholder="Content"/>
  </div>
</template>


<script>
module.exports = {
  name: "myFooter"
};
</script>