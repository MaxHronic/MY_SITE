/**
 * Created by Max on 03.05.2017.
 */

var soap = require('soap');
var url = 'http://127.0.0.1:8080/AdaptCourse/Adapt?wsdl';
var args = {name: 'value'};
soap.createClient(url, function (err, client) {
    client.GetTeachRate(args, function (err, result) {
        if (err) {
            throw err;
        } else
            console.log(result);
    });
});