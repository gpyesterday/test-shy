const toast = document.querySelector('.toast');

document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      toast.classList.add('show');
      button.firstChild.textContent = '복사 완료 ';
      window.setTimeout(() => {
        toast.classList.remove('show');
        button.firstChild.textContent = '프롬프트 복사 ';
      }, 1800);
    } catch {
      toast.textContent = '복사할 수 없어요. 텍스트를 직접 선택해 주세요.';
      toast.classList.add('show');
      window.setTimeout(() => toast.classList.remove('show'), 2200);
    }
  });
});
