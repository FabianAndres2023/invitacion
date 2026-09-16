/* =========================================================
   LISTA DE INVITADOS

   Cada invitado tiene:

   nombre   = Nombre que aparecerá en la portada
   cantidad = Número de personas incluidas en la invitación

   Si cantidad es null:
   Solo se mostrará el nombre y NO aparecerá
   el número de invitados.

   Los grupos identificados únicamente por apellidos
   se muestran como "Familia ...".

   Ejemplo:

   ?name=001

   mostrará:

   Familia Gómez Martínez
   Invitados: 4
========================================================= */


const invitados = {

    "001": {
        nombre: "Familia Gómez Martínez",
        cantidad: 4
    },

    "002": {
        nombre: "Familia Murillo Mondragón",
        cantidad: 2
    },

    "003": {
        nombre: "Familia Mondragón Valencia Girón",
        cantidad: 4
    },

    "004": {
        nombre: "Juliana Gómez",
        cantidad: 1
    },

    "005": {
        nombre: "Familia Uribe Mondragón",
        cantidad: 3
    },

    "006": {
        nombre: "Familia Arboleda Alonso",
        cantidad: 5
    },

    "007": {
        nombre: "Familia García Alonso",
        cantidad: 3
    },

    "008": {
        nombre: "Familia Ochoa García",
        cantidad: 3
    },

    "009": {
        nombre: "Liliana Castrillón",
        cantidad: 1
    },

    "010": {
        nombre: "Zalome Castrillón",
        cantidad: 1
    },

    "011": {
        nombre: "Familia Alonso Hernández",
        cantidad: 2
    },

    "012": {
        nombre: "Familia Alonso Arenas",
        cantidad: 4
    },

    "013": {
        nombre: "Familia Alonso Peñaranda",
        cantidad: 3
    },

    "014": {
        nombre: "Familia Tique",
        cantidad: 2
    },

    "015": {
        nombre: "Familia Alonso Marmolejo",
        cantidad: 4
    },

    "016": {
        nombre: "Familia Jiménez Alonso",
        cantidad: 3
    },

    "017": {
        nombre: "Familia Tangarije Labrador",
        cantidad: 3
    },

    "018": {
        nombre: "Familia Rodríguez Peñaranda",
        cantidad: 2
    },

    "019": {
        nombre: "Familia Osorio Llache",
        cantidad: 2
    },

    "020": {
        nombre: "Familia Ávila Ramírez",
        cantidad: 4
    },

    "021": {
        nombre: "Familia Leguizamón Delgado",
        cantidad: 5
    },

    "022": {
        nombre: "Familia Correa Moncada",
        cantidad: 3
    },

    "023": {
        nombre: "Familia López Gálvez",
        cantidad: 2
    },

    "024": {
        nombre: "Familia Tascón Tascón",
        cantidad: 2
    },

    "025": {
        nombre: "Betty Tascón",
        cantidad: 1
    },

    "026": {
        nombre: "Elena Tascón",
        cantidad: 1
    },

    "027": {
        nombre: "Carmenza Tascón",
        cantidad: 1
    },

    "028": {
        nombre: "Vicky Tascón",
        cantidad: 1
    },

    "029": {
        nombre: "Julio Tascón",
        cantidad: 1
    },

    "030": {
        nombre: "Ulder Tascón",
        cantidad: 1
    },

    "031": {
        nombre: "Jairo Tascón",
        cantidad: 1
    },

    "032": {
        nombre: "Estefanía Tascón",
        cantidad: 3
    },

    "033": {
        nombre: "Familia Tascón Ospina",
        cantidad: 3
    },

    "034": {
        nombre: "Familia Tascón Vélez",
        cantidad: 3
    },

    "035": {
        nombre: "Siebel Sáenz",
        cantidad: 1
    },

    "036": {
        nombre: "Humberto Sáenz",
        cantidad: 1
    },

    "037": {
        nombre: "Juan Carlos Quirama y esposa",
        cantidad: 2
    },

    "038": {
        nombre: "Gustavo Guevara y esposa",
        cantidad: 2
    },

    "039": {
        nombre: "Estelia Jaramillo",
        cantidad: 3
    },

    "040": {
        nombre: "Familia Carreño Tascón",
        cantidad: 4
    },

    "041": {
        nombre: "Familia Ortiz Bocanegra",
        cantidad: 2
    },

    "042": {
        nombre: "Familia León Barona",
        cantidad: 2
    },

    "043": {
        nombre: "Lina Yulieth López",
        cantidad: 1
    },

    "044": {
        nombre: "Edwin Velezco y esposa",
        cantidad: 2
    },


    /* =====================================================
       INVITACIONES SIN NÚMERO DE INVITADOS
    ===================================================== */

    "045": {
        nombre: "Juan Manuel Tascón Alonso",
        cantidad: null
    },

    "046": {
        nombre: "Andrés y Juliana Morales",
        cantidad: null
    },

    "047": {
        nombre: "Familia Mena Zambrano",
        cantidad: null
    },


    /* =====================================================
       INVITADOS INDIVIDUALES
    ===================================================== */

    "048": {
        nombre: "Emannuel Fernández",
        cantidad: 1
    },

    "049": {
        nombre: "Juan Pablo Pedraza",
        cantidad: 1
    },

    "050": {
        nombre: "María José Ossa",
        cantidad: 1
    },

    "051": {
        nombre: "Samantha Benavidez",
        cantidad: 1
    },

    "052": {
        nombre: "Santiago Caicedo",
        cantidad: 1
    },

    "053": {
        nombre: "Valeria Andrade",
        cantidad: 1
    },

    "054": {
        nombre: "Luciana Valencia",
        cantidad: 1
    },

    "055": {
        nombre: "Michell Ávila",
        cantidad: 1
    },

    "056": {
        nombre: "Tomás Graciano",
        cantidad: 1
    },

    "057": {
        nombre: "Juan José Labrada",
        cantidad: 1
    },

    "058": {
        nombre: "Camilo Leguizamón",
        cantidad: 1
    },

    "059": {
        nombre: "Keily",
        cantidad: 1
    },

    "060": {
        nombre: "Guadalupe Perdomo",
        cantidad: 1
    },

    "061": {
        nombre: "Juan Diego Molina",
        cantidad: 1
    },

    "062": {
        nombre: "Santiago Noriega",
        cantidad: 1
    },

    "063": {
        nombre: "Laura Roncancio",
        cantidad: 1
    },

    "064": {
        nombre: "Camila Vera",
        cantidad: 1
    },

    "065": {
        nombre: "María Alejandra",
        cantidad: 1
    }

};