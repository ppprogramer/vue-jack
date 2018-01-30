import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      	path: '/',
      	name: 'Home',
      	component: Home,
      	children: [
      		{
		      path: '',
		      name: 'HelloWorld',
		      component: HelloWorld
		    },
		    {
		      path: '/bar',
		      name: 'Bar',
		      component: Bar
		    },
		    {
		      path: '/foo',
		      name: 'Foo',
		      component: Foo
		    }
      	]
    }
  ]
})
