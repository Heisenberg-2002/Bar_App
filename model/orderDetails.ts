export type OrderDetails = {
    id?:  number; //Id technique d'une ligne de commande (PK)
    orderId?: number; // Id technique d'une commande (FK)
    cocktailID : number; // Id technique d'un COCKtail (FK)
    cocktailName : string;
    price : number;
    quantity: number;
}