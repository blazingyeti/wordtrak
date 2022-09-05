<script>
  import { wordStore } from "../store.js";

  function deleteWord(word) {
    console.log(word);
    let newArray = $wordStore.filter((v) => v !== word);
    wordStore.set(newArray);
  }
</script>

<section class="flex flex-col items-center">
  <div class="flex gap-2">
    Current Word Count: <div class="font-bold">{$wordStore.length}</div>
  </div>
  <ul class="flex-grow">
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
