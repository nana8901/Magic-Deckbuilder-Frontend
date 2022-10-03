<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Edit the deck name or description",
        deck: {},
        cards: [],
        newCardAddParams: {}
      };
    },
    created: function () {
      this.showDeck();
    },
    methods: {
      showDeck: function() {
        axios.get("http://localhost:3000/decks/" + this.$route.params.id + ".json").then(response => {
          this.deck = response.data;
          this.cards= response.data.cards;
          this.newCardAddParams.deck_id = this.deck.id
        })
      },
      updateDeck: function() {
        axios.patch(`http://localhost:3000/decks/${this.deck.id}.json`, this.deck).then(response => {
          this.$router.push(`/decks/${this.deck.id}`);
        })
      },
      deleteCard: function (toGoCard) {
        axios.delete(`http://localhost:3000/cards/${toGoCard.in_deck_id}`).then(response => {
          window.location.reload();
        })
      },
      changeCard: function (toChangeCard) {
        this.newCardAddParams.id = toChangeCard.in_deck_id, 
        this.newCardAddParams.number_in_deck = toChangeCard.number_in_deck
        axios.patch(`http://localhost:3000/cards`, this.newCardAddParams)
      }
    },
  };
</script>

<template>
  <div class="decks-edit">    
    <!-- {{ deck }} -->
    <p>Name: <input type="text" v-model="deck.name" /></p>
    <p>Description: <input type="text" v-model="deck.description" /></p>
    <button v-on:click="updateDeck()">Update</button>
  </div>
  <div class="deck_cards">
    <ul>
      <div v-for="card in this.cards" v-bind:key="card.id" >
        <li>
          <h4>{{card.name}} <select v-model="card.number_in_deck" class="form-control sl">
              <option v-if="card.types.includes('Basic')" v-for="num in 99" v-bind:value="num">
                {{num}}
              </option>
              <option v-if="!card.types.includes('Basic')" v-for="num in [0,1,2,3,4]" v-bind:value="num">
                {{num}}
              </option>
            </select>
          </h4>
          <button @click="this.changeCard(card)">Submit</button>
          <p />
          <button @click="deleteCard(card)">Delete card?</button>
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