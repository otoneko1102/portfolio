<script>
  import me from '$lib/me.js';
  const links = me.links;
  const hobbies = me.hobbies;
  const techs = me.techs;
</script>

<div class="title-wrapper">
  <h1>Home</h1>
</div>

<div class="grid">
  <!-- 自己紹介 -->
  <div class="box block">
    <h2>自己紹介</h2>
    <div class="flex">
      <div class="block">
        <div class="circle">
          <img class="circle-img" src="icon.png" alt="Icon" />
        </div>
      </div>
      <div class="block">
        <div class="profile">
          <div class="block">
            <h3>{me.name}</h3>
            <h4>a.k.a. {me.aka}</h4>
          </div>
          <div class="block">
            <p>{me.address}</p>
            <p>{me.class}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <h3>コメント</h3>
      <p>そろそろIoTを極めたい。</p>
    </div>
  </div>

  <!-- リンク -->
  <div class="box block">
    <h2>リンク集</h2>
    <div class="block">
      {#each links as link}
        <div class="flex">
          <div class="link-icon-wrapper">
            <img class="link-icon-img" src={link.icon} alt={link.tag} title={link.tag} />
          </div>
          <a class="link-text" href={link.url} target="_blank">{link.tag} - {link.display}</a>
        </div>
      {/each}
    </div>
  </div>

  <!-- 趣味 -->
  <div class="box block">
    {#each hobbies as hobby}
      <h3>{hobby.tag}</h3>
      <p>{hobby.items.join(" / ")}</p>
    {/each}
  </div>

  <!-- 技術 -->
  <div class="box block">
    <h2>技術</h2>
    <div class="flex tech-icons">
      {#each techs as tech}
        <div class="tech-icon-wrapper">
          <img class="tech-icon-img" src={tech.url} alt={tech.alt} title={tech.alt} />
        </div>  
      {/each}
    </div>
  </div>
</div>
