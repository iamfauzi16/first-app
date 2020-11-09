

// TODO : Connect to Github API [x]
const https = require('https')


const options = {
    hostname : 'api.github.com',
    port : 443,
    path : '/users/iamfauzi16',
    method : 'GET', // get dan post lebih sering digunakan
    headers: {
        'user-agent': 'nodejs'
    }
}

let request = https.request(options, (Response) => {
    //   TODO : Read the data [x]
    let body = ''
    Response.on('data', (data) => {
       body = body + data
   })
   Response.on('end', () => {
    //  TODO : Parse the data [x]
       let profile = JSON.parse(body)
       console.log(profile.avatar_url)
   })
})

request.end()

request.on('error', (e) => {
    console.error(e);
  });



