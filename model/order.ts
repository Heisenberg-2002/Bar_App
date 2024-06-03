export type Order = {
    id : number,
    orderId : number,
    cocktailId : number,
    date? : Date,
    totalPrice?: number,
    status?: string,
  }