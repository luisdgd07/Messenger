<template>
  <div class="home">
   
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      selected:[2],
        items:[ {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: 'Ali Connors',
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: 'me, Scrott, Jennifer',
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
          title: 'Sandra Adams',
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
          title: 'Trevor Hansen',
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          title: 'Britta Holt',
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: 'Connors',
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: ' Jennifer',
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
          title: 'Sandra ',
        },],
        files:[
          {text:'Landing page.zip',icon:'mdi-cloud-upload'},
          {text:'requirements.pdf',icon:'mdi-cloud-upload'},
          {text:'Pages.doc',icon:'mdi-cloud-upload'},
        ],
        panel:[2],
        show:false,
        message:'Escribe un mensaje',
        marker:true,
        iconIndex:0,

    },
    computed: {
      
    },
  },
}
</script>
