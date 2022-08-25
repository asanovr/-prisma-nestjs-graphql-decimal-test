### Test simple object

graphql

```
mutation {
  createSalary(
		input: {
			currencyId: 1
			from: 15,
			to: 10
		}

	) {
    id
  }
}
```

as curl

```
curl --request POST \
  --url http://localhost:3333/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"mutation {\n  createSalary(\n\t\tinput: {\n\t\t\tcurrencyId: 1\n\t\t\tfrom: 15,\n\t\t\tto: 10\n\t\t}\n\t\t\n\t) {\n    id\n    \n  }\n}"}'
```

### Test nested object

```
mutation {
  createJob(input: {
		companyId: 1,
		title: "",
		salary: {
			create: {
				currencyId: 1,
				from: 10,
				to: 15
			}
		}
	}) {
		id
	}
}
```

as curl

```
curl --request POST \
  --url http://localhost:3333/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"mutation {\n  createJob(input: {\n\t\tcompanyId: 1,\n\t\ttitle: \"\",\n\t\tsalary: {\n\t\t\tcreate: {\n\t\t\t\tcurrencyId: 1,\n\t\t\t\tfrom: 10,\n\t\t\t\tto: 15\n\t\t\t}\n\t\t}\n\t}) {\n\t\tid\n\t}\n}"}'
```

### Test nested object 2

```
mutation {
  updateEmployee(
    id: "1"
    input: {
      salaryHistory: {
        update: {
          history: {
            createMany: { data: [{ from: "1", to: "1", year: 1 }] }
            update: []
          }
        }
      }
    }
  ) {
    id
  }
}
```

as curl

```
curl --request POST \
  --url http://localhost:3333/graphql \
  --header 'Content-Type: application/json' \
	--data '{"query": "mutation {\n  updateEmployee(\n    id: \"1\"\n    input: {salaryHistory: {update: {history: {createMany: {data: [{from: \"1\", to: \"1\", year: 1}]}, update: []}}}}\n  ) {\n    id\n  }\n}\n"}'
```
