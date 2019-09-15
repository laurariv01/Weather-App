function weatherChange(){
    let name = $("#dataChange input[name=name]").val()
    let country = $("#dataChange input[name=country]").val()

$.get('https://api.openweathermap.org/data/2.5/weather?q=' + name + ',' + country + '&' + 'appid=d6bec416c5fdef6a0779ebba1f5c63c5', function (data) {
 console.log(data)


      //(K − 273.15) × 9/5 + 32 = °F
      console.log(data.main.temp_max)
      let high = (data.main.temp_max-273.15) * 9/5 +32
      console.log(high)
        $("#high").text(Math.round(high));

        console.log(data.main.temp_min)
        let low = (data.main.temp_min-273.15) * 9/5 +32
        console.log(low)
        $("#low").text(Math.round(low));

          console.log(data.main.temp)
          let forecast = (data.main.temp-273.15) * 9/5 +32
          console.log(forecast)
            $("#forecast").text(Math.round(forecast));

            console.log(data.main.humidity)
            let humidity = data.main.humidity
            console.log(humidity)
              $("#humidity").text(humidity);

    
  })
}