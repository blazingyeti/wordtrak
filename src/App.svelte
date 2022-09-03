<script>
  import WordEnter from "./components/WordEnter.svelte";
  import WordList from "./components/WordList.svelte";
</script>

<main>
  <div class="grid grid-cols-3 grid-rows-3 place-items-center h-screen">
    <div class="col-start-2"><h1 class="title">WordTrak</h1></div>
    <div class="col-start-2 row-start-2">
      <WordEnter />
      <WordList />
    </div>
  </div>
</main>
