$(function() {
    $(".db").on('click', function(e) {
       e.preventDefault(); // in chase you change to a link or button
       var $this = $(this),URL = $this.data("id");
       window.open(window.location+URL, '_self', false);
    });
    $(".dif-link").on('click', function(e) {
      e.preventDefault(); // in chase you change to a link or button
      var $this = $(this),URL = $this.data("href");
      window.open(window.location+URL, '_self', false);
   });
    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);
  });

  function goBack(){
    window.history.back();
}