import {people} from './backend/constant.js';

  for(let index=0;index<people.length;index++)
    {
      const container = document.createElement('div');
      const list = document.createElement('ul');
      const listItem = document.createElement('li');  
      const name = document.createElement('a');
  
      name.href = '#';
      name.innerText = people[index].name;
      name.onclick=()=>showDetails(index);
      
  
      listItem.appendChild(name);      
      list.appendChild(listItem);       
      container.appendChild(list);      
      document.getElementById("names").appendChild(container);  
      
  
    }
    
    const showDetails=(index)=>
    {
      const card = document.getElementById('card');
    card.innerHTML = '';  // Always clear previous content
  
    const container = document.createElement('div');
    const naam = document.createElement('p');
    const age = document.createElement('p');
    const gender = document.createElement('p');
  
    naam.innerText = `Name: ${people[index].name}`;
    age.innerText = `Age: ${people[index].age}`;
    gender.innerText = `Gender: ${people[index].gender}`;
  
    container.appendChild(naam);
    container.appendChild(age);
    container.appendChild(gender);
  
    card.appendChild(container);
    };
    
  
    
  
  
  
  