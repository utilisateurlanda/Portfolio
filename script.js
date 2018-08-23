// permet d'attendre le chargement complet de notre page avant de lancer le script
$('document').ready(function() {


// Lancement du slider
        $(document).ready(function(){
            $('.slider').bxSlider();
          });


// Menu burger
        $(window).resize(function(){
            var $taille = $(window).width()
            if($taille < 900){
                $('.icone-menu2').show();
                $('.menu2').hide('slow');

            }
        })
        $(window).resize(function(){
            var $taille = $(window).width()
            if($taille > 900){
                $('.menu2').hide('slow');
                $('.icone-fermer').hide('slow');
                $('.icone-menu2').hide('slow');
            }
        })
          
        // ouvrir le menu au clic sur l'icone menu2
        $('.icone-menu2').click(function(){
            $(this).hide();
            $(".menu2").show(800);
            $(".icone-fermer").show();
            $(".page-header-texte1").hide();
        })

        // fermer le menu au clic sur l'icone fermer
        $('.icone-fermer').click(function(){
            $(this).hide();
            $(".menu2").hide();
            $(".icone-menu2").show();
            $(".page-header-texte1").show();
        })
    


// animation d'apparition progressive et disparition progressive d'illustration
        // Get the modal
        var modal = document.getElementById('myModal');

        // Premiere image à insérer  it inside the modal - use its "alt" text as a caption
        var img = document.getElementById('myImg1');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

        // Seconde image à insérer inside the modal - use its "alt" text as a caption
        var img = document.getElementById('myImg2');
        var modalImg = document.getElementById("img02");
        var captionText = document.getElementById("caption");
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

        // Troisieme image à insérer inside the modal - use its "alt" text as a caption
        var img = document.getElementById('myImg3');
        var modalImg = document.getElementById("img03");
        var captionText = document.getElementById("caption");
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        } 



});
