document.querySelectorAll('.campo').forEach(input => {
    input.addEventListener('focus', function() {
      this.parentNode.style.border = '2px solid #5f4434';
    });
    input.addEventListener('blur', function() {
      this.parentNode.style.border = '2px solid #5f4434';
    });
  });