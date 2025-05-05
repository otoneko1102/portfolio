<script>
  import '$lib/style.css';
  import '$lib/styles/main.css';
  import '$lib/styles/sidebar.css';

  import { page } from '$app/stores';
  import head from '$lib/head.js';
  import me from '$lib/me.js';
  let sidebarOpen = false;
  $: full_url = $page.url.href;

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Catalunya", path: "/catalunya" }
  ]

  import { onMount, afterUpdate, onDestroy } from 'svelte';
  const typingCooldown = 150, typingClass = "typing";
  let loaded = false;
  let prev_path = '';
  let animationPending = false;

  // タイピング
  function typeText(p) {
    const fullText = p.textContent;
    p.textContent = '';
    setTimeout(() => {
      p.classList.add(typingClass);
      let i = 0;
      const interval = setInterval(() => {
        if (i < fullText.length) {
          p.textContent += fullText[i++];
        } else {
          p.classList.remove(typingClass)
          clearInterval(interval);
        }
      }, typingCooldown);
    }, 750)
  }

  function startTypingAnimation() {
    const main = document.querySelector('main');
    if (!main) return;
    const paragraphs = main.querySelectorAll('h1:not(.ignored-typing), h2:not(.ignored-typing), h3:not(.ignored-typing), h4:not(.ignored-typing), h5:not(.ignored-typing), h6:not(.ignored-typing)');
    paragraphs.forEach(typeText);
  }

  const unsubscribe = page.subscribe(($page) => {
    if ($page.url.pathname !== prev_path) {
      prev_path = $page.url.pathname;
      loaded = false;
      setTimeout(() => {
        loaded = true;
        animationPending = true;
      }, 0);
    }
  });

  afterUpdate(() => {
    if (animationPending) {
      animationPending = false;
      startTypingAnimation();
    }
  });

  onDestroy(() => unsubscribe());
</script>

<svelte:head>
  <title>{head.title}</title>
  <meta property="og:url" content="{full_url}" />
  <meta property="twitter:url" content="{full_url}" />

  {#each head.meta as tag}
    <meta {...tag} />
  {/each}
</svelte:head>

<button
  class="sidebar-toggle {sidebarOpen ? '' : 'closed'}"
  on:click={() => (sidebarOpen = !sidebarOpen)}
>
  {sidebarOpen ? '<' : '>'}
</button>

<div
  role="complementary"
  class="sidebar {sidebarOpen ? '' : 'closed'}"
  on:mouseenter={() => (sidebarOpen = true)}
  on:mouseleave={() => (sidebarOpen = false)}
>
  <button class="menu-title">
    <div class="text-gradient">Menu</div>
  </button>
  <ul>
    {#each pages as p}
      <li class="{loaded ? 'loaded' : ''}">
        <a class= "text-gradient" href={p.path}>{p.name}</a>
      </li>
    {/each}
  </ul>

  <footer>
    <p>2022 - {(new Date()).getFullYear()} © {me.domain}</p>
  </footer>
</div>

<main class="{loaded ? 'loaded' : ''}">
  <slot />
  <!-- View Count -->
  <div class="box block">
    <h2>合計閲覧回数</h2>
    <img class="viewcount" src="https://count.getloli.com/@otoneko1102?theme=booru-jaypee" alt="otoneko1102" />
  </div>
</main>
