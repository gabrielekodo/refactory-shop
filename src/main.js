import { createApp } from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

//importing all components to be used for routing
import HomeSection from './components/HomeSection.vue'
import StaffSection from "./components/StaffSection.vue";
import ProgramsSection from "./components/ProgramsSection.vue";
import CoursesSection from "./components/CoursesSection.vue";
import AlumniSection from "./components/AlumniSection.vue";
import AlumniReg from "./components/AlumniReg.vue";

//creating the routes for navigating
const routes=[
    {path:'/',component:HomeSection},
    {path:'/programs',component:ProgramsSection},
    {path:'/alumni',component:AlumniSection},
    {path:'/alumni/register',component:AlumniReg},
    {path:'/staff',component:StaffSection},
    {path:'/courses',component:CoursesSection},
]

//create the router

const router=createRouter({
    history:createWebHashHistory(),
    routes

})


const app=createApp(App)
app.use(router)


app.mount('#app')
