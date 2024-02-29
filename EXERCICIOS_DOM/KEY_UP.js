let input = document.getElementById('texto');

let span = document.getElementById('span');

input.addEventListener('keyup', function() {
    span.textContent = `Valor do input: ${input.value}`
});

