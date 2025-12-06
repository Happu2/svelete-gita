<script>
  import { selectedChapter } from "../lib/stores";

  const chapters = Array.from({ length: 18 }, (_, i) => i + 1);

  function select(ch) {
    selectedChapter.set(ch);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<div class="sidebar">
  <div class="back-btn" on:click={() => selectedChapter.set(undefined)}>
    <span>&lt; Back</span>
  </div>

  <h3>CHAPTER</h3>

  <div class="chapter-list">
    {#each chapters as ch}
      <button
        class:selected={ch === $selectedChapter}
        on:click={() => select(ch)}
      >
        {ch}
      </button>
    {/each}
  </div>
</div>

<style>
  .sidebar {
    background: white;
    padding: 1.3rem;
    border-radius: 10px;
    box-shadow: 0 1px 12px rgba(0,0,0,0.08);
  }

  .back-btn {
    font-size: 12px;
    color: #6b7280;
    cursor: pointer;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 13px;
    letter-spacing: 1.2px;
    font-weight: 600;
    text-align: center;
    margin: 6px 0 14px;
    color: #374151;
  }

  .chapter-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  button {
    height: 28px;
    width: 28px;
    font-size: 12px;
    border-radius: 6px;
    border: none;
    background: #f4f5f7;
    cursor: pointer;
    color: #111827;
  }

  button.selected {
    background: #111827;
    color: white;
  }
</style>
