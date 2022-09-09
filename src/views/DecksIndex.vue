<script>
  import axios from "axios";
  export default {
    data: function() {
      return {
        message: "decks here",
        decks: [],
        searchTerm: ""
      }
    },
    created: function () {
      this.indexDecks();
    },
    methods: {
      indexDecks: function () {
        console.log('getting data')
        axios.get("http://localhost:3000/decks.json").then(response => {
        console.log(response.data);
        this.decks = response.data
      })

      }
    }
  }
</script>

<template>
  <div class="decks">
    <div v-for="deck in decks" v-bind:key="deck.id">
      <div>
        <h5>{{deck.name}}</h5>
        <p>{{  deck.description.substring(0,40)}}</p>
      </div>
    </div>
  </div>

</template>