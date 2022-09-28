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
        console.log('in show deck')
        console.log(this.$route.params.id)
        axios.get("http://localhost:3000/decks/" + this.$route.params.id + ".json").then(response => {
          console.log(response.data);
          this.deck = response.data;
          this.cards= response.data.cards;
          this.newCardAddParams.deck_id = this.deck.id
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
      },
      changeCard: function (toChangeCard) {
        console.log('change card ' + toChangeCard.in_deck_id + " " + toChangeCard.name + ' ' + this.newCardAddParams[toChangeCard.id])
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
          <h4>{{card.name}} <select v-model="newCardAddParams[card.id]" class="form-control sl">
              <option v-if="card.types.includes('Basic')" v-for="num in 99" v-bind:value="num">
                {{num}}
              </option>
              <option v-if="!card.types.includes('Basic')" v-for="num in [0,1,2,3,4]" v-bind:value="num">
                {{num}}
              </option>
            </select>
          </h4>
          <button @click="this.changeCard(card)">Submit(semifunctional)</button>
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