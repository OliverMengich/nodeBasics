const handler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        //res.write('<body><h1>Hello From Oliver</h1><br/></body>')
        res.write('<body><form action="/create-user" method="POST"><h1>Fill form please</h1> <input name="username" type="text"> <br/><button type="submit">SEND</button> </form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<ul><li>User1</li></ul>');
        res.write('<ul><li>User2</li></ul>');
        res.write('<ul><li>User3</li></ul>');
        res.write('<ul><li>User3</li></ul>');
        res.write('</html>');
        return res.end();
    }
    if (url == '/create-user' && method == "POST") {

        const d = [];
        req.on('data', (chunk) => {
            d.push(chunk);
        });
        req.on('end', () => {
            console.log("chunk is" + d);
            const parsedBody = Buffer.concat(d).toString();
            const messaage = parsedBody.split('=')[1];
            console.log(messaage);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });

        //return res.end();
    }
}
module.exports = handler;