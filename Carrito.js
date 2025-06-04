document.addEventListener('DOMContentLoaded', () => {

   // Obtener el contador del carrito y el icono
   const contadorCarrito = document.getElementById('contador-carrito');
   // Si no hay datos toma el array vacio
   let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

   function actualizarContadorCarrito() {
    // Obtener el carrito del almacenamiento local
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
       // Calcular la cantidad total de productos en el carrito
      //  const cantidadTotal = carrito.reduce((total, producto) => total + producto.cantidad, 0);
       let cantidadTotal = 0;

        for (let i = 0; i < carrito.length; i++) {
            cantidadTotal += carrito[i].cantidad;
        }
       
       // Actualizar el contenido del contador
       contadorCarrito.textContent = cantidadTotal;
   }

   // Actualizar el contador al cargar la página
   actualizarContadorCarrito();

    // Función para agregar productos al carrito
    function agregarAlCarrito(evento) {
        const boton = evento.target;
        const id = boton.dataset.id;
        const nombre = boton.dataset.nombre;
        const precio = parseFloat(boton.dataset.precio);
        const cantidadInput = document.querySelector(`#cantidad-${id}`);
        const cantidad = parseInt(cantidadInput.value);    
        const producto = {
            id,
            nombre,
            precio,
            cantidad
        };
            
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
        // Verificar si el producto ya está en el carrito
        const indiceProductoExistente = carrito.findIndex(item => item.id === producto.id);
    
        if (indiceProductoExistente !== -1) {
            
            
        } else {
            // Si el producto no está en el carrito, agregarlo
            carrito.push(producto);
        }
    
        localStorage.setItem('carrito', JSON.stringify(carrito));

     // Actualizar el contador al cargar la página
      actualizarContadorCarrito();
    }
    

    // Agregar eventos a los botones de agregar al carrito
    document.querySelectorAll('.agregar-carrito').forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
              
    });

   
});
