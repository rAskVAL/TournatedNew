import CardContainer from "./CardContainer.tsx";
import styled from "styled-components";
import { colors, typography } from "../../../components/GlobalStyles.tsx";
import ReactCountryFlag from "react-country-flag";
import Tag from "../../../components/Tag.tsx";
import ScrollContainer from "react-indiana-drag-scroll";

const TournamentCard = () => (
  <CardContainer
    type="tournament"
    noPaddingZone={
      <BannerContainer>
        <Banner src="https://firebasestorage.googleapis.com/v0/b/vertexo-sports.appspot.com/o/tournated_media%2Falbum-131%2Fphoto-131-WFKg-cbRePh_7MS9kAxAd.jpeg?alt=media&token=fdad21dd-dc5e-4800-a7f0-e0edd6d665ec" />
        <Avatar>
          <Logo src="https://i.imgur.com/Tb7pS83.png" />
        </Avatar>
      </BannerContainer>
    }
  >
    <TitleBox>
      <Title>Saulkrastu Tenisa Kortu Balvas</Title>
      <Details>
        <p>14-15.06.2024 ・</p>
        <ReactCountryFlag
          countryCode="LV"
          svg
          style={{
            height: "12px",
          }}
          title="US"
        />
        <p>Saulkrasti</p>
      </Details>
    </TitleBox>
    <Tags>
      <Tag>Boys Singles [U-18]</Tag>
      <Tag>Boys Singles [U-18]</Tag>
      <Tag>Boys Singles [U-18]</Tag>
    </Tags>
  </CardContainer>
);

export default TournamentCard;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 86px;
  width: 86px;
  background: ${colors.grey700};
`;

const Banner = styled.img`
  position: absolute;
  top: 0;
  height: 140px;
  width: 100%;
  object-fit: cover;
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 183px;
  position: relative;
`;

const Logo = styled.img`
  height: 58px;
  width: 58px;
  object-fit: cover;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  justify-content: center;
  max-width: 230px;
`;

const Title = styled.h3`
  color: ${colors.white};
  ${typography.grotesk24};
  text-align: center;
`;

const Details = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  ${typography.grotesk14};
  color: ${colors.grey400};
`;

const Tags = styled(ScrollContainer)`
  position: relative;
  margin-top: 24px;
  width: 100%;
  cursor: grab;
  display: flex;
  gap: 8px;
`;
