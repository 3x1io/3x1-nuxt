<template>
  <div class="container">
    <div class="row align-items-center justify-content-center auth">
      <div class="col-md-6 col-lg-5">
        <div class="card">
          <div class="card-block">
            <Form action="admin" :data="{}" :inputs="form" inline-template>
              <form class="form-horizontal" role="form" method="POST" @submit.prevent="login" novalidate>
                <div class="auth-header">
                  <h1 class="auth-title">Login</h1>
                  <p class="auth-subtitle">Input Email & Password To login</p>
                </div>
                <div class="auth-body">
                  <div class="form-group" :class="{'has-danger': errors.has('email'), 'has-success': fields.email && fields.email.valid }">
                    <label for="email">Email</label>
                    <div class="input-group input-group--custom">
                      <div class="input-group-addon"><i class="input-icon fa fa-envelope"></i></div>
                      <input type="text" v-model="form.email" v-validate="'required|email'" class="form-control" :class="{'form-control-danger': errors.has('email'), 'form-control-success': fields.email && fields.email.valid}" id="email" name="email" placeholder="Email">
                    </div>
                    <div v-if="errors.has('email')" class="form-control-feedback form-text" v-cloak>{{ errors.first('email') }}</div>
                  </div>

                  <div class="form-group" :class="{'has-danger': errors.has('password'), 'has-success': fields.password && fields.password.valid }">
                    <label for="password">Password</label>
                    <div class="input-group input-group--custom">
                      <div class="input-group-addon"><i class="input-icon fa fa-lock"></i></div>
                      <input type="password" v-model="form.password"  class="form-control" :class="{'form-control-danger': errors.has('password'), 'form-control-success': fields.password && fields.password.valid}" id="password" name="password" placeholder="Password">
                    </div>
                    <div v-if="errors.has('password')" class="form-control-feedback form-text" v-cloak>{{ errors.first('password') }}</div>
                  </div>

                  <div class="form-group">
                    <input type="hidden" name="remember" value="1">
                    <button type="submit" class="btn btn-primary btn-block btn-spinner"><i class="fa fa-save"></i> login</button>
                  </div>
                  <div class="form-group text-center">
                    <a href="reset-password" class="auth-ghost-link">Password Reset</a>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    created() {
      if(this.$fire.auth.currentUser){
        this.$router.push('/')
      }
    },
    data(){
      return {
        form: {
          email: "",
          password: ""
        }
      }
    },
    methods:{
      login (){
        this.$fire.auth.signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(user => {
            this.$swal('Success', "Login Success", 'success');
            this.$router.push('/admin')
          })
          .catch(e => this.$swal('UnAuth', e.message, 'error'))
      }
    }
  }
</script>
