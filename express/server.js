'use strict'
const express = require('express')
const path = require('path')
const serverless = require('serverless-http')
const app = express()
const bodyParser = require('body-parser')

const router = express.Router()
router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.json([
    {
      customerId: 'cab8e18b-4a68-4396-9f10-692c39ae477a',
      email: 'pif_cab8e18b@putitforward.com',
      firstName: 'first_cab8e18b',
      lastName: 'last_cab8e18b'
    },
    {
      customerId: 'f8d2d36c-ea2a-406a-949d-880015d0c88f',
      email: 'pif_f8d2d36c@putitforward.com',
      firstName: 'first_f8d2d36c',
      lastName: 'last_f8d2d36c'
    },
    {
      customerId: '80a74797-f75f-45cd-a20e-a21cc045a85a',
      email: 'pif_80a74797@putitforward.com',
      firstName: 'first_80a74797',
      lastName: 'last_80a74797'
    },
    {
      customerId: '37a8a981-f025-423a-8087-7ef3b5134e92',
      email: 'pif_37a8a981@putitforward.com',
      firstName: 'first_37a8a981',
      lastName: 'last_37a8a981'
    },
    {
      customerId: 'b3a14a73-a3c7-4f8a-9854-d60e3c32a335',
      email: 'pif_b3a14a73@putitforward.com',
      firstName: 'first_b3a14a73',
      lastName: 'last_b3a14a73'
    },
    {
      customerId: '344daa0b-50ba-40a9-a42b-14955dd1c756',
      email: 'pif_344daa0b@putitforward.com',
      firstName: 'first_344daa0b',
      lastName: 'last_344daa0b'
    },
    {
      customerId: '841004b6-69f2-4064-9891-c6a4be82d739',
      email: 'pif_841004b6@putitforward.com',
      firstName: 'first_841004b6',
      lastName: 'last_841004b6'
    },
    {
      customerId: '139f79b6-98b6-4149-a24f-98f22e8753aa',
      email: 'pif_139f79b6@putitforward.com',
      firstName: 'first_139f79b6',
      lastName: 'last_139f79b6'
    },
    {
      customerId: 'd98814e0-ddd3-4c76-996c-d2fcac4976ad',
      email: 'pif_d98814e0@putitforward.com',
      firstName: 'first_d98814e0',
      lastName: 'last_d98814e0'
    },
    {
      customerId: '244d2b10-bd42-42c6-8766-0b5f8e8ad44f',
      email: 'pif_244d2b10@putitforward.com',
      firstName: 'first_244d2b10',
      lastName: 'last_244d2b10'
    },
    {
      customerId: '174f2494-1d9b-4138-aa0f-d62ff810d5a2',
      email: 'pif_174f2494@putitforward.com',
      firstName: 'first_174f2494',
      lastName: 'last_174f2494'
    },
    {
      customerId: 'abf8ec72-4f81-4f22-ac3e-6a7607559387',
      email: 'pif_abf8ec72@putitforward.com',
      firstName: 'first_abf8ec72',
      lastName: 'last_abf8ec72'
    },
    {
      customerId: 'd5e46af8-c0be-4e08-acc2-0fc69439a838',
      email: 'pif_d5e46af8@putitforward.com',
      firstName: 'first_d5e46af8',
      lastName: 'last_d5e46af8'
    },
    {
      customerId: '539b168e-a769-4133-a0a2-1c5396c75ea4',
      email: 'pif_539b168e@putitforward.com',
      firstName: 'first_539b168e',
      lastName: 'last_539b168e'
    },
    {
      customerId: '40767559181262060060278870901087098267',
      email: 'pifdemo36@putitforward.com',
      firstName: 'first_4076e',
      lastName: 'last_40767'
    },
    {
      customerId: '125e5484-af20-459e-af2a-a29e4dfbd56e',
      email: 'pif_125e5484@putiorward.com',
      firstName: 'first_125e5484',
      lastName: 'last_125e5484'
    },
    {
      customerId: 'de693c88-dd06-470f-afb4-58c6077024ce',
      email: 'pif_de693c88@putitforward.com',
      firstName: 'first_de693c8',
      lastName: 'last_de693c88'
    },
    {
      customerId: '4ce2fe4d-e229-489b-9a4d-8d7989767af4',
      email: 'pif_4ce2fe4d@putitforward.com',
      firstName: 'first_4ce2fe4d',
      lastName: 'last_4ce2fe4d'
    },
    {
      customerId: '79be6d0e-bc4b-4aa1-ad51-4a404b69eea2',
      email: 'pif_79be6d0e@putitforward.com',
      firstName: 'first_79be6d0e',
      lastName: 'last_79be6d0e'
    },
    {
      customerId: '7cc21a20-6f90-11e9-b641-df84bb5cb5b6',
      email: 'pif_7cc21a20@putitforward.com',
      firstName: 'first_7cc21a20',
      lastName: 'last_7cc21a20'
    },
    {
      customerId: '9ad2644b-b677-439a-a391-fea766961803',
      email: 'pif_9ad2644b@putitforward.com',
      firstName: 'first_9ad2644b',
      lastName: 'last_9ad2644b'
    },
    {
      customerId: 'dd7cd271-129a-44f8-9006-b52184157972',
      email: 'pif_dd7cd271@putitforward.com',
      firstName: 'first_dd7cd271',
      lastName: 'last_dd7cd271'
    },
    {
      customerId: '8a43e64b-fdab-46bc-94ba-095a1a660af7',
      email: 'pif_8a43e64b@putitforward.com',
      firstName: 'first_8a43e64b',
      lastName: 'last_8a43e64b'
    },
    {
      customerId: '2e522b85-2568-4b26-b505-a8dbb31012b1',
      email: 'pif_2e522b85@putitforward.com',
      firstName: 'first_2e522b85',
      lastName: 'last_2e522b85'
    },
    {
      customerId: 'dae772ea-33d1-440b-8d44-998d6c71e147',
      email: 'pif_dae772ea@putitforward.com',
      firstName: 'first_dae772ea',
      lastName: 'last_dae772ea'
    },
    {
      customerId: '4b14980d-5c6d-5932-8f40-b732d3a97d69',
      email: 'pif_4b14980d@putitforward.com',
      firstName: 'first_4b14980d',
      lastName: 'last_4b14980d'
    },
    {
      customerId: 'c65ca3e8-f227-476f-9708-762f46e8f46a',
      email: 'pif_c65ca3e8@putitforward.com',
      firstName: 'first_c65ca3e',
      lastName: 'last_c65ca3e8'
    },
    {
      customerId: '2c02a59f-c04e-4fde-98cd-9e8f9fd203cb',
      email: 'pif_2c02a59f@putitforward.com',
      firstName: 'first_2c02a59f',
      lastName: 'last_2c02a59f'
    },
    {
      customerId: 'd9126239-5f1a-4af1-b9f3-753d230843fc',
      email: 'pif_d9126239@putitforward.com',
      firstName: 'first_d9126239',
      lastName: 'last_d9126239'
    },
    {
      customerId: '049a0741-ccd7-4174-80ff-cfd960ca8d48',
      email: 'pif_049a0741@putitforward.com ',
      firstName: 'first_049a0741',
      lastName: 'last_049a0741'
    },
    {
      customerId: '6a71215c-e091-4095-bb49-8a1301566fb2',
      email: 'pif_6a71215c@putitforward.com ',
      firstName: 'first_6a71215c',
      lastName: 'last_6a71215c'
    },
    {
      customerId: '7e7dbc3b-e50f-45c3-9831-f5ee6150ed17',
      email: 'pif_7e7dbc3b@putitforward.com',
      firstName: 'first_7e7dbc3b',
      lastName: 'last_7e7dbc3b'
    },
    {
      customerId: 'd06207eb-854c-492d-ac34-a1237c72cab1',
      email: 'pif_d06207eb@putitforward.com',
      firstName: 'first_d06207eb',
      lastName: 'last_d06207eb'
    },
    {
      customerId: '65dca226-eb2a-4bdd-86db-d69c2525c382',
      email: 'pif_65dca226@putitforward.com',
      firstName: 'first_65dca226',
      lastName: 'last_65dca226'
    },
    {
      customerId: '6d78f7f2-fa11-4de4-a2b4-d43f05ef2b52',
      email: 'pif_6d78f7f2@putitforward.com',
      firstName: 'first_6d78f7f2',
      lastName: 'last_6d78f7f2'
    },
    {
      customerId: '8ad8b462-765f-4819-bd53-4359e70415a4',
      email: 'pif_8ad8b462@putitforward.com',
      firstName: 'first_8ad8b462',
      lastName: 'last_8ad8b462'
    },
    {
      customerId: 'e420c47a-c418-4afd-b596-e0b3290bd1d7',
      email: 'pif_e420c47a@putitforward.com',
      firstName: 'first_e420c47a',
      lastName: 'last_e420c47a'
    },
    {
      customerId: '2792666a-9162-401d-b8ab-5feb9dc912a6',
      email: 'pif_2792666a@putitforward.com',
      firstName: 'first_2792666a',
      lastName: 'last_2792666a'
    },
    {
      customerId: 'd0aa0661-85e9-48b1-9e85-801ff4c20993',
      email: 'pif_d0aa0661@putitforward.com',
      firstName: 'first_d0aa0661',
      lastName: 'last_d0aa0661'
    },
    {
      customerId: 'a437a662-aa89-4278-988a-f4dd65f0ad2a',
      email: 'pif_a437a662@putitforward.com',
      firstName: 'first_a437a662',
      lastName: 'last_a437a662'
    },
    {
      customerId: '85e510ed-4951-40ed-9b2b-0a3cab4a6b41',
      email: 'pif_85e510ed@putitforward.com',
      firstName: 'first_85e510ed',
      lastName: 'last_85e510ed'
    },
    {
      customerId: 'c663e0dd-ac69-4985-896a-73c57a9ccb8c',
      email: 'pif_c663e0dd@putitforward.com',
      firstName: 'first_c663e0dd',
      lastName: 'last_c663e0dd'
    },
    {
      customerId: '6d7d0ea4-f1b0-4eb9-a875-85d9fe35273a',
      email: 'pif_6d7d0ea4@putitforward.com',
      firstName: 'first_6d7d0ea4',
      lastName: 'last_6d7d0ea4'
    },
    {
      customerId: '1470dd61-f430-47f6-b5e8-de5e320dd2ec',
      email: 'pif_1470dd61@putitforward.com',
      firstName: 'first_1470dd61',
      lastName: 'last_1470dd61'
    },
    {
      customerId: '3b20baa7-9531-4a4c-813f-be01ef5108b0',
      email: 'pif_3b20baa7@putitforward.com',
      firstName: 'first_3b20baa',
      lastName: 'last_3b20baa7'
    },
    {
      customerId: '6af55ca6-81b1-4689-8af3-448b92d9ee9c',
      email: 'pif_6af55ca6@putitforward.com',
      firstName: 'first_6af55ca6',
      lastName: 'last_6af55ca6'
    },
    {
      customerId: 'c82aa367-3b72-4809-9315-ad38e24bd6a5',
      email: 'pif_c82aa367@putitforward.com',
      firstName: 'first_c82aa367',
      lastName: 'last_c82aa367'
    },
    {
      customerId: '55db6650-eaa9-4143-9d9a-b2c95d517804',
      email: 'pif_55db6650@putitforward.com',
      firstName: 'first_55db6650',
      lastName: 'last_55db6650'
    },
    {
      customerId: 'e351094f-81bd-4038-92fe-60d7df077387',
      email: 'pif_e351094f@putitforward.com ',
      firstName: 'first_e351094f',
      lastName: 'last_e351094f'
    },
    {
      customerId: 'b8410b10-76fc-40d7-9ff2-d0192cc36f71',
      email: 'pif_b8410b10@putitforward.com',
      firstName: 'first_b8410b10',
      lastName: 'last_b8410b10'
    },
    {
      customerId: '397baafb-202c-49c7-b7ca-f0de35aa70b9',
      email: 'pif_397baafb@putitforward.com',
      firstName: 'first_397baafb',
      lastName: 'last_397baafb'
    },
    {
      customerId: '49896322-26a5-4547-ae6e-d06ebee3dec5',
      email: 'pif_49896322@putitforward.com',
      firstName: 'first_49896322',
      lastName: 'last_49896322'
    },
    {
      customerId: 'cd5c0bc4-e4c5-4d76-9d1b-ae5911062851',
      email: 'pif_cd5c0bc4@putitforward.com',
      firstName: 'first_cd5c0bc4',
      lastName: 'last_cd5c0bc4'
    },
    {
      customerId: '74ec23df-cb1f-4d39-ac55-56430fa3074b',
      email: 'pif_74ec23df@putitforward.com',
      firstName: 'first_74ec23df',
      lastName: 'last_74ec23df'
    },
    {
      customerId: '7162f06f-1987-481b-a076-37a97fcf134c',
      email: 'pif_7162f06f@putitforward.com',
      firstName: 'first_7162f06f',
      lastName: 'last_7162f06f'
    },
    {
      customerId: 'xxx',
      email: 'xxx',
      firstName: 'first_c65ca3e8  ',
      lastName: 'last_c65ca3e8'
    },
    {
      customerId: 'xxx',
      email: 'xxx',
      firstName: 'first_c65ca3e8  ',
      lastName: 'last_c65ca3e8'
    },
    {
      customerId: 'xxx',
      email: 'xxx',
      firstName: 'first_c65ca3e8  ',
      lastName: 'last_c65ca3e8'
    },
    {
      customerId: 'xxx',
      email: 'xxx',
      firstName: 'first_c65ca3e8  ',
      lastName: 'last_c65ca3e8'
    }
  ])
})
router.get('/another', (req, res) => res.json({ route: req.originalUrl }))
router.post('/', (req, res) => res.json({ postBody: req.body }))

app.use(bodyParser.json())
app.use('/.netlify/functions/server', router) // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')))

module.exports = app
module.exports.handler = serverless(app)
