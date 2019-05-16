<script>
  let value = 0
  let rangeMax = 10
  let numOfVowels= 0
   $: leftOver = rangeMax - value;
  $: if (leftOver === 0) {
    alert("at the limit")
  } 

  function onKeyDown(e) {
    const val = e.target.value
    const vowel_list = 'aeiouAEIOU';
    numOfVowels = val.split('').reduce((acc, v) => vowel_list.includes(v) ? acc + 1 : acc, 0)
  }
</script>
<style>
  * {
    color: purple;
    padding: 1rem;
    font-size: 1.5rem;
  }
</style>

<input type="range" bind:value={value} min="0" max={rangeMax} />
<h1>{value}</h1>
<h1>{leftOver}</h1>
<input type="text" on:keydown={onKeyDown} />
<p>number or vowels: {numOfVowels}</p>