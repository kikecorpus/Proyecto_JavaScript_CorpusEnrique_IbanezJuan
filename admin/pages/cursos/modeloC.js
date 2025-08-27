document.addEventListener("DOMContentLoaded", async () => {
  // Elementos 
  const contenedorModulos = document.getElementById("contenedorModulos");
  const tablaLecciones = document.getElementById("tablaLecciones");
  const portadaImg = document.getElementById("portadaImg");
  const tituloCurso = document.getElementById("tituloCurso");
  const descripcionCurso = document.getElementById("descripcionCurso");

  // estadisticas
  const statEstudiantes = document.getElementById("statEstudiantes");
  const statProgreso = document.getElementById("statProgreso");
  const statTareas = document.getElementById("statTareas");

  const params = new URLSearchParams(window.location.search);
  let cursoId = params.get("id");


  //URL 
  const baseUrl = "https://68aab3e1909a5835049ccc4f.mockapi.io/cursos";

  // fetchcurso por ID
  let curso;

    const res = await fetch(`${baseUrl}/${cursoId}` , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        
        });
    curso = await res.json();
  

  // portada  título descripción y estadisticaa
  portadaImg.src = curso.foto;
  tituloCurso.textContent = curso.nombre;
  descripcionCurso.textContent = curso.descripcion;

  statEstudiantes.textContent = 30;
  statProgreso.textContent = "50%";
  statTareas.textContent = 1;

  // 5) ver módulos
  contenedorModulos.innerHTML = "";
  const modulos = curso.modulos;


  modulos.forEach((modulo, idx) => {
    const modulito = document.createElement("div");
    modulito.className = "nav-link";
    modulito.innerHTML = `<p class="mb-0">${modulo.nombre}</p>`;

    modulito.addEventListener("click", () => {
      verLecciones(modulo);
    });

    contenedorModulos.appendChild(modulito);
    // rellenar enseguida
    if (idx === 0) {
      modulito.classList.add("active");
      verLecciones(modulo);
    }
  });

  // lecciones
  function verLecciones(modulo) {
    tablaLecciones.innerHTML = "";
    const lecciones = modulo.lecciones;

    lecciones.forEach((leccion, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${leccion.nombre }</td>
        <td>${leccion.fechaInicio }</td>
        <td>${leccion.fechaFin}</td>
      `;
      tablaLecciones.appendChild(tr);
    });
  }


 //Botón Modificar
  const btnModificar = document.getElementById("btnModificar");
  const formEditar = document.getElementById("formEditarCurso");

  btnModificar.addEventListener("click", () => {
    // llenar formulario
    document.getElementById("nombreCurso").value = curso.nombre;
    document.getElementById("descripcionCursoInput").value = curso.descripcion;
    document.getElementById("fotoCurso").value = curso.foto;

    // abrir modal
    const modalEditar = new bootstrap.Modal(document.getElementById("modalEditarCurso"));
    modalEditar.show();
  });

  // guardar cambios 
  formEditar.addEventListener("submit", async (e) => {
    e.preventDefault();

    const cursoEditado = { ...curso,
      nombre: document.getElementById("nombreCurso").value,
      descripcion: document.getElementById("descripcionCursoInput").value,
      foto: document.getElementById("fotoCurso").value,
    };

    try {
      const res = await fetch(`${baseUrl}/${cursoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cursoEditado),
      });

      if (res.ok) {
        alert("Curso actualizado correctamente");
        window.location.reload();
      } else {
        alert("Error al actualizar curso");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });


const btnEliminar = document.getElementById("btnEliminar");

btnEliminar.addEventListener("click", async () => {
  if (confirm("¿Estás seguro de eliminar este curso?")) {
    try {
      const response = await fetch(`${baseUrl}/${cursoId}`, {
        method: "DELETE"
      });

      if (response.ok) {
        alert("Curso eliminado correctamente ");
        window.location.href = "../cursos.html";
      } else {
        alert("Error al eliminar el curso");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema con el servidor");
    }
  }
});




});
