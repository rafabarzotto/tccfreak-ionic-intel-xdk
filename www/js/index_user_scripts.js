/*jshint browser:true */
/*global $ */
(function () {
    "use strict";
    /*
      hook up event handlers 
    */
    function register_event_handlers() {


        /* button  #btnAbrirSideBarLelf */
        $(document).on("click", "#btnAbrirSideBarLelf", function (evt) {
            /*global uib_sb */
            /* Other possible functions are: 
              uib_sb.open_sidebar($sb)
              uib_sb.close_sidebar($sb)
              uib_sb.toggle_sidebar($sb)
               uib_sb.close_all_sidebars()
             See js/sidebar.js for the full sidebar API */

            uib_sb.toggle_sidebar($("#sideBarLeft"));
            return false;
        });

        /* button  #btnCadAlunoVoltar */
        $(document).on("click", "#btnCadAlunoVoltar", function (evt) {
            /*global activate_page */
            activate_page("#mainpage");
            return false;
        });

       /* $(document).on("click", "#imgAluno", function (evt) {
            
            navigator.camera.getPicture(onSuccess, onFail, {
                //quality: 50,
                //destinationType: Camera.DestinationType.FILE_URI
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
            });

            function onSuccess(imageURI) {
                alert("sucesso " + imageURI);
                var image = document.getElementById('#imgAluno');
                image.src = imageURI;
            }

            function onFail(message) {
                alert('Failed because: ' + message);
            }

            return false;
        });*/

        /* button  #btnCadAlunos */
        $(document).on("click", "#btnCadAlunos", function (evt) {
            activate_page("#uib_page_cad_Alunos");
            uib_sb.toggle_sidebar($("#sideBarLeft"));
            return false;
        });

        /* button  #btnSalvarAluno */
        $(document).on("click", "#btnSalvarAluno", function (evt) {
            alert($("#inputNomeAluno").val());
            return false;
        });


    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();