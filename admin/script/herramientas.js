
document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data

//cuadros de informacion

let cuadroFPerfil = document.getElementById("fotoPerfil");



//creacion de sistema de informacion 
    //link api respuesta completa 

  // Funciones de Fetch

   

        cuadroFPerfil.innerHTML = `


                  <!-- colores -->
                 
       <div class="config-section">
      <h5>Colores</h5>
      <p>Elige los colores principales del LMS:</p>
       <div style ="display: flex;">
       
       <label > Color de Botones</label>
       <input type="color" class="form-control form-control-color mb-2" value="#FF9000" title="Color principal">

       <label>Color de Fondo:</label>
      <input type="color" class="form-control form-control-color" value="#6c757d" title="Color secundario">
      </div>
      


        <!-- Parámetros -->
    <div class="config-section">
      <h5>Parámetros Generales</h5>
      <div class="mb-3">
        <label for="institutionName" class="form-label">Nombre de la institución</label>
        <input type="text" id="institutionName" class="form-control" placeholder="Ej: Colegio Ejemplo">
      </div>
      <div class="mb-3">
        <label for="courseDuration" class="form-label">Duración predeterminada de cursos (días)</label>
        <input type="number" id="courseDuration" class="form-control" value="30">
      </div>
      <div class="mb-3">
        <label for="notifications" class="form-label">Notificaciones de tareas próximas</label>
        <select id="notifications" class="form-select">
          <option value="si" selected>Activadas</option>
          <option value="no">Desactivadas</option>
        </select>
      </div>
      <button class="btn btn-primary">Guardar Cambios</button>
    </div>
  </div>
      </div>

    
        `;


  

});






