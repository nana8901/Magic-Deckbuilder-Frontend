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
        console.log('getting data')
        axios.get("http://localhost:3000/decks.json").then(response => {
          console.log(response.data);
          this.decks = response.data
        })

      },
      deckName: function () {
        console.log('New deck name here;')
        document.querySelector('#new-deck').showModal();
      },
      addDeck: function () {
        console.log(`new deck with ${this.newDeck.name} for a name`)
        axios.post("http://localhost:3000/decks.json", this.newDeck)

      }
    }
  }
</script>

<template>
  <button @click="deckName">Add Deck(semifunctional)</button>
  <div class="decks">
    <div v-for="deck in decks" v-bind:key="deck.id">
      <div>
        <h4>{{deck.name}}</h4>
        <p>{{  deck.description.substring(0,30) }}</p>
      </div>
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