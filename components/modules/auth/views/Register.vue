<template>
    <div class="container">
        <!-- Outer Row -->
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-register-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Registration!</h1>
                                    </div>
                                    <form class="user" @submit.prevent="submit">
                                        <div class="form-group">
                                            <input
                                                type="text"
                                                name="first_name"
                                                v-model="user.first_name"
                                                class="form-control form-control-user"
                                                id="examplfirst_nameeInputEmail"
                                                aria-describedby="first_name"
                                                placeholder="First Name..."
                                                v-validate="'required'"
                                                :class="{ 'is-invalid': submitted && errors.has('first_name') }"
                                            />
                                            <div
                                                v-if="submitted && errors.has('first_name')"
                                                class="invalid-feedback"
                                            >{{ errors.first("first_name") }}</div>
                                        </div>

                                        <div class="form-group">
                                            <input
                                                type="text"
                                                name="last_name"
                                                v-model="user.last_name"
                                                class="form-control form-control-user"
                                                id="last_name"
                                                aria-describedby="last_name"
                                                placeholder="Last Name..."
                                                v-validate="'required'"
                                                :class="{ 'is-invalid': submitted && errors.has('last_name') }"
                                            />
                                            <div
                                                v-if="submitted && errors.has('last_name')"
                                                class="invalid-feedback"
                                            >{{ errors.first("last_name") }}</div>
                                        </div>

                                        <div class="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                v-model="user.email"
                                                class="form-control form-control-user"
                                                id="email"
                                                aria-describedby="email"
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
                                                id="password"
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

                                        <div class="form-group">
                                            <input
                                                type="password"
                                                name="confrim_password"
                                                v-model="user.confrim_password"
                                                class="form-control form-control-user"
                                                id="confrim_password"
                                                placeholder="Confirm Password"
                                                v-validate="'required|confirmed:password'"
                                                :class="{ 'is-invalid': submitted && errors.has('confrim_password') }"
                                            />
                                            <div
                                                v-if="submitted && errors.has('confrim_password')"
                                                class="invalid-feedback"
                                            >{{ errors.first("confrim_password") }}</div>
                                        </div>

                                        <button class="btn btn-info btn-user btn-block">Submit</button>
                                    </form>
                                    <hr />
                                    <div class="text-center">
                                        <router-link
                                            :to="{name: 'login'}"
                                            class="small"
                                        >Back to Login</router-link>
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
    name: "Register",
    data() {
        return {
            user: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                confrim_password: ""
            },
            submitted: false
        };
    },
    methods: {
        submit(e) {
            e.preventDefault();
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.$store
                        .dispatch("auth/register", { data: this.user })
                        .then(res => console.log(res))
                        .catch(err => console.log(err));
                }
            });
        }
    }
};
</script>
