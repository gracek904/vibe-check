
$( document ).ready(function() {
  var api_url = 'https://api.linkpreview.net'
  var key = '5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8' // not real

  $( ".content a" ).each(function( index, element ) {
    $.ajax({
      url: api_url + "?key=" + key + " &q=" + $( this ).text(),
      contentType: "application/json",
      dataType: 'json',
      success: function(result){
        $( element ).after(
            '<a href="' + result.url + '"> \n ' +
            '<div class="link-preview"> \n ' +
            '<div class="preview-image" style="background-image:url(' + result.image + ');"></div> \n ' +
            '<div style="width:70%;" class="link-info"> \n ' +
            '<h4>' + result.title +'</h4> \n ' +
            '<p>' + result.description +'</p> \n ' +
            '</div><br> \n ' +
            '<a href="' + result.url + '" class="url-info"><i class="far fa-link"></i>' + result.url + '</a> \n ' +
            '</div></a>');
        $( element ).remove();
      }
    })
  });
});
