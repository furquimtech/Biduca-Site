const HEADER_HTML = `<nav class="nav" aria-label="Navegação principal">
  <a class="brand" href="index.html"><img src="assets/brand/biduca-logo-horizontal.png" alt="Biduca Confeitos"></a>
  <div class="nav-links">
    <a href="index.html" data-page="home">Home</a>
    <a href="produtos.html" data-page="produtos">Produtos</a>
    <a href="ocasioes.html" data-page="ocasioes">Ocasiões</a>
    <a href="historia.html" data-page="historia">Nossa História</a>
    <a href="datas-comemorativas.html" data-page="datas">Datas</a>
    <a href="processo-artesanal.html" data-page="processo">Processo</a>
    <a href="contato.html" data-page="contato">Contato</a>
    <a class="button button-whatsapp" href="https://wa.me/5531985371561">WhatsApp</a>
    <a class="button button-instagram" href="https://www.instagram.com/biducaconfeitos/">Instagram</a>
  </div>
</nav>`;

const FOOTER_HTML = `<div class="footer-inner">
  <img class="footer-seal" src="assets/brand/biduca-logo-selo.jpg" alt="Biduca Confeitos">
  <div class="footer-content">
    <p class="footer-contact">
      <a class="footer-social footer-social-whatsapp" href="https://wa.me/5531985371561">
        <span class="footer-icon" aria-hidden="true"></span><span>(31) 98537-1561</span>
      </a>
      <span class="footer-divider">|</span>
      <a class="footer-social footer-social-instagram" href="https://www.instagram.com/biducaconfeitos/">
        <span class="footer-icon" aria-hidden="true"></span><span>@biducaconfeitos</span>
      </a>
    </p>
    <p><a href="mailto:contato@biducaconfeitos.com.br">contato@biducaconfeitos.com.br</a><span>|</span><span>BH / MG</span></p>
    <p class="footer-copy">© 2026 Biduca Confeitos — Todos os direitos reservados</p>
  </div>
</div>`;

const MOBILE_CTA_HTML = `<a class="button button-whatsapp" href="https://wa.me/5531985371561">WhatsApp</a>
<a class="button button-instagram" href="https://www.instagram.com/biducaconfeitos/">Instagram</a>`;

const header = document.querySelector('.site-header');
if (header) header.innerHTML = HEADER_HTML;

const footer = document.querySelector('.site-footer');
if (footer) footer.innerHTML = FOOTER_HTML;

const mobileCta = document.querySelector('.mobile-cta');
if (mobileCta) mobileCta.innerHTML = MOBILE_CTA_HTML;

const currentPage = document.body.dataset.page;
document.querySelectorAll('.nav-links a').forEach((link) => {
  if (link.dataset.page && link.dataset.page === currentPage) {
    link.setAttribute('aria-current', 'page');
  }
});
