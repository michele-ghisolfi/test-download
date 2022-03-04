




function test() {
   var richiesta = new Request("https://randomuser.me/api/", {
      method: "get",
      headers: new Headers({
         "Content-Type": "application/json"
      }),
      // body: JSON.stringify({
      //    titolo: "Un articolo",
      //    autore: "Mario Rossi"
      // })
   });

   fetch(richiesta)
      .then(x => console.log(x))
      .catch(err => console.error(err))
}