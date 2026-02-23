const scrollTopBtn = document.getElementById('scrollTopBtn');
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (form) {
  const fields = Array.from(form.querySelectorAll('input, select, textarea'));

  fields.forEach((field) => {
    const key = `contact_${field.name}`;
    const saved = localStorage.getItem(key);
    if (saved) field.value = saved;

    field.addEventListener('input', () => {
      localStorage.setItem(key, field.value);
    });
  });

  form.addEventListener('submit', () => {
    status.textContent = 'Đang mở ứng dụng email để gửi thông tin về anh84446@gmail.com...';
  });
}
