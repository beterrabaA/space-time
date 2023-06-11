import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const server = fastify()
const prisma = new PrismaClient()

const PORT = 3000

server.get('/hello', async () => {
  const users = await prisma.user.findMany()
  return users
})

server
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Server listening on port ${PORT}!`)
  })
