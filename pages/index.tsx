import { useQuery } from '@apollo/client';
import Link from 'next/link'

import Loading from '../components/loading';
import { LAUNCHES_PAST } from '../query';

interface LaunchPastTypes {
  id: number;
  mission_name: string;
  launch_date_local: string;
}

interface LaunchesPastData {
  launchesPast: [LaunchPastTypes];
}


const Home: React.FC = () => {
  const { loading, error, data } = useQuery<LaunchesPastData>(LAUNCHES_PAST);

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <div>
      {data.launchesPast.map((launch: LaunchPastTypes) => (
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
