<script>
  import axios from "axios";
  export default {
    data: function() {
      return {
        message: "decks here",
        decks: [],
        searchTerm: "",
        newDeck:{}
      }
    },
    created: function () {
      this.indexDecks();
    },
    methods: {
      indexDecks: function () {
        axios.get("http://localhost:3000/decks.json").then(response => {
          this.decks = response.data
        })

      },
      deckName: function () {
        document.querySelector('#new-deck').showModal();
      },
      addDeck: function () {
        axios.post("http://localhost:3000/decks.json", this.newDeck).then(response =>{
          window.location.reload();
        })
      },
      deleteDeck: function (toDelete) {
        axios.delete(`http://localhost:3000/decks/${toDelete.id}.json`).then(response => {
          window.location.reload();
        })
      }
    }
  }
</script>

<template>
  <button @click="deckName">Add a Deck</button>
  <hr />
  <div class="decks">
    <div v-for="deck in decks" v-bind:key="deck.id">
      <div>
        <h4><a class="btn btn-primary" v-bind:href="`/decks/${deck.id}`">{{deck.name}}</a></h4>
        <p>{{  deck.description.substring(0,30) }}</p>
        <button @click="deleteDeck(deck)">Delete Deck</button>
      </div>
      <hr />

    </div>
  </div>


  <dialog id="new-deck">
    <form method="dialog">
      <p>Name of your new deck:</p>
      <input type="text" v-model="this.newDeck.name" />
      <hr />
      <button @click="addDeck">Create Deck</button>
      <button>Close</button>
    </form>
  </dialog>

</template>