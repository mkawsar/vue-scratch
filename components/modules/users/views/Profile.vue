<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12">
                <div class="card shadow mb-4">
                    <div class="card-header">
                        <h6 class="m-0 font-weight-bold text-primary">{{ this.$route.meta.title }}</h6>
                    </div>
                    <div class="card-body">
                        <form action="#" class="form-horizontal">
                            <div class="form-group">
                                <label for="firstName" class="control-label col-sm-3">First Name</label>
                                <div class="col-sm-12">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFirstName"
                                        v-model="user.first_name"
                                        placeholder="First Name"
                                    />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="lastName" class="control-label col-sm-12">Last Name</label>
                                <div class="col-sm-12">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="last_name"
                                        v-model="user.last_name"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="email" class="control-label col-sm-3">Email</label>
                                <div class="col-sm-12">
                                    <input
                                        type="eamil"
                                        class="form-control"
                                        id="email"
                                        v-model="user.email"
                                        placeholder="Email"
                                        readonly
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <button class="btn btn-success" @click="update">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    data() {
        return {
            user: {}
        };
    },
    mounted() {
        this.$store
            .dispatch("userStore/profile")
            .then(res => {
                if (res.status == "200") {
                    this.user = res.user;
                }
            })
            .catch(err => {
                this.$toastr.e(err.data.message, "Failed");
                localStorage.clear();
                this.$router.push("/login");
            });
    },
    methods: {
        update(e) {
            e.preventDefault();
            this.$store
                .dispatch("userStore/profileUpdate", {
                    data: this.user
                })
                .then(res => {
                    this.$toastr.s(res.data.message, "Success");
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
