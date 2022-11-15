Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"3.2 Simulación de procesos de negocio","publishDate":"15/11/2022 11:46:08","pages":[{"id":"05a5b951-6509-459d-9deb-ec45665abfcc","name":"Asesoria","version":"1.0","author":"Dul BL","image":"files\\diagrams\\Asesoria.svg","isSubprocessPage":false,"isCallActivityPage":false,"properties":[],"elements":[{"id":"10a14243-f559-4f15-ad2c-357b7cf62a12","name":"Asesoria ","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":437.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"7bd5283a-35f8-4f91-97d7-a6d267192b7e","name":"Asistir a asesoria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Es la accion de buscar al docente para que le da la asesoria al alumno </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":204.0,"y":62.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","performers":[{"name":"Alumno","value":"f642771e-af68-4a66-9b8d-128b13647f10","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"06db0ef2-c331-457e-8b27-eec392933e3a","name":"Indicar  tema a tratare en la asesoria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Indica el tema el cual tiene dominado para que le expliquen </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":777.0,"y":62.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","performers":[{"name":"Alumno","value":"f642771e-af68-4a66-9b8d-128b13647f10","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"70cc7fa5-226e-4a77-ab93-024b7689ddf7","name":"Resolver dudas","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Es el encargado de resolver las dudas</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":777.0,"y":290.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","performers":[{"name":"Maestro","value":"5d21cdcf-c5ef-4853-9b01-40d27be55d45","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"ea43bce4-5c71-4744-9a28-e40e0c49bc0e","name":"Dar hojas para llegado de formulario","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Es el formato donde se lleva el control de las asesorias</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1120.0,"y":290.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","performers":[{"name":"Maestro","value":"5d21cdcf-c5ef-4853-9b01-40d27be55d45","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"1b520f74-6dc3-402c-9f9a-28665627388d","name":"llegado de formulario","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Es el sub proceso del llenado de datos </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1187.0,"y":61.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","performers":[{"name":"Alumno","value":"f642771e-af68-4a66-9b8d-128b13647f10","type":"resource","pageRef":"Resources"}],"properties":[{"id":"ProcessRef","name":"Proceso","value":"llenado del formulario - LLenado del formulario","type":"url","pageRef":"23dccaf8-0090-44bf-b6df-251dd3731f9a","processPageRef":"8c6717f8-82ba-40be-9264-35e8160a4bda"}]}]}],"subPages":[{"id":"23dccaf8-0090-44bf-b6df-251dd3731f9a","name":"llenado del formulario - LLenado del formulario","image":"files\\diagrams\\llenado del formulario.svg","isSubprocessPage":true,"isCallActivityPage":true,"elements":[{"id":"7bd5283a-35f8-4f91-97d7-a6d267192b7e","name":"Asistir a asesoria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Es la accion de buscar al docente para que le da la asesoria al alumno </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":204.0,"y":62.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","performers":[{"name":"Alumno","value":"f642771e-af68-4a66-9b8d-128b13647f10","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"06db0ef2-c331-457e-8b27-eec392933e3a","name":"Indicar  tema a tratare en la asesoria","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Indica el tema el cual tiene dominado para que le expliquen </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":777.0,"y":62.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","performers":[{"name":"Alumno","value":"f642771e-af68-4a66-9b8d-128b13647f10","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"70cc7fa5-226e-4a77-ab93-024b7689ddf7","name":"Resolver dudas","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Es el encargado de resolver las dudas</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":777.0,"y":290.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","performers":[{"name":"Maestro","value":"5d21cdcf-c5ef-4853-9b01-40d27be55d45","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"ea43bce4-5c71-4744-9a28-e40e0c49bc0e","name":"Dar hojas para llegado de formulario","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Es el formato donde se lleva el control de las asesorias</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1120.0,"y":290.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","performers":[{"name":"Maestro","value":"5d21cdcf-c5ef-4853-9b01-40d27be55d45","type":"resource","pageRef":"Resources"}],"properties":[]},{"id":"1b520f74-6dc3-402c-9f9a-28665627388d","name":"llegado de formulario","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Es el sub proceso del llenado de datos </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1187.0,"y":61.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","performers":[{"name":"Alumno","value":"f642771e-af68-4a66-9b8d-128b13647f10","type":"resource","pageRef":"Resources"}],"properties":[{"id":"ProcessRef","name":"Proceso","value":"llenado del formulario - LLenado del formulario","type":"url","pageRef":"23dccaf8-0090-44bf-b6df-251dd3731f9a","processPageRef":"8c6717f8-82ba-40be-9264-35e8160a4bda"}]}],"parentRef":"05a5b951-6509-459d-9deb-ec45665abfcc"}]},{"id":"23dccaf8-0090-44bf-b6df-251dd3731f9a","name":"llenado del formulario","version":"1.0","author":"Dul BL","image":"files\\diagrams\\llenado del formulario.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[],"subPages":[]}],"texts":{"tableOfContents":"Tabla de Contenidos","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versión","author":"Autor","description":"Descripción","mainPool":"Proceso principal","mainPoolDescription":"Proceso principal Descripción","processDiagrams":"Diagramas de Proceso","processElements":"Elementos del proceso","elements":"Elementos del proceso","defaultElementName":"Elemento","performers":"Ejecutantes","accountable":"Responsable","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Home","search":"Buscar","goToParentProcess":"Ir al proceso padre","calledBy":"Llamado por","attachmentsTooltip":"Ver adjuntos","visitBizagi":"Visite bizagi.com","contains":"Contiene {0} Subprocesos","showAll":"Ver todo","fullScreen":"Pantalla completa","zoomIn":"Acercar","zoomOut":"Alejar","close":"Cerrar","menu":"Menu: ","errorPage":"Error al visualizar la página","process":"Proceso","subProcess":"Subprocesos publicados","contain":"Contiene","checkAttributes":"Ver atributos","checkOverview":"Ver resumen","unavailableResource":"El recurso no esta disponible","localResource":"El recurso puede accederse localmente","performer":"Ejecutante","linktoimage":"Hipervínculo a imagen","presentationAction":"Acciones de presentación","searchGlobal":"Buscar todo","searchLocal":"Buscar en este proceso","searchResults":"No se encontraron resultados","titlePage":"Inicio","emptyElement":"Este elemento aún no se ha documentado","unsupported":"Su navegador no soporta contenido mostrado en esta página. <br> Le recomendamos actualizar su navegador.","details":"Detalles","viewDetails":"Ver detalles","expand":"Expandir","mainPoolProperties":"Propiedades Proceso principal","cannotVisualize":"No es posible visualizar correctamente","resourceNotFound":"No se encontró el recurso solicitado:","applyTheme":"Aplicando el tema","showMore":"Ver mas","showLess":"Ver menos","hideDescription":"Ocultar descripción","showDescription":"Mostrar descripción","presentationActionLink":"Ver acción de presentación","goToLinkThrow":"Ir al evento de destino","goToLinkCatch":"Ir al evento de origen","goToSubProcess":"Ir al subproceso","viewByList":"Lista de procesos","viewByTree":"Jerarquía de procesos","diagramList":"Lista de procesos","folderTree":"Jerarquía de procesos"},"resourcePage":{"id":"Resources","name":"Recursos","isSubprocessPage":false,"isCallActivityPage":false,"elements":[{"id":"f642771e-af68-4a66-9b8d-128b13647f10","name":"Alumno","description":"Es la persona la cual necesita la asesoria, para poder comprender los temas \r\n","rol":"Rol"}]},"searchMap":[{"containerId":"05a5b951-6509-459d-9deb-ec45665abfcc","containerName":"Asesoria","isSubprocess":false,"elements":[{"id":"10a14243-f559-4f15-ad2c-357b7cf62a12","value":"Asesoria "},{"id":"a8f27e8f-e23f-41d3-83a2-b2234b158b23","value":"Alumno "},{"id":"6fe6f056-b54f-45e9-af95-57723e9c4234","value":"Maestro "},{"id":"f3cae2cf-cf89-4eef-9d5c-9aa546578a14","value":"Inicio"},{"id":"40fcdc59-edcc-4a37-9b68-35d13cb0bfa3","value":"¿Tiene tiempo?"},{"id":"0a5bb303-b130-4cfc-ae6e-4fd56548b968","value":"Fin"},{"id":"46ecb85d-1c10-4d4a-a8ca-8ac2b2962a53","value":"¿Esta en el semestre inscrito?"},{"id":"a407e80d-a4d1-444e-83e9-ea31e7e7dacc","value":"Fin"},{"id":"c44c27dc-f939-4c8c-b5cd-5e36acfe209e","value":"Periodo de evaluaciòn "},{"id":"efa99f6a-33bc-41fc-8ee9-f3aca8ba57eb","value":"Tiempo de asesoria "},{"id":"bdb25025-2198-4c67-9304-ce659995e1e4","value":"Fin"},{"id":"1b520f74-6dc3-402c-9f9a-28665627388d","value":"llegado de formulario"},{"id":"7bd5283a-35f8-4f91-97d7-a6d267192b7e","value":"Asistir a asesoria"},{"id":"06db0ef2-c331-457e-8b27-eec392933e3a","value":"Indicar  tema a tratare en la asesoria"},{"id":"70cc7fa5-226e-4a77-ab93-024b7689ddf7","value":"Resolver dudas"},{"id":"ea43bce4-5c71-4744-9a28-e40e0c49bc0e","value":"Dar hojas para llegado de formulario"},{"id":"7c5530be-6cfc-401d-a7a9-43fc2ed314b0","value":""}]},{"containerId":"23dccaf8-0090-44bf-b6df-251dd3731f9a","containerName":"llenado del formulario","isSubprocess":false,"elements":[{"id":"8c6717f8-82ba-40be-9264-35e8160a4bda","value":"LLenado del formulario"},{"id":"71163f6e-6454-4651-9062-79d741935005","value":"Estudiante "},{"id":"d3eeffd8-d012-4e0a-aa91-72a71e7b5548","value":"Escribir fecha"},{"id":"5a4fa51d-91e2-421f-9072-aa8a82c01bf6","value":"Escribir nombre del alumno "},{"id":"13c50902-893a-49d1-8839-9bf1b6b78a36","value":"Indicar el tiempo que duro la asesoria"},{"id":"79a7755f-6c6c-4040-8103-8233b272c876","value":"Tema"},{"id":"a0c9226c-b35c-44c9-b278-4b0eb4792ce1","value":"Firmar el documento"}]}]}