<template>
    <div class="container">
        <!-- Outer Row -->
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form class="user" @submit.prevent="login">
                                        <div class="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                v-model="user.email"
                                                class="form-control form-control-user"
                                                id="exampleInputEmail"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..."
                                                v-validate="'required|email'"
                                                :class="{ 'is-invalid': submitted && errors.has('email') }"
                                            />
                                            <div
                                                v-if="submitted && errors.has('email')"
                                                class="invalid-feedback"
                                            >{{ errors.first("email") }}</div>
                                        </div>
                                        <div class="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                v-model="user.password"
                                                class="form-control form-control-user"
                                                id="exampleInputPassword"
                                                placeholder="Password"
                                                v-validate="{ required: true, min: 6 }"
                                                ref="password"
                                                :class="{ 'is-invalid': submitted && errors.has('password') }"
                                            />
                                            <div
                                                v-if="submitted && errors.has('password')"
                                                class="invalid-feedback"
                                            >{{ errors.first("password") }}</div>
                                        </div>
                                        <!-- <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input
                                                    type="checkbox"
                                                    class="custom-control-input"
                                                    id="customCheck"
                                                />
                                                <label
                                                    class="custom-control-label"
                                                    for="customCheck"
                                                >Remember Me</label>
                                            </div>
                                        </div>-->
                                        <button class="btn btn-primary btn-user btn-block">Login</button>
                                    </form>
                                    <hr />
                                    <!-- <div class="text-center">
                                        <a
                                            class="small"
                                            href="forgot-password.html"
                                        >Forgot Password?</a>
                                    </div>-->
                                    <div class="text-center">
                                        <router-link
                                            :to="{name: 'register'}"
                                            class="small"
                                        >Create an Account!</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            user: {
                email: "",
                password: ""
            },
            submitted: false
        };
    },
    methods: {
        login(e) {
            e.preventDefault();
            this.submitted = true;
            let data = {
                email: this.user.email,
                password: this.user.password
            };

            this.$validator.validate().then(valid => {
                if (valid) {
                    this.$store
                        .dispatch("auth/login", { data })
                        .then(() => this.$router.push("/"))
                        .catch(err => this.$toastr.e(err, "Failed"));
                }
            });
        }
    }
};
</script>
