const chai = require('chai');
const server = require('../server');
const chaiHttp = require('chai-http');
const { user } = require('../app/models');

describe("testing users", ()=>{

    before(function(){
        user.destroy({
            where:{}
        });
    });

    it('Create users', () => {
        chai.use(chaiHttp);
        var CreateUser = {
            name: "Willian",
            email: "willian@wmsdev.com.br",
            idCompany: 1,
            password_hash: "as7d8as7dy8ya",
            enabled: true,
        };

        chai.request(server).post('/user').send(CreateUser).end((err, res)=>{ 
            res.should.have.status(200);
            done();
        });
    });

    it('get user with id', () => {
        done();
    });

    it('get user with token', () => {
        done();
    });

    it('alter user', () => {
        done();
    });

});