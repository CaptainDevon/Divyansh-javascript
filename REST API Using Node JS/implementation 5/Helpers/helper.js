export const findItemCost=(code,quantity)=>{
    for(let category in inventory)
    {
        for(let subcategory in inventory[category])
        {
            const items=inventory[category][subcategory];
            const item=items.find(i=>i.itemCode===code);

            if(item)
            {
                return item.cost*quantity;
            }
        }
    }
    return 0;
}

export const findItemDetails=(code)=>{
    for(let category in inventory)
    {
        for(let subcategory in inventory[category])
        {
            const items=inventory[category][subcategory];
            const item=items.find(i=>i.itemCode===code);

            if(item)
            {
                return {
                    "itemName":item.itemName,
                    "cost":item.cost
                };
            }
        }
    }
    return null;
};

