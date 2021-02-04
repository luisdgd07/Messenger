<template>
    <div>
        <v-navigation-drawer v-model="drawer"  app class="blue">
            <v-list>
                <v-list-item class="mb-16">
                    <v-list-item-content>
                        <v-icon class="mb-2" large color="white">fa fa-comments</v-icon>
                        <h1 class="text-center" >Messenger</h1> 
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list>
                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon class="mb-1" large color="white">fa fa-file-alt</v-icon>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon class="mb-1" large color="white">fa fa-calendar-day</v-icon>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon class="m-2" large color="white">fa fa-comment-alt</v-icon>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/">
                        <v-list-item-content>
                            <v-icon class="mb-2" large color="white">fa fa-bell</v-icon>
                        </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list style="position: absolute;bottom:0" class="ml-5" flat>
                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon class="mb-2" large color="blue">fa fa-users</v-icon>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/">
                    <v-list-item-content>
                        <v-icon class="mb-2" large color="blue">fa fa-cog</v-icon>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item router to="/">
                    <v-list-item-avatar class="mb-5">
                        <v-badge  dot bottom color="green" offset-x="10" offset-y="10">
                            <v-avatar size="40">
                                <v-img src="https://cdn.vuetifyjs.com/images/lists/5.jpg"></v-img>
                            </v-avatar>
                        </v-badge>
                    </v-list-item-avatar>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>

</template>
<script>
export default {
    data:()=>({
        drawer:true,
    })
}
</script>
<style scoped>
h1{
    color: antiquewhite;
}
</style>