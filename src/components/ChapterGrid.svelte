<script>
  import { selectedChapter, showChapterGrid } from "../lib/stores";
  import gitaBook from "../assets/gita_book.png";
  import gitaBanner from "../assets/gita_banner.png";
  import gitaOpen from "../assets/gita_open.png";

  const chapters = Array.from({ length: 18 }, (_, i) => i + 1);

  function open(ch) {
    selectedChapter.set(ch);
    showChapterGrid.set(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<!-- KRISHNA BANNER -->
<div class="banner">
  <img src={gitaBanner} alt="Krishna Banner" />
</div>

<!-- BOOK IMAGE BELOW BANNER (white background) -->
<div class="book-wrap">
  <img src={gitaOpen} alt="Gita Book" class="book-img" />
</div>

<!-- Full page background area -->
<div class="chapter-bg">
  <!-- Wide white region -->
  <div class="white-wrapper">
    <!-- Center beige chapter section -->
    <section class="chapter-box">
      <h1>GITA CHAPTERS</h1>
      <div class="underline"></div>

      <div class="grid">
        {#each chapters as ch}
          <div class="card" on:click={() => open(ch)}>
            <img src={gitaBook} alt="Book" />
            <div class="overlay">{ch}</div>
          </div>
        {/each}
      </div>
    </section>
  </div>
</div>

<style>
  /* BANNER */
  .banner {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  .banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* BOOK SECTION WITHOUT DARK BACKGROUND */
  .book-wrap {
    width: 100%;
    text-align: center;
    background: white;
    padding: 35px 0 25px;
  }
  .book-img {
    width: 380px;
    max-width: 90%;
    height: auto;
  }

  /* DARK GREEN background behind everything */
  .chapter-bg {
    width: 100%;
    background: #3b4630;
    display: flex;
    justify-content: center;
  }

  /* WIDE WHITE background on left & right */
  .white-wrapper {
    width: 100%;
    max-width: 2400px;
    background: white;
    display: flex;
    justify-content: center;
  }

  /* BEIGE CENTER BOX */
  .chapter-box {
    width: 100%;
    max-width: 1650px;
    background: #f6efe2;
    text-align: center;
    padding: 70px 0 120px;
    border-left: 4px solid #3b4630;
    border-right: 4px solid #3b4630;
  }

  h1 {
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 600;
    color: #ba4748;
    margin-bottom: 8px;
  }

  .underline {
    width: 160px;
    height: 2px;
    background: #ba4748;
    margin: 0 auto 60px;
  }

  /* DIAMOND CARD GRID */
  .grid {
    width: 88%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6, 140px);
    justify-content: center;
    gap: 60px 75px;
  }

  /* DIAMOND SHAPE */
  .card {
    width: 130px;
    height: 130px;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    position: relative;
    cursor: pointer;
    overflow: hidden;
    background: #000;
    transition: transform 0.15s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.35);
  }

  /* IMAGE FIXED CENTER CROP */
  .card img {
    width: 190%;
    height: 190%;
    object-fit: cover;
    position: absolute;
    top: -35%;
    left: -45%;
  }

  /* DARK NUMBER STRIP */
  .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45%;
    clip-path: inherit;
    background: rgba(0,0,0,0.58);
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* HOVER EFFECT */
  .card:hover {
    transform: scale(1.06);
    box-shadow: 0 6px 18px rgba(0,0,0,0.45);
  }

  /* MOBILE */
  @media (max-width: 900px) {
    .banner { height: 200px; }
    .book-img { width: 260px; }
    .grid {
      grid-template-columns: repeat(3, 110px);
      gap: 32px 32px;
    }
    .card {
      width: 110px;
      height: 110px;
    }
    .overlay {
      font-size: 22px;
    }
  }
</style>
