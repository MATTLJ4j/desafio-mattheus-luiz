import cardapio from "./cardapio"
import extras from "./extras"

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        if (!["debito", "credito", "dinheiro"].includes(metodoDePagamento)) {
            return "Forma de pagamento inválida!"
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!"
        }

        let total = 0

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',')
            if (!cardapio.hasOwnProperty(codigo)) {
                return "Item inválido!";
            }
            
            if (quantidade == 0) {
                return "Quantidade inválida!"
            }

            if (extras[codigo] && !itens.some(i => i.startsWith(extras[codigo]))) {
                return "Item extra não pode ser pedido sem o principal"
            }

            total += cardapio[codigo] * quantidade

        }

        if (metodoDePagamento === "dinheiro") {
            total *= 0.95
        } else if (metodoDePagamento === "credito") {
            total *= 1.03
        }

        return `R$ ${total.toFixed(2).replace('.', ',')}`
    }

}

export { CaixaDaLanchonete }