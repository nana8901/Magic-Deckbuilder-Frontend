<script>
  import axios from "axios";
  export default {
    data: function() {
      return {
        message: "deck here",
        cards: [],
        deck: [],
        hover: false,
      }
    },
    created: function () {
      this.indexCards()
        },
    methods: {
      indexCards: function () {
        axios.get(`http://localhost:3000/decks/${this.$route.params.id}.json`).then(response => {
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
    <a class="btn btn-primary" v-bind:href="`/decks/${this.$route.params.id}/edit`">Edit Deck</a>
    <hr />

  </div>
  <div class="deck_cards">
    <ul>
      <!-- need to add in a proper ordered list-add in divides for lands, creatures, noncreatures -->
      <div v-for="card in this.cards" v-bind:key="card.id" >
        <li>
          <h4>{{card.name}} X {{card.number_in_deck}}</h4>
          <span class="card_image">
            <img v-bind:src="card.image_url" />
          </span>
        </li>
        <hr />
      </div>
    </ul>
  </div>
</template>
<style>
  .card_image{
    position: absolute;
    left: -9999px
  }
  li:hover .card_image{
    left: 30px;
    top: 10px;
  }
</style>