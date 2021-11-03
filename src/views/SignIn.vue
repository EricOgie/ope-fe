<template>
    <div class="form_page">
        <div class="form_box">
            <div id="logo" class="my-2">
                <div class="desktop_logo">
                    <img src="@/assets/img/desktop_logo.svg" />
                </div>
                <!-- <div class="mobile_logo">
                    <img src="@/assets/img/mobile_logo.svg" />
                </div> -->
            </div>
            <div class="my-4">
                <form>
                    <div class="input_box">
                        <label class="input_label">Your Phone or Email</label>
                        <input
                            class="form_input"
                            type="text"
                        />
                    </div>
                    <div class="input_box">
                        <label class="input_label">Your Password</label>
                        <input
                            class="form_input"
                            type="password"
                        />
                    </div>
                    <div class="button_box bg-black px-4 py-2 my-2 hover:pr-4 cursor-pointer rounded flex flex-row justify-between items-center input_box">
                        <p class="text-white text-lg font-medium">Log in</p>
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
                </form>
            </div>
        </div>

        <div></div>
    </div>
</template>
<script>
export default {
    name: 'SignIn'
}
</script>