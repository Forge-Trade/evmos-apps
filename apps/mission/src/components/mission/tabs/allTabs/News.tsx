// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import { useCallback } from "react";
import FeedItem from "../../feeds/FeedItem";
import FeedContainer from "../../feeds/FeedContainer";
import Container from "./Container";
import { useAnnouncements } from "../../../../internal/functionality/hooks/useAnnoucements";

const News = () => {
  const { newsAnnouncements } = useAnnouncements();
  const drawLatest = useCallback(() => {
    return newsAnnouncements.map((item) => {
      return (
        <FeedContainer key={item.id}>
          <FeedItem annoucement={item} />
        </FeedContainer>
      );
    });
  }, [newsAnnouncements]);

  return (
    <Container>
      <>{drawLatest()}</>
    </Container>
  );
};

export default News;
