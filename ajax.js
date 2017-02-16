$(document).ready(function () {

  $('#step12 > button').on('click', function () {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text',
    })
  });

  $('#step3456 > button').on('click', function () {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',
    }).done(function (responseData) {
      console.log(responseData)
      console.log('The request was successful!')
      $('#step3456').append(responseData);
    }).fail(function () {
      $('#step3456').append('Request has failed, sorry!')
      console.log('The request was unsuccessful!')
    }).always(function () {
      console.log('The request is complete!')
    });
  });

});
