document.addEventListener('DOMContentLoaded', () => {

  // Mobile sidebar toggle
  const hamburger = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  hamburger?.addEventListener('click', () => sidebar.classList.toggle('open'));

  // Like buttons
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('liked');
      const statsEl = btn.closest('.post').querySelector('.post-stats');
      const match = statsEl.textContent.match(/💚 ([\d,]+)/);
      if (!match) return;
      let count = parseInt(match[1].replace(/,/g, ''), 10);
      count += btn.classList.contains('liked') ? 1 : -1;
      statsEl.innerHTML = statsEl.innerHTML.replace(/💚 [\d,]+/, `💚 ${count.toLocaleString()}`);
      btn.textContent = btn.classList.contains('liked') ? '💚 Liked' : '💚 Like';
    });
  });

  // Subscribe toggles (post header buttons)
  document.querySelectorAll('.btn-subscribe').forEach(btn => {
    btn.addEventListener('click', () => {
      const subscribed = btn.classList.toggle('subscribed');
      btn.textContent = subscribed ? 'Subscribed' : 'Subscribe';
    });
  });

  // Subscribe toggles (sidebar suggestions)
  document.querySelectorAll('.btn-outline').forEach(btn => {
    btn.addEventListener('click', () => {
      const subscribed = btn.classList.toggle('subscribed');
      btn.textContent = subscribed ? 'Subscribed' : 'Subscribe';
    });
  });

  // Tip modal
  const tipModal = document.getElementById('tipModal');
  const tipClose = document.getElementById('tipClose');
  const tipConfirm = document.getElementById('tipConfirm');

  document.querySelectorAll('.tip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tipConfirm.textContent = '';
      tipModal.classList.add('open');
    });
  });

  tipClose?.addEventListener('click', () => tipModal.classList.remove('open'));
  tipModal?.addEventListener('click', (e) => {
    if (e.target === tipModal) tipModal.classList.remove('open');
  });

  document.querySelectorAll('.tip-option').forEach(opt => {
    opt.addEventListener('click', () => {
      tipConfirm.textContent = `Sent! ${opt.textContent} 🎉 They'll never go back to a hangover after this.`;
    });
  });

  // New Post button (silly placeholder)
  document.getElementById('newPostBtn')?.addEventListener('click', () => {
    alert('What are you celebrating today? (This is a parody site, posting is just for laughs 💚)');
  });
});
