// STRETCH
const cars = [  
    {
        vin: '2BCHV81S4JB533621',
        make: 'Toyota',
        model: 'Supra',
        mileage: 100000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '3HGCM56364G702777',
        make: 'Toyota',
        model: 'Camry',
        mileage: 200000,
        
        
    },

    // {
    //     vin: '33333333333333333',
    //     make: 'Toyota',
    //     model: 'Corolla',
    //     mileage: 300000,
    //     title: 'clean',
    //     transmission: 'manual'
    // },

    // {
    //     vin: '44444444444444444',
    //     make: 'Toyota',
    //     model: 'Tacoma',
    //     mileage: 400000,
    //     title: 'clean',
    //     transmission: 'manual'
    // },

    // {
    //     vin: '55555555555555555',
    //     make: 'Toyota',
    //     model: 'Tundra',
    //     mileage: 500000,
    //     title: 'clean',
    //     transmission: 'manual'
    // },

    // {
    //     vin: '66666666666666666',
    //     make: 'Toyota',
    //     model: '4Runner',
    //     mileage: 600000,
    //     title: 'clean',
    //     transmission: 'manual'
    // },

    // {
    //     vin: '77777777777777777',
    //     make: 'Toyota',
    //     model: 'Prius',
    //     mileage: 700000,
    //     title: 'clean',
    //     transmission: 'manual'
    // },

    // {
    //     vin: '88888888888888888',
    //     make: 'Toyota',
    //     model: 'Avalon',
    //     mileage: 800000,
    //     title: 'clean',
    //     transmission: 'manual'
    // },

    // {
    //     vin: '99999999999999999',
    //     make: 'Toyota',
    //     model: 'Yaris',
    //     mileage: 900000,
    //     title: 'clean',
    //     transmission: 'manual'
    // },

    // {
    //     vin: '00000000000000000',
    //     make: 'Toyota',
    //     model: 'Celica',
    //     mileage: 1000000,
    //     title: 'clean',
    //     transmission: 'manual'  
    // }

]

exports.seed = function (knex) {
    return knex('cars')
        .truncate().then(function () {
            return knex('cars').insert(cars)
        })
    };