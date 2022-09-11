import Installment from "./installment";

export default interface Product {
    productId: number;
    productName: string;
    stars: number;
    imageUrl: string;
    listPrice: number;
    price: number;
    installments: Installment[];

}