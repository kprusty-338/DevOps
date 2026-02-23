document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const countEl = document.getElementById('count');
  if (!btn || !countEl) return;
  let count = 0;
  btn.addEventListener('click', () => {
    count += 1;
    countEl.textContent = `Button clicked: ${count}`;
  });
});
