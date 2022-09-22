<script>
  import axios from "axios";
  export default {
    data: function() {
      return {
        message: "deck here",
        cards: [],
        deck: []
      }
    },
    created: function () {
      this.indexCards()
        },
    methods: {
      indexCards: function () {
        console.log('getting data')
        axios.get(`http://localhost:3000/decks/${this.$route.params.id}.json`).then(response => {
        console.log(response.data);
        this.cards = response.data.cards
        this.deck = response.data
      })

      }
    }
  }
</script>
<template>
  <div class="name and description">
    <h3>{{deck.name}}</h3>
    <p>{{deck.description}}</p>
    <button @click=""> Edit button(nonfunctional)</button>

  </div>
  <div class="deck_cards">
    <div v-for="card in this.cards" v-bind:key="card.id">
      <h5>{{card.name}} X {{card.number_in_deck}}</h5>
      <hr />
    </div>
  </div>
</template>