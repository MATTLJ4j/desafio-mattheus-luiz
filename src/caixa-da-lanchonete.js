class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        }

        const extras = {
            chantily: "cafe",
            queijo: "sanduiche"
        }

        if (!["debito", "credito", "dinheiro"].includes(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        let total = 0;

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }


        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            if (!cardapio.hasOwnProperty(codigo)) {
                return "Item inválido!";
            }

            if (extras[codigo] && !itens.some(i => i.startsWith(extras[codigo]))) {
                return "Item extra não pode ser pedido sem o principal";
            }

            total += cardapio[codigo] * quantidade;

            if (quantidade == 0) {
                return "Quantidade inválida!";
            }
        }

        if (metodoDePagamento === "dinheiro") {
            total *= 0.95
        } else if (metodoDePagamento === "credito") {
            total *= 1.03
        }

        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

}

export { CaixaDaLanchonete };