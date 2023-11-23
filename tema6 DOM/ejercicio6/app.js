let listDiv = "";
  	let listUl = "";
  	let lis = "";
  	let toggleList = "";
  	let descriptionInput = "";
  	let descriptionP = "";
  	let descriptionButton = "";
  	let addItemInput = "";
  	let addItemButton = "";

   	window.addEventListener("load",iniciar);

   	function iniciar(){
    	listDiv = document.querySelector('.list');
    	listUl = listDiv.querySelector('ul');
    	lis = listUl.children;
    	toggleList = document.getElementById('toggleList');
    	descriptionInput = document.querySelector('input.description');
    	descriptionP = document.querySelector('p.description');
    	descriptionButton = document.querySelector('button.description');
    	addItemInput = document.querySelector('input.addItemInput');
    	addItemButton = document.querySelector('button.addItemButton');

    	for (let i = 0; i < lis.length; i += 1) {
       	attachListItemButtons(lis[i]);
      	}
    	listUl.addEventListener('click', crearbotones);
    	toggleList.addEventListener('click', MostrarOcultarLista);
    	descriptionButton.addEventListener('click', CambiarTextoLista);
    	addItemButton.addEventListener('click', AñadirElemento);
  	}
  	 
   	function attachListItemButtons(li) {
     	let subir = document.createElement('button');
     	subir.className = 'subir';
     	subir.textContent = 'subir';
     	li.appendChild(subir);
 
     	let bajar = document.createElement('button');
     	bajar.className = 'bajar';
     	bajar.textContent = 'bajar';
     	li.appendChild(bajar);  
 
     	let borrar = document.createElement('button');
     	borrar.className = 'borrar';
     	borrar.textContent = 'borrar';
     	li.appendChild(borrar);
   	}
 
 	function crearbotones(event)
 	{
  	if (event.target.tagName == 'BUTTON') {
    	if (event.target.className == 'borrar') {
      	let li = event.target.parentNode;
      	let ul = li.parentNode;
      	ul.removeChild(li);
    	}
    	if (event.target.className == 'subir') {
      	let li = event.target.parentNode;
      	let prevLi = li.previousElementSibling;
      	let ul = li.parentNode;
      	if (prevLi) {
        	ul.insertBefore(li, prevLi);
      	}
    	}  
    	if (event.target.className == 'bajar') {
      	let li = event.target.parentNode;
      	let nextLi = li.nextElementSibling;
      	let ul = li.parentNode;
      	if (nextLi) {
        	ul.insertBefore(nextLi, li);
      	}
    	}
  	}
	};

	function MostrarOcultarLista(){
    	if (listDiv.style.display == 'none') {
      	toggleList.textContent = 'Ocultar lista';
      	listDiv.style.display = 'block';
    	} else {
      	toggleList.textContent = 'Mostrar lista';                   	 
      	listDiv.style.display = 'none';
    	}                    	 
 	};
  function CambiarTextoLista()
   {
	descriptionP.innerHTML = descriptionInput.value + ':';
	descriptionInput.value = '';
   };

  function AñadirElemento()
  {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent = addItemInput.value;
	attachListItemButtons(li);
	ul.appendChild(li);
	addItemInput.value = '';
  };
