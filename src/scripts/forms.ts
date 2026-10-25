// The design has no backend: forms confirm in place. Swap the submit
// handler for a real endpoint (Formspree, a serverless function, etc.) to go live.
export function bindInlineForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-inline-form]').forEach((form) => {
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (!button) return;
    const idle = button.textContent ?? '';
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      button.textContent = button.dataset.sent ?? idle;
    });
    form.addEventListener('input', () => { button.textContent = idle; });
  });
}
