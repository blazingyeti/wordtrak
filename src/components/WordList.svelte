<script>
  import { wordStore } from "../store.js";

  function deleteWord(word) {
    console.log(word);
    let newArray = $wordStore.filter((v) => v !== word);
    wordStore.set(newArray);
  }
</script>

<section class="flex flex-col items-center">
  <h2>Current Word List</h2>
  <ul>
    {#each $wordStore as word}
      <li
        class="capitalize hover:cursor-pointer hover:scale-110 transition duration-100"
        on:click={() => deleteWord(word)}
      >
        {word}
      </li>
    {/each}
  </ul>
</section>
