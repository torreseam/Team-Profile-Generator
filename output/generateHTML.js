function generateHTML() {
    return `<!DOCTYPE html>
    <html lang="en-us">
    
    <head>
    
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    
    </head>
    
    <body>
        <header>
          <nav class="navbar navbar-dark bg-primary">
            <span class="navbar-brand mb-0 h1">Team Profile</span>
          </nav>
        </header>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="card text-center">
                <div class="card-block">
                  <img src="">
                  <div class="card-title">
                    <h4>${data.name}</h4>
                  </div>
                  <div class="card-text">${data.role}</div>
                  <br>
                  <div class="card-text">Email:</div><a href="#">${data.email}</a>
                  <div class="card-text">ID: ${data.id}</div>
                  <div class="card-text">Office Number: ${data.officeNumber}</div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="card text-center">
                <div class="card-block">
                  <img src="">
                  <div class="card-title">
                    <h4>${data.name}</h4>
                  </div>
                  <div class="card-text">${data.role}</div>
                  <br>
                  <div class="card-text">Email:</div><a href="#">${data.email}</a>
                  <div class="card-text">ID: ${data.id}</div>
                  <div class="card-text">GitHub: </div><a href="#">${data.github}</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="card text-center">
                <div class="card-block">
                  <img src="">
                  <div class="card-title">
                    <h4>${data.name}</h4>
                  </div>
                  <div class="card-text">${data.role}</div>
                  <br>
                  <div class="card-text">Email:</div><a href="#">${data.email}</a>
                  <div class="card-text">ID: ${data.id}</div>
                  <div class="card-text">School: ${data.school}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </body>
    
    </html>`
};