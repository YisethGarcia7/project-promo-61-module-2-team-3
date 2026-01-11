Proyecto Modulo 2 JavaScript Team 3- Yiyi, Soraya y Carmen


En este proyecto, desarrollaremos una aplicación web para poder participar en un concurso de cocina.
El objetivo principal es permitir la creación de nuevos elementos, así como la consulta y renderización de los elementos ya creados en la web.

La página debe incluir un formulario para recopilar ciertos datos del usuario y diseñar una vista previa de la información proporcionada. 

El proyecto consta de 3 páginas:
   1. Una página landing de bienvenida.
   2. Una página que incluye un formulario para la recopilación de datos y con su vista previa.
   3. Una página que muestra la tarjeta creada por la usuaria. Cuando la usuaria envíe el formulario, mostraremos una url que será esta página, donde la usuaria puede visualizar la tarjeta con los datos introducidos en el formulario.

Especificaciones del formulario
   - El formulario debe contener al menos seis campos de entrada, adaptados al tema elegido. 
   - De estos campos de entrada, es obligatorio incluir:
      · Una foto
      · Campo numérico, tipo field1 (el número debe ser diferente de 0).  
   - Los otros campos pueden ser definidos por las programadoras según su criterio.

   - Como máximo, el formulario puede contener 10 campos de entrada (incluidos la foto y el campo de tipo numérico).

Interacción
   - Los campos del formulario deberán tener restricciones para su formato específico. 
      (Por ejemplo, un campo de tipo tel para el número móvil, un campo de tipo email para el correo electrónico y cualquier otro campo necesario con su formato correspondiente).

   - Las modificaciones realizadas en el formulario (diseño y contenido) aparecerán automáticamente en una vista previa.

   - Debe haber una sección colapsable, lo que significa que, mediante el uso de eventos, la sección puede ocultarse o mostrarse según lo desee la usuaria.

   - Toda la información del formulario debe almacenarse en LocalStorage (almacenamiento local del navegador) de manera que, al recargar la página, los datos sigan disponibles. 

   - Además, debe haber un botón de reset para borrar esta información. Para esto, definiremos una estructura de datos compleja (con arrays y objetos) que se guardará en el navegador.

   - Para compartir en Twitter seguiremos 2 pasos:

      1. Al hacer clic en el botón de "Enviar", el formulario se enviará (submit) a una API que devolverá los datos del elemento creado correctamente.

      2. Se debe maquetar una página que muestre los datos del elemento creado previamente. Esta página debe contener un botón de "Compartir" que enlazará a Twitter, donde habrá un tweet con texto predefinido que incluirá la URL del nuevo elemento.

Primera. Landing y UI de la herramienta
   - Desarrollar la página de landing.

   - Desarrollar una primera versión básica de la página del formulario y la tarjeta de previsualización, con la maquetación de la estructura básica (para desktop y móvil). Incluye el formulario con los colapsables y la vista previa

   - Desarrollar la página de la vista de la tarjeta.

Segunda. Versión interactiva
   - Formulario interactivo: al modificar un campo del formulario, se actualiza la vista previa (excepto la foto),

   - Realizar validaciones de datos del formulario: campos obligatorios, email, etc.

Tercera. Compartir
   - Actualización de la foto en la vista previa de la tarjeta, usando el componente proporcionado.

   - Añadir la funcionalidad de crear la tarjeta, enviando primero los datos al servidor (POST).

   - Añadir la funcionalidad de compartir en Twitter.

   - Mostrar la tarjeta creada con la información previamente guardada en el servidor (GET).

Cuarta. Versión offline
   Hacer que el contenido se almacene en LocalStorage del navegador.


Entrega
1. El formato de entrega de este proyecto será mediante la subida de este a la plataforma de GitHub. Para subirlo, se creará un repositorio en tu perfil.      username/project-promo-u-module-2-team-3.

2. De manera adicional, se deberá activar "GitHub Pages"


MAQUETACIÓN
