const request = require('supertest')
const db = require('../data/dbConfig')
const server = require('../server')

const joke1 = {joke:'Why did the chicken cross the road?', punchline:"Because it was free range"}
const joke2 = {joke:'Why did the chicken cross the road?', punchline:"To avoid this lame and outdated joke"}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db('jokes').truncate()
})

afterAll(async () => {
    await db.destroy()
})



it('correct env var', () => {
    expect(process.env.DB_ENV).toBe('testing')
})