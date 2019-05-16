<script>
  import {onMount} from 'svelte'
  let message = "hi there dude"
</script>
<style>
  :global(div > p) {
    padding: 10px;
  }
  div {
    padding: 4rem;
    font-size: 2rem;
    color: red;
  }
</style>
<div>{message}</div>