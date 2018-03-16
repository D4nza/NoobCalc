// getElement('http://zenrus.ru/', '.usd', function(element) {
//     console.log(element);
// });

// getElement('http://ru.stackoverflow.com', '.question-hyperlink', function(element) {
//     console.log(element.innerHTML);
// });

// function getElement(url, selector, c) {
//     request(new XMLHttpRequest());

//     function request(xhr) {
//         xhr.open('GET', 'https://crossorigin.me/' + url, true);
//         xhr.send();
//         xhr.onreadystatechange = function() {
//             if(xhr.readyState == 4) {
//                 if(xhr.status == 200) {
//                     html = document.createElement('div');
//                     html.innerHTML = xhr.responseText;
//                     c(html.querySelector(selector));
//                 }
//             }
//         }
//     }
// }

// rates = {};
            
// $(document).ready(function(){
//     $.ajax({
//         type: "get",
//         url: 'http://zenrus.ru/',
//         crossDomain: true,
//         dataType: "text",
//         success: function(data){
//             console.log($('#data').text(data));
//         },
//         error: function(jqXHR, exception){
//             alert('Не удалось загрузить курсы валют. Перевод не будет работать.');
//         }
//     });
    
//     // При клике на кнопку "Вычислить"
//     $('#calculate').click(function(){
//         var result, vfrom, vto, vcash;
        
//         // Получаем сумму, которую нужно перевести
//         vcash = $('#cash').val();
//         vfrom = $('#from').val();
//         vto   = $('#to').val();                

//         // Заменяем в значении переводимой валюты одни символы на другие
//         vcash = vcash.replace(',', '\.')
//                      .replace(' ', '')
//                      .replace(' ', '');
        
//         // Вычисляем результат
//         result = rates[vto] * vcash / rates[vfrom];
        
//         // Переводим
//         result = result.toFixed(2)
//                        .toString()
//                        .replace('\.', ',');

//         result = '<span class="result">Результат перевода: ' + result + '&nbsp;' + vto + '</span>';

//         // Выводим результат
//         $('#result').html( result );
//     });
// });