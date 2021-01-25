<template>
  <div class="container">
    <span class="teaser">Coming soon</span>
    <h1 class="title">ReminCare</h1>
    <p class="address">Remincourt 72, 7864 Deux-Acren</p>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;&display=swap');

.container {
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #e6cfc9;
}

.title {
  font-weight: 400;
  font-size: 100px;
  color: #db764a;
}

.teaser {
  display: block;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  opacity: 0.7;
  letter-spacing: 1px;
  color: #db764a;
}

.address {
  color: #024842;
}
</style>
