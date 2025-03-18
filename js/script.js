





   function mostrarDatos (character) {
        let datos = "";
        for (const propiedad in character) {
          datos  += (`${propiedad}: ${character [propiedad]}<br>`);
        }
        return  datos;
      }
      
      let currentPage = 1;
      let totalPages = 0;
      
      function loadCharacter (page) {
        fetch (`https://rickandmortyapi.com/api/character/?page=${page}`)  
          .then  ((response) => {
            if  (!response.ok) {
              throw new Error('error');
            }
            return response.json ();
          })
          .then ((data) => {
            let ulCharacterList = document.getElementById ("character-list");
            ulCharacterList.innerHTML =  ""; 
      
            
            data.results.forEach ( (character) => {
              let li =  document.createElement  ("li");
              let img =  document.createElement  ("img");
      
              img.src =  character.image;
              img.alt =  character.name;
              li.appendChild (img);
      
              li.innerHTML += mostrarDatos (character);  
              ulCharacterList.appendChild (li);
            });
      
            totalPages = data.info.pages; 
            console.log ('Total de páginas:', totalPages) ;
          })
          .catch ((error) => {
            console.log ("Error:", error) ;
          });
      }
      
      
      loadCharacter (currentPage) ;

      const prevPage = document.getElementById ("prev-page");
      const nextPage = document.getElementById ("next-page");

      prevPage.addEventListener ("click", () => {
        if (currentPage > 1) {
            currentPage --;
            loadCharacter (currentPage);
            console.log (prevPage);
          }
        });
    
      nextPage.addEventListener ("click", () => {
        if ( currentPage < totalPages) {
            currentPage ++ ;
            loadCharacter (currentPage) ; 
      })


    

      
  
