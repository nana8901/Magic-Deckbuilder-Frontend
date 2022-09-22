<script>
  import axios from "axios";
  export default {
    data: function() {
      return {
        message: "deck here",
        cards: [],
        searchTerm: "",
      }
    },
    created: function () {
      this.indexCards()
        },
    methods: {
      indexCards: function () {
        console.log('getting data')
        axios.get("http://localhost:3000/decks/1.json").then(response => {
        console.log(response.data);
        this.cards = response.data.cards
      })

      }
    }
  }
</script>
<template>
  <div class="deck_cards">
    <div v-for="card in this.cards" v-bind:key="card.id">
      <h5>{{card.name}} X {{card.number_in_deck}}</h5>
      <hr />
    </div>
  </div>
</template>