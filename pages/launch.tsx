import { useQuery, gql } from '@apollo/client';

import Loading from '../components/loading';

const LAUNCHES_PAST = gql`
  query LaunchesPast {
    launchesPast(limit: 10) {
      mission_name
      id
      launch_date_local
    }
  }
`;

interface HomepageCardLaunch {
  id: number;
  mission_name: string;
  launch_date_local: string;
}

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(LAUNCHES_PAST);

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;
  return (
    <div>
      kor
    </div>
  );
}

export default Home;
