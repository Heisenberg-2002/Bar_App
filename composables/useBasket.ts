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

  const clearBasket = () => details.value = [];
  //retourne le nombre d'élements dans le panier
  const countBasketItems = computed(() => details.value.length);

    // Calcule le prix total du panier
    const calculateTotalPrice = () => {
      return details.value.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    };


  // const transformBasket = async () => {

  //   // const orderItems = order.    // Appeler POST /order avec date, status etc.
  //   // fetch
  //   // => récuperer l'ID technique de la nouvelle ORDER qui vient d'être créée et qui sera utilisée en FK de orderDetails
  //   const order = await createOrder();

  //   // Pour chaque order-details du panier, appeler POST /order-details avec en body le contenu d'order detail + orderId récupéré au dessus
    
  //   if(order) {
  //     for (const detail of details.value) {
  //       detail.orderId = order.id;
  //       await createOrderDetails(detail);
  //     }
  //   }
   

  //   // Rediriger l'utilisateur vers la page /view-order/{orderId}
  // };

  // // Créer une commande
  // const createOrder = async () => {
  //   const order : Order = {
  //     date : new Date(),
  //     totalPrice: calculateTotalPrice(),
  //     status: "En préparation" || "Préparé" || "Terminé",
  // }; 
  //   try {
  //     const response = await fetch("http://localhost:8080/v1/orders", {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body : JSON.stringify(order)
  //     });
  //     if(!response.ok){
  //        throw new Error('Failed to create order')
  //     } 
  //     console.log(order)
  //     return await response.json() as Order;
  //   }catch (error){
  //     console.error('Error fetching orders:', error);
  //     return undefined;
  //   }
  // }

  // const createOrderDetails = async (orderDetail : OrderDetails) => {
  //   try {
  //     const response = await fetch("http://localhost:8080/v1/ordersdetails", {
  //       method : "POST",
  //       headers : { 'Content-Type' : 'application.json'
  //       },
  //       body : JSON.stringify(orderDetail) 
  //     })
  //     if(!response.ok) {
  //       throw new Error('Failed to create order detail')
  //     }
  //     return await response.json();
  //   }catch (error){
  //     console.error('Error creating order detail', error);
  //     return undefined;
  //   }
  // }


const transformBasket = async () => {
  // Create an order and retrieve its ID
  const order = await createOrder();

  // If the order was created successfully
  if (order && order.id) {
    for (const detail of details.value) {
      // Set the orderId for each order detail
      detail.orderId = order.id;
      // Create each order detail
      await createOrderDetails(detail);
    }

    // Redirect the user to the view-order page with the order ID
    window.location.href = `/viewOrder/${order.value.id}`;
  } else {
    console.error('Failed to create order.');
  }
};

// Function to create an order
const createOrder = async () => {
  const order = {
    date: new Date(),
    totalPrice: calculateTotalPrice(),
    status: "En préparation", // You can dynamically set this value if needed
  };

  try {
    const response = await fetch("http://localhost:8080/v1/orders", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    });

    if (!response.ok) {
      throw new Error('Failed to create order');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating order:', error);
    return undefined;
  }
};

// Function to create an order detail
const createOrderDetails = async (orderDetail : OrderDetails) => {

  try {
    const response = await fetch("http://localhost:8080/v1/ordersdetails", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetail)
    });

    if (!response.ok) {
      throw new Error('Failed to create order detail');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating order detail:', error);
    return undefined;
  }
};


  return { addToBasket, clearBasket, countBasketItems, basketItems, transformBasket };
}
