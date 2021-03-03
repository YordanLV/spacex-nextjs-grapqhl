import { ApolloClient, InMemoryCache } from '@apollo/client';
import { withApollo } from 'next-apollo';

const apolloClient = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

export default withApollo(apolloClient);
