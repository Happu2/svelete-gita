<script>
  import logo from "../assets/android-chrome-192x192.png";
</script>

<footer class="footer">
  <div class="connect">
  <a href="https://www.facebook.com/rutger.kortenhorst"><i class="fa fa-facebook"></i></a>
  <a href="https://www.youtube.com/channel/UCfORACtw16NKTrAG7ThVAjw"><i class="fa fa-youtube-play"></i></a>
  <a href="https://x.com/RutgerSanskrit"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-instagram"></i></a>
</div>

  <div class="brand">
    <img src={logo} alt="Logo" class="footer-logo" />
    <h2>WELLBEING<span>~</span>SVASTI</h2>
  </div>

  <p class="copy">
    © 2025 Rutger Kortenhorst. All Rights Reserved | Design and Developed by Burning Desire Inclusive
  </p>
</footer>

<style>
  .footer {
    width: 100%;
    background: #3E4A2C;
    padding: 50px 0 40px;
    text-align: center;
    color: #fff;
    margin-top: 60px;
  }

  .connect {
    margin-bottom: 20px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    gap: 22px;
  }

  .connect a {
    color: #fff;
    transition: opacity 0.2s;
  }

  .connect a:hover {
    opacity: 0.7;
  }

  .brand {
    margin-bottom: 14px;
  }

  .footer-logo {
    width: 60px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 22px;
    letter-spacing: 1.2px;
    margin: 0;
  }

  h2 span {
    padding: 0 3px;
  }

  .copy {
    font-size: 12px;
    opacity: 0.8;
    margin-top: 25px;
  }
</style>
