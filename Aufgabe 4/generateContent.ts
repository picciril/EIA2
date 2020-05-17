namespace L04_Haushaltshilfe {
    export function generateContent(_data: Data) {
     console.log(_data);
 
     for(let category in _data) {
         let items: Item [] = _data [ category];
         let group: HTMLElement = null;
         switch (category) {
             case "Grocery":
                group =  createSelect(items);
               case "Task":
                group  =  createSelect(items);
                 case "Time":
                group =  createSingle(items);
               case "Amount":
                group =  createSingle(items);
                 break;
         
             default:
                 break;
         }
         let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
         if (fieldset && group)
             fieldset.appendChild(group);
         }
 
      }
 
      function createSelect (_items: Item[]): HTMLElement | null {
          return null;
          
      } 
      
     function createSingle (_items: Item[]): HTMLElement | null {
          return null; 
     }
     
        
 
     }
 