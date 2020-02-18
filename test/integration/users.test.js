const request = require('supertest');
const faker = require('faker');
const { expect } = require('chai');
const { User } = require('../../src/models/user.model');

let server;

describe('/users', () => {
    beforeEach(async () => {
        server = require('../../src/app');
    });

    afterEach(async () => {
        await User.deleteMany({});
    })

    let user = {
        email: faker.internet.email(),
        nick: faker.internet.userName(),
        password: faker.internet.password()
    }

    describe('POST', async () => {
        const exec = async () => await request(server)
            .post('/users')
            .send(user)

        it('should return 201 when the user is created', async() => {
            const {status, body} = await exec();
            expect(status).to.be.equals(201);
        })

        it('should return 400 if the user doesnt have a email', async () => {
            user.email = '';
            const { status, body } = await exec();
            expect(status).to.be.equals(400);
            expect(body.message).to.contain('email')
        })

        it('should return 400 if the user doesnt have a nick', async () => {
            user.nick = '';
            const { status, body } = await exec();
            expect(status).to.be.equals(400);
            expect(body.message).to.contain('nick')
        })        
    });
})
