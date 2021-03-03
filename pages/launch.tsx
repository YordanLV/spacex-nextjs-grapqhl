import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'

import Loading from '../components/loading';
import { LAUNCH } from '../query/index';

interface LaunchData {
  launch: {
    mission_name: string;
    details: string;
    links: {
      flickr_images: [string];
      video_link: string;
    }
  }
}

interface LaunchVariables {
  id: string | string[];
}

const Home: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery<LaunchData, LaunchVariables>(LAUNCH, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  const { details, links, mission_name } = data.launch;

  return (
    <div>
      <div>{mission_name}</div>
      <div>{details}</div>
    </div>
  );
}

export default Home;
