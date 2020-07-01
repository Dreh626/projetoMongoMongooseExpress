module.exports =  function(app){
    var controller = app.controller.curso;

    app.post('/cursos', controller.salvaCurso);
    app.get('/cursos', controller.listaCurso);
    app.put('/cursos', controller.alteraCurso);
    app.delete('/cursos/:id', controller.removeCurso);
    app.get('/cursos/:id', controller.obtemCurso);
}