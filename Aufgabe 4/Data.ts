namespace L04_Haushaltshilfe {
    export interface Item {
          name: string;
          price: number;
      }
  
     export interface Data {
            [category: string]: Item [];
      }
  
     export let data: Data = {
          Grocery:  [
              { name: "Butter", price: 2 }, 
              { name: "Flour", price: 4 },
              { name: "Milk", price: 3 },
              { name: "Salad", price: 2 }
          ],
          Amount: [
              { name: "One", price: 10 },
              { name: "Two", price: 5 },
              { name: "Three", price: 0 }
          ],
         
          Task: [
              { name: "Window", price: 10 }, 
              { name: "Hoover", price: 15 },
              { name: "Feed", price: 5 },
              { name: "Lawn", price: 2 }
          ],
          Time: [
              { name: "Daily", price: 10 },
              { name: "Weekly", price: 5 },
              { name: "Monthly", price: 0 } 
          ]
      };
  
  }