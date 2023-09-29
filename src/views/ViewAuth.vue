<template>
    <div class="auth">
        <br>
        <div class="tabs is-centered">
            <ul>
                <li :class="{ 'is-active': !register }">
                    <a @click.prevent="register = false">Login</a>
                </li>
                <li :class="{ 'is-active': register }">
                    <a @click.prevent="register = true">Register</a>
                </li>
            </ul>
        </div>
        <div class="card auth-form">
            <div class="card-content">
                <form @submit.prevent="onSubmit">
                    <div class="title has-text-centered">
                        {{ formTitle }}
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="Enter a password">
                        </div>
                    </div>

                    <div class="field is-grouped is-grouped-right">
                        <p class="control">
                            <button class="button is-primary">
                                {{ formTitle }}
                            </button>
                        </p>
                    </div>

                </form>

            </div>
        </div>
    </div>
</template>

<script setup>

// Imports:
import { computed, ref } from 'vue'

// Register/Login
const register = ref(false)

// Form title
const formTitle = computed(() => {
    return register.value ? "Register" : "Login"
})

//Submit
const onSubmit = () => {
    console.log('form submited')
}
</script>

<style>
.auth-form {
    max-width: 400px;
    margin: 0 auto;
}
</style>