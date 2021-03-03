import Link from 'next/link'

import LaunchCardFeedWrapper from './LaunchCardFeedWrapper';

interface LaunchCardFeedTypes {
  launchId: number;
  missionName: string;
  launchDateLocal: string;
  details: string;
}

const LaunchCardFeed: React.FC<LaunchCardFeedTypes> = ({ launchId, missionName, launchDateLocal, details }) => {
  return (
    <Link href={`/launch?id=${launchId}`}>
      <LaunchCardFeedWrapper title={missionName}>
        <h4>{missionName}</h4>
        <p>{details}</p>
        <time>{launchDateLocal}</time>
      </LaunchCardFeedWrapper>
    </Link>
  )
}

export default LaunchCardFeed;
