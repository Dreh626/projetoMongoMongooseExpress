var mongoose = require('mongoose');
mongoose.set('debug', true);
module.exports = function (uri) {
    mongoose.Promise = global.Promise;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', function () {
       console.log('Mongoose! Conectado em '+uri);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose! Desconectado de '+uri);
    });

    mongoose.connection.on('error', function (erro) {
        console.log('Mongoose! Erro na conexão: '+erro);
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Mongoose desconectado pelo término da aplicação');
            process.exit(0);
        });
    });

}