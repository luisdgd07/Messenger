<template>
  <v-app :style="{background:$vuetify.theme.themes.dark.background}">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" class="border">
          <app-bar flat color="rgba(0,0,0,0)">
            <v-btn tile color="white" x-large block>
              <v-icon left color="blue"> fas fa-plus</v-icon>
            <v-divider class="mx-3" vertical></v-divider>
            Nuevo mensaje
            </v-btn>

          </app-bar>
          <app-bar flat color="rgba(0,0,0,0)">
            <v-toolbar-title class="title" >
            Chat
         
            <v-btn icon >
              <v-icon>fas fa-ellipsis-h</v-icon>
            </v-btn>
               </v-toolbar-title>
          </app-bar>
          <app-bar flat color="rgba(0,0,0,0)">
            <v-text-field filled label="Buscar" append-icon="mdi-magnify">
              
            </v-text-field>
          </app-bar>
          <v-list two-line color="rgba(0,0,0,0)">
            <v-list-item-group v-model="selected" active-class="blue lighten-4" multiple>
              <template v-for="(item,index) in items">
                <v-list-item :key="item.title">
                  <v-badge bordered bottom color="green" dot offset-x="22" offset-y="26">
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                  </v-badge>
                  <template>
                    <v-list-item-content>
                      <v-list-title v-text="item.title"></v-list-title>
                      <v-list-subtitle v-text="item.subtitle"></v-list-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-divider v-if="index <items.length" :key="index"></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="12" sm="6" class="border">
          <v-app>
            <v-app-bar flat color="rgba(0,0,0,0)">
              <v-badge bordered bottom color="green" dot offset-x="11" offset-y="13">
                <v-avatar class="mt-n7" size="40" elevation="10">
                  <img src="http://cdn.vuetifyjs.com/images/lists/1.jpg" alt="">
                </v-avatar>
              </v-badge>
              <v-toolbar-title class="title pl-0 ml-2 mt-n4">
                Fernando Gaucho
              </v-toolbar-title>
              <v-spacer></v-spacer>
                <v-btn color="blue" icon class="mt-n5 mr-n2" outlined max-height="35" max-width="35">
                  <v-icon small>fas fa-plus</v-icon>
                </v-btn>
                <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
                  <img  src="http://cdn.vuetifyjs.com/images/lists/5.jpg" alt="">
                </v-avatar>
                <v-divider vertical inset class="mt-n1"></v-divider>
                <v-btn color="black" icon class="mt-n5">
                  <v-icon>mdi-cog</v-icon>
                </v-btn>
            </v-app-bar>
            <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
              <v-spacer></v-spacer>
              <v-card class="mt-10 mr-2" max-width="350px" color="blue" dark>
                <v-list-item three-line>
                  <v-list-content>
                    <div class="mb-4">
                      Buenos Dias Cómo estas?
                    </div>
                    <v-list-item-subtitle>Hace 40 min <span class="ml-16">Visto 10:35 AM</span> </v-list-item-subtitle>
                  </v-list-content>
                </v-list-item>
              </v-card>
              <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
                <v-avatar class="mt-n5" size="30" elevation="10">
                  <img  src="http://cdn.vuetifyjs.com/images/lists/5.jpg" alt="">
                </v-avatar>
              </v-badge>
            </v-app-bar>
            <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
              <v-badge bordered color="green" dot offset-x="16" offset-y="9">
                <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
                <img  src="http://cdn.vuetifyjs.com/images/lists/1.jpg" alt="">
                </v-avatar>
              </v-badge>
              <v-card class="mt-10" max-width="350px">
                <v-list-item three-line>
                  <v-list-content>
                    <div class="mb-4">
                      Hola Bien y tu?
                    </div>
                    <v-list-item-subtitle>Hace 34 min </v-list-item-subtitle>

                  </v-list-content>
                </v-list-item>
              </v-card>
              <v-btn color="black" icon class="mb-n10">
                <v-icon>fas fa-ellipsis-h</v-icon>
              </v-btn>
            </v-app-bar>
            <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
              <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
                <v-avatar class="mt-n5" size="30" elevation="10">
                  <img  src="http://cdn.vuetifyjs.com/images/lists/1.jpg" alt="">
                </v-avatar>
              </v-badge>
              <v-card class="mt-10 ml-2" max-width="350px">
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="mb-4">
                      Fernando Compartió 2 fotos <br>
                      <v-avatar size="60" tile class="mr-2">
                      <v-img src="http://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img></v-avatar>
                           <v-avatar size="60" tile class="mr-2">
                      <v-img src="http://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img></v-avatar>
                    </div>
                    <v-list-item-subtitle>Hace 10 min</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-app-bar>
          </v-app>
        </v-col>
        <v-col cols="12" sm="3" class="border">
        </v-col>
      </v-row>
    </v-container>
  </v-app>
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

    }
  },
  computed: {
    theme(){
      return this.$vuetify.theme.dark ? "dark" : "light";
    },

  },
  methods: {
    sendMessage(){
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage(){
      this.message='';
    },
    resetIcon(){
      this.iconIndex=0;
    }
  },
}
</script>
<style scoped>
  .border{
    border-right: 2px solid rgb(226, 223, 223);

  }
</style>
