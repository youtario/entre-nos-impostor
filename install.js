let installPrompt = null;
const installButton = document.querySelector('#install-app');
const installDialog = document.querySelector('#install-instructions');
const installMessage = document.querySelector('#install-message');
const installed = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

function updateInstallButton() { installButton.hidden = installed(); }
updateInstallButton();

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installPrompt = event;
});
window.addEventListener('appinstalled', () => { installPrompt = null; updateInstallButton(); });

installButton.addEventListener('click', async () => {
  if (installPrompt) {
    const prompt = installPrompt;
    installPrompt = null;
    await prompt.prompt();
    await prompt.userChoice;
    return;
  }
  const isApple = /iPad|iPhone|iPod/.test(navigator.userAgent);
  installMessage.textContent = isApple
    ? 'No Safari, toque em Compartilhar e escolha “Adicionar à Tela de Início”. Depois, abra o jogo pelo novo ícone.'
    : 'Abra o menu do navegador e escolha “Instalar app” ou “Adicionar à tela inicial”. Depois, abra o jogo pelo novo ícone.';
  installDialog.showModal();
});
installDialog.querySelector('.close').addEventListener('click', () => installDialog.close());
installDialog.querySelector('#install-close').addEventListener('click', () => installDialog.close());
installDialog.addEventListener('click', event => { if (event.target === installDialog) installDialog.close(); });

if ('serviceWorker' in navigator) {
  const startedWithController = Boolean(navigator.serviceWorker.controller);
  let registration = null;
  let lastUpdateCheck = 0;
  let reloading = false;

  // A troca do cache não apaga uma partida nem os nomes já adicionados.
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    const emptySetup = typeof phase === 'undefined' || (phase === 'setup' && players.length === 0);
    if (startedWithController && emptySetup && !reloading) {
      reloading = true;
      window.location.reload();
    }
  });

  async function checkForAppUpdate() {
    if (!registration || document.hidden || !navigator.onLine || Date.now() - lastUpdateCheck < 60000) return;
    lastUpdateCheck = Date.now();
    try { await registration.update(); } catch (_) { /* O jogo continua disponível offline. */ }
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' })
      .then(value => { registration = value; lastUpdateCheck = Date.now(); })
      .catch(() => {});
  });
  window.addEventListener('focus', checkForAppUpdate);
  document.addEventListener('visibilitychange', checkForAppUpdate);
}
