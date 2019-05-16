<script>

let promise = getQuote()

async function getQuote() {
  const result = await fetch('http://quotes.rest/qod.json')
  const data = await result.json()
  return data.contents.quotes[0].quote
}

</script>

<style>
  * {
    color: darkcyan;
    padding: 1rem;
    font-size: 1.5rem;
  }
</style>

<div>
  {#await promise}
	<!-- promise is pending -->
    <p>waiting for the promise to resolve...</p>
  {:then value}
    <!-- promise was fulfilled -->
    <p>The value is {JSON.stringify(value, null, 2)}</p>
  {:catch error}
    <!-- promise was rejected -->
    <p>Something went wrong: {error.message}</p>
  {/await}
</div>
