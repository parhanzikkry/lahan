var sequelize = require(__dirname + '/../dbconnection'),
    Kecamatan = sequelize.import(__dirname + '/../models/kecamatan.model');

Kecamatan
    .bulkCreate([{
        id: '3201300',
        name: 'PARUNG PANJANG',
        regency_id: '3201'
    },{
        id: '3201010',
        name: 'NANGGUNG',
        regency_id: '3201'
    },{
        id: '3201020',
        name: 'LEUWILIANG',
        regency_id: '3201'
    },{
        id: '3201021',
        name: 'LEUWISADENG',
        regency_id: '3201'
    },{
        id: '3201030',
        name: 'PAMIJAHAN',
        regency_id: '3201'
    },{
        id: '3201040',
        name: 'CIBUNGBULANG',
        regency_id: '3201'
    },{
        id: '3201050',
        name: 'CIAMPEA',
        regency_id: '3201'
    },{
        id: '3201051',
        name: 'TENJOLAYA',
        regency_id: '3201'
    },{
        id: '3201060',
        name: 'DRAMAGA',
        regency_id: '3201'
    },{
        id: '3201070',
        name: 'CIOMAS',
        regency_id: '3201'
    },{
        id: '3201071',
        name: 'TAMANSARI',
        regency_id: '3201'
    },{
        id: '3201080',
        name: 'CIJERUK',
        regency_id: '3201'
    },{
        id: '3201300',
        name: 'PARUNG PANJANG',
        regency_id: '3201'
    }])