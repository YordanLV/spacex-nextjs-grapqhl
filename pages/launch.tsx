import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'

import { LAUNCH } from '../gql';
import withApollo from '../lib';
import Feed from '../components/Feed';
import LaunchCard from '../components/LaunchCard';
import Layout from '../components/Layout';
import Loading from '../components/Loading';

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

const Launch: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery<LaunchData, LaunchVariables>(LAUNCH, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  const { details, links: { flickr_images, video_link }, mission_name } = data.launch;
  const randomPicture = flickr_images[Math.floor(Math.random() * flickr_images.length)];

  return (
    <Layout>
      <Feed>
        <LaunchCard>
          {randomPicture && <img src={randomPicture} alt={mission_name} />}
          <h1>{mission_name}</h1>
          <article>{details}</article>
          <a href={video_link}>Video Link</a>
        </LaunchCard>
      </Feed>
    </Layout>
  );
}

export default withApollo({ ssr: true })(Launch);
