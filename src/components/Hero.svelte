<script>
  import banner from '../assets/gita_banner.png';
  import book from '../assets/gita_open.png';
</script>

<section class="hero">
  <div class="overlay"></div>
  <h1>BHAGAVAD GITA</h1>
  <img src={book} alt="book" class="hero-book" />
</section>

<style>
  .hero {
    width: 100%;
    height: 350px;
    background-image: url('../assets/gita_banner.png');
    background-size: cover;
    background-position: center top;
    position: relative;
    margin-top: 70px; /* below navbar */
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
  }

  h1 {
    position: absolute;
    bottom: 110px;
    font-size: 48px;
    font-family: 'Cinzel', serif;
    color: white;
    font-weight: 700;
  }

  .hero-book {
    position: absolute;
    bottom: -80px;
    width: 260px;
    filter: drop-shadow(0 8px 10px rgba(0,0,0,0.4));
  }
</style>
