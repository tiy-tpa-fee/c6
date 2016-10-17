// The first argument to fetch is the URL
// the second, optional argument, can contain
// options for the request. Two important ones are:
//   'method', the HTTP verb to use, e.g. PUT POST PATCH, etc
//   'body', the body of the message, commonly a JSON string
fetch(
  'https://api.github.com/gists?access_token=f3e4cc0fbff4fe12130f718a3bd52a8325855551',
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // encode this JavaScript object to a JSON string
    body: JSON.stringify({
      description: 'the description for this gist',
      public: true,
      files: {
        'file1.txt': {
          content: 'String file contents'
        }
      }
    })
  }
) // handle the response
.then((res) => { res.json() })
.then((json) => {
  // DO SOMETHING FOR REAL WITH THE JSON
  // Maybe?
  console.log(json)
})
