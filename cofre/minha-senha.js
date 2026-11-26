function gerarSenha() {
    const campo = document.getElementById("minha-tamanho");
    const tamanho = Number(campo.value);
    const resultado = document.getElementById("minha-resultado");

    if (!Number.isInteger(tamanho) || tamanho < 8 || tamanho > 64) {
        resultado.textContent = "Informe um tamanho entre 8 e 64.";
        return;
    }

    const caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789!@#$%&*";

    let senha = "";

    const limite = 256 - (256 % caracteres.length);
    const numero = new Uint8Array(1);

    while (senha.length < tamanho) {
        crypto.getRandomValues(numero);

        if (numero[0] < limite) {
            senha += caracteres[numero[0] % caracteres.length];
        }
    }

    resultado.textContent = senha;
}