<script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        cards: [],
        searchTerm: "",
        page: 1,
        cardSlice:[]
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
      nameFilterAndPaginate: function() {
        var out =  this.cards.filter(card => {
          var lowerSearchTerm = this.searchTerm.toLowerCase();
          var lowerCardName = card.name.toLowerCase();
          return lowerCardName.includes(lowerSearchTerm)
        })
        i = 0
        while (i<0 && out[(this.page * 20) + 1] != nil) {
          this.cardSlice[i] = out[i + (this.page * 20)]
          i = i + 1;
        }
        return this.cardSlice
      }
    }
  }
</script>
<template>
  Search: <input type="text" v-model="this.searchTerm" />
  <div class="cards">
    <ul>
      <div v-for="card in nameFilterAndPaginate()" v-bind:key="card.id">
        <li>
          <h5>{{card.name}}</h5>
          <span class="card_image">
            <img v-bind:src="card.image_url" />
          </span>
          <a class="btn btn-primary" v-bind:href="`/cards/${card.id}`">See More</a>
          
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
    position: fixed;
    left: 40px;
    top: 30px;
  }
</style>