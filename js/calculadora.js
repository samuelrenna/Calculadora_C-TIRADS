    function calcularTI_RADS() {
    // Capturar los valores de las opciones seleccionadas
        let composicion = parseInt(document.querySelector('input[name="composicion"]:checked')?.value || 0);
        let ecogenicidad = parseInt(document.querySelector('input[name="ecogenicidad"]:checked')?.value || 0);
        let forma = parseInt(document.querySelector('input[name="forma"]:checked')?.value || 0);
        let margen = parseInt(document.querySelector('input[name="margen"]:checked')?.value || 0);
    // Capturar los focos ecogénicos seleccionados
        let focos = document.querySelectorAll('input[name="focos"]:checked');
        let focosPuntos = 0;
        focos.forEach(function(foco) {
        focosPuntos += parseInt(foco.value);
            });
    // Calcular el total de puntos
            let puntosTotales = composicion + ecogenicidad + forma + margen + focosPuntos;
            // Mostrar el puntaje TI-RADS y las recomendaciones
            let tiRads = '';
            let recomendaciones = '';
            if (puntosTotales <= -1) {
            tiRads = 'C-TR 2';
            recomendaciones = 'Benigno: No se recomienda FNAB. 0%';
            } else if (puntosTotales == 0) {
            tiRads = 'C-TR 3';
            recomendaciones = 'Probablemente Benigno < 2 % : No se recomienda FNAB.';
            }else if (puntosTotales == 1) {
            tiRads = 'C-TR 4A';
            recomendaciones = 'Baja sospecha 2-10 % : se recomienda FNAB si >= 15mm.';
            }else if (puntosTotales == 2) {
            tiRads = 'C-TR 4B';
            recomendaciones = 'Moderadamente sospechoso 10-50 %: FNAB si >= 10mm.';
            } else if (puntosTotales <= 4) {
            tiRads = 'C-TR 4C';
            recomendaciones = 'Altamente sospechoso 50-90 %: FNAB si >= 10mm.';
            } else {
            tiRads = 'C-TR 5';
            recomendaciones = 'Altamente sugestivo de malignidad > 90 %: FNAB si >= 10mm.';
            }

            // Mostrar resultados
            document.getElementById("resultadoPuntos").innerText = puntosTotales;
            document.getElementById("resultadoTI_RADS").innerText = tiRads;
            document.getElementById("resultadoRecomendaciones").innerText = recomendaciones;
            }

            function resetForm() {
            // Restablecer el formulario
            document.getElementById("tiRadsForm").reset();
            document.getElementById("resultadoPuntos").innerText = '0';
            document.getElementById("resultadoTI_RADS").innerText = 'TR1';
            document.getElementById("resultadoRecomendaciones").innerText = 'Benigno: No se recomienda FNA.';
            }

        function copiarResultado() {
            let resultado = `
            Puntos totales: ${document.getElementById("resultadoPuntos").innerText}
            Puntuación TI-RADS: ${document.getElementById("resultadoTI_RADS").innerText}
            Recomendaciones: ${document.getElementById("resultadoRecomendaciones").innerText}
            `;
            navigator.clipboard.writeText(resultado).then(function() {
            alert("Resultado copiado al portapapeles.");
            }).catch(function(error) {
            alert("Error al copiar: " + error);
            });
            }
            // Seleccionamos el thumbnail (la imagen pequeña)
            const thumbnailImage = document.getElementById("thumbnailImage");

            // Seleccionamos el modal y la imagen dentro de él
            const imageModal = document.getElementById("imageModal");
            const modalImage = document.getElementById("modalImage");
            const closeModalBtn = document.getElementById("closeModalBtn");

            // Al hacer clic en la imagen pequeña, abrir el modal y cargar la imagen ampliada
            thumbnailImage.addEventListener("click", function() {
            modalImage.src = thumbnailImage.src;  // Asignamos la misma imagen al modal
            imageModal.style.display = "flex";  // Mostramos el modal
            });

            // Al hacer clic en el botón de cerrar, cerramos el modal
            closeModalBtn.addEventListener("click", function() {
            imageModal.style.display = "none";  // Ocultamos el modal
            });

            // También cerramos el modal si el usuario hace clic fuera de la imagen en el modal
            imageModal.addEventListener("click", function(e) {
            if (e.target === imageModal) {
                imageModal.style.display = "none";  // Ocultamos el modal
            }
            });
 