<script>
  import { Router, Link, Route } from "svelte-routing";
  import Basic from './Basic.svelte'
  import State from './State.svelte'
  import Reactivity from './Reactivity.svelte'
  import TemplateMagic from './TemplateMagic.svelte'

  export let url = "";
</script>

<style>
  :global(a) {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
</style>

<h1>Svelte 3</h1>
<Router url="{url}">
  <nav>
    <Link to="/">Basic</Link>
    <Link to="state">State</Link>
    <Link to="reactivity">Reactivity</Link>
    <Link to="template-magic">TemplateMagic</Link>

  </nav>
  <div>
    <Route path="/state" component="{State}" />
    <Route path="/"><Basic /></Route>
    <Route path="/reactivity" component="{Reactivity}" />
    <Route path="/template-magic" component="{TemplateMagic}" />
  </div>
</Router>