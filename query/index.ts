
import { gql } from '@apollo/client';

export const LAUNCHES_PAST = gql`
  query LaunchesPast {
    launchesPast(limit: 10) {
      id
      mission_name
      details
      launch_date_local
    }
  }
`;

export const LAUNCH = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      mission_name
      details
      links {
        flickr_images
        video_link
      }
    }
  }
`;