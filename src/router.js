import Vue from 'vue'
import Router from 'vue-router'

import TodoList from './views/TodoList.vue'
import TaskList from './views/TaskList.vue'
import TaskEdit from './views/TaskEdit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/:groupName',
      name: 'groupName',
      component: TaskList
    },
    {
      path: '/:groupName/:taskName/edit',
      name: 'taskName',
      component:TaskEdit
    }
  ]
})
