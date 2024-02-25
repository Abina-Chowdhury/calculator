<script setup>

const QuoteDisplay = {
      data() {
        return {
          quoteData: null
        };
      },
      mounted() {
        fetch('https://animechan.xyz/api/random')
          .then(response => response.json())
          .then(data => {
            this.quoteData = data;
          });
      },
    }
</script>
<template>
    <div>
          <h2>Random Anime Quote</h2>
          <div v-if="quoteData">
            <p><strong>Quote:</strong> {{ quoteData.quote }}</p>
            <p><strong>Anime:</strong> {{ quoteData.anime }}</p>
            <p><strong>Character:</strong> {{ quoteData.character }}</p>
          </div>
        </div>
</template>

<style>
</style>