$(document).ready(function() {


    $('.color').on('click', function () {
        $(this).css('background-color', (index, value) => {
            

            if((value === 'rgb(255, 255, 255)') || (value === 'rgb(255, 255, 0)')) {

                return value ='rgb(50, 50, 255)'
            } else if (value === 'rgb(50, 50, 255)') {

                return value ='rgb(25, 255, 25)'
            } else if (value === 'rgb(25, 255, 25)') {

                return value='rgb(255, 255, 0)'
            }
        })

        $('.container').append($(this))
    });
   
    $('.plus').on('click',  function (){

        let $counterNumber =+ $(this).next('.count').text()
        $(this).next('.count').text(++$counterNumber)
        
    });

    $('.minus').on('click',  function (){

        let $counterNumber =+ $(this).prev('.count').text()
        if ($counterNumber > 0) {
            return $(this).prev('.count').text(--$counterNumber)

        }
    });
})
