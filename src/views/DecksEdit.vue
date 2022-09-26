<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Edit the deck name or description",
        deck: {},
        cards: []
      };
    },
    created: function () {
      this.showDeck();
    },
    methods: {
      showDeck: function() {
        console.log('in show deck')
        console.log(this.$route.params.id)
        axios.get("http://localhost:3000/decks/" + this.$route.params.id + ".json").then(response => {
          console.log(response.data);
          this.deck = response.data;
          this.cards= response.data.cards
        })
      },
      updateDeck: function() {
        console.log('updating deck...')
        axios.patch(`http://localhost:3000/decks/${this.deck.id}.json`, this.deck).then(response => {
          console.log(response.data);
          this.$router.push(`/decks/${this.deck.id}`);
        })
      },
      deleteCard: function (toGoCard) {
        console.log('delete card ' + toGoCard.in_deck_id + " " + toGoCard.name)
        axios.delete(`http://localhost:3000/cards/${toGoCard.in_deck_id}`).then(response => {
          console.log(response)
          window.location.reload();
        })
        
      }
    },
  };
</script>

<template>
  <div class="decks-edit">    
    {{ message }}
    <p>Name: <input type="text" v-model="deck.name" /></p>
    <p>Description: <input type="text" v-model="deck.description" /></p>
    <button v-on:click="updateDeck()">Update</button>
  </div>
  <div class="deck_cards">
    <ul>
      <div v-for="card in this.cards" v-bind:key="card.id" >
        <li>
          <h4>{{card.name}} X {{card.number_in_deck}}</h4><button @click="deleteCard(card)">Delete card?</button>
          <span class="card_image">
            <img v-bind:src="card.image_url" />
          </span>
        </li>
        <hr />
      </div>
    </ul>
  </div>
</template>

<style></style>