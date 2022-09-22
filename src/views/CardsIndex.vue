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
      },
      nameFilter: function() {
        return this.cards.filter(card => {
          var lowerSearchTerm = this.searchTerm.toLowerCase();
          var lowerCardName = card.name.toLowerCase();
          return lowerCardName.includes(lowerSearchTerm)
        })
      }
    }
  }
</script>
<template>
  Search: <input type="text" v-model="this.searchTerm" />
  <div class="cards">
    <div v-for="card in nameFilter()" v-bind:key="card.id">
      <h5>{{card.name}}</h5>
      <a class="btn btn-primary" v-bind:href="`/cards/${card.id}`">See More</a>
      <hr />
    </div>
  </div>
</template>