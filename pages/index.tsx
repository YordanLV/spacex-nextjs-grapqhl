import { useQuery } from '@apollo/client';

import { LAUNCHES_PAST } from '../gql';
import Feed from '../components/Feed';
import LaunchCardFeed from '../components/LaunchCardFeed';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import withApollo from '../lib';

interface LaunchPastTypes {
  id: number;
  mission_name: string;
  details: string;
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
    <Layout>
      <Feed>
        <h1>Last Launches 🚀</h1>
        {data.launchesPast.map((launch: LaunchPastTypes) => (
          <LaunchCardFeed
            key={launch.id}
            launchId={launch.id}
            missionName={launch.mission_name}
            details={launch.details}
            launchDateLocal={launch.launch_date_local}
          />
        ))}
      </Feed>
    </Layout>
  );
}

export default withApollo({ ssr: true })(Home);
