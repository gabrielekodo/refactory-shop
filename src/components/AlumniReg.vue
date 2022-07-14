<template>
<div class="container">
    <h2 class="text-center">Register Today and lets connect</h2>
  <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-6">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="" name="firstname" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="" name="lastname" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustomUsername" class="form-label">Email</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="email" class="form-control" id="validationCustomUsername" name="email" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please enter valid email
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Phone</label>
    <input type="tel" class="form-control" id="validationCustom03" name="phone" required>
    <div class="invalid-feedback">
      Please enter phone.
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom04" class="form-label">Cohort</label>
    <input type="text" class="form-control" id="validationCustom03" name="cohort" required>

    <div class="invalid-feedback">
      Please enter your cohort
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom05" class="form-label">Age</label>
    <input type="number" class="form-control" id="validationCustom05" name="age" required>
    <div class="invalid-feedback">
      Please provide your age.
    </div>
  </div>
 
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

</div>
</template>

<script>
export default {
    name:'AlumniReg'

}
</script>

<style scoped>
.container{
    margin: 30px auto;
    padding: 15px;
    max-width: 800px;
}
</style>