<script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        cards: [],
        searchTerm: ""
      }
    },
    created: function() {
      this.indexCards();
    },
    methods: {
      indexCards: function () {
        console.log('getting data')
        axios.get("http://localhost:3000/cards.json").then(response => {
        console.log(response.data);
        this.cards = response.data
      })

      }
    }
  }
</script>
<template>
  <div class="cards">
    <div v-for="card in cards" v-bind:key="card.id">
      <h5>{{card.name}}</h5>
      <a class="btn btn-primary" v-bind:href="`/cards/${card.id}`">See More</a>
      <hr />
    </div>
  </div>
</template>