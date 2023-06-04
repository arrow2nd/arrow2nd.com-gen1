import Layout from "components/common/layout";
import Sections from "components/common/sections";
import Title from "components/common/title";

import type { SectionContent } from "types/cms/section";

import Arrow2nd from "./arrow2nd";

type Props = {
  contents: SectionContent[];
};

const About = ({ contents }: Props): JSX.Element => (
  <Layout>
    <Title text="about" />
    <Arrow2nd />
    <Sections className="mt-16" contents={contents} />
  </Layout>
);

export default About;
