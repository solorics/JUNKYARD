const bankPayment = document.getElementById('bankPayment');
  const cardPayment = document.getElementById('cardPayment');
  
  bankPayment.addEventListener('click', function() {
    if (bankPayment.checked) {
      cardPayment.checked = false;
    }
  });
  
  cardPayment.addEventListener('click', function() {
    if (cardPayment.checked) {
      bankPayment.checked = false;
    }
  });

