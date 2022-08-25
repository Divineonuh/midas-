console.log('tested')
function getData(url,success,error){
    if( !url){
        return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.status===200){
            success(xhr.responseText);
        }
         else{
                error(xhr.status);
            }
        };
    }

        function successHandler(result){
            console.log("finaly done!!!");
            console.log(result);
        }

        function errorHandler(status){
            console.log(`an error with status code ${status} occured`);
        } 
    
 
        const url = prompt( "Enter a url" );

        getData( url, ( res1 ) => {
            console.log( "success1", res1 );
            getData( "https://reqres.in", ( res2 ) => {
                console.log( "success2", res2 );
                getData( "https://reqres.in", (res3) => {
                    console.log( "success3", res3 ),
                    getData( "https://reqres.in", successHandler, errorHandler );
                }, errorHandler );
            }, errorHandler );
        }, errorHandler );
        
//url:uniform resource locator

