<template>
    <div class="form_page">
        <div class="form_box">
            <div
                id="logo"
                class="my-4"
            >
                <div class="desktop_logo">
                    <img src="@/assets/img/desktop_logo.svg" />
                </div>
                <!-- <div class="mobile_logo">
                    <img src="@/assets/img/mobile_logo.svg" />
                </div> -->
        </div>
        <div class="head_text my-2">
            <p class="font-bold text-2xl">Create Your Account</p>
        </div>
        <div class="my-4">
            <form>
                <div class="input_box">
                    <label class="input_label">Enter Your fullname</label>
                    <input
                        :class="{ invalid_input: v$.form.fullname.$errors.length }"
                        class="form_input"
                        v-model="form.fullname"
                        @blur="v$.form.fullname.$touch"
                        type="fullname"
                        name="fullname"
                    />
                    <div
                        class="error_box"
                        v-if="v$.form.fullname.$errors.length"
                    >
                        <span v-for="(error, index) of v$.form.fullname.$errors" :key="index" class="items-center flex flex-shrink-0 text-red-500">
                            <svg
                                class="mr-2"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                                    </svg>
                                    <p>{{error.$message}}</p>
                        </span>
                </div>

        </div>
        <div class="input_box">
            <label class="input_label">Enter Your Phone or Email</label>
            <input
                :class="{ invalid_input: v$.form.email.$errors.length }"
                class="form_input"
                v-model="form.email"
                @blur="v$.form.email.$touch"
                type="email"
                name="email"
            />
           <div
                        class="error_box"
                        v-if="v$.form.email.$errors.length"
                    >
                        <span v-for="(error, index) of v$.form.email.$errors" :key="index" class="items-center flex flex-shrink-0 text-red-500">
                            <svg
                                class="mr-2"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                                    </svg>
                                    <p>{{error.$message}}</p>
                        </span>
                </div>
    </div>
    <div class="input_box">
        <label class="input_label">Enter Your Password</label>
        <input
            :class="{ invalid_input: v$.form.password.$errors.length }"
            class="form_input"
            type="password"
            v-model="form.password"
            @blur="v$.form.password.$touch"
        />
        <div
                        class="error_box"
                        v-if="v$.form.password.$errors.length"
                    >
                        <span v-for="(error, index) of v$.form.password.$errors" :key="index" class="items-center flex flex-shrink-0 text-red-500">
                            <svg
                                class="mr-2"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 2a6 6 0 100 12A6 6 0 008 2zM0 8a8 8 0 1116 0A8 8 0 010 8zm9-3a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 00-1 1v3a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                                    </svg>
                                    <p>{{error.$message}}</p>
                        </span>
                </div>
    </div>
    <div class="button_box bg-black px-4 py-2 my-2 hover:pr-4 cursor-pointer rounded flex flex-row justify-between items-center input_box">
        <p class="text-white text-lg font-medium">Create Account</p>
        <svg
            class="swipe"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 5L16 12L9 19"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            </svg>

    </div>
    <hr class="my-4" />
    <p>Already Have Account?
        <span class="text-blue-600 px-2 hover:underline hover:text-black">
            <router-link to="/login">Click to Sign In</router-link>
        </span>
    </p>
    </form>
    </div>
    </div>

    <div></div>
    </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import validName from '@/utils'

export default {
    name: 'CreateAccount',
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            form: {
                fullname: '',
                email: '',
                password: '',
                confirmPassword: '',
            }
        }
    },
    validations() {
        return {
            form: {
                fullname: {
                    required, name_validation: {
                        $validator: validName,
                        $message: 'Invalid Name. must contain only letters, dashes (-) and spaces'
                    }
                },

                email: { required, email },
                password: { required, min: minLength(8) },
                confirmPassword: { required }
            },
        }
    }
}
</script>