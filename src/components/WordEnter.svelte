<script>
  import { wordStore } from "../store.js";

  let value = "";
  let message;

  function addWord(word) {
    word = word.toLowerCase();
    // check if word already exists
    if ($wordStore.includes(word)) {
      message = "Word Already Exists!";
    } else {
      message = null;
      let newArray = [...$wordStore, word];
      newArray.sort((a, b) => a.localeCompare(b));
      wordStore.update(() => newArray);
    }
    value = "";
  }
</script>

<section class="my-4">
  <form
    id="inputForm"
    autocomplete="off"
    class="flex flex-col justify-center"
    on:submit|preventDefault={() => addWord(value)}
  >
    <input type="text" class="word-input" required bind:value placeholder="Enter Word" />
    <button type="submit" class="p-2 border">Enter</button>
  </form>
</section>
{#if message}
  <p class="flex justify-center font-bold text-red-600 uppercase">{message}</p>
{/if}
