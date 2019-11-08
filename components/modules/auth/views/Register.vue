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
                                    <form class="user">
                                        <div class="form-group">
                                            <input
                                                type="text"
                                                name="first_name"
                                                v-model="user.first_name"
                                                class="form-control form-control-user"
                                                id="examplfirst_nameeInputEmail"
                                                aria-describedby="first_name"
                                                placeholder="First Name..."
                                                :class="{ 'is-invalid': submitted && $v.user.first_name.$error }"
                                            />
                                            <div
                                                v-if="submitted && $v.user.first_name.$error"
                                                class="invalid-feedback"
                                            >
                                                <span
                                                    v-if="!$v.user.first_name.required"
                                                >First name is required</span>
                                            </div>
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
                                                :class="{ 'is-invalid': submitted && $v.user.last_name.$error }"
                                            />
                                            <div
                                                v-if="submitted && $v.user.last_name.$error"
                                                class="invalid-feedback"
                                            >
                                                <span
                                                    v-if="!$v.user.last_name.required"
                                                >Last name is required</span>
                                            </div>
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
                                                :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                                            />
                                            <div
                                                v-if="submitted && $v.user.email.$error"
                                                class="invalid-feedback"
                                            >
                                                <span
                                                    v-if="!$v.user.email.required"
                                                >Email is required</span>
                                                <span v-if="!$v.user.email.email">Email is invalid</span>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                v-model="user.password"
                                                class="form-control form-control-user"
                                                id="password"
                                                placeholder="Password"
                                                :class="{ 'is-invalid': submitted && $v.user.password.$error }"
                                            />
                                            <div
                                                v-if="submitted && $v.user.password.$error"
                                                class="invalid-feedback"
                                            >
                                                <span
                                                    v-if="!$v.user.password.required"
                                                >Password is required</span>
                                                <span
                                                    v-if="!$v.user.password.minLength"
                                                >Password must be at least 6 characters</span>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <input
                                                type="password"
                                                name="confrim_password"
                                                v-model="user.confrim_password"
                                                class="form-control form-control-user"
                                                id="confrim_password"
                                                placeholder="Confirm Password"
                                                :class="{ 'is-invalid': submitted && $v.user.confrim_password.$error }"
                                            />
                                            <div
                                                v-if="submitted && $v.user.confrim_password.$error"
                                                class="invalid-feedback"
                                            >
                                                <span
                                                    v-if="!$v.user.confrim_password.required"
                                                >Confirm password is required</span>
                                                <span
                                                    v-if="!$v.user.confirm_password.sameAsPassword"
                                                >Passwords must match</span>
                                            </div>
                                        </div>

                                        <button
                                            class="btn btn-info btn-user btn-block"
                                            @click="submit"
                                        >Submit</button>
                                    </form>
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
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
    validations: {
        user: {
            first_name: { required },
            last_name: { required },
            email: { required, email },
            password: { required, minLength: minLength(6) },
            confrim_password: {
                required,
                sameAsPassword: sameAs("user.password")
            }
        }
    },
    methods: {
        submit(e) {
            e.preventDefault();
            this.submitted = true;
            // stop here if form is invalid
            this.$v.$touch();
            console.log("test");
        }
    }
};
</script>
