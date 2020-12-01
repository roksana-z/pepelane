import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../App.vue";
import CardPage from "../views/card-page.vue";
import CardList from "../views/cards-list.vue"
import Specification from '../components/specification.vue';
import Team from '../components/team.vue';
import Terms from '../components/terms.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: CardList
  },
  {
    path: "/card/:id",
    name: "card-page",
    component: CardPage,
    props: true,
    children: [{
      name: 'specification',
      path: '/card/:id',
      component: Specification
    }, {
      name: 'team',
      path: 'team',
      component: Team
    },{
      name: 'terms',
      path: 'terms',
      component: Terms
    }]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
