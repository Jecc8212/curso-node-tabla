const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'muestra la tabla en consola'

                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'este es el numero hasta donde quires que llegue la tabla'
                    })
                    .check((argv, options)=>{
                       if(isNaN(argv.b)){
                        throw 'la base tiene que ser un numero'
                       }
                       return true;
                    })
                     .argv;

module.exports = argv;