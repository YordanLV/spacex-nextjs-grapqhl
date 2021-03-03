import { useQuery, gql } from '@apollo/client';
import Link from 'next/link'

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

interface LaunchesPastTypes {
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
      {data.launchesPast.map((launch: HomepageCardLaunch) => (
        <Link key={launch.id} href={`/launch?id=${launch.id}`}>
          <a title={launch.mission_name}>
            <div>{launch.mission_name}</div>
            <div>{launch.launch_date_local}</div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Home;
