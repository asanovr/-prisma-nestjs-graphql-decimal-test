### Test
curl --request POST \
  --url http://localhost:3333/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"mutation {\n  createSalary(\n\t\tinput: {\n\t\t\tcurrencyId: 1\n\t\t\tfrom: 15,\n\t\t\tto: 10\n\t\t}\n\t\t\n\t) {\n    id\n    \n  }\n}"}'