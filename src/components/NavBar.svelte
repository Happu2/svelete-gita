<script>
  import logo from '../assets/logo.png';
</script>

<nav class="navbar">
  <div class="nav-left">
    <img src={logo} alt="Logo" class="logo" />
    <span class="site-title">John Scottus School</span>
  </div>

  <ul class="nav-links">
    <li>AYURVEDA</li>
    <li>YOGASŪTRAS</li>
    <li class="active">BHAGAVAD GITA</li>
    <li>UPANIṢADS</li>
    <li>SANSKRIT</li>
    <li>Contact us</li>
  </ul>
</nav>

<style>
  .navbar {
    width: 100%;
    height: 70px;
    background: #0e1722;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo {
    height: 45px;
  }

  .site-title {
    color: white;
    font-size: 16px;
    font-weight: 600;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 22px;
    margin: 0;
    padding: 0;
  }

  .nav-links li {
    color: white;
    font-size: 15px;
    cursor: pointer;
  }

  .nav-links li.active {
    border-bottom: 2px solid white;
    padding-bottom: 6px;
  }
</style>
