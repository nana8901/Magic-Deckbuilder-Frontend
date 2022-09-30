<script>
  import axios from "axios";

  export default {
  data: function () {
    return {
      card: 0,
      num: [0, 1, 2, 3, 4],
      newCardAddParams: {deck_id: 1, card_id: 2},
      decks:[]
    };
  },
  created: function () {
    this.showCard();

  },
  methods: {
    showCard: function () {
      console.log('displaying card')
      axios.get("http://localhost:3000/cards/" + this.$route.params.id + ".json").then(response => {
        this.card = response.data
        console.log(this.card)
        this.newCardAddParams.card_id = this.card.id
      })
      console.log('checking decks')
      axios.get("http://localhost:3000/decks.json").then(response => {
        console.log(response.data);
        this.decks = response.data
      })
    },
    addCard: function () {
      console.log('adding card')
      console.log(this.newCardAddParams)
      axios.post(`http://localhost:3000/cards/${this.card.id}/add`, this.newCardAddParams)
    },
  }
};
</script>
<head>{{ this.card.name }}</head>
<style type="text/css">
  * {margin: 0; padding: 0;}
  #container {height: 100%; width: 100%; font-size: 0;}
  #left, #right {display: inline-block; *display: inline; zoom: 1; vertical-align: top; font-size: 12px;}
  #left {width: 50%;}
  #right {width: 50%; }
</style>
<template>
  <div id="container">
    
      <div id="left">
        <img v-bind:src="this.card.image_url" />
      </div>
      <div id="right">
        <p> <h3>{{this.card.name}} </h3>   {{this.card.cost}}</p>
      <!-- <h4> {{this.card.types }}</h4> -->
      <p> {{this.card.rules_text}}</p>
      <i> {{this.card.flavor_text}}</i>
      <div v-if="this.card.power"><h4> {{this.card.power}}/{{this.card.toughness}}</h4></div>
        <select v-model="newCardAddParams.number_in_deck" class="form-control sl">
          <option v-if="this.card.types.includes('Basic')" v-for="num in 99" v-bind:value="num">
            {{num}}
          </option>
          <option v-if="!this.card.types.includes('Basic')" v-for="num in this.num" v-bind:value="num">
            {{num}}
          </option>
        </select>

        <select v-model="newCardAddParams.deck_id" class="form-control sl">
          <option v-for="deck in this.decks" v-bind:value="deck.id">
            {{deck.name}}
          </option>
        </select>
        <button @click="this.addCard">Add to deck</button>
      
    </div>
  </div>
</template>
