<script>
  import {
    verses,
    loading,
    error,
    fontSize,
    projectorMode,

    showChapterGrid

  } from "../lib/stores";

  const baseUrl = "https://www.sanskrit.ie/";
  const fullUrl = (p) => (p ? baseUrl + p : null);
</script>

<section class={`verses-wrapper ${$projectorMode ? "projector" : ""}`}>
  <div class="verses-card">
    <header class="verses-header">
      <div class="header-left">
        <div class="verse-label">Verse</div>
      </div>

      <div class="header-right">
        <div class="font-control">
          <span>Font Size:</span>
          <input
            type="range"
            min="12"
            max="40"
            bind:value={$fontSize}
          />
          <span class="font-value">{$fontSize}px</span>
        </div>

        <button
          type="button"
          class="icon-btn"
          title="Toggle projector mode"
          on:click={() => projectorMode.update((v) => !v)}
        >
          🖥
        </button>

        <button
          type="button"
          class="icon-btn"
          title="Close"
          disabled
        >
          X
        </button>

        <button
  type="button"
  class="icon-btn"
  title="Back"
  on:click={() => showChapterGrid.set(true)}
>
  ←
</button>
      </div>
    </header>

    <div class="verses-body" style={`font-size: ${$fontSize}px;`}>
      {#if $loading}
        <div class="status">Loading verses…</div>

      {:else if $error}
        <div class="status status-error">{$error}</div>

      {:else if !$verses || $verses.length === 0}
        <div class="status">Data Not Found</div>

      {:else}
        {#each $verses as v}
          <article class="verse-block">
            {#if v.shlok_no && v.shlok_no !== "0"}
              <h3 class="verse-heading">Verse {v.shlok_no}</h3>
            {/if}

            <div class="verse-lyrics">
              {@html v.lyrics}
            </div>

            <div class="media-row">
              {#if fullUrl(v.music)}
                <audio controls class="audio-player">
                  <source src={fullUrl(v.music)} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              {/if}

              {#if fullUrl(v.qr)}
                <img
                  class="qr-img"
                  src={fullUrl(v.qr)}
                  alt="QR code"
                />
              {/if}
            </div>
          </article>
        {/each}
      {/if}
    </div>

    <p class="info-text">
      John Scottus School runs a Junior Certificate Short Course. We are
      discouraging teenagers from SELF-HARMING by introducing them to methods
      to maintain or get back to wellbeing.
    </p>
  </div>
</section>

<style>
  .verses-wrapper {
    color: #111827;
  }

  .verses-wrapper.projector {
    background: #000;
    padding: 0.75rem;
  }

  .verses-wrapper.projector .verses-card {
    background: #111;
    border-color: #374151;
    color: #f9fafb;
  }

  .verses-wrapper.projector .verse-lyrics,
  .verses-wrapper.projector .status {
    color: #f9fafb;
  }

  .verses-card {
    background: #fff;
    border-radius: 0.75rem;
    border: 1px solid #e5e7eb;
    padding: 1rem 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .verses-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.25rem;
  }

  .verse-label {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: #6b7280;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .font-control {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    color: #4b5563;
  }

  .font-control input[type="range"] {
    accent-color: #111827;
  }

  .font-value {
    min-width: 48px;
    text-align: right;
  }

  .icon-btn {
    width: 30px;
    height: 30px;
    border-radius: 999px;
    border: 1px solid #e5e7eb;
    background: #f9fafb;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    cursor: pointer;
    transition: background 0.12s ease, transform 0.08s ease;
  }

  .icon-btn:hover:not(:disabled) {
    background: #e5e7eb;
    transform: translateY(-1px);
  }

  .icon-btn:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .verses-body {
    border-top: 1px solid #e5e7eb;
    padding-top: 0.75rem;
    max-height: 540px;
    overflow-y: auto;
  }

  .status {
    font-size: 0.9rem;
    color: #4b5563;
  }

  .status-error {
    color: #b91c1c;
  }

  .verse-block + .verse-block {
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-top: 1px dashed #e5e7eb;
  }

  .verse-heading {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin: 0 0 0.3rem;
    color: #4b5563;
  }

  .verse-lyrics :global(p) {
    margin: 0.15rem 0;
  }

  .verse-lyrics :global(br) {
    line-height: 1.4;
  }

  .media-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.4rem;
    flex-wrap: wrap;
  }

  .audio-player {
    min-width: 220px;
  }

  .qr-img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 0.25rem;
    border: 1px solid #e5e7eb;
    background: #fff;
  }

  .info-text {
    margin: 0.75rem 0 0;
    font-size: 0.8rem;
    color: #6b7280;
  }

  @media (max-width: 900px) {
    .verses-card {
      padding: 0.75rem 0.9rem 1rem;
    }

    .verses-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .header-right {
      align-self: stretch;
      justify-content: space-between;
    }

    .verses-body {
      max-height: none;
    }
  }
</style>
