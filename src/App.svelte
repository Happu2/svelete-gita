<script>
  import NavBar from "./components/NavBar.svelte";
  import Hero from "./components/Hero.svelte";
  import ChapterGrid from "./components/ChapterGrid.svelte";
  import VerseList from "./components/VerseList.svelte";
  import Footer from "./components/Footer.svelte";
  import BottomBar from "./components/BottomBar.svelte";

  import {
    selectedChapter,
    showChapterGrid,
    verses,
    loading,
    error
  } from "./lib/stores";

  import { getChapter } from "./lib/api";

  async function loadChapter(ch) {
    if (ch === null) return; // safety

    loading.set(true);
    error.set("");
    verses.set([]);

    try {
      const data = await getChapter(ch);
      verses.set(data);
    } catch (e) {
      console.error(e);
      error.set("Error loading verses");
    } finally {
      loading.set(false);
    }
  }

  // ⬇ REACTIVE — runs every time chapter changes
  $: if ($selectedChapter !== null && !$showChapterGrid) {
    loadChapter($selectedChapter);
  }
</script>

<NavBar />

{#if $showChapterGrid}
  <!-- FIRST SCREEN: CHAPTER GRID -->
  <ChapterGrid />
{:else}
  <!-- VERSE SCREEN ONLY -->
  <Hero />

  <section class="verse-only">
    <VerseList />
  </section>
{/if}

<Footer />
<BottomBar />

<style>
  .verse-only {
    width: 100%;
    max-width: 1100px;
    margin: 40px auto 100px;
    padding: 0 1rem;
  }

  @media (max-width: 900px) {
    .verse-only {
      margin: 20px auto 70px;
      padding: 0 0.6rem;
    }
  }
</style>
