<template>
  <div class="b-todo">

    <!-- Bulma class: -->

    <div class="title has-text-centered">
      B ToDo
    </div>

    <div class="field is-grouped" mb-5>
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Add a Todo">
      </p>
      <p class="control">
        <a class="button is-info">
          Add
        </a>
      </p>
    </div>

    <!-- v-for displays 3 items; mb-5: margin bottom -->
    <div v-for="i in 3" class="card mb-5">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column">
              Shave head
            </div>
            <!-- is5 reduces size of column thus moving buttons to the right -->
            <!-- has-text-right right justifies text -->
            <div class="column is-5 has-text-right">
              <button class="button is-light">
                &check;
              </button>
              <!-- ml-2: margin left 2 to give left button some spacing -->
              <button class="button is-danger ml-2">
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

<style>
@import 'bulma/css/bulma.min.css';

.b-todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}
</style>
<!-- <script setup>import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

</script><template>
  <header><img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /><div class="wrapper"><HelloWorld msg="You did it!" /></div></header><main><TheWelcome /></main>
</template><style scoped>header {
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