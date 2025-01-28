// Recursos disponibles en la biblioteca
const resources = [
    // Ciencia
    {
      title: "Fundamentos de Física",
      author: "David Halliday",
      category: "Ciencia",
      image: "https://imgv2-2-f.scribdassets.com/img/document/459842996/original/2a86c8119e/1?v=1",
      pdf: "https://carlosivanrestrepo.wordpress.com/wp-content/uploads/2019/08/fisica_1_-_resnick_4ta_edicion.pdf"
    },
    {
      title: "Biología Molecular de la Célula",
      author: "Bruce Alberts",
      category: "Ciencia",
      image: "https://elsolucionario.net/wp-content/archivos/2021/10/Biologia-Molecular-de-la-Celula-Bruce-Alberts-Dennis-Bray-Julian-Lewis-3ra-Edicion.jpg",
      pdf: "https://edisciplinas.usp.br/pluginfile.php/4618964/mod_resource/content/1/Bruce%20Alberts%20et%20al.-Biologia%20Molecular%20da%20Célula-Artmed%20%282017%29.pdf"
    },
    {
      title: "Química Orgánica Avanzada",
      author: "Francis Carey",
      category: "Ciencia",
      image: "https://static.cegal.es/imagenes/marcadas/9786071/978607151210.gif",
      pdf: "https://elcachimbo.wordpress.com/wp-content/uploads/2016/10/quc3admica-orgc3a1nica-6ta-edicic3b3n-francis-a-carey.pdf"
    },
    {
      title: "Astronomía para Principiantes",
      author: "Carl Sagan",
      category: "Ciencia",
      image: "https://images.cdn1.buscalibre.com/fit-in/360x360/a9/f1/a9f122b8b925ae128dda483f3cf945e1.jpg",
      pdf: "https://padron.entretemas.com.ve/cursos/Epistem/Libros/Carl_Sagan_Compilacion1.pdf"
    },
  
    // Tecnología
    {
      title: "Introducción a la Programación",
      author: "John Smith",
      category: "Tecnología",
      image: "https://imgx.udocz.com/2688x0/documents_html/487821-dab111b15de4173fa93eefcc17a5b138/bg1.jpg",
      pdf: "https://tisgtacna.wordpress.com/wp-content/uploads/2017/10/introduccion_a_la_informatica_beekman_ge.pdf"
    },
    {
      title: "Desarrollo Web Full Stack",
      author: "Kyle Simpson",
      category: "Tecnología",
      image: "https://m.media-amazon.com/images/I/91-PASfiUVL.jpg",
      pdf: "https://pascua.iit.comillas.edu/palacios/cursoAppWeb/cap01.pdf"
    },
    {
      title: "Inteligencia Artificial",
      author: "Stuart Russell",
      category: "Tecnología",
      image: "https://image.isu.pub/150913020724-9a999a0212e9ff04ac4b7457e562e3f7/jpg/page_1_thumb_large.jpg",
      pdf: "https://luismejias21.wordpress.com/wp-content/uploads/2017/09/inteligencia-artificial-un-enfoque-moderno-stuart-j-russell.pdf"
    },
    {
      title: "Ciberseguridad para Todos",
      author: "Alice Johnson",
      category: "Tecnología",
      image: "https://libreriavirtualcuba.com/images/portadas/2_Hablando-de-ciberseguridad-417.jpg",
      pdf: "https://repositorio.flacsoandes.edu.ec/bitstream/10469/12243/1/RFLACSO-06-Pons.pdf"
    },
  
    // Historia
    {
      title: "Historia de la Edad Media",
      author: "Georges Duby",
      category: "Historia",
      image: "https://m.media-amazon.com/images/I/71ArocVOg2L._AC_UF1000,1000_QL80_.jpg",
      pdf: "https://www.cristoraul.org/SPANISH/sala-de-lectura/BIBLIOTECATERCERMILENIO/EDAD-MEDIEVAL/EcoUmberto-LaEdadMedia-Vol-I.pdf"
    },
    {
      title: "La Segunda Guerra Mundial",
      author: "Antony Beevor",
      category: "Historia",
      image: "https://imagenes.elpais.com/resizer/v2/PSUUQKFCLBASRETCBRESGCM3SQ.jpg?auth=4b013074cb7bc7f445411f09a93e906bc55d742f5ca7cadc055de3f30d69df85&width=1960&height=1103&focal=2580%2C1240",
      pdf: "https://www.sabuco.com/historia/IIGMb.pdf"
    },
    {
      title: "La Revolución Francesa",
      author: "Simon Schama",
      category: "Historia",
      image: "https://phantom-elmundo.unidadeditorial.es/269cd770264fe8edda909eeeb3be0f04/resize/414/f/webp/assets/multimedia/imagenes/2019/05/31/15593229904077.jpg",
      pdf: "http://biblioteca.usac.edu.gt/tesis/07/07_2011.pdf"
    },
    {
      title: "Historia de América Latina",
      author: "Eduardo Galeano",
      category: "Historia",
      image: "https://pictures.abebooks.com/isbn/9788432311451-uk.jpg",
      pdf: "https://biblioteca.clacso.edu.ar/Mexico/iih-s-uv/20170608043740/pdf_473.pdf"
    },
  
    // Arte
    {
      title: "Historia del Arte",
      author: "Ernst Gombrich",
      category: "Arte",
      image: "https://images.cdn1.buscalibre.com/fit-in/360x360/72/39/7239825a8c3d099cb4acc7dd9ac54572.jpg",
      pdf: "https://clasesdefilosofiayarte.wordpress.com/wp-content/uploads/2017/02/historia-del-arte-bachillerato-pearson.pdf"
    },
    {
      title: "El Arte Moderno",
      author: "Kandinsky",
      category: "Arte",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOM6-y7A7eKrA0u8HVyNl0knsybWdVW2ERg&s",
      pdf: "https://www.redalyc.org/pdf/2790/279021515014.pdf"
    },
    {
      title: "El Renacimiento Italiano",
      author: "Peter Burke",
      category: "Arte",
      image: "https://pictures.abebooks.com/inventory/md/md31833983966.jpg",
      pdf: "https://www.mheducation.es/bcv/guide/capitulo/8448169603.pdf"
    },
    {
      title: "La Escultura Griega",
      author: "Nigel Spivey",
      category: "Arte",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Laocoön_and_his_sons_group.jpg/1200px-Laocoön_and_his_sons_group.jpg",
      pdf: "https://iespedrosoto.es/departamentos/latin/arte/escultura_griega.pdf"
    }
  ];
  
  // Referencias al DOM
  const resourcesContainer = document.getElementById("resources-container");
  const pdfViewer = document.getElementById("pdf-viewer");
  const pdfFrame = document.getElementById("pdf-frame");
  const closePdfBtn = document.getElementById("close-pdf");
  
  // Función para agrupar recursos por categoría
  function groupByCategory(resources) {
    const grouped = {};
    resources.forEach(resource => {
      if (!grouped[resource.category]) {
        grouped[resource.category] = [];
      }
      grouped[resource.category].push(resource);
    });
    return grouped;
  }
  
  // Mostrar recursos agrupados
  function displayResources(resources) {
    const grouped = groupByCategory(resources);
    resourcesContainer.innerHTML = "";
  
    for (const category in grouped) {
      const group = grouped[category];
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "category-group";
      categoryDiv.innerHTML = `<h2 class="category-title">${category}</h2>`;
  
      group.forEach(resource => {
        const card = document.createElement("div");
        card.className = "resource-card";
        card.innerHTML = `
          <img src="${resource.image}" alt="${resource.title}" class="resource-image">
          <h3>${resource.title}</h3>
          <p>Autor: ${resource.author}</p>
          <button onclick="viewPdf('${resource.pdf}')">Ver más</button>
        `;
        categoryDiv.appendChild(card);
      });
  
      resourcesContainer.appendChild(categoryDiv);
    }
  }
  
  // Abrir el visor de PDF
  function viewPdf(pdfUrl) {
    pdfFrame.src = pdfUrl;
    pdfViewer.style.display = "flex";
  }
  
  // Cerrar el visor de PDF
  closePdfBtn.addEventListener("click", () => {
    pdfViewer.style.display = "none";
    pdfFrame.src = "";
  });
  
  // Mostrar los recursos al cargar la página
  displayResources(resources);
  