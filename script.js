function openModal() {
    const modal = document.getElementById('contactModal');
    const modalContent = modal.querySelector('.modal');
    modal.classList.add('active');
    setTimeout(() => {
      modalContent.classList.add('active');
    }, 10);
  }

  function closeModal() {
    const modal = document.getElementById('contactModal');
    const modalContent = modal.querySelector('.modal');
    modalContent.classList.remove('active');
    setTimeout(() => {
      modal.classList.remove('active');
    }, 300);
  }

  // Close modal when clicking outside
  document.getElementById('contactModal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });