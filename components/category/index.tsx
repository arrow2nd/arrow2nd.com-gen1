import Layout from "components/common/layout";
import Title from "components/common/title";

import type { CategoryContent } from "types/cms/category";
import type { WorkContent } from "types/cms/work";
import type { DynamicImage } from "types/image";

import Card from "./card";
import Tab from "./tab";

export type CategoryProps = {
  currentCategory: string;
  categories: CategoryContent[];
  contents: WorkContent[];
  thumbnails: DynamicImage[];
};

const Category = ({
  currentCategory,
  categories,
  contents,
  thumbnails
}: CategoryProps): JSX.Element => {
  const cardMax = contents.length - 1;

  const cards = contents.map(({ id, title, description }, idx) => (
    <Card
      key={id}
      id={id}
      title={title}
      description={description}
      thumbnail={thumbnails[idx]}
      dataTestId={idx === cardMax ? `last-card` : undefined}
    />
  ));

  return (
    <Layout>
      <Title text="works" />
      <Tab current={currentCategory} categories={categories} />
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards}
      </div>
    </Layout>
  );
};

export default Category;
