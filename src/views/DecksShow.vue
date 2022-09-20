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
      this.indexCards()
        },
    methods: {
      indexCards: function () {
        console.log('getting data')
        axios.get("http://localhost:3000/decks.json").then(response => {
        console.log(response.data);
        this.decks = response.data
      })

      }
    }
  }
</script>