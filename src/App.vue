<template>
  <div class="b-todo">

    <!-- Bulma class: -->

    <div class="title has-text-centered">
      B's ToDo
    </div>

    <!-- submit handler, prevent = prevents page from being reloaded when submitting -->
    <form @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input v-model="newTodoContent" class="input" type="text" placeholder="Add a Todo">
        </p>
        <p class="control">
          <!-- Replace a tag with button so it can be submitted with form -->
          <!-- disabled: disables the add button if the text field is empty -->
          <button class="button is-info" :disabled="!newTodoContent">
            Add
          </button>
        </p>
      </div>
    </form>


    <!-- v-for displays i in 3 items; mb-5: margin bottom -->
    <!-- bind to class attribute add a class, but only when done property in object is true: -->
    <div v-for="todo in todos" class="card mb-5" :class="{ 'has-background-success-light': todo.done }">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column" :class="{ 'has-text-success line-through': todo.done }">
              {{ todo.content }}
            </div>
            <!-- is5 reduces size of column thus moving buttons to the right -->
            <!-- has-text-right right justifies text -->
            <div class="column is-5 has-text-right">
              <button @click="toggleDone(todo.id)" class="button" :class="todo.done ? 'is-success' : 'is-light'">
                &check;
              </button>
              <!-- ml-2: margin left 2 to give left button some spacing -->
              <!-- click handler sends data to function and provides id to delete -->
              <button class="button is-danger ml-2" @click="deleteTodo(todo.id)">
                &cross;
              </button>
            </div>
          </div>
          <!-- Classes are defined on Bulma.io site: -->

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { openBlock, ref, setBlockTracking, setTransitionHooks } from 'vue';
import { v4 as uuidv4 } from 'uuid'


/* todos */
const todos = ref([
  // Hard coded todos so you don't have to re-enter each time during testing:
  /*
  {
    id: 'id1',
    content: 'Shave head',
    done: false
  },
  {
    id: 'id2',
    content: 'Wash head',
    done: true
  }
  */

])

// If something is entered here other than empty string, it will show in the main web view
const newTodoContent = ref('')

const addTodo = () => {
  //console.log('add todo')

  const newTodo = {
    id: uuidv4(),  // uuidv4 provides unique ID during no-backend development;
    // later firebase will do this for us
    content: newTodoContent.value,
    done: false
  }
  console.log('newTodo: ', newTodo)

  // Unshift adds so newest todo is at the top when viewed
  todos.value.unshift(newTodo)
  // Clear the new todo input field:
  newTodoContent.value = ''
}

// delete
const deleteTodo = id => {
  //console.log('Delete todo:', id)

  // To delete a todo with local ref: we need to filter out all todos except
  // the ones with ids we want to keep:
  todos.value = todos.value.filter(todo => todo.id !== id)
}

const toggleDone = id => {
  console.log('toggleDone', id)

  /// todo is a placeholder
  const index = todos.value.findIndex(todo => todo.id === id)
  console.log('index to toggle', index)

  todos.value[index].done = !todos.value[index].done
}

</script>

<style>
@import 'bulma/css/bulma.min.css';

.b-todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}

.line-through {
  text-decoration: line-through;
}
</style>
<!-- <script setup>import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

<template>
  <header><img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /><div class="wrapper"><HelloWorld msg="You did it!" /></div></header><main><TheWelcome /></main>
<style scoped>header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}</style>
-->