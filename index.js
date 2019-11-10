var settings = {
  url: "https://apis.paralleldots.com/v4/emotion",
  method: "POST",
  async: true,
  crossDomain: true,
  data: {
    api_key: "545Ma0mxtAIRv8rC7sbpjgfXe0OHr7v9M2gNjzgeke0",
    text: "I love you"
  },
  success: function(data, textStauts, jqXHR) {
    alert("Success");
  }




  // headers: {
  //   "Content-Type": "application/x-www-form-urlencoded"
  // }
};
const otherPram = {
  headers: {
    "content=type": "text/json; charset=UTF-8"
  },
  method: "POST",
  async: true,
  crossDomain: true,
  data: {
    api_key: "545Ma0mxtAIRv8rC7sbpjgfXe0OHr7v9M2gNjzgeke0",
    text: "I love you"
  }
};
fetch("https://apis.paralleldots.com/v4/emotion", otherPram)
  .then(data => {
    return data.json();
  })
  .then(res => {
    console.log(res);
  });

let $;
$.ajax(settings).done(function(response) {
  var emotion = [];

  fetch("https://apis.paralleldots.com/v4/emotion").then(function(response) {
    if (response != null) {
      response.json().then(function(data) {
        console.log(data);
      });
    } else {
      // Response wasn't ok. Check dev tools
      console.log("response failed?");
    }
  });

  console.log(response);
  emotion = response.emotion;
  console.log(emotion);
});
