 $('.knoppen').each( function() {
     var Knop = $(this);
     var Knopactiev = Knop.find('li.actief');
     var link = Knopactiev.find('a');
     var eerstePaneel = $(link.attr('href'));
    Knop.on('click' , 'a', function(e) {
        e.preventDefault();
        var link = $(this);
     //   alert(link.attr('href'));
        var beoogdId = this.hash;
        
        if(beoogdId && !link.parent().is('.actief')){
           eerstePaneel.removeClass('actief');
            Knopactiev.removeClass('actief');
            
            eerstePaneel = $(beoogdId).addClass('actief');
            Knopactiev = link.parent().addClass('actief');
        }
    })
    
 });

// unobrusive weg halen van niet actieve vensters
$('.paneel').css('display' , 'none')
