<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        message: "Edit the deck name or description",
        deck: {}
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
        })
      },
      updateDeck: function() {
        console.log('updating deck...')
        axios.patch(`http://localhost:3000/decks/${this.deck.id}.json`, this.deck).then(response => {
          console.log(response.data);
          this.$router.push(`/decks/${this.deck.id}`);
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
</template>

<style></style>