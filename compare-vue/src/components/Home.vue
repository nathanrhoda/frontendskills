<template>
  <div class="home">   
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading }}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle is-4">{{ subheading }}</h2>
          </div>
          <a class="button is-large is-primary" id="learn">Learn More</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-primary"></i>
          </div>
           <div class="column is-one-third-desktop">
            <p class="title"><strong>Engineering Technologist</strong></p>
          </div>
            <div class="column">
            <p id="welcometext">With close to 20 years experience in technology. Skilled at developing and formulating a strategy around a business outcome, hands on implementation of solutions as well as growing and leading teams to 
              deliver on a vision.</p>
          </div>
        </div>
      </div>
      <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Knowing is not enough we must apply. Willing is not enough we must do.</p>
              <p class="subtitle has-text-right">- Bruce Lee</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Knowing is not enough we must apply. Willing is not enough we must do.</p>
              <p class="subtitle has-text-right">- Bruce Lee</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">Knowing is not enough we must apply. Willing is not enough we must do.</p>
              <p class="subtitle has-text-right">- Bruce Lee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      heading: 'Nathan Rhoda',
      subheading: 'Welcome to my Blog this is where I will cover all random things that consume my focus from time to time. Main goal here is to showcase my thoughts, ideas on health, tech and entrepreneurship passions'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero
  background: url('../assets/star.jpg')  
  background-size: cover    

  .title    
    color: #fff
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem       

  .subtitle
    color: #fff  

h2
  margin: 1.5rem 0 2rem 0 !important  

.fa-cog
  font-size: 40px

#learn
  +desktop
    margin-bottom: 2rem    

.pd
  +tablet
    padding: 2em 0

</style>
