import styled from "styled-components";
import SectionTitle from "../../../components/SectionTitle.tsx";
import ManagementOfData from "../../../data/ManagementOfData.tsx";
import { breakpoint } from "../../../components/GlobalStyles.tsx";
import ManagementItem from "./ManagementItem.tsx";
import { useTranslations } from "next-intl";

const Management = () => {
  const t = useTranslations();

  return (
    <Container>
      <SectionTitle text={t("services.management_of")} />
      <Wrapper>
        {ManagementOfData.map((item, i) => (
          <ManagementItem key={i} data={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Management;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 57px;
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1180px;

  @media (max-width: ${breakpoint.l}px) {
    flex-direction: column;
    margin-top: 27px;
  }
`;
