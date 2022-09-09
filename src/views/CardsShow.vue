<script>
  import axios from "axios";

  export default {
  data: function () {
    return {
      card: 0

    };
  },
  created: function () {
    this.showCard();

  },
  methods: {
    showCard: function () {
      console.log('displaying card')
      console.log(this.$route.params.id)
      axios.get("http://localhost:3000/cards/" + this.$route.params.id + ".json").then(response => {
        console.log(response.data);
        this.card = response.data
      })
    },
    addCard: function () {
      console.log('adding card')
      axios.post(`http://localhost:3000/posts/${this.post.id}`).then(reponse => {
        console.log(response.data);
        this.$router.push("/posts")
      })
    }
  }
};
</script>

<template>
  <div class="cards-show">
    <p> <h3>{{card.name}} </h3>   {{card.cost}}</p>
    <h4> {{card.types }}</h4>
    <p> {{card.rules_text}}</p>
    <i> {{card.flavor_text}}</i>
    <div v-if="card.power"><h4> {{card.power}}/{{card.toughness}}</h4></div>
    
  </div>
</template>