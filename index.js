const produtos = [
    {name: 'Notebook Gamer i3'},
    {name: 'Notebook Intermediário CeleronN4000'},
];



const getProd = () => {
    const lu  = document.getElementById("produts");
    setTimeout(() => {
        let output = '';
       produtos.forEach((item, idx) => {
        output += `<li>${item.name}</li>`;
        
       });
       lu.innerHTML = output;
    }, 3000);
   
};
 getProd();