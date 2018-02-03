import Index from 'components/teams/index.vue'
import Edit from 'components/teams/edit.vue'
import Show from 'components/teams/show.vue'


const routes = [
	{ path:'/teams', component: Index },
	{ path:'/teams/:id/edit', component: Edit},
	{ path:'/teams/:id', component: Show}
];

export default routes;