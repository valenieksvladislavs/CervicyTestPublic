import { gql } from 'apollo-server-express';

const typeDefs = gql`
	type Customer {
		id: String!
		email: String!
		phone: String
		firstname: String
		lastname: String
	}

	type Query {
		Customer: Customer!
		Customers: [Customer]
	}
`;

const customer = {
	id: '1',
	email: 'vladislavs.valenieks@servicy.com',
	phone: '+37125324489',
	firstname: 'Vladislavs',
	lastname: 'Valenieks'
};

const resolvers = {
	Query: {
		Customer: () => customer,
		Customers: () => [customer]
	}
};

export default { typeDefs, resolvers };