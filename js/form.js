document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        let total = 0;
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkedBox) {
            total += parseInt(checkedBox.value);
        });
        document.getElementById('total-price').innerText = total;
    });
});