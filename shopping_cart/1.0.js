document.addEventListener("DOMContentLoaded",()=>{

    const renderitems = document.getElementById("items");
    const cartitem = document.getElementById("cartitem");

    const cartarr =[];



    const items = [
        {id:1,name:"item-1",price:30},
        {id:2,name:"item-2",price:90},
        {id:3,name:"item-3",price:40}
    ]

 

    items.forEach((item)=>{
        const itemParentDiv = document.createElement("div");
        const itemdiv= document.createElement("div");
        const bitem = document.createElement("button");


        itemdiv.textContent = `${item.name} -- $ ${item.price}`;
        bitem.textContent = "ADD";
        bitem.setAttribute('bid',item.id)

        itemParentDiv.classList.add('grid','grid-cols-6', 'gap-1');
        itemdiv.classList.add('bg-gray-200', 'pl-2', 'col-span-5');
        bitem.classList.add('bg-purple-400','px-2', 'rounded-lg','text-white');

        
        itemParentDiv.append(itemdiv,bitem);
        renderitems.appendChild(itemParentDiv);

    })

    renderitems.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON' ){
            const bid = e.target.getAttribute("bid");
            
            const product = items.find((p)=> p.id == bid);
            cartarr.push(product);
            
            togglehidden();

            console.log(cartarr);

            rendercart();
            
            

        }

    })

    function rendercart(){

        cartitem.textContent='';

        cartarr.forEach((i)=>{
            console.log(i);
            
            const item = document.createElement("p");
            item.textContent = `${i.name} - $ ${i.price}`;
            
            cartitem.appendChild(item); 
    
        })
    }
    
    function togglehidden(){
        if (cartarr.length != 0){
            document.getElementById("empty").classList.add('hidden');
        }

    }
})


