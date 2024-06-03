import type { Cocktail } from "~/model/cocktail";
import type { OrderDetails } from "~/model/orderDetails";

export default function useBasket() {

    // Super Ref pour stocker les lignes du panier 
  const details = useState<OrderDetails[]>("basket-details", () => []);

  const addToBasket = (cocktail : Cocktail) => {
    // création de ma ligne de commande en fonction de cocktail
    const orderDetails : OrderDetails = {
        cocktailID : cocktail.id,
        cocktailName: cocktail.name,
        price : cocktail.price,
        quantity: 1,
    } 
    details.value.push(orderDetails)
  };

  const basketItems = computed(()=> details.value);

  const clearBasket = () => {};

  //retourne le nombre d'élements dans le panier
  const countBasketItems = computed(() => details.value.length);

  return { addToBasket, clearBasket, countBasketItems, basketItems };
}
